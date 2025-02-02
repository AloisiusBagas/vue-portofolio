<template>
  <section id="about" class="about py-5 px-4">
    <div class="container">
      <div class="row align-items-start">
        <!-- Image Section -->
        <div class="d-flex col-lg-6 mb-4 mb-lg-0 justify-content-center" data-aos="fade-left">
          <img
            src="/images/FotoWisuda.jpg"
            alt="My Bio"
            class="img-fluid rounded shadow"
            style="max-width: 70%"
          />
        </div>

        <!-- Bio and Skill Section -->
        <div class="col-lg-6" data-aos="fade-left">
          <h2>My Bio</h2>
          <p>{{ bio }}</p>
          <p>{{ experience }}</p>
          <div class="my-3">
            <div class="row">
              <div v-for="(skill, index) in skills" :key="index" class="col-md-6 mb-2">
                <div class="mb-1">{{ skill.name }}</div>
                <div class="progress mb-3">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: skill.level + '%' }"
                    :aria-valuenow="skill.level"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {{ skill.level }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Hobbies</h2>
          <div class="d-flex flex-row gap-5 justify-content-start mt-3">
            <div v-for="(hobby, index) in hobbies" :key="index">
              <div class="d-flex flex-column align-items-center bd-highlight mb-3">
                <div class="icon-wrapper">
                  <i :class="['icon', hobby.icon]"></i>
                  <!-- Added 'icon' class here -->
                </div>
                <span>{{ hobby.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bio = ref(
  'Self-motivated programmer with a strong passion for developing web and mobile applications, experienced in developing, testing, and maintaining enterprise software applications, as well as designing print and social media content.'
)

const experience = ref(
  'As a computer science graduate from Binus University, I possess over 4+ years of professional experience in the IT industry, having worked as a full-stack developer, application developer, and frontend developer.'
)

const skills = ref([
  { name: 'Design', level: 84 },
  { name: 'HTML5', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS3', level: 88 },
  { name: 'Vue.js', level: 80 },
  { name: 'Node.js', level: 75 }
])

const hobbies = ref([
  { name: 'Code', icon: 'fa-solid fa-code' },
  { name: 'Sport', icon: 'fa-solid fa-dumbbell' },
  { name: 'Design', icon: 'fa-solid fa-pen-nib' },
  { name: 'Photography', icon: 'fa-solid fa-camera' }
])
</script>

<style scoped>
.icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid orange;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.icon {
  font-size: 20px; /* Change the font size to adjust the icon size */
  transition: filter 0.3s ease;
  color: orange; /* Set the initial color to orange */
}

.icon-wrapper:hover {
  background-color: orange;
}

.icon-wrapper:hover .icon {
  color: white;
}
</style>
