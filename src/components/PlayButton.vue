<template>
  <button class="play-button" :class="`color-variant--${variant}`">
    <div class="play-button__icon-container">
      <PlayButtonIcon :variant="variant" />
    </div>
  </button>
</template>

<script>
import PlayButtonIcon from "./PlayButtonIcon.vue";
export default {
  components: { PlayButtonIcon },
  props:{
    variant :{
      type:String,
      default:'scissors'
    }
  }
}
</script>

<style lang="scss">


.play-button {
  @include circle(100px);
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
 
  &__icon-container{
    @include circle(75px);
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

$variants : 'scissors', 'rock', 'paper', 'lizard', 'spook';

@each $variant in $variants {
  .color-variant--#{$variant}{
    background-image: var(--gradient-#{$variant});

  }
} 
</style>