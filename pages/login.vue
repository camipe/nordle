<template>
  <div class="flex flex-col items-center justify-center h-screen bg-knowit-black text-knowit-white">
    <div class="mb-12">
      <h1 class="text-2xl text-center">Nördle</h1>
      <p class="text-purple-100">Your daily nörd game by Knowit</p>
    </div>

    <div class="flex flex-col items-start mt-12 space-y-4">
      <button @click="login" class="w-64 px-4 py-4 border rounded-xl">Logga in med Google</button>
      <button @click="login" class="w-64 px-4 py-4 border rounded-xl">Logga in med Apple</button>
      <button @click="login" class="w-64 px-4 py-4 border rounded-xl">Logga in med GitHub</button>
    </div>
  </div>
</template>
