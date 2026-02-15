<template>
  <section id="hero" class="d-flex justify-content-center align-items-center">
    <div class="container d-flex flex-column justify-content-center align-items-center hero-container"
      data-aos="fade-up">
      <h2 class="headerText">Hello! I am</h2>
      <h1 class="text-center">Aloisius Bagas Wicaksono</h1>
      <div class="d-flex flex-row align-items-center">
        <h2 class="me-2 mb-0">I'm</h2>

        <Typewriter :text="[
          'a software engineer',
          'a Web Developer',
          'a Mobile Developer',
          'a Graphic Designer'
        ]" :speed="100" :delayBetweenTexts="1500" />
      </div>

      <a href="#aboutme" class="btn-scroll scrollto mt-5" title="Scroll Down">
        <i class="bx bx-chevrons-down"></i>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import Typewriter from './Typewriter.vue'
</script>

<style scoped>
.headerText {
  color: var(--primary-orange-color) !important;
}

#hero {
  width: 100%;
  height: 100vh;
  background: url('/images/hero-bg.jpg') no-repeat center center/cover;
  position: relative;
  background-attachment: fixed;
}

#hero:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  /* Apply the overlay */
  z-index: 0;
  /* Make sure the overlay stays behind the content */
}

.dark #hero:before {
  background: rgba(0, 0, 0, 0.6);
}

#hero .hero-container {
  position: relative;
  /* Ensure text and other content stay on top */
  z-index: 1;
  /* Content should be on top of the overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  width: 100%;
  height: 100%;
  text-align: center;
}

/* Hero Section Heading Styles */
#hero h1 {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 3rem;
  /* Use rem for better scaling */
  font-weight: bold;
  color: #fff;
  margin: 0;
  padding: 0;
}

/* Hero Subheading Styles */
#hero h2 {
  font-family: 'Nunito Sans', sans-serif;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
}

/* Typewriter Container Styles */
.typewriter-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.typewriter-container h2 {
  margin-right: 10px;
}

.typewriter-container span {
  font-size: 1.5rem;
  font-weight: bold;
  /* Optional: add some emphasis to the typewriter text */
}

/* Scroll Button Styling */
#hero .btn-scroll {
  transition: 0.4s;
  color: rgba(255, 255, 255, 0.6);
  animation: up-down 1s ease-in-out infinite alternate-reverse both;
  font-size: 2rem;
  /* Ensure button size is consistent */
  margin-top: 30px;
  /* Add some spacing from content */
}

#hero .btn-scroll i {
  font-size: 3rem;
  /* Adjust size of the icon */
}

/* Hover State for Scroll Button */
#hero .btn-scroll:hover {
  color: var(--primary-orange-color);
}

/* Keyframe for Button Animation */
@keyframes up-down {
  0% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(-5px);
  }
}

ss .text-link:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
