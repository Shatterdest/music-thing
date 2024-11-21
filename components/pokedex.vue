<template>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <div class="div1" style="width: 1778px; background: white; height: 857px; border-radius: 30px; border-color: black; border-width: 10px; border-style: solid; margin-left: auto; margin-right: auto; margin-top: 100px; margin-bottom: auto;">
        <div class="div2" style="position: relative; width: calc(1778px + 50px); height: 95px; background: #4DAAFA; border-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; border-color: black; border-width: 10px; border: solid 10px; margin-left: -35px; margin-right: -25px; margin-top: -10px">
            <div class="div3" style="position: static; top: 0; left: 50%; transform: translateX(0%); width: 576px; height: 95px; background: #6CCBFB; border-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; border-color: black; border-width: 10px; border-style: solid; margin-top: -10px; margin-left: -10px;">
                <img src="/public/backwardsOrb.png" alt="image"
                    style="position: absolute; top: 0; left: 0; width: 320px; height: 320px; margin-top: -113px; margin-left: -140px;">
                <div class="div4"
                    style="position: relative; width: 180px; height: 180px; background-color: #6CCBFB; border-width: 10px; border-style: solid; margin-left: 1705px; margin-top: -55px;">
                    <img src="/public/questionThingie.png" alt="image"
                        style="position: absolute; top: calc((100% - 150px) / 2); left: calc((100% - 150px) / 2); width: 150px; height: 150px; max-width: 150px; max-height: 150px;">
                </div>
                <div
                    style="font-family: 'Pixelify Sans', sans-serif; font-size: 80px; margin-left: 120px; margin-top: -145px;">
                    Database:</div>
            </div>
            <!--This is where you have to put in the amount caught-->
            <div style="font-family: 'Pixelify Sans', sans-serif; font-size: 80px; margin-left: 610px; margin-top: -105px;"> Caught: x / y</div>
        </div>
        <div style="display: flex;">
            <!--This thing is supposed to be turned into the template for the left side-->
            <div style="background-color: #E4F4DB; width: 50%; height: 754px; border-bottom-left-radius: 20px; border-right-style: solid; border-right-width: 10px;">
                <div class="purpleThing"style="background-color: #E53A35; width: 15%; height: 754px; border-bottom-left-radius: 20px; border-right-style: solid; border-width:10px"></div>
                <!-- Here is where all of the pokemon are supposed to be displayed in a list -->
                <div class="barsDiv" style="width: 84%; height: 100%; overflow-y: scroll; font-family: 'Pixelify Sans', sans-serif; padding: 10px; box-sizing: border-box; margin-top: -760px; margin-left: 140px;">
                    <!-- Example Pokémon Row - repeat as needed -->
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">001</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Bulbasaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">002</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Ivysaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">???</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">???</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>
                    <div class="pokemonRow"
                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 10px solid black; padding: 10px 0;">
                        <div class="pokemonNumber" style="font-size: 50px;">003</div>
                        <div class="pokemonName" style="font-size: 50px; margin-left: 10px;">Venusaur</div>
                    </div>

                    <!-- Add more rows as needed --></div>
            </div>
            <!--This is supposed to be turned into the template for the right side-->
            <div style="background-color: green; width: 50%; height: 754px; border-bottom-right-radius: 20px; border-left-style: solid; border-right-width: 10px;">
                <div style="width: 100%; height: 84px; border-width: 10px; border-bottom: solid 10px; background-color: #E53A35; display: flex; justify-content: left; align-items: center; ">
                    <div class="test1" style="font-size: 50px; margin-left: 10px; font-family: 'Pixelify Sans', sans-serif;">00#</div>
                    <div class="test10" style="font-size: 50px; font-family: 'Pixelify Sans', sans-serif; margin-left: -100px; display: flex; justify-content: center; align-items: center; width: 100%;">Some Pokemon</div>
                </div>
                <div style="width: 100%; height: 566px; background-color: pink; position: relative;">
                    <img class="variable2Img" style="width: 100%; height: 568px; position: absolute; top: 0; left: 0; z-index: 1;"src="/public/synthWave.jpg" alt="">
                    <img class="variableImg" style="width: 900px; height: 900px; position: absolute; top: 50%; left: 50%; z-index: 2; transform: translate(-50%, -50%); image-rendering: pixelated; filter: drop-shadow(10px 10px 10px #FFEDEE);" src="/public/4.png" alt="Centered image">                </div>
                <div style="width: 100%; height: 84px; border-top-width: 10px; border-top-style: solid; background-color: #E53A35; border-bottom-right-radius: 20px ">
                    <div class="test10" style="font-size: 50px; font-family: 'Pixelify Sans', sans-serif; margin-left: 10px; margin-top: 10px; display: flex; justify-content: left; align-items: center; width: 100%;"> Caught: Some Number</div>
                </div>
            </div>
        </div>
    </div>
</template>