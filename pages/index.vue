<template>
    This is index.vue
</template>

<script setup lang="ts">

const userStore = UserStore();

onMounted(() => {
    getPokemon();

})


</script>

<style>
/* Optional: Add global styling here if necessary */
</style>