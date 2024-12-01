import { useUserStore } from "@/stores/user"
  
const userStore = useUserStore()

export default async function getPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = await res.json();
    const results = data.results
    results.forEach((poke: any, i: number) => {
      userStore.allPokemon.value.push({
          id: i + 1, 
          name: poke.name.toUpperCase(),
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
      })
    })
  }
  