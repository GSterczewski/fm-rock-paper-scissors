<template>
  <button @click="clickHandler" class="play-button" :aria-label="`Choose ${variant}`" >
      <FigureIcon :variant="variant"  />
  </button>
</template>

<script>
import FigureIcon from "./FigureIcon.vue";
export default {
  components: { FigureIcon },
  props:{
    variant: {
      type:String,
      default:'scissors'
    },
    clickHandler: {
      type: Function,
      default: () => {
        cosnole.warn("click handler not registred");
      }
    }
  }
}
</script>

<style lang="scss">
.play-button {
  background: none;
  border:none;
  cursor:pointer;
}

 
</style>