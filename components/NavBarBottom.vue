<script setup>
</script>

<template>
  <div class="fixed bottom-5 min-[1600px]:bottom-6 left-0 right-0 dark:text-knowit-white max-w-[800px] mx-auto">
    <nav aria-label="Huvudnavigering">
      <ul class="flex justify-around p-2 text-xs min-[1600px]:text-lg">
        <!-- Start Link ( change to  NuxtLink later ) -->
        <li>
          <a href="#start" class="gap-1" aria-label="Gå till Start">
            <IconsHome />
            <span>Start</span>
          </a>
        </li>

        <!-- Topplistan Link ( change to  NuxtLink later ) -->
        <li>
          <a href="#topplistan" class="gap-1" aria-label="Gå till Topplistan">
            <IconsTrophy />
            <span>Topplistan</span>
          </a>
        </li>

        <!-- Instruktioner Link ( change to  NuxtLink later ) -->
        <li>
          <a href="#instruktioner" class="gap-1" aria-label="Gå till Instruktioner">
            <IconsQuestion />
            <span class="font-thin">Instruktioner</span>
          </a>
        </li>

        <!-- Min Profil Link -->
        <li>
          <NuxtLink to="hantering-av-personuppgifter" class="gap-1" aria-label="Gå till Min Profil">
            <IconsUser />
            <span>Min profil</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a {
  @apply flex flex-col items-center text-center hover:text-blue-80 dark:hover:text-purple-100;
}
</style>
