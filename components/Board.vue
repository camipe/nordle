<script setup>
defineProps(['guesses'])
</script>

<template>
  <div class="flex flex-col w-screen p-4 grow">
    <div class="grid grid-cols-5 gap-2 grow content-stretch">
      <Letter v-for="guess in guesses" :key="guess.index" :class="guess.class" :state="guess.class" :letter="guess.letter" />
    </div>
  </div>
</template>
