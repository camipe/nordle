<script setup>
const guesses = [{ letter: 'S', class: 'correct' }, { letter: 'C', class: 'correct' }, { letter: 'R', class: 'wrongplace' }, { letter: 'U', class: 'notused' }, { letter: 'M', class: 'notused' }, { letter: 'S', class: 'filledin' }, { letter: 'C', class: 'filledin' }, { letter: 'A', class: 'filledin' }, { letter: 'R', class: 'filledin' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }]
</script>

<template>
  <div class="flex flex-col w-screen p-4 grow">
    <div class="grid grid-cols-5 gap-2 grow content-stretch">
      <Letter v-for="guess in guesses" :key="guess.index" :class="guess.class" :state="guess.class" :letter="guess.letter" />
    </div>
  </div>
</template>
