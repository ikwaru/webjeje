const narratorScript = {
  narrationEnabled: true,
  isMuted: false,
  volume: 1, // Volumen inicial

  narrate: function (text, speed = 1, volume = 1) {
    if (this.narrationEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.volume = this.isMuted ? 0 : volume;

      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  },

  checkMute: function () {
    console.log("checkMute triggered. Volume:", this.volume);
    this.isMuted = Number(this.volume) === 0;
    console.log("isMuted updated in narratorScript:", this.isMuted);
  },

  readSelection: function (text, speed = 1, volume = 1) {
    const selection = window.getSelection().toString();
    if (selection) {
      this.narrate(selection, speed, volume);
    } else {
      alert('Por favor selecciona un texto para leer.');
    }
  },

  init: function () {
    console.log("narratorScript initialized");
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.getAttribute('aria-label')) {
          this.narrate(activeElement.getAttribute('aria-label'));
        }
      }
    });
  },
};

narratorScript.init(); // Asegúrate de que la inicialización se ejecute aquí

export { narratorScript };
export const readSelection = narratorScript.readSelection.bind(narratorScript);
export const checkMute = narratorScript.checkMute.bind(narratorScript);
export const setVolume = function(volume) {
  console.log("setVolume called with:", volume);
  narratorScript.volume = volume; 
  narratorScript.checkMute(); // Verifica si debe estar muteado
};
