<script setup>
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 dark:text-knowit-white max-w-[800px] mx-auto">
    <nav aria-label="Huvudnavigering">
      <ul class="flex justify-around py-2">
        <!-- Start Link ( change to  NuxtLink later ) -->
        <li>
          <a href="#start" aria-label="Gå till Start">
            <IconsHome />
            <span class="text-sm">Start</span>
          </a>
        </li>

        <!-- Topplistan Link ( change to  NuxtLink later ) -->
        <li>
          <a href="#topplistan" aria-label="Gå till Topplistan">
            <IconsTrophy />
            <span class="text-sm">Topplistan</span>
          </a>
        </li>

        <!-- Instruktioner Link ( change to  NuxtLink later ) -->
        <li>
          <a href="#instruktioner" aria-label="Gå till Instruktioner">
            <IconsQuestion />
            <span class="text-sm">Instruktioner</span>
          </a>
        </li>

        <!-- Min Profil Link -->
        <li>
          <NuxtLink to="hantering-av-personuppgifter" aria-label="Gå till Min Profil">
            <IconsUser />
            <span class="text-sm">Min profil</span>
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
