<template>
  <div class="content-container">
    <div class="title-container">
      <h1>Select Your Race</h1>
      <div class="builder-background-image"></div>
    </div>

    <div class="classesjej">
      <!-- Form Section -->
      <div class="form-container">
        <!-- Contenedor de la raza -->
        <div class="dropdown-container">
          <label for="classes">Select your class:</label>
          <select v-model="selectedClass" @change="onClassChange">
            <option v-for="(classes, classesName) in classes" :key="classesName" :value="classesName">
              {{ classesName }}
            </option>
          </select>
        </div>
      </div>

      <!-- Mostrar opciones de historia -->
      <div v-if="selectedClass" class="opciones">
        <h3>Opciones de historia</h3>
        <div v-for="(option, optionName) in getClassOptions(selectedClass)" :key="optionName">
          <h4>{{ optionName }}</h4>
          <h5>{{ option.story }}</h5>
          <p>{{ option.description }}</p>
        </div>
      </div>
    </div>

    <div class="racesjej">
      <!-- Form Section -->
      <div class="form-container">
        <!-- Contenedor de la raza -->
        <div class="dropdown-container">
          <label for="race">Selecciona tu raza:</label>
          <select v-model="selectedRace" @change="onRaceChange">
            <option v-for="(race, raceName) in races" :key="raceName" :value="raceName">
              {{ raceName }}
            </option>
          </select>
        </div>

        <!-- Contenedor de la subraza -->
        <div class="dropdown-container" v-if="selectedRace && hasSubraces(selectedRace)">
          <label for="subrace">Selecciona tu subraza:</label>
          <select v-model="selectedSubrace" @change="onSubraceChange">
            <option v-for="(subrace, subraceName) in races[selectedRace]" :key="subraceName" :value="subraceName">
              {{ subraceName }}
            </option>
          </select>
        </div>
      </div>

      <!-- Mostrar opciones de historia -->
      <div v-if="selectedRace" class="opciones">
        <h3>Opciones de historia</h3>
        <div v-for="(option, optionName) in getRaceOptions(selectedRace, selectedSubrace)" :key="optionName">
          <h4>{{ optionName }}</h4>
          <h5>{{ option.story }}</h5>
          <p>{{ option.description }}</p>
        </div>
      </div>
    </div>

    <div class="backgrounds">
  <!-- Form Section -->
  <div class="form-container">
    <!-- Contenedor del background -->
    <div class="dropdown-container">
      <label for="backgrounds">Select your background:</label>
      <select v-model="selectedBackground" @change="onBackgroundChange">
        <option v-for="(background, backgroundName) in backgrounds" :key="backgroundName" :value="backgroundName">
          {{ backgroundName }}
        </option>
      </select>
    </div>
  </div>

  <!-- Mostrar opciones de historia -->
  <div v-if="selectedBackground" class="opciones">
  <h3>Opciones de historia</h3>
  <div v-if="getBackgroundOptions(selectedBackground)">
  <h4>{{ selectedBackground }}</h4>
  <p>{{ getBackgroundOptions(selectedBackground).description }}</p>
</div>
</div>


</div>


    <section class="Footer">
      <PageFooter></PageFooter>
    </section>
  </div>
</template>

<script>
import jsonData from "@/components/json/buider.json";
import PageFooter from '@/components/PageFooter.vue'

export default {
  data() {
    return {
      selectedRace: "",  // Para manejar la raza seleccionada
      selectedSubrace: "",  // Para manejar la subraza seleccionada
      selectedClass: "",  // Para manejar la clase seleccionada
      selectedSubclass: "",  // Para manejar la subclase seleccionada
      selectedBackground: "",  // Para manejar el background seleccionado
      races: jsonData.Races,  // Datos de las razas
      classes: jsonData.Classes,  // Datos de las clases
      backgrounds: jsonData.Backgrounds,  // Datos de los backgrounds
    };
  },
  methods: {
    // Obtiene las opciones de subraza o raza
    getRaceOptions(race, subrace) {
      if (subrace) {
        return this.races[race][subrace];
      }
      return this.races[race];
    },
    // Obtiene las opciones de clase
    getClassOptions(className) {
      return this.classes[className];
    },
    
    // Verifica si una raza tiene subrazas
    hasSubraces(race) {
      const raceData = this.races[race];
      return Object.keys(raceData).some(
        (key) => typeof raceData[key] === "object" && !raceData[key].story
      );
    },
    // Resetea la subraza al cambiar la raza
    onRaceChange() {
      this.selectedSubrace = "";
    },
    // Resetea la subclase al cambiar la clase
    onClassChange() {
      this.selectedSubclass = "";
    },
  
    // Muestra el cambio de subraza en la consola
    onSubraceChange() {
      console.log("Subraza seleccionada:", this.selectedSubrace);
    },
    // Muestra el cambio de subclase en la consola
    onSubclassChange() {
      console.log("Subclase seleccionada:", this.selectedSubclass);
    },
    getBackgroundOptions(backgroundName) {
  if (this.backgrounds && this.backgrounds[backgroundName]) {
    return this.backgrounds[backgroundName];
  }
  return null;
},
  onBackgroundChange() {
    console.log("Background seleccionado:", this.selectedBackground);
  },
mounted() {
  console.log("Datos de backgrounds:", this.backgrounds);
},
  },
  components: {
    PageFooter,
  },
};


</script>



<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

.title-container {
  position: relative;
  text-align: center;
  padding-top: 23%;
  padding-bottom: 20%;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
}

.title-container h1 {
  font-size: 6rem;
  color: #efefef;
  font-weight: bold;
  z-index: 1;
}

p,
label {
  font-size: 13px;
  margin-right: 10px;
}

div {
  margin: 0;
  padding: 0;
  background-color: transparent;
  box-shadow: none;
  border: none;
}

.opciones h2,
h3 {
  margin: 5% 0;
}

.opciones h4,
h5 {
  margin: 2%;
}

.opciones h2,
h3 {
  position: relative;
  text-align: center;
  font-weight: bold;
  color: var(--accent-color);
  margin: 20px 0;
}

.opciones h2::before,
.opciones h2::after,
.opciones h3::before,
.opciones h3::after,
.opciones h4::before,
.opciones h4::after {
  content: "";
  display: inline-block;
  width: 50px;
  height: 2px;
  background: var(--accent-color);
  vertical-align: middle;
}

.opciones p {
  margin-left: 20%;
  margin-right: 20%;
}

.builder-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/TOA_Art4.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(65%);
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  /* Asegura que el footer esté siempre en la parte inferior */
}

select {
  display: block;
  padding: 10px 20px;
  background-color: rgba(221, 221, 221, 0.748);
  border: none;
  border-radius: 0.3em;
  font-size: 1rem;
  font-weight: bold;
  color: #09131d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.dropdown-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding-bottom: 5%;
}

select:hover {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.opciones {
  padding-bottom: 5%;

}

h1,
h3,
h4,
h5,
p {
  margin: 0;
}

.PageFooter {
  margin: 0;
  padding: 0;
  box-shadow: none;
  border: none;
}
</style>
