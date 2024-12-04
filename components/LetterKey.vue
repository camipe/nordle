<script setup>
defineProps(['letter'])
</script>

<template>
  <button class="text-xl min-[1600px]:text-3xl border-2 rounded-md key hover:filledin [&:nth-child(23)]:col-start-3 font-medium" :aria-label="`Välj bokstaven ${letter}`">
    {{ letter }}
  </button>
</template>
