<template>
  <div id="app">
    <div class="title-container">
      <h1>Real purpose of the web</h1>
      <div class="background-image"></div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p>Nuestra página está inspirada en el mundo de Dungeons and Dragons (D&D), y su propósito es ofrecerte una plataforma interactiva e informativa. Aquí podrás crear tu propio personaje base con facilidad gracias a una herramienta simple que te permite seleccionar opciones de manera intuitiva. Además, podrás acceder a información detallada sobre las razas y clases del juego, presentada de forma organizada para facilitar su comprensión.</p>
            <p>Más allá de las funcionalidades del juego, hemos integrado un enfoque inclusivo, incorporando elementos que sensibilizan sobre la importancia de la accesibilidad digital. En nuestra sección Wiki, encontrarás características diseñadas para mostrar los retos que enfrentan las personas con discapacidades, como dificultades de visión o problemas auditivos. Estas barreras se utilizan con el fin de concienciar a los usuarios sobre cómo mejorar la accesibilidad en el diseño web y asegurar que todos puedan disfrutar del contenido de manera equitativa.</p>
          </div>
          <div class="col-12 col-md-6">
            <img src="../assets/Elfo.png" class="img" alt="arte d&d">
          </div>
        </div>
        <div class="col-md-auto">
          <p>Nuestra misión es ofrecerte una experiencia que combine la diversión de D&D con una reflexión sobre cómo crear un entorno digital más accesible para todos. Esperamos que disfrutes explorando cada sección de nuestra página y que, al mismo tiempo, te sientas inspirado por el esfuerzo y el compromiso hacia una web más inclusiva y consciente de las necesidades de todos los usuarios. Nos gustaría que no solo te adentraras en el universo de D&D, sino que también te unieras a nosotros en la importante tarea de hacer que la navegación en línea sea más justa para todos.</p>
          <p>Te invitamos a explorar, aprender y ser parte de esta experiencia única. ¡Gracias por acompañarnos en este viaje hacia un diseño digital más accesible y divertido!</p>
        </div>
      </div>
    </section>
    <section class="Footer"><PageFooter></PageFooter></section>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    PageFooter,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  overflow-x: hidden; /* Asegura que no haya desplazamiento horizontal */
}

.title-container h1 {
  font-size: 6rem;
  color: #efefef;
  font-weight: bold;
  z-index: 1;
  margin: 0;
  text-align: center;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  position: relative;
  z-index: 1; /* Asegúrate que el contenido de la página esté por encima del fondo */
}

.about {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  padding: 0 20px; 
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px; 
}

.col-6, .col-md-auto, .col-lg-2 {
  padding: 0 10px;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

p {
  margin: 0 0 1em;
  line-height: 1.5;
  color: #333;
}

.title-container {
  position: relative;
  text-align: center;
  padding-top: 23%;
  padding-bottom: 20%;
  height: 100vh; 
  z-index: 0; /* Mantén este contenedor por debajo del fondo */
}

#app .background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background-image: url('~@/assets/TOA_Art1.jpg'); /* Usa ~ para asegurarte que el path sea relativo al directorio src */
  background-size: cover;
  background-position: center;
  z-index: -1; /* Asegúrate de que esté debajo de los otros elementos */
  filter: brightness(65%);
}

/* Footer Styles */
.footer {
  margin: 0; 
  padding: 0; 
  background-color: #f8f9fa;
  text-align: center;
  width: 100%; 
  position: relative;
  bottom: 0;
}
</style>
