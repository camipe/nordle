<script setup>
const letters = [{ letter: 'Q', class: '' }, { letter: 'W', class: '' }, { letter: 'E', class: '' }, { letter: 'R', class: 'wrongplace' }, { letter: 'T', class: '' }, { letter: 'Y', class: '' }, { letter: 'U', class: 'notused' }, { letter: 'I', class: '' }, { letter: 'O', class: '' }, { letter: 'P', class: '' }, { letter: 'Å', class: '' }, { letter: 'A', class: '' }, { letter: 'S', class: 'correct' }, { letter: 'D', class: '' }, { letter: 'F', class: '' }, { letter: 'G', class: '' }, { letter: 'H', class: '' }, { letter: 'J', class: '' }, { letter: 'K', class: '' }, { letter: 'L', class: '' }, { letter: 'Ö', class: '' }, { letter: 'Ä', class: '' }, { letter: 'Z', class: '' }, { letter: 'X', class: '' }, { letter: 'C', class: 'correct' }, { letter: 'V', class: '' }, { letter: 'B', class: '' }, { letter: 'N', class: '' }, { letter: 'M', class: 'notused' }]
</script>

<template>
  <div class="flex flex-col w-screen px-4 grow">
    <div class="grid grid-cols-11 gap-2 grow content-stretch">
      <LetterKey v-for="(letter) in letters" :key="letter.letter" class="[&:nth-child(23)]:col-start-3" :class="letter.class" :letter="letter.letter" />
      <button class="col-span-2 border-2 rounded-md justify-items-center border-knowit-black !border-opacity-20 dark:border-knowit-white dark:!border-opacity-20" aria-label="Ångra bokstav" @click="undo">
        <IconsUndo />
      </button>
      <button class="col-span-2 col-end-12 border-2 rounded-md border-knowit-black !border-opacity-20 dark:border-knowit-white dark:!border-opacity-20" aria-label="Skicka in gissning" @click="submit">
        OK
      </button>
    </div>
  </div>
</template>
