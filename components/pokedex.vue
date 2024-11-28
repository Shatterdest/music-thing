<template>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
    <div class="div1">
        <div class="div2">
            <div class="div3">
                <img class="backwards-orb" src="/public/backwardsOrb.png" alt="image">
                <div class="div4">
                    <img class="question-thingie" src="/public/questionThingie.png" alt="image">
                </div>
                <div class="database-text">Database:</div>
            </div>
            <div class="caught-text">Caught: x / y</div>
        </div>
        <div class="content">
            <div class="left-panel">
                <div class="purple-thing"></div>
                <div class="bars-div">
                    <div class="pokemon-row">
                        <div class="pokemon-number">001</div>
                        <div class="pokemon-name">Bulbasaur</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">002</div>
                        <div class="pokemon-name">Ivysaur</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div> <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div>
                    <div class="pokemon-row">
                        <div class="pokemon-number">003</div>
                        <div class="pokemon-name">???</div>
                    </div>
                    
                </div>
            </div>
            <div class="right-panel">
                <div class="top-bar">
                    <div class="test1">00#</div>
                    <div class="test10">Some Pokemon</div>
                </div>
                <div class="main-image-container">
                    <img class="background-img" src="/public/synthWave.jpg" alt="">
                    <img class="variable-img" src="/public/4.png" alt="Centered image">
                </div>
                <div class="bottom-bar">
                    <div class="test10">Caught: Some Number</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.div1 {
    width: 1778px;
    background: white;
    height: 857px;
    border-radius: 30px;
    border: 10px solid black;
    margin: 100px auto auto auto;
}

.div2 {
    position: relative;
    width: calc(1778px + 50px);
    height: 95px;
    background: #4DAAFA;
    border-radius: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border: 10px solid black;
    margin: -10px -25px 0 -35px;
}

.div3 {
    position: static;
    top: 0;
    left: 50%;
    transform: translateX(0%);
    width: 576px;
    height: 95px;
    background: #6CCBFB;
    border-radius: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border: 10px solid black;
    margin: -10px 0 0 -10px;
}

.backwards-orb {
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    height: 320px;
    margin: -113px 0 0 -140px;
}

.div4 {
    position: relative;
    width: 180px;
    height: 180px;
    background-color: #6CCBFB;
    border: 10px solid black;
    margin: -55px 0 0 1705px;
}

.question-thingie {
    position: absolute;
    top: calc((100% - 150px) / 2);
    left: calc((100% - 150px) / 2);
    width: 150px;
    height: 150px;
}

.database-text {
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 80px;
    margin: -145px 0 0 120px;
}

.caught-text {
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 80px;
    margin: -105px 0 0 610px;
}

.content {
    display: flex;
}

.left-panel {
    background-color: #E4F4DB;
    width: 50%;
    height: 754px;
    border-bottom-left-radius: 20px;
    border-right: 10px solid black;
}

.purple-thing {
    background-color: #E53A35;
    width: 15%;
    height: 754px;
    border-bottom-left-radius: 20px;
    border-right: 10px solid black;
}

.bars-div {
    width: 84%;
    height: 100%;
    overflow-y: scroll;
    font-family: 'Pixelify Sans', sans-serif;
    padding: 10px;
    box-sizing: border-box;
    margin: -760px 0 0 140px;
}

.pokemon-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 10px solid black;
    padding: 10px 0;
}

.pokemon-number, .pokemon-name {
    font-size: 50px;
}

.right-panel {
    background-color: green;
    width: 50%;
    height: 754px;
    border-bottom-right-radius: 20px;
    border-left: 10px solid black;
}

.top-bar {
    width: 100%;
    height: 84px;
    border-bottom: 10px solid black;
    background-color: #E53A35;
    display: flex;
    justify-content: left;
    align-items: center;
}

.test1 {
    font-size: 50px;
    margin-left: 10px;
    font-family: 'Pixelify Sans', sans-serif;
}

.test10 {
    font-size: 50px;
    font-family: 'Pixelify Sans', sans-serif;
    margin-left: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.main-image-container {
    width: 100%;
    height: 566px;
    background-color: pink;
    position: relative;
}

.background-img {
    width: 100%;
    height: 568px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.variable-img {
    width: 900px;
    height: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    image-rendering: pixelated;
    filter: drop-shadow(10px 10px 10px #FFEDEE);
}

.bottom-bar {
    width: 100%;
    height: 84px;
    border-top: 10px solid black;
    background-color: #E53A35;
    border-bottom-right-radius: 20px;
}

.test10:last-child {
    margin: 10px 0 0 10px;
}

::-webkit-scrollbar { width: 20px; height: 20px; }
::-webkit-scrollbar-track {background: #1e1e1e; border: 1px solid #333; }
::-webkit-scrollbar-thumb {background-image: linear-gradient(90deg, #ffcc00 25%, #ff9900 25%, #ff9900 50%, #ffcc00 50%, #ffcc00 75%, #ff9900 75%); background-size: 20px 20px; border: 2px solid #000; }
::-webkit-scrollbar-thumb:hover {background-image: linear-gradient(90deg, #ff6600 25%, #cc3300 25%, #cc3300 50%, #ff6600 50%, #ff6600 75%, #cc3300 75%);}
::-webkit-scrollbar-corner {background: #1e1e1e;}

</style>
