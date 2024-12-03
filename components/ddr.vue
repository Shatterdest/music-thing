<template>
  <div class="h-screen w-screen font-pixelifySans">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="flex items-center space-x-8 rounded-md p-6">
        <img :src="userStore.encounteredPoke.spriteImage" alt="Pokemon Sprite" class="h-80 w-80" />
        <div class="space-y-4">
          <p class="text-5xl font-bold text-white">{{ userStore.encounteredPoke.name }}</p>
        </div>
      </div>
    </div>

    <div class="relative h-72">
      <div class="relative h-full w-auto">
        <div id="left" class="relative">
          <leftArrow id="leftArrow" v-for="(item, index) in leftNotes" :key="'left-' + index" :delay="item.val" />
        </div>

        <div class="absolute bottom-0">
          <img class="rotate-90" id="staticArrowLeft" src="../public/Arrow.png" alt="Arrow Left" :class="{ glow: isGlowing['left'] }" />
          <img class="absolute bottom-0 left-24 rotate-0" id="staticArrowUp" src="../public/Arrow.png" alt="Arrow Up" :class="{ glow: isGlowing['up'] }" />
          <img class="absolute bottom-0 left-48 rotate-180" id="staticArrowDown" src="../public/Arrow.png" alt="Arrow Down" :class="{ glow: isGlowing['down'] }" />
          <img class="absolute bottom-0 left-72 -rotate-90" id="staticArrowRight" src="../public/Arrow.png" alt="Arrow Right" :class="{ glow: isGlowing['right'] }" />
        </div>

        <div id="down" class="relative ml-24">
          <downArrow id="downArrow" v-for="(item, index) in downNotes" :key="'down-' + index" :delay="item.val" />
        </div>

        <div id="up" class="relative ml-48">
          <upArrow id="upArrow" v-for="(item, index) in upNotes" :key="'up-' + index" :delay="item.val" />
        </div>

        <div id="right" class="relative ml-72">
          <rightArrow id="rightArrow" v-for="(item, index) in rightNotes" :key="'right-' + index" :delay="item.val" />
        </div>
      </div>

      <div class="absolute right-4 top-4 flex items-center rounded bg-gray-800 px-4 py-2 text-white shadow-md">
        <img v-if="userStore.rhythmScore == 0" src="../public/balls/quick_ball.png" alt="Poke Ball" class="mr-2 h-8 w-8" />
        <img v-if="userStore.rhythmScore > 0 && userStore.rhythmScore <= 5" src="../public/balls/poke_ball.png" alt="Poke Ball" class="mr-2 h-8 w-8" />
        <img v-if="userStore.rhythmScore > 5 && userStore.rhythmScore <= 10" src="../public/balls/great_ball.png" alt="Great Ball" class="mr-2 h-8 w-8" />
        <img v-if="userStore.rhythmScore > 10 && userStore.rhythmScore <= 18" src="../public/balls/ultra_ball.png" alt="Ultra Ball" class="mr-2 h-8 w-8" />
        <img v-if="userStore.rhythmScore > 18" src="../public/balls/master_ball.png" alt="Master Ball" class="mr-2 h-8 w-8" />
        <p class="text-4xl font-bold">Score: {{ userStore.rhythmScore }}</p>
      </div>
    </div>

    <audio controls id="audio">
      <source src="../public/RedBattle.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const userStore = useUserStore();
const pokemon = ref(userStore.getRandomMon());

const isGlowing = ref({
  left: false,
  up: false,
  down: false,
  right: false
});

const leftNotes = ref([
  { val: "[animation-delay:_4.5s]" },
  { val: "[animation-delay:_5.8s]" },
  { val: "[animation-delay:_7.1s]" },
  { val: "[animation-delay:_12.2s]" },
  { val: "[animation-delay:_15.78s]" }
]);

const downNotes = ref([
  { val: "[animation-delay:_1.9s]" },
  { val: "[animation-delay:_9.5s]" },
  { val: "[animation-delay:_11.8s]" },
  { val: "[animation-delay:_12.8s]" },
  { val: "[animation-delay:_14.2s]" }
]);

const upNotes = ref([
  { val: "[animation-delay:_2.4s]" },
  { val: "[animation-delay:_6.6s]" },
  { val: "[animation-delay:_7.6s]" },
  { val: "[animation-delay:_9.7s]" },
  { val: "[animation-delay:_13.2s]" }
]);

const rightNotes = ref([
  { val: "[animation-delay:_3.4s]" },
  { val: "[animation-delay:_10.2s]" },
  { val: "[animation-delay:_11s]" },
  { val: "[animation-delay:_15.4s]" },
  { val: "[animation-delay:_16.6s]" }
]);

const triggerGlow = (direction) => {
  isGlowing.value[direction] = true;
  setTimeout(() => {
    isGlowing.value[direction] = false;
  }, 500);
};

onMounted(() => {
  const audio = document.getElementById("audio");
  audio.play();

  window.addEventListener("animationend", (e) => {
    const trackId = e.target.id.replace("Arrow", "").toLowerCase();
    const trackElement = document.getElementById(trackId);
    if (trackElement?.firstElementChild) {
      trackElement.removeChild(trackElement.firstElementChild);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (!e.repeat && e.key.startsWith("Arrow")) {
      const direction = e.key.slice(5);
      const staticArrow = document.getElementById("staticArrow" + direction);
      const targetArrow = staticArrow?.getBoundingClientRect()?.top || 0;

      const track = document.getElementById(direction.toLowerCase())?.firstElementChild?.getBoundingClientRect()?.top || 0;

      if (track >= targetArrow - 36 && track <= targetArrow + 36) {
        userStore.rhythmScore++;
        triggerGlow(direction);
      }
    }
  });
});
</script>

<style scoped>
#audio {
  display: none;
}

.glow {
  background-color: rgba(255, 255, 255, 0.5);
  animation: glow 0.5s ease-out;
}

@keyframes glow {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(2);
  }
  100% {
    filter: brightness(1);
  }
}
</style>
