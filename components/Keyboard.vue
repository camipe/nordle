<script setup>
const letters = [{ letter: 'Q', class: 'bg-blue-80 !border-blue-80' }, { letter: 'W', class: '' }, { letter: 'E', class: 'bg-pink-100 !border-pink-100 text-knowit-black' }, { letter: 'R', class: '' }, { letter: 'T', class: 'bg-gray !border-gray' }, { letter: 'Y', class: 'bg-gray !border-gray' }, { letter: 'U', class: '' }, { letter: 'I', class: '' }, { letter: 'O', class: '' }, { letter: 'P', class: '' }, { letter: 'Å', class: '' }, { letter: 'A', class: '' }, { letter: 'S', class: '' }, { letter: 'D', class: '' }, { letter: 'F', class: '' }, { letter: 'G', class: '' }, { letter: 'H', class: '' }, { letter: 'J', class: '' }, { letter: 'K', class: '' }, { letter: 'L', class: '' }, { letter: 'Ö', class: '' }, { letter: 'Ä', class: '' }, { letter: 'Z', class: '' }, { letter: 'X', class: '' }, { letter: 'C', class: '' }, { letter: 'V', class: '' }, { letter: 'B', class: '' }, { letter: 'N', class: '' }, { letter: 'M', class: '' }]
</script>

<template>
  <div class="flex flex-col w-screen px-4 grow">
    <div class="grid grid-cols-11 gap-2 grow content-stretch">
      <template v-for="(letter) in letters">
        <template v-if="letter.letter === 'Z'">
          <LetterKey :key="letter.letter" class="col-start-3" :class="letter.class" :letter="letter.letter" />
        </template>
        <template v-else>
          <LetterKey :key="letter.letter" :class="letter.class" :letter="letter.letter" />
        </template>
      </template>
      <button class="col-span-2 border-2 rounded-md justify-items-center border-knowit-white-22">
        <IconsUndo />
      </button>
      <button class="col-span-2 col-end-12 border-2 rounded-md border-knowit-white-22">
        OK
      </button>
    </div>
  </div>
</template>
