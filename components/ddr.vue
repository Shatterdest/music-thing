<template>
  <div class="h-screen border border-red-600">
    Arrow: {{ stillArrow }}
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
onMounted(() => {
  stillArrow.value = document.getElementById("staticArrow").getBoundingClientRect().top.toFixed(0);
});

const fallArrow = ref();
const stillArrow = ref();

async function testFall() {
  let i = 0;
  while (i <= 1) {
    fallArrow.value = document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0);
    if (fallArrow.value == 150) {
      console.log(fallArrow.value);
      i++;
    } else {
      console.log(fallArrow.value);
    }
  }
}

testFall();

/* while (fallArrow.value !== 200) {
  console.log(fallArrow.value);
}
 */
const y = ref(0);

/*
1) Variable in y-position of image
2) Set timer.
3) As time increases, decrease y-position by .01 per milisecond.
*/
</script>

<style scoped></style>
