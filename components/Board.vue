<script setup>
defineProps(['guesses'])
</script>

<template>
  <div class="flex flex-col w-screen p-4 md:pt-6 min-[1600px]:pt-12 grow max-w-[500px] md:max-w-[800px] xl:max-w-[500px] min-[1600px]:max-w-[800px] mx-auto min-h-[60%]">
    <div class="grid grid-cols-5 gap-2 grow content-stretch">
      <Letter v-for="guess in guesses" :key="guess.index" :class="guess.class" :state="guess.class" :letter="guess.letter" />
    </div>
  </div>
</template>
