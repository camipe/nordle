<template>
  <button @click="router.go(-1)" class="go-back-button" aria-label="Gå till föregående sida">
    <span>
      <IconsBack />
    </span>
  </button>
</template>

<script setup>

const router = useRouter();

</script>

<style scoped>
.go-back-button {
  cursor: pointer;
  margin-right: 1.5rem;
}
</style>
