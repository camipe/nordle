<template>
  <article class="flex flex-col h-screen px-3 pt-12">
    <section class="max-w-full mx-auto w-[800px]">
      <header class="relative flex justify-center mb-6">
        <GoBackLink class="absolute left-0 -translate-y-1/2 top-1/2 hover:linkhover" />
        <h1 class="px-6 text-xl font-medium md:text-4xl">
          Kontoinställningar
        </h1>
      </header>

      <ul class="text-base mt-9">
        <li class="linkli">
          <button class="flex w-full py-2 hover:linkhover">
            <IconsSun class="text-blue-80 dark:text-purple-100" />
            <span class="text-left grow ps-3">Ljust läge</span>
            <IconsCaretRight class="mr-1" />
          </button>
        </li>
        <li class="linkli">
          <button class="flex w-full py-2 hover:linkhover">
            <IconsShield class="text-blue-80 dark:text-purple-100" />
            <span class="text-left grow ps-3">Användarvillkor</span>
            <IconsCaretRight class="mr-1" />
          </button>
        </li>
        <li class="linkli">
          <button class="flex w-full py-2 hover:linkhover">
            <IconsUserCheck class="text-blue-80 dark:text-purple-100" />
            <span class="text-left grow ps-3">Hantering av personuppgifter</span>
            <IconsCaretRight class="mr-1" />
          </button>
        </li>
        <li class="linkli">
          <button class="flex w-full py-2 hover:linkhover">
            <IconsLogout class="text-blue-80 dark:text-purple-100" />
            <span class="text-left grow ps-3">Logga ut</span>
          </button>
        </li>
        <li class="linkli">
          <button class="flex w-full py-2 hover:linkhover text-red">
            <IconsTrash />
            <span class="text-left grow ps-3">Radera konto</span>
          </button>
        </li>
      </ul>
    </section>
    <NavBarBottom />
  </article>
</template>
