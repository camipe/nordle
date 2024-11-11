<template>
  <div class="flex flex-col w-screen p-4 grow">
    <div class="grid grid-cols-5 gap-2 grow content-stretch">
      <!-- Code for blue letter -->
      <Letter class="correct" letter="S" />
      <!-- Code for pink letter -->
      <Letter class="wrongplace" letter="R" />
      <!-- Code for gray letter -->
      <Letter class="notused" letter="u" />
      <!-- Code for marked square -->
      <Letter class="active" letter="S" />
      <!-- Change this from 26 to 30 when the examples above are deleted -->
      <Letter v-for="n in 26" :key="n" letter="&nbsp;" />
    </div>
  </div>
</template>

<style scoped>
.correct {
  @apply bg-blue-80 !border-blue-80 text-knowit-white;
}
.wrongplace {
  @apply bg-pink-100 !border-pink-100 text-knowit-black;
}
.notused {
  @apply bg-gray !border-gray text-knowit-white;
}
.active {
  @apply !border-knowit-black !border-opacity-40 dark:!border-knowit-white dark:!border-opacity-40;
}
</style>
