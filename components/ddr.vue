<template>
  <div class="h-screen w-screen">
    <div class="relative h-72">
      <div class="relative h-full w-auto">
        <div id="left" class="relative">
          <leftArrow id="leftArrow" v-for="item in leftNotes" :delay="item.val"></leftArrow>
        </div>
        <div class="absolute bottom-0">
          <img class="rotate-90" id="staticArrowLeft" src="../public/Arrow.png" />
          <img class="absolute bottom-0 left-24 rotate-0" da id="staticArrowUp" src="../public/Arrow.png" />
          <img class="absolute bottom-0 left-48 rotate-180" id="staticArrowDown" da src="../public/Arrow.png" />
          <img @keypress="AnimationEffect" class="absolute bottom-0 left-72 -rotate-90" id="staticArrowRight" src="../public/Arrow.png" />
        </div>

        <div id="down" class="relative ml-24">
          <downArrow id="downArrow" v-for="item in downNotes" :delay="item.val"></downArrow>
        </div>
        <div id="up" class="relative ml-48">
          <upArrow id="upArrow" v-for="item in upNotes" :delay="item.val"></upArrow>
        </div>
        <div id="right" class="relative ml-72">
          <rightArrow id="rightArrow" v-for="item in rightNotes" :delay="item.val"></rightArrow>
        </div>
      </div>
<!--       <div id="pokeScore">
        <img class="ml-5 mt-5 scale-[1.5]" v-if="userStore.rhythmScore > 0 && userStore.rhythmScore <= 5" src="../public/balls/poke_ball.png" />
        <img class="ml-5 mt-5 scale-[2]" v-if="userStore.rhythmScore > 5 && userStore.rhythmScore <= 10" src="../public/balls/great_ball.png" />
        <img class="ml-5 mt-8 scale-[3]" v-if="userStore.rhythmScore > 10 && userStore.rhythmScore <= 18" src="../public/balls/ultra_ball.png" />
        <img class="ml-5 mt-11 scale-[3.5]" src="../public/balls/master_ball.png" v-if="userStore.rhythmScore > 18" />
      </div> -->
    </div>
    <audio controls id="audio"><source src="../public/RedBattle.mp3" type="audio/mp3" /></audio>
  </div>
</template>

<script setup lang="js">
const userStore = useUserStore();

const leftNotes = ref([
  { val: "[animation-delay:_4.8s]" },
  { val: "[animation-delay:_6.1s]" },
  { val: "[animation-delay:_7.4s]" },
  { val: "[animation-delay:_12.5s]" },
  { val: "[animation-delay:_16.08s]" }
]);

const downNotes = ref([
  { val: "[animation-delay:_2.2s]" },
  { val: "[animation-delay:_9.8s]" },
  { val: "[animation-delay:_12.1s]" },
  { val: "[animation-delay:_13.1s]" },
  { val: "[animation-delay:_14.5s]" }
]);

const upNotes = ref([
  { val: "[animation-delay:_2.7s]" },
  { val: "[animation-delay:_6.9s]" },
  { val: "[animation-delay:_7.9s]" },
  { val: "[animation-delay:_10s]" },
  { val: "[animation-delay:_13.5s]" }
]);

const rightNotes = ref([
  { val: "[animation-delay:_3.7s]" },
  { val: "[animation-delay:_10.5s]" },
  { val: "[animation-delay:_11.3s]" },
  { val: "[animation-delay:_15.7s]" },
  { val: "[animation-delay:_16.9s]" }
]);

onMounted(() => {});

onNuxtReady(async () => {
  async function playAudio() {
    document.getElementById("audio").play();
    console.log("Hello");
  }
  playAudio();

  let score = ref(0);

  window.addEventListener("animationend", (e) => {
    document
      .getElementById(e.srcElement.attributes[0].value.replace("Arrow", "").trim())
      .removeChild(document.getElementById(e.srcElement.attributes[0].value.replace("Arrow", "").trim()).firstElementChild);
  });

  window.addEventListener("keydown", (e) => {
    if ((e.key == "ArrowLeft" || "ArrowDown" || "ArrowUp" || "ArrowRight") && !e.repeat) {
      document.getElementById("staticArrow" + e.key.slice(5));
      const targetArrow = ref(document.getElementById("staticArrowLeft").getBoundingClientRect().top.toFixed(0));

      const track = ref(document.getElementById(e.key.slice(5).toLowerCase()).firstElementChild.getBoundingClientRect().top.toFixed(0));
      if (track.value >= targetArrow.value - 36) {
        console.log("Hit.");
/* 
        userStore.rhythmScore++; */

        console.log(score.value);
      } else {
        console.log(targetArrow.value);
        console.log(track.value);
      }
    }
  });

  /*
  Create an array for left arrow, right arrow, down arrow, up arrow.
  v-for using the left arrow, etc. component.
  The array contains a delay for each arrow to begin falling.
  .firstChild to judge
  */
});
</script>

<style scoped>
#audio {
  display: none;
}
</style>
