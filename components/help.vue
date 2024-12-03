<template>
    <div>
      <!-- Button to open the help popup -->
    
      <!-- Help Popup -->
      <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 class="text-2xl font-bold mb-4">Help</h2>
          <p class="mb-4">Welcome to our Pokémon Rhythm game. Get a high score so you can catch them all!</p>
          <p class="mb-4"><strong>Controls:</strong> WASD for player movement, Arrow Keys for rhythm game.</p>
          <p class="mb-4">If you catch a Pokémon, it'll go in your Pokédex. Good luck trainers!</p>
  
          <!-- Close Button -->
          <button @click="showHelp = false" class="bg-red-500 text-white px-4 py-2 rounded mt-4">
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  /* Optional: Add some styles for the popup */
  .fixed {
    position: fixed;
  }
  .bg-black {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bg-white {
    background-color: white;
  }
  </style>
  