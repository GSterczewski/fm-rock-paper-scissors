<template>
  <header class="header">
    <div class="header__wrapper">
      <h1>Rocks<br>Paper<br>Scissors<br>Lizard<br>Spook</h1>
      <ScoreBoard />
    </div>
</header>
</template>

<script>
import ScoreBoard from "./ScoreBoard.vue";

export default {
  components: { ScoreBoard }
}
</script>

<style lang="scss">
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