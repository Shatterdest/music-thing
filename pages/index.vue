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
        <div class="flex h-[11.666vh] flex-wrap content-center items-start justify-start p-3 lg:h-full lg:w-[33.3vw] lg:flex-col lg:justify-center">
          <div class="h-18 h-18 mt-2 flex w-[50%] items-center lg:w-full">
            <div class="mt-1 text-start font-pixelifySans text-5xl">Who Are We?</div>
          </div>
          <AboutUsButton class="w-[40%] lg:mt-1 lg:w-full" />
        </div>
      </div>
    </div>
    <div class="absolute left-0 top-0 h-screen w-screen">
      <img :style="{ transform: `translateX(${position1}px)` }" src="../public/bgExtractBird.png" alt="Pokemon1" class="pokemon absolute bottom-[40vh] w-[35vh]" />
      <img :style="{ transform: `translateX(${position2}px)` }" src="../public/bgExtractBird.png" alt="Pokemon2" class="pokemon absolute bottom-[40vh] w-[35vh]" />
      <img :style="{ transform: `translateX(${position3}px)` }" src="../public/bgExtractBird.png" alt="Pokemon3" class="pokemon absolute bottom-[40vh] w-[35vh]" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position1: 0, // Position for Pokémon 1
      position2: 800, // Initial offset for Pokémon 2
      position3: 1600, // Initial offset for Pokémon 3
      velocity: 8 // Speed of the sliding animation
    };
  },
  methods: {
    slidePokemon() {
      const screenWidth = window.innerWidth;
      const pokemonWidth = 50 * (screenWidth / 100);

      // Update positions for each Pokémon
      this.position1 -= this.velocity;
      this.position2 -= this.velocity;
      this.position3 -= this.velocity;

      // Reset positions when off-screen
      if (this.position1 < -pokemonWidth) this.position1 = screenWidth;
      if (this.position2 < -pokemonWidth) this.position2 = screenWidth;
      if (this.position3 < -pokemonWidth) this.position3 = screenWidth;
    }
  },
  mounted() {
    this.interval = setInterval(this.slidePokemon, 14); // Start the sliding animation
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear interval on component destruction
  }
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
  background-image: url("/public/repeatBG.png");
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
