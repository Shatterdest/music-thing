<template>
  <div class="h-screen border border-red-600">
    <div class="relative h-72">
      <div class="relative h-full w-2/5 min-w-fit border border-black">
        <div class="relative">
          <leftArrow id="leftArrow" v-for="note in leftNotes" :delay="note"></leftArrow>
        </div>
        <div class="absolute bottom-0">
          <img class="rotate-90" id="LstaticArrow" src="../public/Arrow.png" />
        </div>
        <div class="relative ml-24">
          <div id="DdynamicArrow" class="absolute animate-fall"><img src="../public/Arrow.png" /></div>
          <div class="absolute bottom-0">
            <img class="rotate-90" id="DstaticArrow" src="../public/Arrow.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { leftNotes } from "../constants/trackNotes";

onMounted(() => {});

onNuxtReady(async () => {
  //The bottom function may not be necessary
  /*   function testFall() {
    const still = ref(document.getElementById("staticArrow").getBoundingClientRect().top.toFixed(0));
    const fall = ref(document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0));
    if (fall.value == still.value) {
      //console.log(`Hit. ${fall.value}`);
    }
    requestAnimationFrame(testFall);
  }

  requestAnimationFrame(testFall); */

  window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft" && !e.repeat) {
      const moveArrow = ref(document.getElementById("LdynamicArrow").getBoundingClientRect().top.toFixed(0));
      const targetArrow = ref(document.getElementById("LstaticArrow").getBoundingClientRect().top.toFixed(0));

      if (moveArrow.value >= targetArrow.value - 13) {
        console.log("Hit.");
      } else {
        console.log("Miss");
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
