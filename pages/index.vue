<script setup>
import { onMounted } from 'vue'

const letters = ref([{ letter: 'Q', class: '' }, { letter: 'W', class: '' }, { letter: 'E', class: '' }, { letter: 'R', class: '' }, { letter: 'T', class: '' }, { letter: 'Y', class: '' }, { letter: 'U', class: '' }, { letter: 'I', class: '' }, { letter: 'O', class: '' }, { letter: 'P', class: '' }, { letter: 'Å', class: '' }, { letter: 'A', class: '' }, { letter: 'S', class: '' }, { letter: 'D', class: '' }, { letter: 'F', class: '' }, { letter: 'G', class: '' }, { letter: 'H', class: '' }, { letter: 'J', class: '' }, { letter: 'K', class: '' }, { letter: 'L', class: '' }, { letter: 'Ö', class: '' }, { letter: 'Ä', class: '' }, { letter: 'Z', class: '' }, { letter: 'X', class: '' }, { letter: 'C', class: '' }, { letter: 'V', class: '' }, { letter: 'B', class: '' }, { letter: 'N', class: '' }, { letter: 'M', class: '' }])
const guesses = ref([{ letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }])
const wordArray = ref(['A', 'S', 'C', 'I', 'I'])
const finished = ref(false)
const popup = ref(false)
const finishedClass = ref('')
const dnoneClass = ref('hidden')
let guessIndex = -1
let currentGuess = 0

function keyClick(index) {
  const key = letters.value[index].letter
  addLetter(key)
}

function addLetter(key) {
  if (currentGuess < 5) {
    guessIndex++
    currentGuess++
    guesses.value[guessIndex].letter = key
    guesses.value[guessIndex].class = 'filledin'
  }
}

function undo() {
  if (currentGuess > 0) {
    guesses.value[guessIndex].letter = ''
    guesses.value[guessIndex].class = ''
    guessIndex--
    currentGuess--
  }
}

function submit() {
  if (currentGuess === 5) {
    currentGuess = 0
    let localGuess = -1
    let correctCounter = 0
    for (let i = guessIndex - 4; i <= guessIndex; i++) {
      localGuess++
      const arrayIndex = wordArray.value.indexOf(guesses.value[i].letter)
      const lettersIndex = letters.value.map(e => e.letter).indexOf(guesses.value[i].letter)
      if (arrayIndex > -1) {
        if (guesses.value[i].letter === wordArray.value[localGuess]) {
          correctCounter++
          setStatus(i, lettersIndex, 'correct')
        }
        else {
          setStatus(i, lettersIndex, 'wrongplace')
        }
      }
      else {
        setStatus(i, lettersIndex, 'notused')
      }
    }
    if (correctCounter === 5 || guessIndex === 29) {
      finished.value = true
      popup.value = true
      finishedClass.value = 'invisible'
      dnoneClass.value = ''
    }
  }
}

function setStatus(i, lettersIndex, status) {
  guesses.value[i].class = status
  letters.value[lettersIndex].class = status
}

function onPress(e) {
  if (finished.value === false) {
    if ((e.which >= 65 && e.which <= 90) || e.which === 221 || e.which === 222 || e.which === 192) {
      addLetter(e.key.toUpperCase())
    }
    else if (e.which === 8) {
      undo()
    }
    else if (e.which === 13) {
      submit()
    }
  }
}

function close() {
  popup.value = false
}

onMounted(() => {
  document.addEventListener('keyup', onPress)
})
</script>

<template>
  <div>
    <div class="flex flex-col h-screen">
      <Board :guesses="guesses" />
      <div class="flex flex-row w-full max-w-[500px] md:max-w-[800px] xl:max-w-[500px] min-[1600px]:max-w-[800px] mx-auto px-4" :class="dnoneClass">
        <IconsStar class="greenstar" />
        <p>Nästa spel om: 13:34 tim</p>
      </div>
      <Keyboard :letters="letters" :finished="finished" :class="finishedClass" @submit="submit" @undo="undo" @key-click="keyClick" />
      <div class="flex flex-col w-screen max-w-3xl px-4 py-11 mx-auto md:py-12 min-[1600px]:py-16">
        <NavBarBottom />
      </div>
    </div>
    <transition name="popup">
      <Popup v-if="popup" @close="close" />
    </transition>
  </div>
</template>
