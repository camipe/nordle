<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

defineEmits(['close'])

const options = {
  fullScreen: {
    enable: true,
    zIndex: 100,
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 0,
    },
    color: {
      value: ['#2C16B4', '#372BC5', '#5C44ED', '#9795FF', '#CFCEFF', '#FCB27C', '#FFD6B8', '#55D440'],
    },
    shape: {
      type: 'circle',
    },
    opacity: 1,
    size: {
      value: 8,
    },
    links: {
      enable: false,
    },
    life: {
      duration: {
        sync: true,
        value: 20,
      },
      count: 1,
    },
    move: {
      angle: {
        value: 45,
        offset: 0,
      },
      drift: 0,
      enable: true,
      gravity: {
        enable: true,
        acceleration: 9.81,
      },
      speed: 45,
      decay: 0.1,
      direction: -90,
      random: true,
      straight: false,
      outModes: {
        default: 'none',
        bottom: 'destroy',
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
  detectRetina: true,
  motion: {
    disable: true,
  },
  emitters: {
    name: 'confetti',
    startCount: 80,
    position: {
      x: 50,
      y: 35,
    },
    size: {
      width: 20,
      height: 20,
    },
    rate: {
      delay: 0,
      quantity: 0,
    },
    life: {
      duration: 0.1,
      count: 1,
    },
  },
}
function onLoad(container: Container) {
  container.play()
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
