<template>
    <div
        class="background bg-contain w-screen h-screen bg-repeat-x background-image relative overflow-hidden justify-center">
        <div class="w-[95vw] h-[95vh]  flex flex-col">
            <!-- Top Section: Logo and Login -->
            <div class="flex flex-1">
                <!-- Logo Div -->
                <div class="w-1/2  flex items-center justify-center">
                    <img src="/public/bgExtract.png" alt="Logo" class="w-full h-auto object-contain">
                </div>
                <!-- Login Div -->
                <div class="w-1/2 pl-4 ">
                    <div class="flex justify-start items-center">
                        <div class="h-[120px] rounded-[25px] border-[5px] border-solid border-black bg-creamy-white flex justify-center items-center w-full">
                            <div class="w-[90%]  flex justify-start" >
                                <div class="font-pixelifySans text-center text-[60px] ">User LOGIN:</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 w-[100%] h-[78%] rounded-[25px] border-[5px] border-solid bg-creamy-white border-black flex flex-col justify-center items-center">
                        <div class="w-[90%] h-[12%] flex justify-start items-center mt-2 mb-2">
                            <div class="font-pixelifySans text-[60px]">Username:</div>
                        </div>
                        <div class="w-[90%] h-[95px] rounded-[25px] border-[5px] border-solid border-black bg-white flex pl-4 pr-4 mt-2 mb-2">
                            <input class="border-none bg-transparent text-[50px] font-pixelifySans w-[100%] h-[100%]" type="email" v-model="email" placeholder="ash@example.com" />
                        </div>
                        <div class="w-[90%] h-[12%]  flex justify-start items-center mt-2 mb-2">
                            <div class="font-pixelifySans text-[60px]">Password:</div>
                        </div>
                        <div class="w-[90%] h-[95px] rounded-[25px] border-[5px] border-solid border-black bg-white flex pl-4 pr-4 mt-2 mb-2">
                            <input class="mainThingInputFd border-none bg-transparent text-[50px] font-pixelifySans w-[100%] h-[100%]" type="password" v-model="password" placeholder="pikachu12345" />
                        </div>
                        <button class="bg-[#67FF0F] flex w-[90%] h-[95px] rounded-[25px] border-[10px] border-solid border-black mt-2 mb-2 font-pixelifySans text-[80px] justify-center items-center"
                            @click="login(email, password)">
                            <div>LOGIN</div>
                        </button>
                        <div class=" flex items-center mt-4 mb-4 w-[90%]">
                            <div class=" font-pixelifySans text-[35px] w-[60%]">Don’t Have an Account?</div>
                            <button class="w-[40%] rounded-[25px] border-[5px] border-solid border-black bg-white font-pixelifySans text-[40px] p">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buttons Div -->
            <div class="w-full h-[20%] ">
                <div class="flex justify-center items-center mt-4 mb-4 w-[100%] ">
                    <ReturnToMainButton />
                    <AboutUsButton />
                </div>
            </div>
        </div>
    </div>
</template>
