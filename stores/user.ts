export const useUserStore = defineStore("userStore", () => {

    const email = ref('')
    const displayName = ref('')
    const token = ref('')  
    const refreshToken = ref('')  
    const pokemon = ref<(PokemonObject)[]>([]);

});