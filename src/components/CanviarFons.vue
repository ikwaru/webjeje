<template>
  <div :style="backgroundStyle" class="background-changer">
    <!-- Slot renders content passed from the parent -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgrounds: [
        'url(' + require('../assets/fons.jpeg') + ')',
        'url(' + require('../assets/fons2.jpeg') + ')',
        'url(' + require('../assets/rutkowski.webp') + ')'
      ],
      currentBackgroundIndex: 0
    }
  },
  computed: {
    backgroundStyle () {
      return {
        backgroundImage: this.backgrounds[this.currentBackgroundIndex],
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh', // Ensures at least full screen height
        maxHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'background 1s linear' // Smooth transition
      }
    }
  },
  mounted () {
    this.startBackgroundChange()
  },
  methods: {
    startBackgroundChange () {
      setInterval(() => {
        this.currentBackgroundIndex =
          (this.currentBackgroundIndex + 1) % this.backgrounds.length
      }, 3500) // Change every 3.5 seconds
    }
  }
}
</script>

<style>
.background-changer {
  position: relative; /* Change to relative to adapt to content */
  z-index: -1; /* Push the background behind the content */
}
</style>
