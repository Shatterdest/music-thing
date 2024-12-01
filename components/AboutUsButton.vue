<template>
  <nuxt-link to="/about">
    <button class="rounded-[25px] w-[40%] h-[95px] border-[5px] border-solid border-black  bg-creamy-white lg:max-w-[40] flex justify-center items-center" @click="onClick">
      <div class="font-pixelifySans text-center text-5xl ">{{ text }}</div>
    </button>
  </nuxt-link>
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
  