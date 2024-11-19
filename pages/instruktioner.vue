<template>
  <article class="flex flex-col h-screen px-6 pt-12 bg-knowit-white dark:bg-knowit-black dark:text-knowit-white">
    <section class="max-w-[800px] mx-auto">
      <header class="flex mb-6">
        <GoBackLink />
        <h1 class="justify-center text-2xl font-semibold md:text-4xl">
          Så spelar du Nördle
        </h1>
      </header>

      <div class="space-y-6">
        <p>
          I Nördle ska du försöka lista ut ett tech-relaterat ord på fem bokstäver, svenskt eller engelsk. Du har sex försök på dig.
        </p>

        <p>
          Till din hjälp får du ledtrådar i form av färger:
        </p>
        <div>
          <img class="hidden dark:block" src="/assets/images/Instruktion-Dark.png" alt="Exempel på färger och vad de betyder">
        </div>
        <div>
          <img class="block dark:hidden" src="/assets/images/Instruktion-Light.png" alt="Exempel på färger och vad de betyder">
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
  </article>
  <NavBarBottom />
</template>
