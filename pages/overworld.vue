<template>
  <!-- Logout Button -->
  <nuxt-link to="login">
    <div class="logout-button h-[18] w-[200px] border-[5px] border-solid border-black bg-white" @click="logout">
      <div class="mb-2 ml-2 mr-2 mt-1 text-center font-pixelifySans text-5xl">LOGOUT</div>
    </div>
  </nuxt-link>

  <!-- New Button with Image -->
  <div class="image-button border-[5px] border-solid border-black bg-white" @click="togglePokedex">
    <img src="/public/pokedexIcon.png" alt="Pokedex Icon" class="pokedex-icon scale-150 p-2" />
  </div>

  <!-- Pokedex Component -->
  <div v-if="showPokedex">
    <div class="pokedex-overlay">
      <Pokedex />
    </div>
  </div>

  <div v-if="showDDR">
    <div class="ddr-overlay">
      <ddr />
    </div>
  </div>

  <!-- Canvas -->
  <div id="canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { map } from "../assets/data/map.ts";
import { grass } from "../assets/data/grass.ts";
import { useAuth } from "@/composables/firebaseAuth";

const canvas = ref(null);
const mapScale = 3;
const { logout } = useAuth();
const pokedexStore = usePokedexStore(); // Use the Pokedex store
const userStore = useUserStore();
console.log(map);
const showPokedex = computed(() => pokedexStore.showPokedex);
const showDDR = ref(false);
const intervalId = ref(null);

// Toggle Pokedex visibility
const togglePokedex = () => {
  pokedexStore.togglePokedex();
};

onMounted(() => {
  userStore.fetchAllPokemon();
  intervalId.value = setInterval(async () => {
    const random = Math.random();
    console.log(random);
    if (random < 0.1) {
      console.log(random);
      if (showDDR.value == true || pokedexStore.showPokedex == true) {
        // too lazy to clean up
      } else {
        showDDR.value = true;
        console.log("waiting 20s");
        await wait(20);
        console.log("waited");
        userStore.addPokemon();
        showDDR.value = false;
      }
    }
  }, 1000);

  if (canvas.value && canvas.value.getContext) {
    const ctx = canvas.value.getContext("2d");
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
    });

    class Sprite {
      constructor({ position, image, frames = { max: 1, hold: 12 }, sprites, animate = false, scale = 3 }) {
        this.position = position;
        this.image = new Image();
        this.frames = { ...frames, val: 0, elapsed: 0 };
        this.image.onload = () => {
          this.width = (this.image.width / this.frames.max) * this.scale;
          this.height = this.image.height * this.scale;
        };
        this.image.src = image.src;

        this.animate = animate;
        this.sprites = sprites;
        this.scale = scale;
      }

      draw() {
        const crop = {
          x: this.animate ? this.frames.val * (this.image.width / this.frames.max) : 0,
          y: 0,
          width: this.image.width / this.frames.max,
          height: this.image.height
        };

        ctx.drawImage(this.image, crop.x, crop.y, crop.width, crop.height, this.position.x, this.position.y, crop.width * this.scale, crop.height * this.scale);

        if (!this.animate) return;

        this.frames.elapsed++;
        if (this.frames.elapsed % this.frames.hold === 0) {
          this.frames.val = (this.frames.val + 1) % this.frames.max;
        }
      }
    }

    class Boundary {
      constructor({ position }) {
        this.position = position;
        this.width = 16 * mapScale;
        this.height = 15 * mapScale;
      }
      draw() {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height, "red");
      }
    }

    const OFFSET_X = 1325;
    const OFFSET_Y = 1510;

    const background = new Sprite({
      position: { x: -OFFSET_X, y: -OFFSET_Y },
      image: { src: "map.png" }
    });

    const foreground = new Sprite({
      position: { x: -OFFSET_X, y: -OFFSET_Y },
      image: { src: "foreground.png" }
    });

    const player = new Sprite({
      position: { x: canvas.value.width / 3, y: canvas.value.height / 3 },
      image: { src: "/player/player_forward.png" },
      frames: { max: 3, hold: 6 },
      sprites: {
        up: { src: "/player/player_back.png" },
        left: { src: "/player/player_left.png" },
        down: { src: "/player/player_forward.png" },
        right: { src: "/player/player_right.png" }
      },
      animate: false,
      scale: 1
    });

    const boundaries = [];
    const encounters = [];
    const tileSize = 16 * mapScale;

    map.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile === 1) {
          boundaries.push(
            new Boundary({
              position: {
                x: j * tileSize - (OFFSET_X - mapScale * 60),
                y: i * tileSize - (OFFSET_Y - mapScale * 80)
              }
            })
          );
        }
      });
    });

    grass.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (tile === 1) {
          encounters.push(
            new Boundary({
              position: {
                x: j * tileSize - (OFFSET_X - mapScale),
                y: i * tileSize - (OFFSET_Y - mapScale * 80)
              }
            })
          );
        }
      });
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
      d: "right"
    };

    function isCollision(obj1, obj2) {
      return (
        obj1.position.x < obj2.position.x + obj2.width &&
        obj1.position.x + obj1.width > obj2.position.x &&
        obj1.position.y < obj2.position.y + obj2.height &&
        obj1.position.y + obj1.height > obj2.position.y
      );
    }

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

    let lastTime = 0;

    function animate(currentTime) {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const speed = 300;

      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;

      window.requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      background.draw();
      player.draw();
      foreground.draw();

      handleMovement(deltaTime, speed);

      const onGrass = encounters.some((tile) => isCollision(player, tile));
      if (onGrass) {
        console.log("You are on grass!");
      }
    }

    function handleMovement(deltaTime, speed) {
      const movementOffsets = {
        up: { x: 0, y: -speed * deltaTime },
        down: { x: 0, y: speed * deltaTime },
        left: { x: -speed * deltaTime, y: 0 },
        right: { x: speed * deltaTime, y: 0 }
      };

      if (lastKeyPressed && keys[lastKeyPressed]) {
        const offset = movementOffsets[lastKeyPressed];

        const isColliding = boundaries.some((boundary) => {
          const futurePlayer = {
            position: {
              x: player.position.x + offset.x,
              y: player.position.y + offset.y
            },
            width: player.width,
            height: player.height
          };
          return isCollision(futurePlayer, boundary);
        });

        if (!isColliding) {
          background.position.x -= offset.x;
          background.position.y -= offset.y;
          foreground.position.x -= offset.x;
          foreground.position.y -= offset.y;
          boundaries.forEach((tile) => {
            tile.position.x -= offset.x;
            tile.position.y -= offset.y;
          });

          encounters.forEach((tile) => {
            tile.position.x -= offset.x;
            tile.position.y -= offset.y;
          });
        }
      }
    }

    animate(0);
  } else {
    console.error("Canvas is not supported or not found.");
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
  console.log("Interval stopped");
});

function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
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
<style scoped>
.logout-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.image-button {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  width: 200px;
  height: 150px;
}

.pokedex-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pokedex-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent overlay */
  z-index: 2000; /* Ensure it's above other elements */
  display: flex;
  justify-content: center;
  align-items: center;
}

.ddr-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent overlay */
  z-index: 2000; /* Ensure it's above other elements */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ensure that canvas does not interfere with the Pokedex overlay */
#canvas {
  position: relative;
}
</style>
