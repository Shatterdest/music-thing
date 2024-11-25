<template>
    <div class="background">
        <div class="mainDiv">
            <div class="logoDiv">
                <img src="../public/bgExtract.png" alt="" class="logoImage">
            </div>
            <div class="mainButtonsDiv">
                <div class="leftsidebuttonsDiv">
                    <div style="font-size: 80px; width: 400px;height: 75px;font-family: 'Pixelify Sans', sans-serif;text-align: center;margin-top: 80px;">Old Timer?</div>
                    <LoginButton/>
                </div>
                <div class="rightsidebuttonsDiv">
                    <div style="font-size: 80px; width: 500px;height: 75px;font-family: 'Pixelify Sans', sans-serif;text-align: center;margin-top: -25px;">New Player?</div>
                    <div class="flex gap-[20px] width 300 bottomButtons">
                        <SignUpButton class="w-auto"/>                        
                        <AboutUsButton class="w-auto" style="width: 400px; margin-top: 20px;"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const userStore = UserStore();

onMounted(() => {
    getPokemon();

})

</script>



<style>
.bottomButtons{
    display: flex;
}
.background {
    margin: 0;
    padding: 0;
    background-image: url('/public/repeatBG.png');
    background-repeat: repeat-x;
    background-size: auto 100%;
    background-position: top left;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;}
.mainDiv {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;}
.logoDiv {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;}
.logoImage {
    width: 800px;
    max-height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
    position: relative;
    z-index: 2;}
.mainButtonsDiv {
    display: flex; 
    width: 100%;
    height: 30vh;}
.leftsidebuttonsDiv {
    flex: 0.35; 
    height: 100%;}
.rightsidebuttonsDiv {
    margin-top: 105px;
    flex: 0.65; 
    height: 100%;
}
</style>



<style>
/* Optional: Add global styling here if necessary */
</style>

