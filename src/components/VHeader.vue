<template>
  <header class="header">
    <div class="header__wrapper">
      <h1>Rock<br>Paper<br>Scissors<br>Lizard<br>Spook</h1>
      <slot />
    </div>
</header>
</template>

<script>


</script>

<style lang="scss">
header{
  width:100%;

}
h1{
  text-transform: uppercase;
  font-weight: 600;

  & > br {
    display: block;
    line-height: 1px;
    margin-top: -13px;
  }
}
  .header__wrapper{

    width:60%;
    min-width:320px;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    padding: 1rem 1.8rem;
    border: 2px solid var(--color-header-outline);
    border-radius:15px;
    color: var(--color-white);
    
    @media(max-width:650px){
      padding: 0.75rem 1rem;
    }
  }
</style>