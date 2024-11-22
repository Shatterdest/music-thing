<template>
    This is the index.vue
    <pokedex></pokedex>
</template>

<script setup lang="ts">

const userStore = UserStore();

onMounted(() => {
    getPokemon();

})


<script>
</script>

<style>
/* Optional: Add global styling here if necessary */
</style>