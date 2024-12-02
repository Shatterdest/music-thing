<template>
  <div class="h-screen border border-red-600">
    <div class="relative h-72">
      <div class="relative h-full w-4/5 border border-black">
        <div id="left" class="relative">
          <leftArrow id="leftArrow" v-for="item in leftNotes" :delay="item.val"></leftArrow>
        </div>
        <div class="absolute bottom-0">
          <img class="rotate-90" id="LstaticArrow" src="../public/Arrow.png" />
        </div>

        <div id="down" class="relative ml-24">
          <downArrow id="downArrow" v-for="item in downNotes" :delay="item.val"></downArrow>
          <div class="absolute bottom-0 left-24">
            <img class="" id="DstaticArrow" src="../public/Arrow.png" />
          </div>
        </div>
        <div id="up" class="relative ml-48">
          <upArrow id="upArrow" v-for="item in upNotes" :delay="item.val"></upArrow>
          <div class="absolute bottom-0 left-24">
            <img class="" id="UstaticArrow" src="../public/Arrow.png" />
          </div>
        </div>
        <div id="right" class="relative ml-72">
          <rightArrow id="rightArrow" v-for="item in rightNotes" :delay="item.val"></rightArrow>
          <div class="absolute bottom-0 left-24">
            <img class="" id="RstaticArrow" src="../public/Arrow.png" />
          </div>
        </div>
      </div>
    </div>
    <audio controls id="audio"><source src="../public/RedBattle.mp3" type="audio/mp3" /></audio>
  </div>
</template>

<script setup lang="js">
//repeat occurs at 13s

const leftNotes = ref([
  { val: "[animation-delay:_1.8s]" },
  { val: "[animation-delay:_3.3s]" },
  { val: "[animation-delay:_6.5s]" },
  { val: "[animation-delay:_10.1s]" },
  { val: "[animation-delay:_13.1s]" },
  { val: "[animation-delay:_15.3s]" }
]);

const downNotes = ref([
  { val: "[animation-delay:_2.3s]" },
  { val: "[animation-delay:_4.9s]" },
  { val: "[animation-delay:_7.5s]" },
  { val: "[animation-delay:_10.1s]" },
  { val: "[animation-delay:_11.4s]" },
  { val: "[animation-delay:_12.5s]" }
]);

const upNotes = ref([
  { val: "[animation-delay:_2.8s]" },
  { val: "[animation-delay:_5.4s]" },
  { val: "[animation-delay:_8.5s]" },
  { val: "[animation-delay:_11.7s]" },
  { val: "[animation-delay:_12.7s]" },
  { val: "[animation-delay:_14.1s]" }
]);

const rightNotes = ref([
  { val: "[animation-delay:_5.7s]" },
  { val: "[animation-delay:_7.5s]" },
  { val: "[animation-delay:_8.5s]" },
  { val: "[animation-delay:_14.5s]" },
  { val: "[animation-delay:_15.68s]" },
  { val: "[animation-delay:_16.5s]" }
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
      const targetArrow = ref(document.getElementById("LstaticArrow").getBoundingClientRect().top.toFixed(0));

      const track = ref(document.getElementById(e.key.slice(5).toLowerCase()).firstElementChild.getBoundingClientRect().top.toFixed(0));
      if (track.value >= targetArrow.value - 36) {
        console.log("Hit.");
        document.getElementById(e.key.slice(5).toLowerCase()).removeChild(document.getElementById(e.key.slice(5).toLowerCase()).firstElementChild);
        score++;
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

<style scoped></style>
