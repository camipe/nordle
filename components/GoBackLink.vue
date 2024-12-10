<script setup>
const router = useRouter()
</script>

<template>
  <button class="mr-6 cursor-pointer" aria-label="Gå till föregående sida" @click="router.go(-1)">
    <span>
      <IconsBack />
    </span>
  </button>
</template>
