<script setup>
const router = useRouter()
</script>

<template>
  <button class="go-back-button" aria-label="Gå till föregående sida" @click="router.go(-1)">
    <span>
      <IconsBack />
    </span>
  </button>
</template>

<style scoped>
.go-back-button {
  cursor: pointer;
  margin-right: 1.5rem;
}
</style>
