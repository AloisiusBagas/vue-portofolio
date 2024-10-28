<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typewriter from '@/components/Typewriter.vue'
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})
</script>

<template>
  <main>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex justify-content-center align-items-center">
      <div
        class="container d-flex flex-column justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <h2 style="color: #ffbd39">Hello! I am</h2>
        <h1 class="text-center">Aloisius Bagas Wicaksono</h1>
        <div class="d-flex flex-row align-items-center">
          <h2 class="me-2 mb-0">I'm</h2>

          <Typewriter
            :text="[
              'a software engineer',
              'a Web Developer',
              'a Mobile Developer',
              'a Graphic Designer'
            ]"
            :speed="100"
            :delayBetweenTexts="1500"
          />
        </div>

        <a href="#about" class="btn-scroll scrollto mt-5" title="Scroll Down">
          <i class="bx bx-chevrons-down"></i>
        </a>
      </div>
    </section>
    <!-- End Hero -->

    <!-- ======= About Me ======= -->
    <section id="about" class="about py-5 px-4">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Column with Image -->
          <div class="d-flex col-lg-6 mb-4 mb-lg-0 justify-content-center" data-aos="fade-left">
            <img
              src="../assets/images/FotoWisuda.jpg"
              alt="My Bio"
              class="img-fluid rounded shadow"
              style="max-width: 75%"
            />
          </div>

          <!-- Right Column with Text Content -->
          <div class="col-lg-6" data-aos="fade-left">
            <h2>My Bio</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>

            <!-- Skills with Progress Bars -->
            <div class="my-3">
              <!-- First row -->
              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="mb-1">Design</div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 84%"
                      aria-valuenow="84"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      84%
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="mb-1">HTML5</div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 90%"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
              <!-- Second row -->
              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="mb-1">Design</div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 84%"
                      aria-valuenow="84"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      84%
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="mb-1">HTML5</div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 90%"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="d-flex gap-3 justify-content-center mt-3">
              <a href="#hire" class="btn btn-success">Hire Me</a>
              <a href="#download-cv" class="btn btn-secondary">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- End About Me -->
  </main>
</template>
