<template>
  <div id="canvas">
    <canvas ref="canvas" width="2225" height="1600"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);

onMounted(() => {
  if (canvas.value && canvas.value.getContext) {
    const ctx = canvas.value.getContext("2d");

    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    class Sprite {
      constructor({ position, velocity, image, frames = { max: 1, hold: 10 }, sprites, animate = false, scale = 2 }) {
        this.position = position;
        this.velocity = velocity;
        this.image = new Image();
        this.frames = { ...frames, val: 0, elapsed: 0 };
        this.image.onload = () => {
          this.width = (this.image.width / this.frames.max) * scale;
          this.height = this.image.height * scale;
        };
        this.image.src = image.src;

        this.animate = animate;
        this.sprites = sprites;
        this.scale = scale;
      }

      draw() {
        const crop = {
          x: this.frames.val * (this.image.width / this.frames.max),
          y: 0,
          width: this.image.width / this.frames.max,
          height: this.image.height,
        };

        ctx.drawImage(
          this.image,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          this.position.x,
          this.position.y,
          crop.width * this.scale,
          crop.height * this.scale
        );

        if (!this.animate) return;

        this.frames.elapsed++;
        if (this.frames.elapsed % this.frames.hold === 0) {
          this.frames.val = (this.frames.val + 1) % this.frames.max;
        }
      }
    }

    const background = new Sprite({
      position: { x: -760 , y: -620 },
      image: { src: "map.png" },
    });

    const player = new Sprite({
      position: { x: canvas.value.width / 2 - 48, y: canvas.value.height / 2 - 34 },
      image: { src: "player_forward.png" },
      frames: { max: 3, hold: 10 },
      sprites: {
        up: { src: "player_back.png" },
        left: { src: "player_left.png" },
        down: { src: "player_forward.png" },
        right: { src: "player_right.png" },
      },
      animate: true,
    });

    const keys = { up: false, down: false, left: false, right: false };
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
  if (direction && lastKeyPressed !== direction) {
    lastKeyPressed = direction;

    player.image.src = player.sprites[direction].src;
    player.animate = true;

    Object.keys(keys).forEach((key) => (keys[key] = key === direction));
  }
});

window.addEventListener("keyup", (event) => {
  const direction = keyMap[event.key];
  if (direction) {
    keys[direction] = false;

    if (lastKeyPressed === direction) {
      lastKeyPressed = ""; 
      player.animate = false;
    }
  }
});

    function animate() {
      window.requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      background.draw();
      player.draw();

      handleMovement();
    }

    function handleMovement() {
  const movementOffsets = {
    up: { x: 0, y: -6 },
    down: { x: 0, y: 6 },
    left: { x: -6, y: 0 },
    right: { x: 6, y: 0 },
  };

  if (lastKeyPressed && keys[lastKeyPressed]) {
    const offset = movementOffsets[lastKeyPressed];
    background.position.x -= offset.x;
    background.position.y -= offset.y;
  }
}
    animate();
  } else {
    console.error("Canvas is not supported or not found.");
  }
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100vw;
  height: 100vh;
  image-rendering: pixelated;
}
</style>
