<template>
    <div class="background bg-contain w-screen h-screen bg-repeat-x background-image relative overflow-hidden justify-center">
        <div class="w-[95vw] h-[95vh]  flex flex-col">
            <!-- Top Section: Logo and Login -->
            <div class="flex flex-1 mt-4">
                <!-- Logo Div -->
                <div class="w-1/2  flex items-center justify-center">
                    <img src="/public/bgExtract.png" alt="Logo" class="w-full h-auto object-contain">
                </div>
                <!-- Login Div -->
                <div class="w-1/2 pl-4 ">
                    <div class="flex justify-start items-center">
                        <div class="h-[120px] rounded-[25px] border-[5px] border-solid border-black bg-creamy-white flex justify-center items-center w-full">
                            <div class="w-[90%]  flex justify-start" >
                                <div class="font-pixelifySans text-center text-[60px] ">About Us:</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 w-[100%] h-[78%] rounded-[25px] border-[5px] border-solid bg-creamy-white border-black flex flex-col justify-center items-center">
                        <div class="w-[90%] h-[12%] flex justify-start items-center mt-2 mb-2">
                            <div class="font-pixelifySans text-[40px]">We are a team of creative thinkers - a group putting an original twist on the classic Pokémon game. 
P.S. We do not own any rights to Pokémon or associated products. This is an educational, not for profit conceptual demonstration.</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buttons Div -->
            <div class="w-full h-[20%] ">
                <div class="flex justify-center items-center mt-4 mb-4 w-[100%] ">
                    <ReturnToMainButton />
                </div>
            </div>
        </div>
    </div>
</template>

