<script setup>
defineEmits(['close'])
</script>

<template>
  <div class="bg-pink-60 dark:bg-blue-80 text-blue-80 dark:text-knowit-white h-[90%] w-full max-w-2xl rounded-t-3xl fixed mx-auto left-0 right-0 bottom-0 overflow-hidden shadow-[0_-50vh_0_500vw_rgba(0,0,0,0.3)]">
    <button class="float-right mt-8 mr-3.5" @click="$emit('close')">
      <IconsStar class="w-10 h-10 text-4xl text-green" />
    </button>

    <!-- Dumstrut -->
    <!--
    <div class="text-center">
      <IconsPolygon class="text-knowit-white dark:text-blue-60 m-auto mt-[30%]" />
      <p class="mt-12 text-2xl text-blue-80 dark:text-pink-60">
        * Dumstrut
      </p>
    </div>
    -->

    <CurveUp />
  </div>
</template>
