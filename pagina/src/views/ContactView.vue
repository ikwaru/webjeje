<template>
<!-- Contact Section -->
<section id="contact" class="contact section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h1>Contact</h1>
  <p>Additional information about us. Thank you for visiting our website.</p>
</div><!-- End Section Title -->

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-6">

      <div class="row gy-4">
        <div class="col-md-6">
          <div class="info-item" data-aos="fade" data-aos-delay="200">
            <i class="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>Universitat de Lleida</p>
            <p>Plaça de Víctor Siurana, 1, 25003 Lleida</p>
          </div>
        </div><!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item" data-aos="fade" data-aos-delay="300">
            <i class="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+600 000 000</p>
            <p>+610 000 000</p>
          </div>
        </div><!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item" data-aos="fade" data-aos-delay="400">
            <i class="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>viscalaudl@example.com</p>
            <p>dijonadienunca@example.com</p>
          </div>
        </div><!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item" data-aos="fade" data-aos-delay="500">
            <i class="bi bi-clock"></i>
            <h3>Credits</h3>
            <p>Gemma Garrido Calaforra</p>
            <p>Anaïs Garrofé Novelles</p>
          </div>
        </div><!-- End Info Item -->

      </div>

    </div>

    <div class="col-lg-6">
      <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div class="row gy-4">

          <div class="col-md-6">
            <input type="text" name="name" class="form-control" placeholder="Your Name" required>
          </div>

          <div class="col-md-6 ">
            <input type="email" class="form-control" name="email" placeholder="Your Email" required>
          </div>

          <div class="col-12">
            <input type="text" class="form-control" name="subject" placeholder="Subject" required>
          </div>

          <div class="col-12">
            <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
          </div>
          <div class="espaciado"></div>
          <div class="col-12 text-center">
            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div><!-- End Contact Form -->

  </div>

</div>
<PageFooter class="Footer"></PageFooter>
</section><!-- /Contact Section -->
</template>

<script>
import PageFooter from '@/components/PageFooter.vue'
export default {
  components: {
    PageFooter,
  
  },
}
</script>
<style>

#contact h1 {
    font-size: 32px;
    font-weight: 700;
    position: relative;
    padding-top: 8%
}

#contact h1:before {
    margin: 0 15px 10px 0;
}

#contact h1:after {
    margin: 0 0 10px 15px;
}

#contact h1:before,
#contact h1:after {
    content: "";
    width: 50px;
    height: 2px;
    background: var(--accent-color);
    display: inline-block;
}
.contact.section {
  margin: 0;
  padding: 0;
}

#contact p {
    padding: 0;
    text-align: center;
}

/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/
.contact .info-item {
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
}

.contact .info-item i {
  font-size: 38px;
  line-height: 0;
  color: var(--accent-color);
}

.contact .info-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 10px 0;
}

.contact .info-item p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.contact .php-email-form {
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
  height: 100%;
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  color: var(--default-color);
  background-color: color-mix(in srgb, var(--background-color), transparent 50%);
  border-color: color-mix(in srgb, var(--default-color), transparent 80%);
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--accent-color);
}

.contact .php-email-form input[type=text]::placeholder,
.contact .php-email-form input[type=email]::placeholder,
.contact .php-email-form textarea::placeholder {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.contact .php-email-form button[type=submit] {
  background: var(--accent-color);
  color: var(--contrast-color);
  border: 0;
  padding: 10px 30px;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .php-email-form button[type=submit]:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}
.espaciado {
  padding: 3%;
}
.gy-4 {padding-bottom: 3%;}
</style>