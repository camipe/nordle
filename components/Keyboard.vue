<script setup>
defineProps(['letters', 'finished'])
defineEmits(['keyClick', 'undo', 'submit'])
</script>

<template>
  <div class="flex flex-col w-screen px-4 grow max-w-[500px] md:max-w-[800px] xl:max-w-[500px] min-[1600px]:max-w-[800px] mx-auto">
    <div class="grid grid-cols-11 gap-2 grow content-stretch">
      <LetterKey v-for="(letter, index) in letters" :key="letter.letter" :class="letter.class" :letter="letter.letter" :disabled="!!finished" @click="$emit('keyClick', index)" />
      <button class="col-span-2 border-2 rounded-md justify-items-center key hover:filledin" :disabled="!!finished" aria-label="Ångra bokstav" @click="$emit('undo')">
        <IconsUndo />
      </button>
      <button class="col-span-2 col-end-12 border-2 rounded-md key hover:filledin" :disabled="!!finished" aria-label="Skicka in gissning" @click="$emit('submit')">
        OK
      </button>
    </div>
  </div>
</template>
