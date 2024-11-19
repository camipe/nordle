<script setup>
import { onMounted } from 'vue'

const letters = ref([{ letter: 'Q', class: '' }, { letter: 'W', class: '' }, { letter: 'E', class: '' }, { letter: 'R', class: '' }, { letter: 'T', class: '' }, { letter: 'Y', class: '' }, { letter: 'U', class: '' }, { letter: 'I', class: '' }, { letter: 'O', class: '' }, { letter: 'P', class: '' }, { letter: 'Å', class: '' }, { letter: 'A', class: '' }, { letter: 'S', class: '' }, { letter: 'D', class: '' }, { letter: 'F', class: '' }, { letter: 'G', class: '' }, { letter: 'H', class: '' }, { letter: 'J', class: '' }, { letter: 'K', class: '' }, { letter: 'L', class: '' }, { letter: 'Ö', class: '' }, { letter: 'Ä', class: '' }, { letter: 'Z', class: '' }, { letter: 'X', class: '' }, { letter: 'C', class: '' }, { letter: 'V', class: '' }, { letter: 'B', class: '' }, { letter: 'N', class: '' }, { letter: 'M', class: '' }])
const guesses = ref([{ letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }, { letter: '', class: '' }])
const wordArray = ref(['A', 'S', 'C', 'I', 'I'])
const finished = ref(false)
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

onMounted(() => {
  document.addEventListener('keyup', onPress)
})
</script>

<template>
  <div class="flex flex-col h-screen">
    <Board style="min-height: 60%;" :guesses="guesses" />
    <div class="flex flex-row px-4" :class="dnoneClass">
      <IconsStar />
      <p>Nästa spel om: 13:34 tim</p>
    </div>
    <Keyboard :letters="letters" :finished="finished" :class="finishedClass" @submit="submit" @undo="undo" @key-click="keyClick" />
    <div class="flex flex-col w-screen px-4 pt-4 pb-8">
      <div class="grid grid-cols-4 gap-2 text-center grow content-stretch">
        <button>
          <IconsHome />
          Start
        </button>
        <button>
          <IconsTrophy />
          Topplistan
        </button>
        <button>
          <IconsQuestion />
          Instruktioner
        </button>
        <button>
          <IconsUser />
          Min profil
        </button>
      </div>
    </div>
  </div>
</template>
