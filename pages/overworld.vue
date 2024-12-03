<template>
  <!-- Logout Button -->
  <nuxt-link to="login">
    <div class="logout-button h-[18] w-[200px] border-[5px] border-solid border-black bg-white" @click="logout">
      <div class="mb-2 ml-2 mr-2 mt-1 text-center font-pixelifySans text-5xl">LOGOUT</div>
    </div>
  </nuxt-link>
  <div class="logout-button mt-40 h-[18] w-[200px] border-[5px] border-solid border-black bg-white" @click="showHelp = true">
    <div class="mb-2 ml-2 mr-2 mt-1 text-center font-pixelifySans text-5xl">HELP</div>
  </div>

  <div class="image-button border-[5px] border-solid border-black bg-white" @click="togglePokedex">
    <img src="../public/pokedexicon.png" alt="Pokedex Icon" class="pokedex-icon scale-150 p-2" />
  </div>

  <div v-if="showHelp">
    <div class="pokedex-overlay font-pixelifySans">
      <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="w-full max-w-md rounded-lg bg-white p-6">
          <h2 class="mb-4 text-2xl font-bold">Help</h2>
          <p class="mb-4">Welcome to our Pokémon Rhythm game. Get a high score so you can catch them all!</p>
          <p class="mb-4"><strong>Controls:</strong> WASD for player movement, Arrow Keys for rhythm game.</p>
          <p class="mb-4">If you catch a Pokémon, it'll go in your Pokédex. Good luck trainers!</p>

          <!-- Close Button -->
          <button @click="showHelp = false" class="mt-4 rounded bg-red-500 px-4 py-2 text-white">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showPokedex">
    <div class="pokedex-overlay">
      <Pokedex />
    </div>
  </div>

  <div v-if="showDDR">
    <div class="ddr-overlay flex justify-center">
      <ddr ref="ddrRef" />
    </div>
  </div>

  <div id="canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import { map } from "../assets/data/map.ts";
import { grass } from "../assets/data/grass.ts";
import { useAuth } from "@/composables/firebaseAuth";
import ddr from "../components/ddr.vue";

const canvas = ref(null);
const mapScale = 3;

const { logout } = useAuth();
const pokedexStore = usePokedexStore();
const userStore = useUserStore();

const showPokedex = computed(() => pokedexStore.showPokedex);
const showDDR = ref(false);
const showHelp = ref(false);

const intervalId = ref(null);

const togglePokedex = () => {
  pokedexStore.togglePokedex();
};

onMounted(() => {
  userStore.fetchAllPokemon();

  intervalId.value = setInterval(async () => {
    const random = Math.random();
    if (random < 0.2) {
      if (showDDR.value || pokedexStore.showPokedex || !userStore.onGrass) {
        // Skip encounter if not moving or not on grass
      } else {
        showDDR.value = true;
        userStore.rhythmScore = 0;
        console.log("Starting encounter...");

        await wait(20);

        console.log("Encounter ended.");
        console.log(userStore.rhythmScore);
        showDDR.value = false;
        console.log(userStore.latestPokemon);
        if (userStore.rhythmScore === 0) {
  alert(userStore.latestPokemon.name + " fled :(");
} else if (userStore.rhythmScore <= 5) {
  const chanceOfCatch = Math.floor(Math.random() * 4);
  if (chanceOfCatch < 1) {
    alert(userStore.latestPokemon.name + " was caught! :)");
    userStore.addPokemon(userStore.latestPokemon.id - 1);
  } else {
    alert(userStore.latestPokemon.name + " fled :(");
  }
} else if (userStore.rhythmScore <= 10) {
  const chanceOfCatch = Math.floor(Math.random() * 4);
  if (chanceOfCatch < 2) {
    alert(userStore.latestPokemon.name + " was caught! :)");
    userStore.addPokemon(userStore.latestPokemon.id - 1);
  } else {
    alert(userStore.latestPokemon.name + " fled :(");
  }
} else if (userStore.rhythmScore <= 18) {
  const chanceOfCatch = Math.floor(Math.random() * 4);
  if (chanceOfCatch < 3) {
    alert(userStore.latestPokemon.name + " was caught! :)");
    userStore.addPokemon(userStore.latestPokemon.id - 1);
  } else {
    alert(userStore.latestPokemon.name + " fled :(");
  }
} else {
  alert(userStore.latestPokemon.name + " was caught! :)");
  userStore.addPokemon(userStore.latestPokemon.id - 1);
}

      }
    }
  }, 1000);

  if ( window !== undefined && canvas.value && canvas.value.getContext) {
    const ctx = canvas.value.getContext("2d");
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    const resizeHandler = () => {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeHandler);

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

    const REFERENCE_WIDTH = 1494;
    const REFERENCE_HEIGHT = 742;

    const SCALE_X = window.innerWidth / REFERENCE_WIDTH;
    const SCALE_Y = window.innerHeight / REFERENCE_HEIGHT;

    const OFFSET_X = 0.731 * REFERENCE_WIDTH * SCALE_X;
    const OFFSET_Y = 1.9 * REFERENCE_HEIGHT * SCALE_Y;

    const background = new Sprite({
      position: { x: -OFFSET_X, y: -OFFSET_Y },
      image: { src: "map.png" }
    });

    const foreground = new Sprite({
      position: { x: -OFFSET_X, y: -OFFSET_Y },
      image: { src: "foreground.png" }
    });

    const player = new Sprite({
      position: { x: canvas.value.width / 2 - 16, y: canvas.value.height / 2 - 24 },
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
      w: "up",
      s: "down",
      a: "left",
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
    let moving = false;

    window.addEventListener("keydown", (event) => {
      const direction = keyMap[event.key];
      moving = true;
      if (direction && lastKeyPressed !== direction) {
        lastKeyPressed = direction;

        player.image.src = player.sprites[direction].src;
        player.animate = true;

        Object.keys(keys).forEach((key) => {
          keys[key] = key === direction;
        });
      }
    });

    window.addEventListener("keyup", () => {
      lastKeyPressed = "";
      player.animate = false;
    });

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
          moving = true;

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

        // Check if player is on grass
        const onGrass = encounters.some((tile) => isCollision(player, tile));
        if (onGrass && moving) {
          userStore.onGrass = true;
        } else {
          userStore.onGrass = false;
        }
      }
    }

    function animate() {
      const speed = 5;
      const deltaTime = 1;

      handleMovement(deltaTime, speed);
      background.draw();
      foreground.draw();
      player.draw();

      requestAnimationFrame(animate);
    }

    animate();
  }
  function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
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
