<template>
  <div>
    <svg viewBox="0 0 605 300" preserveAspectRatio="xMidYMid meet" class="mx-auto text-[4.5rem] mt-[15vh]">
      You're a true nörd
      <path id="curve2" fill="transparent" d="M 50 150 C 100 100 200 100 200 100 C 300 100 300 150 450 150 C 450 150 550 150 600 100" />
      <text width="600" fill="currentColor">
        <textPath xlink:href="#curve2">
          You're a true nörd
        </textPath>
      </text>
    </svg>
    <div class="popuptext text-blue-80 dark:text-pink-60 text-left mb-[5vh] ">
      <p class="mx-6 mb-4 text-2xl">
        Nästa spel om:
      </p>
      <div class="mx-6 mb-2 bg-knowit-white dark:bg-blue-100 rounded-3xl">
        <p class="p-4 font-light text-8xl">
          3<span class="ml-1 text-2xl font-normal">tim</span>
        </p>
      </div>
      <div class="mx-6 bg-knowit-white dark:bg-blue-100 rounded-3xl">
        <p class="p-4 font-light text-8xl">
          58<span class="ml-1 text-2xl font-normal">min</span>
        </p>
      </div>
    </div>
  </div>
</template>
