<template>
    <div>
        index page
    </div>
</template>

<script setup lang="ts">

const userStore = UserStore();

onMounted(() => {
    getPokemon();

})


</script>

<style lang="scss" scoped>

</style>