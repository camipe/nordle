<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

defineEmits(['close'])

// See tsParticles documentation for all available options
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: '#fff',
    },
  },
  particles: {
    color: {
      value: '#000',
    },
    links: {
      color: '#000',
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
}
function onLoad(container: Container) {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>

<template>
  <div class="bg-pink-60 dark:bg-blue-80 text-blue-80 dark:text-knowit-white h-[90%] w-full max-w-2xl rounded-t-3xl fixed mx-auto left-0 right-0 bottom-0 overflow-hidden shadow-[0_-50vh_0_500vw_rgba(0,0,0,0.3)]">
    <NuxtParticles
      id="tsparticles"
      :options="options"
      @load="onLoad"
    />

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
