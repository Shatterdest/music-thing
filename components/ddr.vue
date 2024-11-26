<template>
  <div class="h-screen border border-red-600">
    Arrow: {{ stillArrow }}
    <div class="relative h-72">
      <div class="h-full w-2/5 border border-black">
        <div class="absolute animate-fall">
          <span id="dynamicArrow">TEST</span>
          <img src="../public/Arrow.png" />
        </div>
        <img class="absolute bottom-0" id="staticArrow" src="../public/Arrow.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
onMounted(() => {
  fallArrow.value = document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0);

  stillArrow.value = document.getElementById("staticArrow").getBoundingClientRect().top.toFixed(0);
});

const fallArrow = ref();
const stillArrow = ref();
const y = ref(0);

/*
1) Variable in y-position of image
2) Set timer.
3) As time increases, decrease y-position by .01 per milisecond.
*/
</script>

<style scoped></style>
