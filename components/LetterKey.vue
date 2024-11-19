<script setup>
defineProps(['letter'])
</script>

<template>
  <button class="text-xl border-2 rounded-md border-knowit-black !border-opacity-20 dark:border-knowit-white dark:!border-opacity-20" :aria-label="`Välj bokstaven ${letter}`">
    {{ letter }}
  </button>
</template>
