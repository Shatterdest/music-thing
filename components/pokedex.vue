<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div v-if="showPokedex" class="z-50 flex h-[98vh] w-[98vw] items-center justify-center">
      <div class="relative aspect-[4/3] max-h-[90%] w-full max-w-[88%] rounded-[30px] border-[5px] border-black md:border-[8px]">
        <div
          class="absolute left-1/2 top-0 z-10 flex h-[13%] w-[102.2%] -translate-x-1/2 -translate-y-[10%] items-center justify-center rounded-tr-[30px] border-[5px] border-black md:border-[8px] lg:w-[101.4%]"
        >
          <div class="relative flex h-[100%] w-[100%] justify-end rounded-tr-[20px] bg-[#4DAAFA]">
            <div
              class="absolute left-0 top-1/2 z-20 flex h-[120%] w-[50%] -translate-y-1/2 items-center justify-center rounded-[20px] border-[4px] border-solid border-black bg-[#6CCBFB] md:border-r-[8px] lg:border-[8px]"
            >
              <div class="flex h-[90%] items-center justify-center pl-6 text-center font-pixelifySans text-3xl sm:text-4xl md:pl-12 md:text-5xl lg:pl-8 lg:text-6xl xl:pl-16 xl:text-7xl 2xl:text-8xl">
                Database:
              </div>
            </div>
          </div>
        </div>

        <div class="border-4px absolute bottom-0 left-0 flex h-[90%] w-full rounded-b-[24px] border-black bg-black md:rounded-b-[20px]">
          <div class="mb-2 ml-2 w-1/2 overflow-y-auto rounded-bl-[15px] bg-[#FDF494] p-2 lg:pt-4 xl:pt-8">
            <button
              v-for="(pokemon, index) in pokemons"
              :key="index"
              class="mb-2 ml-1 mt-2 w-[95%] rounded-bl-lg border-4 border-black p-2 py-2 text-start font-pixelifySans text-xl text-black lg:mr-4 lg:h-[70px] lg:text-2xl xl:text-3xl 2xl:text-4xl"
              @click="selectPokemon(pokemon)"
            >
              <div class="flex items-center">
                <span>#{{ formatId(pokemon.id) }} {{ capitalizeName(pokemon.name) }}</span>
              </div>
            </button>
          </div>
          <div class="rounded-b-r-20px border-4px mb-2 w-1/2 border-l-8 border-solid border-black">
            <div
              :style="{ backgroundColor: selectedPokemonTypeColor }"
              class="align-center mt-2 flex h-[12%] flex-row items-center justify-start border-b-8 border-solid border-black font-pixelifySans"
            >
              <div class="text-white p-1 text-xl md:p-3 md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl">#{{ formatId(selectedPokemon.id) }}</div>
              <div class="text-white p-1 text-xl md:p-3 md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl">{{ capitalizeName(selectedPokemon.name) }}</div>
            </div>
            <div class="relative h-[78%]">
              <img v-if="selectedPokemon.spriteImage" :src="selectedPokemon.spriteImage" class="image-rendering-pixelated absolute left-0 top-0 z-10 h-full w-full object-contain" alt="Selected Pokémon" />
              <img src="/public/synthWave.jpg" alt="SynthWave" class="absolute left-0 top-0 z-0 h-full w-full border-t-4 border-black object-cover" />
            </div>
            <div
              :style="{ backgroundColor: selectedPokemonTypeColor }"
              class="align-center flex h-[10%] flex-row items-center justify-start rounded-br-[20px] border-t-8 border-solid border-black bg-pink-400 font-pixelifySans"
            >
            </div>
          </div>
        </div>

        <button @click="pokedexStore.togglePokedex" class="absolute left-0 top-0 z-20 h-[25%] max-h-[300px] w-[25%] max-w-[300px] -translate-x-[40%] -translate-y-[30%]">
          <img src="/public/backwardsOrb.png" alt="Return Back" class="h-full w-full object-cover" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const showPokedex = ref(true);
const selectedPokemon = ref({ id: 0, name: "", image: "", types: Array() });
const selectedPokemonId = ref(null);
const pokedexStore = usePokedexStore();
const userStore = useUserStore();
const pokemons = ref(Array());

onMounted(() => {
  pokemons.value = userStore.returnPokemon();
});

function selectPokemon(pokemon) {
  selectedPokemon.value = pokemon; 
  selectedPokemonId.value = pokemon.id; 
}
function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1); 
}
function formatId(id) {
  return String(id).padStart(4, "0"); 
}

</script>

<style>
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
