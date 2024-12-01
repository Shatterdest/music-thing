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
  </div>
</template>

<script setup lang="js">
const leftNotes = ref([{ val: "[animation-delay:_0.5s]" }, { val: "[animation-delay:_1s]" }]);

const downNotes = ref([{ val: "[animation-delay:_0.75s]" }, { val: "[animation-delay:_1.5s]" }, { val: "[animation-delay:_0.9s]" }]);

const upNotes = ref([{ val: "[animation-delay:_0.75s]" }, { val: "[animation-delay:_1.5s]" }, { val: "[animation-delay:_0.9s]" }]);

const rightNotes = ref([{ val: "[animation-delay:_0.75s]" }, { val: "[animation-delay:_1.5s]" }, { val: "[animation-delay:_0.9s]" }]);

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
      const moveArrow = ref(document.getElementById("downArrow").getBoundingClientRect().top.toFixed(0));
      const targetArrow = ref(document.getElementById("LstaticArrow").getBoundingClientRect().top.toFixed(0));

      const trackLeft = ref(document.getElementById("left").firstElementChild.getBoundingClientRect().top.toFixed(0));

      if (trackLeft.value >= targetArrow.value - 26) {
        console.log("Hit.");
        document.getElementById("left").removeChild(document.getElementById("left").firstElementChild);
      } else {
        console.log(trackLeft.value);
        console.log(targetArrow.value);
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
