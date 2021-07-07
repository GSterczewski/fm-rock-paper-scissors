<template>
<div class="layout-wrapper">
<VHeader />
<main>
    <GameBoard :variants="['scissors','spook','paper','lizard','rock']" />
</main>
  <div class="rules-button-container">
    <VButton name="Rules"  />
  </div>
</div>
</template>

<script>
import VHeader from "./components/VHeader.vue";
import GameBoard from "./components/GameBoard.vue";
import VButton from "./components/VButton.vue";
export default {
  components: { VHeader, VButton, GameBoard }
}
</script>

<style lang="scss">

*{
  box-sizing: border-box;
  margin:0;
}
body{
  font-family: 'Barlow Semi Condensed', sans-serif;
}

.layout-wrapper{
  background-image: var(--gradient-background);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 1rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(min-height:1000px){
    justify-content: space-around;
  }
}
@media(min-width:1000px){
  .rules-button-container{
    width:100%;
    display: flex;
    justify-content: flex-end;
    padding:1rem;
  }
}


</style>
