<template>
  <article class="flex flex-col h-screen px-6 pt-12 bg-knowit-white dark:bg-knowit-black dark:text-knowit-white">
    <section class="max-w-[800px] mx-auto">
      <header class="flex mb-6">
        <GoBackLink />
        <h1 class="text-2xl font-semibold md:text-4xl">
          Hantering av personuppgifter
        </h1>
      </header>

      <div class="space-y-6">
        <p>Vi värnar om din personliga integritet och tar frågor om dataskydd på största allvar.</p>

        <p>
          I vår integritetspolicy beskriver vi den behandling av personuppgifter som sker inom ramen för vår verksamhet, ändamålen med behandlingen,
          vilket lagstöd vi har för behandlingen, vilka vi kan komma att dela dina personuppgifter med och dina rättigheter i förhållande till dina
          personuppgifter. För att du ska förstå hur dina personuppgifter behandlas rekommenderar vi att du läser vår Integritetspolicy noggrant.
        </p>

        <a href="#" class="underline dark:text-purple-100 text-blue-80">
          Ladda hem och läs vår Integritetspolicy
        </a>

        <p>
          För frågor kring vår Integritetspolicy och för att göra gällande de rättigheter du har beträffande behandlingen av dina personuppgifter är
          du alltid välkommen att kontakta oss på
        </p>

        <a href="mailto:dataprotection@knowitgroup.com" class="underline dark:text-purple-100 text-blue-80" aria-label="Contact us via email">
          dataprotection@knowitgroup.com
        </a>
      </div>
    </section>
  </article>

  <NavBarBottom />
</template>
