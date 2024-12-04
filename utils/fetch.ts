import { type PokemonObject } from "./types";

export default async function getPokemon() {
    const output: PokemonObject[] = []
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = await res.json();
    const results = data.results
    results.forEach((poke: any, i: number) => {
      output.push({
          id: i + 1, 
          name: poke.name.toUpperCase(),
          spriteImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
      })
    })
    return output
  }
  