<template><nuxt-link to="signup">
    <button class="mainsignupDiv" @click="onClick">
      <div class="textDiv2">{{ text }}</div>
    </button></nuxt-link>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        default: "Press to Sign-Up",
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
  .mainsignupDiv {
    width: 700px;
    height: 95px;
    background-color: #FFEFEF;
    border-radius: 30px;
    border: 10px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .textDiv2 {
    font-size: 80px;
    width: 680px;
    height: 75px;
    font-family: 'Pixelify Sans', sans-serif;
    text-align: center;
    margin-top: -25px;
  }
  </style>