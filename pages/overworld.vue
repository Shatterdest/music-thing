<template>
  <div id="canvas" style="bg-black-100">
    <canvas width="2225px" height="940" ref="canvas"> </canvas>
  </div>
</template>

<script setup>
const canvas = ref(null);
let playerxPos = 3000;
let playeryPos = 3000;

onMounted(() => {
  if (canvas.value && canvas.value.getContext) {
    const c = canvas.value.getContext("2d");
    class Sprite {
      constructor({ pos, properties }) {
        this.pos = pos;
        this.properties = properties;
      }

      draw() {
        c.drawImage(this.properties.image, this.pos.x, this.pos.y);
      }
    }
    const bg = new Image();
    bg.src = "character.jpg";

    const background = new Sprite({
      pos: {
        x: 0,
        y: 0,
      },
      properties: {
        image: bg,
      },
    });

    const plyr = new Image();
    plyr.src = "map.jpg";
    const player = new Sprite({
      pos: {
        x: 0,
        y: 0,
      },
      properties: {
        image: plyr,
      },
    });

    const keys = {
      up: false,
      down: false,
      left: false,
      right: false,
    };

    let lastKeyPressed = "";
    const keyMap = {
      ArrowUp: "up",
      w: "up",
      ArrowDown: "down",
      s: "down",
      ArrowLeft: "left",
      a: "left",
      ArrowRight: "right",
      d: "right",
    };
    window.addEventListener("keydown", (event) => {
      const direction = keyMap[event.key];
      if (direction) {
        keys[direction] = true;
        lastKeyPressed = direction;
      }
    });

    window.addEventListener("keyup", (event) => {
      const direction = keyMap[event.key];
      if (direction) {
        keys[direction] = false;
      }
    });
    function animate() {
      window.requestAnimationFrame(animate);
      background.draw();
      player.draw();
      handleMovement();
      function handleMovement() {
        const directions = {
          up: { x: 0, y: 12, sprite: 'x' },
          down: { x: 0, y: -12, sprite: 'x' },
          left: { x: 12, y: 0, sprite: 'x' },
          right: { x: -12, y: 0, sprite: 'x' },
        };

        Object.entries(directions).forEach(([key, { x, y }]) => {
          if (keys[key] && lastKeyPressed === key) {
            movePlayer(x, y);
          }
        });
      }
      function movePlayer(offsetX, offsetY) {
        background.pos.x -= offsetX;
        background.pos.y -= offsetY;
    }}
    animate();
  } else {
    console.error("Canvas is not supported or not found.");
  }
});
</script>

<style></style>
