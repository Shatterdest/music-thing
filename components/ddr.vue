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
  fallArrow.value = document.getElementById("dynamicArrow").getBoundingClientRect().top.toFixed(0);
  if (fallArrow.value >= 150 && fallArrow.value < 151) {
    console.log(fallArrow.value);
  }
}

setInterval(checkPosition, 20);

testFall();

/* 

function trackElementPosition() {
  // Get the element you want to track
  const element = document.getElementById('movingElement');

  // Function to check the element's position
  function checkPosition() {
    // Get the current left position of the element (in pixels)
    const elementPosition = element.getBoundingClientRect().left;

    // Check if the position is 50px
    if (elementPosition >= 50 && elementPosition < 51) {
      console.log("yes");
    }
  }

  // Check position periodically (every 20 milliseconds)
  setInterval(checkPosition, 20);
}





 */
</script>

<style scoped></style>
