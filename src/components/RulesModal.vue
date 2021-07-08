<template>
  <div v-if="isActive" class="modal">
    <div class="modal__content">
      <header class="modal__content__header">
        <h2>rules</h2>
        <button class="modal__content__button" @click="handleClose">&times;</button>
      </header>
      <img class="modal__content__image" src="../assets/images/image-rules-bonus.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isActive : {
      type: Boolean,
      default: false
    },
    handleClose: {
      type: Function,
      default : () => {
        console.warn("handler for closing modal not provided!");
      }
    }
  }
}
</script>

<style lang="scss">
.modal {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2;

  &__content {
    
    font-size: 1.25rem;
    padding: 1.75rem 1.5rem 4rem;
    border-radius:1rem;
    background-color: var(--color-white);
    color : var(--color-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;
    }

    &__image {
      width:400px;
      @media(max-width:500px){
        width:280px;
      }
    }
    &__button {
      background: none;
      border:none;
      font-size:2rem;
      color: var(--color-header-outline);
      opacity:0.5;
      cursor: pointer;
      transition:opacity 0.3s ease-out;

      &:hover, 
      &:focus{
        opacity:1;
        outline:none;
      }
    }
  }
  @media(max-width:500px){
      &__content {
        width: 100%;
        height:100%;
        border-radius: 0;
      }

      &__content__header{
        justify-content: center;
        margin-bottom:8rem;
        margin-top: 2rem;
      }
      &__content__button{
        position: absolute;
        bottom:5rem;
        left:50%;
        transform: translate(-50%);
      }
    }
}

</style>