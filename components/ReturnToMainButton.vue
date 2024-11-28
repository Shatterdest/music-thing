<template>
  <button class="rounded-[25px] w-[55%] h-[95px] border-[5px] border-solid border-black bg-[#B8D0F8] lg:max-w-[40] m-2 flex justify-center items-center " @click="onClick">
    <div class="font-pixelifySans text-center text-5xl ">{{ text }}</div>
  </button>
</template>
  
<script>
export default {
  props: {
    text: {
      type: String,
      default: "Return to Main Page",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
  
  
  <style scoped>
  .returntomainBtn {
      background-color: #B8D0F8;
      width: 860px;
      height: 95px;
      border-radius: 30px;
      border-color: black;
      border-style: solid;
      border-width: 10px;
      margin-left: 40px;
      margin-top: 80px;
      font-size: 80px;
      font-family: 'Pixelify Sans', sans-serif;
      display: flex;
      justify-content: center; 
      align-items: center; 
      text-align: center; 
      line-height: 1;
      cursor: pointer;
  }
  </style>
