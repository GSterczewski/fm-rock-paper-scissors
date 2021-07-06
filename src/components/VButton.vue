<template>
    <button class="button button--outline button--rounded" @click="clickHandler" v-text="name"></button>
</template>

<script>
export default {
  props:{
    name: {
      type:String,
      default : "Click me"
    },
    clickHandler: {
      type: Function,
      default: () => {console.warn("click handler not provided!")}
    }
  }
}
</script>

<style lang="scss">
  .button {
    padding: 0.7rem 2.35rem;
    text-transform: uppercase;
    font-weight: 700;
    cursor:pointer;
  }
  .button--outline{
    background-color: transparent;
    border: 1px solid var(--color-white);
    color:var(--color-white);
    transition: 0.3s ease-out;
    
    &:hover, 
    &:focus{
      outline:none;
      background-color: var(--color-white);
      color: var(--color-score-text);
    }
  }

  .button--rounded {
    border-radius:0.55em;
  }
</style>