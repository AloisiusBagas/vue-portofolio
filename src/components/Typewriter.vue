<template>
  <div class="typewriter-container">
    <div class="typewriter">
      <span>{{ displayedText }}</span><span v-if="showCursor" class="cursor">|</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true
    },
    speed: {
      type: Number,
      default: 100
    },
    delayBetweenTexts: {
      type: Number,
      default: 1000
    },
    cursor: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      displayedText: '',
      showCursor: true,
      typingInterval: null,
      textIndex: 0
    }
  },
  mounted() {
    this.startTyping()
    if (this.cursor) {
      this.blinkCursor()
    }
  },
  methods: {
    startTyping() {
      this.typeWriterEffect()
    },
    typeWriterEffect() {
      let charIndex = 0
      const currentText = this.text[this.textIndex] // Ambil teks dari array berdasarkan indeks

      this.typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          this.displayedText += currentText.charAt(charIndex)
          charIndex++
        } else {
          clearInterval(this.typingInterval)
          this.moveToNextText() // Pindah ke teks berikutnya
        }
      }, this.speed)
    },
    moveToNextText() {
      setTimeout(() => {
        this.textIndex = (this.textIndex + 1) % this.text.length // Siklus ulang jika sudah di akhir
        this.displayedText = '' // Reset teks yang ditampilkan
        this.typeWriterEffect() // Mulai efek mesin ketik untuk teks berikutnya
      }, this.delayBetweenTexts)
    },
    blinkCursor() {
      setInterval(() => {
        this.showCursor = !this.showCursor
      }, 500) // Kecepatan berkedip kursor
    }
  },
  beforeUnmount() {
    clearInterval(this.typingInterval)
  }
}
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
