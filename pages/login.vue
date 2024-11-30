
<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/firebaseAuth";

const { login, error } = useAuth();
const email = ref("");
const password = ref("");
</script>

<template>
    <div class="background">
        <div class="leftUserLoginDiv">
            <div class="urstxtLoginBoxBG">
                <div class="urstxtLoginBoxFG">User LOGIN:</div>
            </div>
            <div class="generalDiv">
                <div class="mainUserThingBG">
                    <div class="mainThingTxt">Username:</div>
                    <div class="mainThingInputBg">
                        <input class="mainThingInputFd" type="email" v-model="email" placeholder="Username:" />
                    </div>
                    <div class="mainThingTxt">Password:</div>
                    <div class="mainThingInputBg">
                        <input class="mainThingInputFd" type="password" v-model="password" placeholder="Password:" />
                    </div>
                    <div v-if="error" class="errorMessage">{{ error }}</div>
                    <button class="greenLoginBTN" @click="login(email, password)">LOGIN</button>
                    <div class="noAccDiv">
                        <div class="mainThingSmallTxt">Don’t Have an Account? </div>
                        <nuxt-link to="signup">
                        <button class="signUpRedirectBtn">Sign Up</button>
                        </nuxt-link>
                    </div>
                </div>
                <div class="pokemonLogoContainer">
                    <img class="pokemonLogo" src="/public/bgExtract.png" alt="Pokemon Logo">
                </div>
            </div>
        </div>
        <div class="bottomButtons">
            <ReturnToMainButton />
            <AboutUsButton />
        </div>
    </div>
</template>

<style>
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
.aboutUsBtn{
    background-color: #B8D0F8;
    width: 920px;
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
.bottomButtons{
    width: 2000px;
    height: 250px;
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
    overflow-x: hidden;
    justify-content: space-between; 
    padding: 20px; 
    box-sizing: border-box; 
}


.leftUserLoginDiv {
    width: 1800px;
    margin-right: 20px;
    margin-left: 40px;
    margin-top: 40px;
}

.urstxtLoginBoxBG {
    width: 504px;
    height: 95px;
    border-radius: 30px;
    border-color: black;
    border-style: solid;
    border-width: 10px;
    background-color: #FFEFEF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.urstxtLoginBoxFG {
    font-size: 80px;
    font-family: 'Pixelify Sans', sans-serif;
    text-align: center;
}

.mainUserThingBG {
    width: 860px;
    height: 670px;
    background-color: #FFEFEF;
    border-color: black;
    border-style: solid;
    border-width: 10px;
    border-radius: 30px;
    margin-top: 20px;
    flex-shrink: 0;
}


.mainThingTxt {
    font-size: 80px;
    font-family: 'Pixelify Sans', sans-serif;
    margin-left: 20px;
}

.mainThingInputBg {
    width: 780px;
    height: 95px;
    border-color: black;
    border-style: solid;
    border-width: 10px;
    border-radius: 30px;
    margin-left: 20px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.mainThingInputFd {
    border: none;
    background-color: transparent;
    font-size: 50px;
    font-family: 'Pixelify Sans', sans-serif;
    outline: none;
    width: 100%;
    height: 100%;
    margin-right: 20px;
}

.greenLoginBTN {
    background-color: #67FF0F;
    width: 780px;
    height: 95px;
    border-color: black;
    border-style: solid;
    border-width: 10px;
    border-radius: 30px;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 80px;
    font-family: 'Pixelify Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
}

.signUpRedirectBtn {
    background-color: #FFFFFF;
    width: 290px;
    height: 60px;
    border-color: black;
    border-style: solid;
    border-width: 6px;
    border-radius: 30px;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 40px;
    font-family: 'Pixelify Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
}

.mainThingSmallTxt {
    font-size: 40px;
    font-family: 'Pixelify Sans', sans-serif;
    margin-top: 20px;
    padding-bottom: 8px;
    padding-top: 8px;
    padding-left: 6px;
    padding-right: 6px;
    margin-left: 20px;
}

.noAccDiv {
    display: flex;
    height: 135px;
    align-items: center;
}

.pokemonLogoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: transparent;
}

.pokemonLogo {
    width: 800px;
    max-height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
    position: relative;
    flex-shrink: 0;
}

.generalDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
</style>
