import { getAuth } from 'firebase/auth';
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
    async function fetchToken() {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) throw new Error("User not authenticated");

        try {
            const idToken = await user.getIdToken(true); 
            token.value = idToken;
            expiration.value = Date.now() + 3600 * 1000;
        } catch (error: any) {
            console.error("Error fetching ID token:", error.message);
            throw error;
        }
    }


    return { email, displayName, token, refreshToken, pokemon, expiration, fetchToken, $reset }
});