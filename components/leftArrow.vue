<template>
  <div id="LdynamicArrow" :class="delayProp" class="absolute animate-fall grayscale">
    <img src="../public/Arrow.png" class="rotate-90" />
  </div>
</template>

<script setup>
const props = defineProps({
  delay: String
});

const delayProp = ref(props.delay);
</script>

<style scoped></style>
