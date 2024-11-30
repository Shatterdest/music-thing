<template>
  <div class="h-screen border border-red-600">
    <div class="relative h-72">
      <div class="n relative h-full w-2/5 min-w-fit border border-black">
        <div class="relative">
          <div id="LdynamicArrow" class="absolute animate-fall grayscale">
            <img src="../public/Arrow.png" class="rotate-90" />
          </div>
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
onMounted(() => {});

onNuxtReady(async () => {
  const moveArrow = ref(document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0));
  const targetArrow = ref(document.getElementById("staticArrow").getBoundingClientRect().top.toFixed(0));

  //The bottom function may not be necessary
  function testFall() {
    const still = ref(document.getElementById("staticArrow").getBoundingClientRect().top.toFixed(0));
    const fall = ref(document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0));
    if (fall.value == still.value) {
      //console.log(`Hit. ${fall.value}`);
    }
    requestAnimationFrame(testFall);
  }

  requestAnimationFrame(testFall);

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
});
</script>

<style scoped></style>
