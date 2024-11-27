<template>
  <div class="rounded-[25px] border-[5px] border-solid border-black h-[18] bg-creamy-white lg:max-w-[40]" @click="onClick">
    <div class="font-pixelifySans text-center text-5xl mt-1 mb-2 ml-2 mr-2">{{ text }}</div>
  </div>
</template>
  
<script>
export default {
  props: {
    text: {
      type: String,
      default: "About Us",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
  