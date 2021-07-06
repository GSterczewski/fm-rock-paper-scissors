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
    cursor:pointer;
    padding: 0.7rem 2.35rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1rem;
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