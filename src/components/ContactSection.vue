<template>
  <section id="contact" class="contact section py-5 px-4">
    <!-- Section Title -->
    <div class="container section-title d-flex justify-content-center mb-2" data-aos="fade-up">
      <h2>Contact</h2>
    </div>

    <div class="container" data-aos="fade-up">
      <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
        <div class="row gy-5">
          <div v-for="(item, index) in contactInfo" :key="index" class="col-lg-4">
            <div class="info-item" @click="item.action">
              <i :class="item.icon"></i>
              <div>
                <h3>{{ item.label }}</h3>
                <p>{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        class="php-email-form"
        @submit.prevent="handleSubmit"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="row gy-4">
          <div class="col-md-6">
            <input
              v-model="inputName"
              type="text"
              class="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              v-model="inputEmail"
              type="email"
              class="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="col-md-12">
            <input
              v-model="inputSubject"
              type="text"
              class="form-control"
              placeholder="Subject"
              required
            />
          </div>
          <div class="col-md-12">
            <textarea
              v-model="inputMessage"
              class="form-control"
              rows="6"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="col-md-12 text-center">
            <button type="submit">
              <template v-if="loadingSubmit">
                <div class="spinner-border text-light" role="status"></div>
              </template>
              <template v-else> Send Message </template>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useContactStore } from '../stores/contactStore'
import { EmailModel } from '../models/emailModel'
import Swal from 'sweetalert2'
import { title } from 'process'

const contactStore = useContactStore()

// Form fields
const inputName = ref('')
const inputEmail = ref('')
const inputSubject = ref('')
const inputMessage = ref('')
const loadingSubmit = computed(() => contactStore.loading)
// Contact Info
const contactInfo = [
  {
    label: 'Whatsapp',
    value: '+62 821 1060 9902',
    icon: 'fa-brands fa-whatsapp',
    action: () =>
      window.open(`https://wa.me/6282110609902?text=Hello, saya ingin bertanya...`, '_blank')
  },
  {
    label: 'Phone Number',
    value: '+62 821 1060 9902',
    icon: 'fa-solid fa-phone',
    action: () => (window.location.href = 'tel:+6282110609902')
  },
  {
    label: 'Email',
    value: 'waloisiusbagas@gmail.com',
    icon: 'fa-solid fa-envelope',
    action: () => (window.location.href = 'mailto:waloisiusbagas@gmail.com')
  }
]

// Submit Form
const handleSubmit = async () => {
  const emailData: EmailModel = {
    name: inputName.value,
    email: inputEmail.value,
    subject: inputSubject.value,
    message: inputMessage.value
  }
  const isSuccess = await contactStore.submitForm(emailData)

  if (isSuccess) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent.',
      timer: 3500,
      showConfirmButton: false
    })
    inputName.value = ''
    inputEmail.value = ''
    inputSubject.value = ''
    inputMessage.value = ''
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Something went wrong. Please try again later.',
      timer: 3500,
      showConfirmButton: false
    })
  }
}
</script>

<style scoped>
.contact .info-wrap,
.contact .php-email-form {
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
}

.contact .info-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.contact .info-item i {
  font-size: 20px;
  color: #0078ff;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid rgba(0, 120, 255, 0.6);
  margin-right: 15px;
  transition: 0.3s;
}

.contact .info-item i:hover {
  background: #0078ff;
  color: #fff;
}

.contact .info-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 2px;
}

.contact .info-item p {
  font-size: 14px;
  margin: 0;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  font-size: 14px;
  padding: 10px 15px;
  border: 1px solid rgba(78, 78, 78, 0.2);
  background: rgba(255, 255, 255, 0.5);
  color: #4e4e4e;
  transition: border-color 0.3s;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #0078ff;
}

.contact .php-email-form button {
  color: #fff;
  background: #0078ff;
  border: none;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.4s;
}

.contact .php-email-form button:hover {
  background: rgba(0, 120, 255, 0.8);
}

@media (max-width: 575px) {
  .contact .php-email-form {
    padding: 20px;
  }
}
</style>
