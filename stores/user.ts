import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useUserStore = defineStore("userStore", () => {

    const email = ref('')
    const displayName = ref('')
    const token = ref('')  
    const refreshToken = ref('')  
    const expiration = ref(0)
    const pokemon = ref<(PokemonObject)[]>([]);

    function $reset() {
        email.value = ''
        displayName.value = ''
        token.value = ''
        refreshToken.value = ''
        expiration.value = 0
        pokemon.value = []
    }
    async function refreshAuthToken() {
        try {
            if (!refreshToken.value) {
                console.error('No refresh token available.');
                return;
            }

            const now = Date.now(); 
            if (expiration.value > now) {
                console.log('Token is still valid, no refresh needed.');
                return;
            }
            //fetch new token


            console.log('Token refreshed successfully.');
        } catch (error) {
            console.error('Error refreshing token:', error);
            $reset(); 
        }
    }
    async function refreshIdToken() {
        try {
            if (!refreshToken.value) throw new Error("No refresh token available");

            const response = await fetch("https://securetoken.googleapis.com/v1/token?key=YOUR_FIREBASE_API_KEY", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    grant_type: "refresh_token",
                    refresh_token: refreshToken.value
                }),
            });

            if (!response.ok) throw new Error("Failed to refresh token");

            const data = await response.json();

            // Update state with new token and expiration
            token.value = data.id_token;
            refreshToken.value = data.refresh_token;
            expiration.value = Date.now() + data.expires_in * 1000; // Convert seconds to milliseconds
        } catch (error: any) {
            console.error("Error refreshing token:", error.message);
            $reset(); // Optional: clear state on error
        }
    }

    return { email, displayName, token, refreshToken, pokemon, expiration, $reset }
});

// https://chatgpt.com/g/g-2DQzU5UZl-code-copilot/c/673f5864-d414-8008-9693-0f2a0ae8dbf2