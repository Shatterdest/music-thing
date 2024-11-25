<template>
  <div class="h-screen border border-red-600">
    Mouse position: {{ arrowPos.top }}
    <div class="relative h-72">
      <div class="h-full w-2/5 border border-black">
        <div class="absolute animate-fall">
          <div id="move">TEST</div>
          <img src="../public/Arrow.png" />
        </div>

        <span id="moveStaticBox"></span><img class="absolute bottom-0" src="../public/Arrow.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const y = ref(0);

function update(event) {
  y.value = event.pageY;
}

const arrowImg = document.getElementById("move");
let arrowPos = arrowImg.getBoundingClientRect();

/*
1) Variable in y-position of image
2) Set timer.
3) As time increases, decrease y-position by .01 per milisecond.
*/
</script>

<style scoped></style>
