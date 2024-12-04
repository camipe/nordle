<script setup>
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
  if (user.value) {
    navigateTo('/game')
  }
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen"
    aria-labelledby="nordle-title" role="main"
  >
    <div class="mb-12">
      <IconsNordleLogoType aria-hidden="true" />
      <h1 id="nordle-title" class="text-4xl text-center uppercase">
        Nördle
      </h1>
      <p class="mt-2 dark:text-purple-100 text-blue-80">
        Your daily nörd game by Knowit
      </p>
    </div>

    <div class="flex flex-col items-start mt-12 space-y-4 text-lg">
      <button class="login-button" aria-label="Logga in med Google">
        <span class="mr-5" aria-hidden="true">
          <IconsGoogleLogoType />
        </span>
        Logga in med Google
      </button>
      <button class="login-button" aria-label="Logga in med Apple">
        <span class="mr-5" aria-hidden="true">
          <IconsAppleLogoType />
        </span>
        Logga in med Apple
      </button>
      <button class="login-button" aria-label="Logga in med GitHub" @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })">
        <span class="mr-5" aria-hidden="true">
          <IconsGithubLogoType />
        </span>
        Logga in med GitHub
      </button>
    </div>
    <IconsKnowitLogotype class="mt-12" aria-hidden="true" />
  </div>
</template>

<style scoped>
.login-button {
  @apply flex items-center px-4 py-2.5 border-2 w-72 dark:border-knowit-white rounded-3xl dark:border-opacity-20 border-knowit-black border-opacity-20;
}
</style>
