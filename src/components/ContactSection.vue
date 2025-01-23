<template>
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up">

            <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-5">

                    <div class="col-lg-4">
                        <div class="info-item d-flex align-items-center">
                            <i class="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="col-lg-4">
                        <div class="info-item d-flex align-items-center">
                            <i class="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="col-lg-4">
                        <div class="info-item d-flex align-items-center">
                            <i class="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->

                </div>
            </div>

            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                data-aos-delay="300">
                <div class="row gy-4">

                    <div class="col-md-6">
                        <input type="text" name="name" class="form-control" placeholder="Your Name" v-model=inputName
                            required>
                    </div>

                    <div class="col-md-6 ">
                        <input type="email" class="form-control" name="email" placeholder="Your Email"
                            v-model="inputEmail" required>
                    </div>

                    <div class="col-md-12">
                        <input type="text" class="form-control" name="subject" placeholder="Subject"
                            v-model="inputSubject" required>
                    </div>

                    <div class="col-md-12">
                        <textarea class="form-control" name="message" rows="6" placeholder="Message"
                            v-model="inputMessage" required></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit" @click="handleSubmit">Send Message</button>
                    </div>

                </div>
            </form>

        </div>

    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const inputName = ref()
const inputEmail = ref()
const inputSubject = ref()
const inputMessage = ref()

const handleSubmit = () => {
}

</script>

<style scoped>
.contact .info-wrap {
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
}

.contact .info-item i {
    font-size: 20px;
    color: #0078ff;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    border: 1px solid color-mix(in srgb, #0078ff, transparent 40%);
    margin-right: 15px;
}

.contact .info-item h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 2px 0;
}

.contact .info-item p {
    padding: 0;
    margin-bottom: 0;
    font-size: 14px;
}

.contact .info-item:hover i {
    background: #0078ff;
    color: #ffffff;
}

.contact .php-email-form {
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
}

@media (max-width: 575px) {
    .contact .php-email-form {
        padding: 20px;
    }
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
    font-size: 14px;
    padding: 10px 15px;
    box-shadow: none;
    border-radius: 0;
    color: #4e4e4e;
    background-color: color-mix(in srgb, #ffffff, transparent 50%);
    border-color: color-mix(in srgb, #4e4e4e, transparent 80%);
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
    border-color: #0078ff;
}

.contact .php-email-form input[type=text]::placeholder,
.contact .php-email-form input[type=email]::placeholder,
.contact .php-email-form textarea::placeholder {
    color: color-mix(in srgb, #4e4e4e, transparent 70%);
}

.contact .php-email-form button[type=submit] {
    color: #ffffff;
    background: #0078ff;
    border: 0;
    padding: 10px 30px;
    transition: 0.4s;
    border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
    background: color-mix(in srgb, #0078ff, transparent 20%);
}
</style>