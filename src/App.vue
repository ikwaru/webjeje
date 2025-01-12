<template>
  <body :class="bodyClass">
    <div id="app">
      <!-- Apply dynamic classes for the header -->
      <header
        id="header"
        :class="['header', isIndexPage ? 'index-header' : 'normal-header', 'd-flex align-items-center fixed-top']"
      >
        <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
            <img src="@/assets/logo.png" alt="Default Logo" class="logodnd default-logo" />
            <img src="@/assets/inverted-logo.png" alt="Inverted Logo" class="logodnd inverted-logo" />
          </a>
          <nav id="navmenu" class="navmenu">
            <ul>
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/about">About</router-link></li>
  <li class="dropdown">
    <a href="#" class="toggle-dropdown">
      Wiki <i class="bi bi-chevron-down"></i>
    </a>
    <ul>
      <li><router-link to="/classes">Classes</router-link></li>
      <li><router-link to="/races">Races</router-link></li>
    </ul>
  </li>
  <li><router-link to="/builder">Builder</router-link></li>
  <li><router-link to="/contact">Contact</router-link></li>
</ul>

            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a class="btn-getstarted" href="index.html#about">Get Started</a>
        </div>
      </header>
      <router-view />
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false, // Reactive property to track scroll state
    };
  },

  computed: {
    isIndexPage() {
      // Check if the current route is the index page
      return this.$route.path === "/";
    },
    bodyClass() {
      return this.isIndexPage ? "index-page" : "normal-page";
    },
  },

  mounted() {
    // Handle scroll state and navigation toggles
    this.debouncedScroll = this.debounce(this.toggleScrolled, 100);
    window.addEventListener("scroll", this.debouncedScroll);
    this.toggleScrolled(); // Initial check on load

    // Mobile navigation toggle
    const mobileNavToggleBtn = this.$el.querySelector(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", this.mobileNavToogle);
    }
    
  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

    // Hide mobile nav on same-page/hash links
    this.$el.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.body.classList.contains("mobile-nav-active")) {
          this.mobileNavToogle();
        }
      });
    });

    // Toggle mobile nav dropdowns
    this.$el.querySelectorAll(".navmenu .toggle-dropdown").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parentLi = e.currentTarget.parentNode; // Use the current target's parent
        parentLi.classList.toggle("active");
        const dropdown = parentLi.querySelector(".dropdown");
        if (dropdown) {
          dropdown.classList.toggle("dropdown-active");
        }
        e.stopPropagation();
      });
    });
  },

  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener("scroll", this.debouncedScroll);
    const mobileNavToggleBtn = this.$el.querySelector(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.removeEventListener("click", this.mobileNavToogle);
    }
  },

  methods: {
    toggleScrolled() {
      // Track scroll state and update classes
      this.scrolled = window.scrollY > 100;
      const body = document.body;
      if (this.scrolled) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    },

    mobileNavToogle() {
      // Toggle mobile navigation menu
      const body = document.body;
      const mobileNavToggleBtn = this.$el.querySelector(".mobile-nav-toggle");
      body.classList.toggle("mobile-nav-active");
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      }
    },

    debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },
  },
};
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  font-size: 13px;
}

/*--------------------------------------------------------------
# Global Header
--------------------------------------------------------------*/
.header {
  color: #ffffff00;
  background-color: var(--background-color);
  padding: 20px 0;
  transition: all 0.5s ease;
  z-index: 997;
}

/* Index Page Header
------------------------------*/

/* Index Page Header */
.index-header {
  --background-color: rgba(255, 255, 255, 0); /* Transparent */
  --heading-color: #ffffff;
  --nav-color: rgba(255, 255, 255, 0.5);
  --nav-hover-color: #ffffff;
}

/* Normal Page Header */
.normal-header {
  --background-color: #ffffff; /* White */
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
  --heading-color: #ffffff80;
  --nav-color: #0702026f;
  --nav-hover-color: #e84545;
}

/* Index Page Header on Scroll
------------------------------*/
.scrolled .index-header {
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
  --background-color: #ffffff !important;
  --heading-color: #32353a !important;
  --nav-color: #3a3939 !important;
  --nav-hover-color: #8d0007 !important;
}

.scrolled .normal-header {
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
  --background-color: #ffffff !important;
  --heading-color: #32353a !important;
  --nav-color: #3a3939 !important;
  --nav-hover-color: #8d0007 !important;
}

.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 36px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: var(--heading-color);
}

.header .logo span {
  color: var(--accent-color);
  font-size: 24px;
  font-weight: 600;
  padding-left: 3px;
}

.header .btn-getstarted,
.header .btn-getstarted:focus {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-size: 14px;
  padding: 8px 26px;
  margin: 0;
  border-radius: 4px;
  transition: 0.3s;
}

.header .btn-getstarted:hover,
.header .btn-getstarted:focus:hover {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
}

@media (max-width: 1200px) {
  .header .logo {
    order: 1;
  }

  .header .logo img {
    max-width: 50%;
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

/* Default logo visible, inverted logo hidden by default */
.default-logo {
  display: block;
}

.inverted-logo {
  display: none;
}

/* When scrolled, invert visibility */
.scrolled .default-logo {
  display: none;
}

.scrolled .inverted-logo {
  display: block;
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

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Navmenu - Desktop */
@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-color);
    padding: 18px 15px;
    font-size: 16px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu li:last-child a {
    padding-right: 0;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-hover-color);
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Navmenu - Mobile */
/* Navmenu - Mobile */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    overflow-y: auto;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 9998;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
  }

  .navmenu ul ul {
    position: static;
    background-color: rgba(33, 37, 41, 0.1);
    padding: 10px 0;
    margin: 0;
    border: 1px solid rgba(33, 37, 41, 0.2);
    box-shadow: none;
  }

  .navmenu .dropdown ul {
    display: none;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    opacity: 0;
    visibility: hidden;
  }

  .navmenu .dropdown.active ul {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: color 0.3s, background-color 0.3s;
  }

  .navmenu a i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease;
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu a:hover {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    z-index: 9999;
  }

  .mobile-nav-active .navmenu > ul {
    display: block;
    opacity: 1;
    visibility: visible;
  }
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e84545;
}

:root {
  --default-font: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Montserrat", sans-serif;
  --nav-font: "Poppins", sans-serif;
}

/* Global Colors - The following color variables are used throughout the website. Updating them here will change the color scheme of the entire website */
:root {
  --background-color: #ffffff;
  /* Background color for the entire website, including individual sections */
  --default-color: #212529;
  /* Default color used for the majority of the text content across the entire website */
  --heading-color: #32353a;
  /* Color for headings, subheadings and title throughout the website */
  --accent-color: #e84545;
  /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --surface-color: #ffffff;
  /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
  --contrast-color: #ffffff;
  /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */
}

/* Nav Menu Colors - The following color variables are used specifically for the navigation menu. They are separate from the global colors to allow for more customization options */
:root {
  --nav-color: #3a3939;
  /* The default color of the main navmenu links */
  --nav-hover-color: #e84545;
  /* Applied to main navmenu links when they are hovered over or active */
  --nav-mobile-background-color: #ffffff;
  /* Used as the background color for mobile navigation menu */
  --nav-dropdown-background-color: #ffffff;
  /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
  --nav-dropdown-color: #3a3939;
  /* Used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-hover-color: #e84545;
  /* Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
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

/* Navmenu - Desktop */
@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-color);
    padding: 18px 15px;
    font-size: 16px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu li:last-child a {
    padding-right: 0;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-hover-color);
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}


/* Navmenu - Mobile */
@media (max-width: 1199px) {

  section,
.section {
  scroll-margin-top: 64px;
}

  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    box-shadow: none;
    transition: all 0.5s ease-in-out;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0.3s;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}
</style>