<template>
  <div id="DdynamicArrow" :class="delay" class="absolute animate-fall grayscale"><img src="../public/Arrow.png" /></div>
</template>

<script setup>
defineProps({
  delay: { type: String, required: true }
});
</script>

<style scoped></style>
