<template>
    This is index.vue
    <ddr></ddr>
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