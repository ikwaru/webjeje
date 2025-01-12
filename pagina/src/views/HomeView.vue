<template>
  <CanviarFons>
    <div class="home-container">
      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">
        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <h2 data-aos="fade-up" data-aos-delay="100">Dungeons & Dragons</h2>
              <p data-aos="fade-up" data-aos-delay="200">Character Builder</p>
            </div>
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="300">
              <div class="sign-up-form">
                <input type="text" v-model="query" id="search-input" placeholder="Search a category" />
                <button @click="handleSearch" id="search-button">Search</button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="explicacio" class="about section light-background">
        <div class="wiki-container" data-aos="fade-up" data-aos-delay="100">
          <div class="row align-items-xl-center gy-5">

            <div class="col-xl-5 content">
              <h2>Dungeons and Dragons</h2>
              <p>
                <strong>Dungeons & Dragons</strong> (D&D) is a tabletop role-playing game set in a fantasy world.
                Participants create
                fictional characters who engage in a story guided by one player known as the Dungeon Master (DM). The DM
                establishes the setting, describes the environment, plays non-player characters, and enforces the rules
                of the game.

                The primary goal is for players, through their characters, to collaborate in overcoming challenges,
                solving conflicts, and advancing a story that unfolds through both improvisation and dice rolls to
                determine the success of actions. This game combines narrative, strategic, and role-playing elements,
                offering a unique and creative experience.
              </p>
              <a href="#" class="read-more"><span> Discover more!</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <!-- New Section -->
      <section id="about" class="about section light-background">
        <div class="wiki-container" data-aos="fade-up" data-aos-delay="100">
          <div class="row align-items-xl-center gy-5">

            <div class="col-xl-5 content">
              <h3>Be <strong>whoever</strong> you want</h3><br><br>
              <h2>Races</h2>
              <p>
                Who do you want to be? Your race shapes your abilities, culture, and place in the world.
                From the noble halls of the elves to the shadowed paths of the tieflings, the possibilities are endless!
                <strong>Who will you choose to embody?</strong>
              </p>
              <router-link to="/races" class="read-more">Discover more!</router-link><span></span>
            </div>

            <div class="col-xl-7">
              <div class="row gy-4 icon-boxes">
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon-box">
                    <a href="#"><img src="../assets/icons/human.png" alt="Icon Image"
                        class="img-fluid rounded-circle"></a>
                    <h3>Humans</h3>
                    <p>Witty, versatile and ambitious, humans are adaptable, with a strong will to achieve.</p>
                  </div>
                </div> <!-- End Icon Box -->

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div class="icon-box">
                    <a href="#"><img src="../assets/icons/halfelf.png" alt="Icon Image"
                        class="img-fluid rounded-circle"></a>
                    <h3>Half-elves</h3>
                    <p>Charismatic, adaptable— and a bridge between human and elven cultures.</p>
                  </div>
                </div> <!-- End Icon Box -->

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div class="icon-box">
                    <a href="#"><img src="../assets/icons/gnome.png" alt="Icon Image"
                        class="img-fluid rounded-circle"></a>
                    <h3>Gnomes</h3>
                    <p>Small and energetic beings known for their creativity and love for discovery.</p>
                  </div>
                </div> <!-- End Icon Box -->

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div class="icon-box">
                    <a href="#"><img src="../assets/icons/dragonborn.png" alt="Icon Image"
                        class="img-fluid rounded-circle"></a>
                    <h3>Dragonborn</h3>
                    <p>Proud and powerful, they wield a deep connection to their dragon ancestry</p>
                  </div>
                </div> <!-- End Icon Box -->
              </div>
            </div>
          </div>
        </div>
      </section><!-- /About Section -->

      <!-- Services Section -->
      <section id="services" class="services section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Classes</h2>
          <p>It's not about who you are, but about who you will become.</p>
        </div><!-- End Section Title -->

        <div class="container">

          <div class="row gy-4">

            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0"><img src="../assets/icons/fighter.svg"></div>
                <div>
                  <h4 class="title"><a href="services-details.html" class="stretched-link">Fighter</a></h4>
                  <p class="description">A seasoned combatant, relying on skill, strength, and strategy to overcome foes in the heat of battle.</p>
                </div>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0"><img src="../assets/icons/rogue.svg"></div>
                <div>
                  <h4 class="title"><a href="services-details.html" class="stretched-link">Rogue</a></h4>
                  <p class="description">A nimble trickster, skilled in stealth, deception, and precision, striking from the shadows to outsmart and outmaneuver foes</p>
                </div>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0"><img src="../assets/icons/cleric.svg"></div>
                <div>
                  <h4 class="title"><a href="services-details.html" class="stretched-link">Cleric</a></h4>
                  <p class="description">A divine servant with the power to channel their god to heal the wounded, protect the faithful, and smite evil with holy wrath.</p>
                </div>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0"><img src="../assets/icons/bard.svg"></div>
                <div>
                  <h4 class="title"><a href="services-details.html" class="stretched-link">Bard</a></h4>
                  <p class="description">Master of music and words, weaving magic through melody and inspiring allies with tales of heroism and wit</p>
                </div>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0"><img src="../assets/icons/wizard.svg"></div>
                <div>
                  <h4 class="title"><a href="services-details.html" class="stretched-link">Wizard</a></h4>
                  <p class="description">A scholar of arcane secrets, who wields spells with precision and unravels the mysteries of the universe through knowledge and power.

                  </p>
                </div>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0"><img src="../assets/icons/paladin.svg"></div>
                <div>
                  <h4 class="title"><a href="services-details.html" class="stretched-link">Paladin</a></h4>
                  <p class="description">A warrior of divine justice, bound by oath to uphold the light and smite evil with unwavering faith.</p>
                </div>
              </div>
            </div><!-- End Service Item -->
            <router-link to="/classes" class="read-more2">Discover more</router-link><span></span>
          </div>

        </div>

      </section><!-- /Services Section -->
      <section class="Footer"><PageFooter></PageFooter></section>
    </div>
  </CanviarFons>

</template>

<script>
import CanviarFons from "@/components/CanviarFons.vue";
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: "HomeView",
  components: {
    CanviarFons,
    PageFooter,
  },
  data() {
    return {
      query: "", // Bind this to the input for searching
    };
  },
  methods: {
    handleSearch() {
      const categories = {
        barbarian: { path: "/classes", hash: "#barbarian-page" },
        bard: { path: "/classes", hash: "#bard-page" },
        wizard: { path: "/classes", hash: "#wizard-page" },
        fighter: { path: "/classes", hash: "#fighter-page" },
        cleric: { path: "/classes", hash: "#cleric-page" },
        warlock: { path: "/classes", hash: "#warlock-page" },
        rogue: { path: "/classes", hash: "#rogue-page" },
        monk: { path: "/classes", hash: "#monk-page" },
        sorcerer: { path: "/classes", hash: "#sorcerer-page" },
        ranger: { path: "/classes", hash: "#ranger-page" },
        paladin: { path: "/classes", hash: "#paladin-page" },
        druid: { path: "/classes", hash: "#druid-page" },

        builder: { path: "/builder", hash: "#classesjej" },
        races: { path: "/races", hash: "#races" },
      };

      const query = this.query.toLowerCase();
      if (categories[query]) {
        const { path, hash } = categories[query];
        this.$router.push({ path, hash }); // Use Vue Router to navigate
      } else {
        alert("Category not found!");
      }
    },
  },
};
</script>


<style>
section {
  overflow-x: hidden;
  /* Each section takes up the full viewport height */
}

:root {
  --default-font: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Montserrat", sans-serif;
  --nav-font: "Poppins", sans-serif;
}

:root {
  --background-color: #ffffff;
  /* Background color for the entire website, including individual sections */
  --default-color: #212529;
  /* Default color used for the majority of the text content across the entire website */
  --heading-color: #32353a;
  /* Color for headings, subheadings and title throughout the website */
  --accent-color: #8d0007;
  /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --surface-color: #ffffff;
  /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
  --contrast-color: #ffffff;
  /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */
}

/* Color Presets - These classes override global colors when applied to any section or element, providing reuse of the sam color scheme. */

.light-background {
  --background-color: #f9f9f9;
  --surface-color: #ffffff;
}

.dark-background {
  --background-color: #060606;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #252525;
  --contrast-color: #ffffff;
}

.error-message,
.sent-message,
.loading {
  color: #ffffff;
}

/* Smooth scroll */
:root {
  scroll-behavior: smooth;
}

/*--------------------------------------------------------------
# General Styling & Shared Classes
--------------------------------------------------------------*/
body {
  color: var(--default-color);
  background-color: var(--background-color);
  font-family: var(--default-font);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, var(--accent-color), transparent 25%);
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}

/*--------------------------------------------------------------
# Global Sections
--------------------------------------------------------------*/
section,
.section {
  padding: 5% 0;
  scroll-margin-top: 98px;
  overflow: clip;
}

@media (max-width: 1199px) {

  section,
  .section {
    scroll-margin-top: 64px;
  }
}

#explicacio {
  padding-top: 7%;
  padding-bottom: 2%;
}

/*--------------------------------------------------------------
# Global Section Titles
--------------------------------------------------------------*/
.section-title {
  text-align: center;
  padding-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  position: relative;
}

.section-title h2:before,
.section-title h2:after {
  content: "";
  width: 50px;
  height: 2px;
  background: var(--accent-color);
  display: inline-block;
}

.section-title h2:before {
  margin: 0 15px 10px 0;
}

.section-title h2:after {
  margin: 0 0 10px 15px;
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h2 {
  margin: 0;
  font-size: 44px;
  font-weight: 700;
}

.hero p {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  margin: 5px 0 0 0;
  font-size: 20px;
}

.hero .sign-up-form {
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--default-color) 5%, white 90%);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  display: flex;
}

.hero .sign-up-form input[type=text] {
  background-color: transparent;
  border: 0;
  padding: 4px 10px;
  width: 100%;
}

.hero .sign-up-form input[type=text]:focus-visible {
  outline: none;
}

.hero .sign-up-form #search-button {
  border: 0;
  box-shadow: none;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  padding: 8px 20px 10px 20px;
  border-radius: 7px;
  color: var(--contrast-color);
  transition: 0.3s;
}

.hero .sign-up-form #search-button:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }
}

/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/

.about {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.about .content h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 20px;
  background: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
  border-radius: 7px;
  display: inline-block;
}

.about .content h2 {
  font-weight: 700;
}

.about .content h2:before {
  margin: 0 15px 10px 0;
}

.about .content h2:after {
  margin: 0 0 10px 15px;
}

.about .content h2:before,
.about .content h2:after {
  content: "";
  width: 30px;
  height: 2px;
  background: var(--accent-color);
  display: inline-block;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content p {
  margin-bottom: 0;
  padding: 1rem 4rem 2rem 4rem;
}

.about .content .read-more {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 24px;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.about .content .read-more i {
  font-size: 18px;
  margin-left: 5px;
  line-height: 0;
  transition: 0.3s;
}

.about .content .read-more:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
  padding-right: 19px;
}

.about .content .read-more:hover i {
  margin-left: 10px;
}

.about .icon-box {
  background-color: var(--surface-color);
  padding: 10%;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease-out 0s;
}

.about .icon-box i {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 0;
  transition: all 0.4s ease-out 0s;
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.about .icon-box h3 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
}

.about .icon-box p {
  margin-bottom: 0;
}

.about .icon-box:hover i {
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.about .icon-boxes .col-md-6:nth-child(1) .icon-box,
.about .icon-boxes .col-md-6:nth-child(2) .icon-box {
  margin-top: 10%;
  margin-bottom: 5%;
  max-width: 95%;
}

.about .icon-boxes .col-md-6:nth-child(3) .icon-box,
.about .icon-boxes .col-md-6:nth-child(4) .icon-box {
  margin-bottom: 5%;
  max-width: 95%;
}

.about .img-fluid {
  max-width: 50%;
  padding-bottom: 5px
}

.about .img-fluid:hover {
  filter: brightness(120%);
}

@media (max-width: 768px) {

  .about .icon-boxes .col-md-6:nth-child(2) .icon-box,
  .about .icon-boxes .col-md-6:nth-child(4) .icon-box {
    margin-top: 0;
  }
}

/*--------------------------------------------------------------
# Services Section
--------------------------------------------------------------*/

.read-more2 {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 24px;
  margin-top: 5%;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.services .service-item {
  position: relative;
  padding-top: 40px;
}

.services .service-item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: color-mix(in srgb, var(--default-color), transparent 90%);
}

.services .service-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-color);
  border-right: 5px solid var(--background-color);
}

.services .service-item .icon {
  width: 48px;
  height: 48px;
  position: relative;
  margin-right: 50px;
  line-height: 0;
}

.services .service-item .icon i {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
}

.services .service-item .icon:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  background: color-mix(in srgb, var(--accent-color), transparent 70%);
  border-radius: 50px;
  z-index: 1;
  bottom: -15px;
  right: -15px;
  transition: 0.3s;
}

.services .service-item .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .service-item .title a {
  color: var(--heading-color);
}

.services .service-item .title a:hover {
  color: var(--accent-color);
}

.services .service-item .description {
  line-height: 24px;
  font-size: 14px;
}
.section:last-child,
section:last-child {
  padding-bottom: 0;
}

@media (max-width: 1200px) {
  .header .logo {
    order: 1;
  }

  .header .btn-getstarted {
    order: 2;
    margin: 0 15px 0 0;
    padding: 6px 20px;
  }

  .header .navmenu {
    order: 3;
  }
}


</style>
