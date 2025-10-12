<template>
  <div class="typewriter-container">
    <div class="typewriter">
      <span>{{ displayedText }}</span><span v-if="showCursor" class="cursor">|</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'TypewriterDisplay'
})

const props = withDefaults(
  defineProps<{
    text: string[]
    speed?: number
    delayBetweenTexts?: number
    cursor?: boolean
  }>(),
  {
    speed: 100,
    delayBetweenTexts: 1000,
    cursor: true
  }
)

const displayedText = ref('')
const showCursor = ref(true)
const textIndex = ref(0)

let typingInterval: ReturnType<typeof window.setInterval> | undefined
let nextTextTimeout: ReturnType<typeof window.setTimeout> | undefined
let cursorInterval: ReturnType<typeof window.setInterval> | undefined

const clearTimers = () => {
  if (typingInterval !== undefined) {
    window.clearInterval(typingInterval)
    typingInterval = undefined
  }

  if (nextTextTimeout !== undefined) {
    window.clearTimeout(nextTextTimeout)
    nextTextTimeout = undefined
  }

  if (cursorInterval !== undefined) {
    window.clearInterval(cursorInterval)
    cursorInterval = undefined
  }
}

const scheduleNextText = () => {
  if (props.text.length === 0) {
    return
  }

  nextTextTimeout = window.setTimeout(() => {
    textIndex.value = (textIndex.value + 1) % props.text.length
    displayedText.value = ''
    typeWriterEffect()
  }, props.delayBetweenTexts)
}

const typeWriterEffect = () => {
  const texts = props.text

  if (texts.length === 0) {
    displayedText.value = ''
    return
  }

  const currentText = texts[textIndex.value] ?? ''
  let charIndex = 0

  typingInterval = window.setInterval(() => {
    if (charIndex < currentText.length) {
      displayedText.value += currentText.charAt(charIndex)
      charIndex += 1
      return
    }

    if (typingInterval !== undefined) {
      window.clearInterval(typingInterval)
      typingInterval = undefined
    }

    scheduleNextText()
  }, props.speed)
}

const startTyping = () => {
  displayedText.value = ''
  textIndex.value = 0
  typeWriterEffect()
}

const startCursorBlink = () => {
  cursorInterval = window.setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
}

onMounted(() => {
  startTyping()

  if (props.cursor) {
    startCursorBlink()
  } else {
    showCursor.value = false
  }
})

watch(
  () => props.cursor,
  (enabled) => {
    if (enabled) {
      showCursor.value = true

      if (cursorInterval === undefined) {
        startCursorBlink()
      }

      return
    }

    showCursor.value = false

    if (cursorInterval !== undefined) {
      window.clearInterval(cursorInterval)
      cursorInterval = undefined
    }
  }
)

onBeforeUnmount(() => {
  clearTimers()
})

watch(
  () => props.text,
  () => {
    clearTimers()
    displayedText.value = ''
    textIndex.value = 0
    typeWriterEffect()
  },
  { deep: true }
)
</script>

<style scoped>
/* Flexbox container untuk menyelaraskan h2 dan Typewriter */
.typewriter-container {
  display: flex;
  align-items: start;
  /* Menyelaraskan h2 dan Typewriter secara vertikal */
  justify-content: center;
  /* Menjaga elemen tetap berada di tengah secara horizontal */
}

.typewriter {
  font-family: monospace;
  white-space: pre;
  color: var(--primary-orange-color);
  font-size: 1.5rem;
  font-weight: bold;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
  color: var(--primary-orange-color);
  font-size: 1.5rem;
  font-weight: bold;
}

@keyframes blink {

  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
