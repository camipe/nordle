<template>
  <div class="flex flex-col items-center justify-center h-screen font-medium bg-knowit-white dark:bg-knowit-black dark:text-knowit-white">
    <div class="mb-12">
      <IconsNordleLogoType />
      <h1 class="text-4xl text-center uppercase">Nördle</h1>
      <p class="dark:text-purple-100 text-blue-80">Your daily nörd game by Knowit</p>
    </div>

    <div class="flex flex-col items-start mt-12 space-y-4">
      <button @click="login" class="login-button">
        <span class="mr-5">
          <IconsGoogleLogoType />
        </span>
        Logga in med Google
      </button>
      <button @click="login" class="login-button">
        <span class="mr-5">
          <IconsAppleLogoType />
        </span>
        Logga in med Apple
      </button>
      <button @click="login" class="login-button">
        <span class="mr-5">
          <IconsGithubLogoType />
        </span>
        Logga in med GitHub
      </button>
    </div>
    <IconsKnowitLogotype class="mt-12" />
  </div>
</template>

<style scoped>
.login-button {
  @apply flex items-center px-4 py-2.5 border-2 w-72  dark:border-knowit-white rounded-3xl dark:border-opacity-20 border-knowit-black border-opacity-20;
}

</style>