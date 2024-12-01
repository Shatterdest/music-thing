<template>
    <div class="flex justify-center items-center h-screen w-screen">
        <div class="flex justify-center items-center w-[98vw] h-[98vh]">
            <div
                class="relative w-full max-w-[88%] max-h-[90%] aspect-[4/3] border-black rounded-[30px] border-[5px] md:border-[8px]">
                <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 w-[102.2%] lg:w-[101.4%] h-[13%] border-[5px] md:border-[8px] border-black rounded-tr-[30px] z-10 -translate-y-[10%] flex justify-center items-center">
                    <div class="w-[100%] h-[100%] rounded-tr-[20px] relative flex justify-end bg-[#4DAAFA]">
                        <div
                            class="w-1/2 font-pixelifySans text-start text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl flex items-center pl-3">
                            Caught: SomeX
                        </div>
                        <div
                            class="bg-[#6CCBFB] absolute top-1/2 left-0 -translate-y-1/2 border-black rounded-[20px] w-[50%] h-[120%] border-solid border-[4px] md:border-r-[8px] lg:border-[8px] z-20 flex items-center justify-center">
                            <div
                                class="font-pixelifySans text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl h-[90%] flex items-center justify-center pl-6 md:pl-12 lg:pl-8 xl:pl-16">
                                Database:
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom -->
                <div
                    class="absolute bottom-0 left-0 w-full bg-black h-[90%] rounded-b-[24px] md:rounded-b-[20px] flex border-black border-4px ">
                    <!-- Left -->
                    <div class="w-1/2 bg-[#FDF494] overflow-y-auto p-2 rounded-bl-[15px] ml-2 mb-2 lg:pt-4 xl:pt-8">
                        <button v-for="(pokemon, index) in pokemons" :key="index" :style="{
                            backgroundColor: selectedPokemonId === pokemon.id ? getLighterTypeColor(pokemon.types[0]) : '#E4F4DB',
                        }" class="lg:mr-4 2xl:text-4xl xl:text-3xl lg:text-2xl lg:h-[70px] w-[95%] ml-1 text-xl text-black font-pixelifySans rounded-bl-lg text-start py-2 mb-2 mt-2 p-2 border-black border-4"
                            @click="selectPokemon(pokemon)">
                            <div class="flex items-center">
                                <img :src="getTypeImage(pokemon.types[0])" alt="Type" class="w-8 h-8 mr-2" />
                                <span>#{{ formatId(pokemon.id) }} {{ capitalizeName(pokemon.name) }}</span>
                            </div>
                        </button>
                    </div>
                    <!-- Right -->
                    <div class="w-1/2 border-l-8 rounded-b-r-20px border-4px border-black border-solid mb-2 ">
                        <div :style="{ backgroundColor: selectedPokemonTypeColor }"
                            class="h-[12%] mt-2 border-b-8 border-solid border-black flex flex-row align-center items-center font-pixelifySans justify-start">
                            <div class="text-xl p-1 md:text-2xl md:p-3 lg:text-4xl xl:text-4xl 2xl:text-5xl">#{{
                                formatId(selectedPokemon.id) }}</div>
                            <div class="text-xl p-1 md:text-2xl md:p-3 lg:text-4xl xl:text-4xl 2xl:text-5xl">{{
                                capitalizeName(selectedPokemon.name) }}</div>
                        </div>
                        <div class="h-[78%] relative">
                            <img :src="selectedPokemon.image"
                                class="absolute top-0 left-0 w-full h-full z-10 object-contain image-rendering-pixelated"
                                alt="Selected Pokémon">
                            <img src="/public/synthWave.jpg" alt="SynthWave"
                                class="absolute top-0 left-0 w-full h-full object-cover z-0 border-t-4 border-black">
                        </div>
                        <div :style="{ backgroundColor: selectedPokemonTypeColor }"
                            class="h-[10%] bg-pink-400 border-t-8 border-solid border-black flex flex-row align-center items-center font-pixelifySans justify-start rounded-br-[20px]">
                            <div class="text-xl p-1 md:text-2xl md:p-3 lg:text-4xl xl:text-4xl 2xl:text-5xl">Caught: 80
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Question Thingie Div -->
                <div
                    class="absolute top-0 right-0 w-[15%] h-[20%] max-h-[150px] max-w-[150px] -translate-x-[-35%] translate-y-[-22%] z-10 bg-black">
                    <div class="w-full h-full flex justify-center items-center">
                        <button class="w-[90%] h-[90%] z-10">
                            <img src="/public/questionThingie.png" alt="Question Icon"
                                class="w-full h-full object-cover">
                        </button>
                    </div>
                </div>

                <!-- Backwards Orb Div -->
                <button
                    class="absolute top-0 left-0 w-[25%] h-[25%] max-h-[300px] max-w-[300px] -translate-x-[40%] -translate-y-[30%] z-20">
                    <img src="/public/backwardsOrb.png" alt="Return Back" class="w-full h-full object-cover">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemons: [], // List of Pokémon
            selectedPokemon: { id: 0, name: '', image: '', types: [] }, // Selected Pokémon details
            selectedPokemonId: null, // ID of the selected Pokémon
        };
    },
    async mounted() {
        await this.fetchPokemonData(); // Fetch Pokémon data when component is mounted
    },
    methods: {

        async fetchPokemonData() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await response.json();
                this.pokemons = await Promise.all(data.results.map((pokemon, index) =>
                    this.getPokemonDetails(pokemon.name, index + 1)
                ));
                console.log('Pokemons fetched:', this.pokemons); // Log fetched Pokémon
                // Default select the first Pokémon
                this.selectPokemon(this.pokemons[0]);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
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
                    types: data.types.map(type => type.type.name),
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
            return String(id).padStart(4, '0'); // Format Pokémon ID to 4 digits
        },
        getTypeImage(type) {
            const imagePath = `/pokemonTypes/${type}Type.png`; // Path to type image
            console.log(`Type Image Path: ${imagePath}`); // Log the generated path for troubleshooting
            return imagePath; // Return the path
        },
        getLighterTypeColor(type) {
            const typeColors = {
                fire: '#F08030',
                water: '#6890F0',
                grass: '#78C850',
                electric: '#F8D030',
                psychic: '#F85888',
                ice: '#98D8D8',
                dragon: '#7038F8',
                dark: '#705848',
                fairy: '#EE99AC',
                normal: '#A8A878',
                bug: '#A8B820',
                poison: '#A040A0',
                ground: '#E0C068',
                flying: '#A890F0',
                fighting: '#C03028',
                steel: '#B8B8D0',
                ghost: '#705898',
                rock: '#B8A038',
                unknown: '#68A090',
            };

            // Default to normal type if no match
            const baseColor = typeColors[type] || '#A8A878';

            // Create a lighter shade (reduce intensity)
            return this.lightenColor(baseColor, 40);
        },
        lightenColor(color, percent) {
            const num = parseInt(color.slice(1), 16);
            const r = (num >> 16) + percent;
            const g = ((num >> 8) & 0x00ff) + percent;
            const b = (num & 0x0000ff) + percent;

            return (
                '#' +
                (0x1000000 + (r < 255 ? r : 255) * 0x10000 + (g < 255 ? g : 255) * 0x100 + (b < 255 ? b : 255))
                    .toString(16)
                    .slice(1)
            );
        },
    },
    computed: {
        selectedPokemonTypeColor() {
            const typeColors = {
                fire: '#F08030',
                water: '#6890F0',
                grass: '#78C850',
                electric: '#F8D030',
                psychic: '#F85888',
                ice: '#98D8D8',
                dragon: '#7038F8',
                dark: '#705848',
                fairy: '#EE99AC',
                normal: '#A8A878',
                bug: '#A8B820',
                poison: '#A040A0',
                ground: '#E0C068',
                flying: '#A890F0',
                fighting: '#C03028',
                steel: '#B8B8D0',
                ghost: '#705898',
                rock: '#B8A038',
                unknown: '#68A090',
            };
            return typeColors[this.selectedPokemon.types[0]] || '#A8A878'; // Default color if type not found
        },
    },
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