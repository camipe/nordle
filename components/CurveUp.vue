<template>
  <div>
    <svg viewBox="0 0 650 400" preserveAspectRatio="xMidYMid meet" class="mx-auto rotate-[-15deg] mt-[14vh] mb-12 text-[4rem] md:h-1/3 min-[1400px]:w-[45%] min-[1600px]:w-auto">
      <path id="curve" fill="transparent" d="M 50 350 C 50 150 250 50 400 50 C 550 50 750 150 750 350 L 750 350" />
      <text width="600" fill="currentColor">
        <textPath xlink:href="#curve">
          You're a tech mastermind!
        </textPath>
      </text>
    </svg>
    <div class="absolute bottom-0 left-0 right-0 w-full max-w-md mx-auto text-sm text-left dark:text-pink-60 text-blue-80">
      <div class="grid grid-cols-2 gap-2 m-3">
        <div class="statbox">
          <p class="inline">
            Antal spelade
            <span class="block text-5xl font-light">999</span>
          </p>
        </div>
        <div class="statbox">
          <p class="inline">
            Antal vinster
            <span class="block text-5xl font-light">100%</span>
          </p>
        </div>
        <div class="statbox">
          <p class="inline">
            Vinstsvit
            <span class="block text-5xl font-light">5</span>
          </p>
        </div>
        <div class="statbox">
          <p class="inline">
            Längsta vinstsvit
            <span class="block text-5xl font-light">5</span>
          </p>
        </div>
      </div>
      <div class="mx-3 mt-5 mb-[4vh] text-knowit-black dark:text-knowit-white">
        <p class="flex flex-row pb-1">
          <IconsStar class="greenstar" /> Du är topp 10 % i vinstsvit
        </p>
        <p class="flex flex-row">
          <IconsStar class="greenstar" /> Du är topp 1 % i längsta vinstsvit
        </p>
      </div>
    </div>

    <!-- Tech mastermind percent -->
    <!--
    <svg viewBox="0 0 650 400" preserveAspectRatio="xMidYMid meet" class="mx-auto rotate-[-15deg] mt-[14vh] mb-12 text-[4rem] md:h-1/3">
      <path id="curve" fill="transparent" d="M 50 350 C 50 150 250 50 400 50 C 550 50 750 150 750 350 L 750 350" />
      <text width="600" fill="currentColor">
        <textPath xlink:href="#curve">
          You're a tech mastermind!
        </textPath>
      </text>
    </svg>
    <div class="popuptext dark:text-pink-60 text-blue-80 text-left mb-[5vh]">
      <div class="mx-6 mb-2 bg-purple-100 rounded-full dark:bg-purple-100">
        <p class="dark:bg-pink-60 bg-blue-80 dark:text-blue-80 text-pink-60 rounded-full inline-block pl-12 text-8xl p-2 font-light w-[75%]">
          75<span class="ml-1 text-2xl font-normal">%</span>
        </p>
      </div>
      <p class="pl-6 mx-6 mb-4 text-2xl">
        av orden avklarade
      </p>
    </div>
    -->
  </div>
</template>
