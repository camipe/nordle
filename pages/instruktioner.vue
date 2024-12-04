<template>
  <article class="flex flex-col h-screen px-6 pt-12">
<<<<<<< HEAD
    <section class="max-w-[800px] mx-auto w-full">
      <header class="relative flex justify-center mb-6">
        <GoBackLink class="absolute left-0 -translate-y-1/2 top-1/2" />
        <h1 class="px-6 text-xl font-medium md:text-4xl">
=======
    <section class="max-w-[800px] mx-auto">
      <header class="flex mb-6">
        <GoBackLink />
        <h1 class="justify-center text-xl font-medium md:text-4xl">
>>>>>>> main
          Så spelar du Nördle
        </h1>
      </header>

      <div class="space-y-6">
        <p>
          I Nördle ska du försöka lista ut ett tech-relaterat ord på fem bokstäver, svenskt eller engelskt. Du har sex försök på dig.
        </p>

        <p>
          Till din hjälp får du ledtrådar i form av färger:
        </p>
<<<<<<< HEAD

        <div alt="Exempel på färger och vad de betyder" class="bg-[#F3EFD5] dark:bg-knowit-white dark:bg-opacity-[0.08] rounded-2xl flex flex-col p-4 md:pt-6 min-[1600px]:pt-12 grow max-w-[366px]">
          <div class="grid grid-cols-5 gap-2 grow content-stretch">
            <Letter class="h-14 notused" state="notused" letter="D" />
            <Letter class="h-14 wrongplace" state="wrongplace" letter="A" />
            <Letter class="h-14 notused" state="notused" letter="T" />
            <Letter class="h-14 correct" state="correct" letter="O" />
            <Letter class="h-14 wrongplace" state="wrongplace" letter="R" />
            <div class="w-1/2 h-8 col-start-2 border-e-2 border-knowit-black dark:border-knowit-white border-opacity-40" />
            <div class="w-1/2 h-8 col-start-4 border-e-2 border-knowit-black dark:border-knowit-white border-opacity-40" />
          </div>
          <div class="grid grid-cols-2 gap-2 grow content-stretch">
            <p class="text-sm text-center mt-2 ms-[20%]">
              <span class="block">Rätt bokstav</span>
              <span class="block">på <span class="underline">fel</span> plats</span>
            </p>
            <p class="text-sm text-center mt-2 me-[20%]">
              <span class="block">Rätt bokstav</span>
              <span class="block">på <span class="underline">rätt</span> plats</span>
            </p>
          </div>
=======
        <div>
          <img class="hidden dark:block" src="/assets/images/Instruktion-Dark.png" alt="Exempel på färger och vad de betyder">
        </div>
        <div>
          <img class="block dark:hidden" src="/assets/images/Instruktion-Light.png" alt="Exempel på färger och vad de betyder">
>>>>>>> main
        </div>

        <p>
          <strong>Blå bokstav:</strong> Rätt bokstav och på rätt plats.<br>
          <strong>Orange:</strong> Rätt bokstav men på fel plats.<br>
          <strong>Grå:</strong> Bokstaven finns inte med i ordet.
        </p>

        <p>Notera att en bokstav kan finnas med flera gånger i ordet.</p>

        <p>Lycka till!</p>
      </div>
    </section>
    <NavBarBottom />
  </article>
</template>
