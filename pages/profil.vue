<template>
  <article class="flex flex-col h-screen px-3 pt-12">
    <section class="max-w-full mx-auto w-[800px]">
      <header class="relative flex justify-center mb-6">
        <GoBackLink class="absolute left-0 -translate-y-1/2 top-1/2" />
        <h1 class="px-6 text-xl font-medium md:text-4xl">
          Min profil
        </h1>
      </header>

      <div class="space-y-6">
        <div class="grid grid-cols-2 gap-2 dark:text-pink-60">
          <div class="statbox bg-pink-60 dark:bg-blue-100">
            <p class="inline">
              Antal spelade
              <span class="statbox-text">999</span>
            </p>
          </div>
          <div class="statbox bg-pink-60 dark:bg-blue-100">
            <p class="inline">
              Antal vinster
              <span class="statbox-text">100%</span>
            </p>
          </div>
          <div class="statbox bg-pink-60 dark:bg-blue-100">
            <p class="inline">
              Vinstsvit
              <span class="statbox-text">5</span>
            </p>
          </div>
          <div class="statbox bg-pink-60 dark:bg-blue-100">
            <p class="inline">
              Längsta vinstsvit
              <span class="statbox-text">5</span>
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
    </section>
    <NavBarBottom />
  </article>
</template>
