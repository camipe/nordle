<script setup>
const props = defineProps(['letter', 'state'])
const ariaMessage = computed(() => {
  if (props.state === 'correct') {
    return 'som finns i ordet och som ligger på rätt plats'
  }
  else if (props.state === 'wrongplace') {
    return 'som finns i ordet men som ligger på fel plats'
  }
  else if (props.state === 'notused') {
    return 'som inte finns i ordet'
  }
  else if (props.state === 'filledin') {
    return 'men ordet har inte skickats in som gissning än'
  }
  return props.state
})
</script>

<template>
  <div class="flex flex-col items-center justify-center text-4xl min-[1600px]:text-5xl font-medium uppercase border-2 rounded-xl key">
    <span v-if="letter === ''">&nbsp;</span>
    <span v-else :aria-label="`Innehåller bokstaven ${letter} ${ariaMessage}`">{{ letter }}</span>
  </div>
</template>
