import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useUserStore = defineStore("userStore", () => {

    const email = ref('')
    const displayName = ref('')
    const token = ref('')  
    const refreshToken = ref('')  
    const pokemon = ref<(PokemonObject)[]>([]);

    function $reset() {
        email.value = ''
        displayName.value = ''
        token.value = ''
        refreshToken.value = ''
        pokemon.value = []
    }

    return { email, displayName, token, refreshToken, pokemon, $reset }
});