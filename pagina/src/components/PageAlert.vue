<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="isMuted">
    <strong>Attention!</strong> You have muted the volume.
    <button type="button" class="close" @click="closeAlert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // Prop para controlar si la alerta se muestra o no
    isMuted: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeAlert() {
      // Emite el evento para cerrar la alerta
      this.$emit('close');
    }
  }
}
</script>
<style scoped>

</style>