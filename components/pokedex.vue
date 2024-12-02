<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div v-if="showPokedex" class="flex h-[98vh] w-[98vw] items-center justify-center">
      <div class="relative aspect-[4/3] max-h-[90%] w-full max-w-[88%] rounded-[30px] border-[5px] border-black md:border-[8px]">
        <div
          class="absolute left-1/2 top-0 z-10 flex h-[13%] w-[102.2%] -translate-x-1/2 -translate-y-[10%] items-center justify-center rounded-tr-[30px] border-[5px] border-black md:border-[8px] lg:w-[101.4%]"
        >
          <div class="relative flex h-[100%] w-[100%] justify-end rounded-tr-[20px] bg-[#4DAAFA]">
            <div class="flex w-1/2 items-center pl-3 text-start font-pixelifySans text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl">Caught: SomeX</div>
            <div
              class="absolute left-0 top-1/2 z-20 flex h-[120%] w-[50%] -translate-y-1/2 items-center justify-center rounded-[20px] border-[4px] border-solid border-black bg-[#6CCBFB] md:border-r-[8px] lg:border-[8px]"
            >
              <div class="flex h-[90%] items-center justify-center pl-6 text-center font-pixelifySans text-3xl sm:text-4xl md:pl-12 md:text-5xl lg:pl-8 lg:text-6xl xl:pl-16 xl:text-7xl 2xl:text-8xl">
                Database:
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-4px absolute bottom-0 left-0 flex h-[90%] w-full rounded-b-[24px] border-black bg-black md:rounded-b-[20px]">
          <!-- Left -->
          <div class="mb-2 ml-2 w-1/2 overflow-y-auto rounded-bl-[15px] bg-[#FDF494] p-2 lg:pt-4 xl:pt-8">
            <button
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :style="{
                backgroundColor: selectedPokemonId === pokemon.id ? getLighterTypeColor(pokemon.types[0]) : '#E4F4DB'
              }"
              class="mb-2 ml-1 mt-2 w-[95%] rounded-bl-lg border-4 border-black p-2 py-2 text-start font-pixelifySans text-xl text-black lg:mr-4 lg:h-[70px] lg:text-2xl xl:text-3xl 2xl:text-4xl"
              @click="selectPokemon(pokemon)"
            >
              <div class="flex items-center">
                <img :src="getTypeImage(pokemon.types[0])" alt="Type" class="mr-2 h-8 w-8" />
                <span>#{{ formatId(pokemon.id) }} {{ capitalizeName(pokemon.name) }}</span>
              </div>
            </button>
          </div>
          <!-- Right -->
          <div class="rounded-b-r-20px border-4px mb-2 w-1/2 border-l-8 border-solid border-black">
            <div
              :style="{ backgroundColor: selectedPokemonTypeColor }"
              class="align-center mt-2 flex h-[12%] flex-row items-center justify-start border-b-8 border-solid border-black font-pixelifySans"
            >
              <div class="p-1 text-xl md:p-3 md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl">#{{ formatId(selectedPokemon.id) }}</div>
              <div class="p-1 text-xl md:p-3 md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl">{{ capitalizeName(selectedPokemon.name) }}</div>
            </div>
            <div class="relative h-[78%]">
              <img :src="selectedPokemon.image" class="image-rendering-pixelated absolute left-0 top-0 z-10 h-full w-full object-contain" alt="Selected Pokémon" />
              <img src="/public/synthWave.jpg" alt="SynthWave" class="absolute left-0 top-0 z-0 h-full w-full border-t-4 border-black object-cover" />
            </div>
            <div
              :style="{ backgroundColor: selectedPokemonTypeColor }"
              class="align-center flex h-[10%] flex-row items-center justify-start rounded-br-[20px] border-t-8 border-solid border-black bg-pink-400 font-pixelifySans"
            >
              <div class="p-1 text-xl md:p-3 md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Caught: 80</div>
            </div>
          </div>
        </div>

        <!-- Question Thingie Div -->
        <div class="absolute right-0 top-0 z-10 h-[20%] max-h-[150px] w-[15%] max-w-[150px] -translate-x-[-35%] translate-y-[-22%] bg-black">
          <div class="flex h-full w-full items-center justify-center">
            <button class="z-10 h-[90%] w-[90%]">
              <img src="/public/questionThingie.png" alt="Question Icon" class="h-full w-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Backwards Orb Div -->
        <button @click="pokedexStore.togglePokedex" class="absolute left-0 top-0 z-20 h-[25%] max-h-[300px] w-[25%] max-w-[300px] -translate-x-[40%] -translate-y-[30%]">
          <img src="/public/backwardsOrb.png" alt="Return Back" class="h-full w-full object-cover" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const pokedexStore = usePokedexStore();
</script>

<script>
export default {
  data() {
    return {
      showPokedex: true, // Controls visibility of Pokedex
      pokemons: [], // List of Pokémon
      selectedPokemon: { id: 0, name: "", image: "", types: [] }, // Selected Pokémon details
      selectedPokemonId: null // ID of the selected Pokémon
    };
  },
  async mounted() {
    await this.fetchPokemonData(); // Fetch Pokémon data when component is mounted
  },
  methods: {
    togglePokedex() {
      this.showPokedex = !this.showPokedex; // Toggle the visibility of the Pokedex
    },
    async fetchPokemonData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        this.pokemons = await Promise.all(data.results.map((pokemon, index) => this.getPokemonDetails(pokemon.name, index + 1)));
        console.log("Pokemons fetched:", this.pokemons); // Log fetched Pokémon
        // Default select the first Pokémon
        this.selectPokemon(this.pokemons[0]);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    },
    async getPokemonDetails(pokemonName, id) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return {
          id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((type) => type.type.name)
        };
      } catch (error) {
        console.error(`Error fetching details for ${pokemonName}:`, error);
        return {};
      }
    },
    selectPokemon(pokemon) {
      this.selectedPokemon = pokemon; // Set selected Pokémon
      this.selectedPokemonId = pokemon.id; // Track selected Pokémon ID
    },
    capitalizeName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize Pokémon name
    },
    formatId(id) {
      return String(id).padStart(4, "0"); // Format Pokémon ID to 4 digits
    },
    getTypeImage(type) {
      const imagePath = `/pokemonTypes/${type}Type.png`; // Path to type image
      console.log(`Type Image Path: ${imagePath}`); // Log the generated path for troubleshooting
      return imagePath; // Return the path
    },
    getLighterTypeColor(type) {
      const typeColors = {
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        psychic: "#F85888",
        bug: "#A8B820",
        rock: "#B8A038",
        ghost: "#705898",
        dark: "#705848",
        dragon: "#7038F8",
        ice: "#98D8D8",
        fairy: "#EE99AC",
        poison: "#A040A0",
        fighting: "#C03028",
        ground: "#E0C068",
        steel: "#B8B8D0",
        normal: "#A8A878"
      };
      return typeColors[type] || "#A8A878"; // Return color for the Pokémon type
    }
  }
};
</script>

<style>
/* Ensure pixelated effect for sharp images */
.image-rendering-pixelated {
  image-rendering: pixelated;
}

::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}

::-webkit-scrollbar-track {
  background: #1e1e1e;
  border: 1px solid #333;
}

::-webkit-scrollbar-thumb {
  background-image: linear-gradient(90deg, #ffcc00 25%, #ff9900 25%, #ff9900 50%, #ffcc00 50%, #ffcc00 75%, #ff9900 75%);
  background-size: 20px 20px;
  border: 2px solid #000;
}

::-webkit-scrollbar-thumb:hover {
  background-image: linear-gradient(90deg, #ff6600 25%, #cc3300 25%, #cc3300 50%, #ff6600 50%, #ff6600 75%, #cc3300 75%);
}

::-webkit-scrollbar-corner {
  background: #1e1e1e;
}
</style>
