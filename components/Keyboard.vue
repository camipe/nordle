<script setup>
defineProps(['letters', 'finished'])
defineEmits(['keyClick', 'undo', 'submit'])
</script>

<template>
  <div class="flex flex-col w-screen px-4 grow">
    <div class="grid grid-cols-11 gap-2 grow content-stretch">
      <LetterKey v-for="(letter, index) in letters" :key="letter.letter" class="[&:nth-child(23)]:col-start-3" :class="letter.class" :letter="letter.letter" :disabled="!!finished" @click="$emit('keyClick', index)" />
      <button class="col-span-2 border-2 rounded-md justify-items-center border-knowit-black !border-opacity-20 dark:border-knowit-white dark:!border-opacity-20" :disabled="!!finished" aria-label="Ångra bokstav" @click="$emit('undo')">
        <IconsUndo />
      </button>
      <button class="col-span-2 col-end-12 border-2 rounded-md border-knowit-black !border-opacity-20 dark:border-knowit-white dark:!border-opacity-20" :disabled="!!finished" aria-label="Skicka in gissning" @click="$emit('submit')">
        OK
      </button>
    </div>
  </div>
</template>
