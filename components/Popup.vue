<!--
View types:
- Finished game successfully
- Finished game unsuccessfully
- Easter egg

Different phrases depending on how many attempts were needed?
-->
<template>
  <div class="bg-pink-60 dark:bg-blue-80 text-blue-80 dark:text-knowit-white w-full max-w-2xl rounded-t-3xl fixed mx-auto left-0 right-0 bottom-0 overflow-hidden h-[90%] transition-all shadow-[0_-20vh_0_50vw_rgba(0,0,0,0.3)]">
    <!-- h-4/5 -->

    <button class="float-right mt-8 mr-3.5">
      <IconsStar class="w-10 h-10 text-4xl text-green" />
    </button>

    <!-- Dumstrut -->
    <!--
    <div class="text-center">
      <IconsPolygon class="text-knowit-white dark:text-blue-60 m-auto mt-[30%]" />
      <p class="text-blue-80 dark:text-pink-60 mt-8 text-2xl">
        * Dumstrut
      </p>
    </div>
    -->

    <!-- Tech mastermind statistics -->
    <svg viewBox="0 0 650 400" preserveAspectRatio="xMidYMid meet" class="mx-auto rotate-[-15deg] mt-[14vh] mb-12 text-[4rem] md:h-1/3">
      <path id="curve" fill="transparent" d="M 50 350 C 50 150 250 50 400 50 C 550 50 750 150 750 350 L 750 350" />
      <text width="600" fill="currentColor">
        <textPath xlink:href="#curve">
          You're a tech mastermind!
        </textPath>
      </text>
    </svg>
    <div class="absolute mx-auto left-0 right-0 text-left bottom-0 w-full max-w-md text-sm dark:text-pink-60 text-blue-80">
      <div class="grid grid-cols-2 gap-2 m-3">
        <div class="statbox">
          <p class="inline">
            Antal spelade
            <span class="text-5xl block font-light">999</span>
          </p>
        </div>
        <div class="statbox">
          <p class="inline">
            Antal vinster
            <span class="text-5xl block font-light">100%</span>
          </p>
        </div>
        <div class="statbox">
          <p class="inline">
            Vinstsvit
            <span class="text-5xl block font-light">5</span>
          </p>
        </div>
        <div class="statbox">
          <p class="inline">
            Längsta vinstsvit
            <span class="text-5xl block font-light">5</span>
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
      <div class="bg-purple-100 dark:bg-purple-100 mx-6 rounded-full mb-2">
        <p class="dark:bg-pink-60 bg-blue-80 dark:text-blue-80 text-pink-60 rounded-full inline-block pl-12 text-8xl p-2 font-light w-[75%]">
          75<span class="text-2xl font-normal ml-1">%</span>
        </p>
      </div>
      <p class="text-2xl mx-6 mb-4 pl-6">
        av orden avklarade
      </p>
    </div>
    -->

    <!-- True nerd -->
    <!--
    <svg viewBox="0 0 605 300" preserveAspectRatio="xMidYMid meet" class="mx-auto text-[4.5rem] mt-[15vh]">
      <path id="curve2" fill="transparent" d="M 50 150 C 100 100 200 100 200 100 C 300 100 300 150 450 150 C 450 150 550 150 600 100" />
      <text width="600" fill="currentColor">
        <textPath xlink:href="#curve2">
          You're a true nörd
        </textPath>
      </text>
    </svg>
    <div class="popuptext text-pink-60 text-left mb-[5vh] ">
      <p class="text-2xl mx-6 mb-4">
        Nästa spel om:
      </p>
      <div class="bg-blue-100 mx-6 rounded-3xl mb-2">
        <p class="text-8xl p-4 font-light">
          3<span class="text-2xl font-normal ml-1">tim</span>
        </p>
      </div>
      <div class="bg-blue-100 mx-6 rounded-3xl">
        <p class="text-8xl p-4 font-light">
          58<span class="text-2xl font-normal ml-1">min</span>
        </p>
      </div>
    </div>
    -->

    <!-- Congratulations -->
    <!--
    <svg viewBox="0 0 650 400" preserveAspectRatio="xMidYMid meet" class="mx-auto h-1/3 rotate-[-75deg] mt-[10vh] mb-12 text-[5rem] tracking-widest">
      <path id="curve3" fill="transparent" d="M 0 50 C 0 250 200 350 400 350 C 600 350 800 250 800 50" />
      <text width="600" fill="currentColor">
        <textPath xlink:href="#curve3">
          Congratulations!
        </textPath>
      </text>
    </svg>
    <div class="popuptext text-center mb-7">
      <div class="bg-pink-60 dark:bg-blue-100 pt-[12vh] pb-[7vh] mx-6 rounded-[50%_50%_1.75rem_1.75rem]">
        <p class="inline text-2xl">
          <span class="text-8xl block font-light">404</span>
          Bonuspoäng
        </p>
      </div>
    </div>
    -->
  </div>
</template>
border-radius: 50% 50% 3vw 3vw;
