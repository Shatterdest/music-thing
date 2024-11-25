<template>
    <div class="mainLoginDiv" @click="onClick">
      <div class="textDiv">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        default: "Press to LOGIN",
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
  .mainLoginDiv {
    width: 670px;
    height: 95px;
    background-color: #FFEFEF;
    border-radius: 30px;
    border: 10px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .textDiv {
    font-size: 80px;
    width: 615px;
    height: 75px;
    font-family: 'Pixelify Sans', sans-serif;
    text-align: center;
    margin-top: -25px;
  }
  </style>