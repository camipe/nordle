<template>
  <button 
    @click="goBack" 
    class="go-back-button" 
    aria-label="Gå till föregående sida">
    <span>
      <IconsBack />
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.go-back-button {
  cursor: pointer;
  margin-right: 1.5rem;
}

</style>
