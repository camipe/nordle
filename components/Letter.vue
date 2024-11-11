<script setup>
defineProps(['letter'])
</script>

<template>
  <div class="flex flex-col items-center justify-center border-2 rounded-xl border-knowit-black !border-opacity-20 dark:border-knowit-white">
    <span class="text-4xl font-medium uppercase">{{ letter }}</span>
  </div>
</template>
