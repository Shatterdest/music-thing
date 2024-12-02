<template>
    <div class="background bg-contain w-screen h-screen bg-repeat-x background-image relative overflow-hidden">
        <div>
            <div class="w-screen h-[65vh] flex items-end justify-center relative">
                <img src="../public/bgExtractLogo.png" alt="" class="w-[70vh]" />
            </div>
            <div class="h-[35vh] flex-col lg:flex-row lg:justify-center lg:items-center lg:flex ">
                <div class=" p-3 h-[11.666vh] content-center lg:h-full lg:w-[33.3vw]  flex flex-wrap lg:flex-col justify-start lg:justify-center items-start relative z-10">
                    <div class=" w-[50%] h-18 mt-2 lg:w-full h-18 flex items-center">
                        <div class="font-pixelifySans text-start text-5xl mt-1">Old Player?</div>
                    </div>
                    <LoginButton class="w-[40%] lg:w-full lg:mt-1" />
                </div>
                <div class=" p-3 h-[11.666vh] content-center lg:h-full lg:w-[33.3vw]  flex flex-wrap lg:flex-col justify-start lg:justify-center items-start relative z-10">
                    <div class=" w-[50%] h-18 mt-2 lg:w-full h-18 flex items-center">
                        <div class="font-pixelifySans text-start text-5xl mt-1">New Player?</div>
                    </div>
                    <SignUpButton class="w-[40%] lg:w-full lg:mt-1"/>
                </div>
                <div class=" p-3 h-[11.666vh] content-center lg:h-full lg:w-[33.3vw]  flex flex-wrap lg:flex-col justify-start lg:justify-center items-start relative z-10">
                    <div class=" w-[50%] h-18 mt-2 lg:w-full h-18 flex items-center">
                        <div class="font-pixelifySans text-start text-5xl mt-1">Who Are We?</div>
                    </div>
                    <AboutUsButton class="w-[40%] lg:w-full lg:mt-1"/>
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-0 w-screen h-screen">
            <img :style="{ transform: `translateX(${position1}px)` }" src="../public/bgExtractBird.png" alt="Pokemon1"
                class="pokemon w-[35vh] absolute bottom-[40vh]" />
            <img :style="{ transform: `translateX(${position2}px)` }" src="../public/bgExtractBird.png" alt="Pokemon2"
                class="pokemon w-[35vh] absolute bottom-[40vh]" />
            <img :style="{ transform: `translateX(${position3}px)` }" src="../public/bgExtractBird.png" alt="Pokemon3"
                class="pokemon w-[35vh] absolute bottom-[40vh]" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const userStore = useUserStore()
const position1 = ref(0); // Position for Pokémon 1
const position2 = ref(800); // Initial offset for Pokémon 2
const position3 = ref(1600); // Initial offset for Pokémon 3
const velocity = 8; // Speed of the sliding animation

const slidePokemon = () => {
  const screenWidth = window.innerWidth;
  const pokemonWidth = 50 * (screenWidth / 100);

  // Update positions for each Pokémon
  position1.value -= velocity;
  position2.value -= velocity;
  position3.value -= velocity;

  // Reset positions when off-screen
  if (position1.value < -pokemonWidth) position1.value = screenWidth;
  if (position2.value < -pokemonWidth) position2.value = screenWidth;
  if (position3.value < -pokemonWidth) position3.value = screenWidth;
};

let interval;
onMounted(() => {
  userStore.fetchAllPokemon()
  interval = setInterval(slidePokemon, 14); // Start the sliding animation
});

onBeforeUnmount(() => {
  clearInterval(interval); // Clear interval on component destruction
});
</script>

<style scoped>
.pokemon {
    transition: transform 0.014s linear;
    /* Smooth sliding effect */
}

.background {
    margin: 0;
    padding: 0;
    background-image: url('/public/repeatBG.png');
    background-repeat: repeat-x;
    background-size: auto 100%;
    background-position: top left;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
}

/* Ensure all buttons are above other elements */
.z-10 {
    z-index: 10;
    position: relative; /* Ensure proper stacking context */
}
</style>
