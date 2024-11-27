<template>
    <div class="rounded-[25px] border-[5px] border-solid border-black h-[18] bg-creamy-white lg:max-w-[40]" @click="onClick">
      <div class="font-pixelifySans text-center text-5xl mt-1 mb-2 ml-2 mr-2">{{ computedText }}</div>
    </div>
  </template>
  
  <script>
export default {
  props: {
    text: {
      type: String,
      default: "Press to Sign-Up",
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    computedText() {
      // If the screen resolution is less than 'lg' (1024px), display "Sign-Up"
      return this.windowWidth < 1024 ? "Sign-Up" : this.text;
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>
  