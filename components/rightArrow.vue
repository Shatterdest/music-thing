<template>
  <div id="RdynamicArrow" :class="delay" class="absolute animate-fall"><img src="../public/Arrow.png" class="-rotate-90" /></div>
</template>

<script setup>
defineProps({
  delay: { type: String, required: true }
});
</script>

<style scoped></style>
