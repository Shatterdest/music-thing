<template>
  <div class="h-screen border border-red-600">
    <div class="relative h-72">
      <div class="h-full w-2/5 border border-black">
        <div id="dynamicArrow" class="absolute animate-fall">
          <img src="../public/Arrow.png" />
        </div>
        <img class="absolute bottom-0" id="staticArrow" src="../public/Arrow.png" />
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
    if (e.key == "ArrowDown" && !e.repeat) {
      const moveArrow = ref(document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0));
      const targetArrow = ref(document.getElementById("staticArrow").getBoundingClientRect().top.toFixed(0));

      if (moveArrow.value >= targetArrow.value - 10) {
        console.log("Hit.");
      } else {
        console.log("Miss");
      }
    }
  });
});
</script>

<style scoped></style>
