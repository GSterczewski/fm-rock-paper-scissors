<template>
<div>
<VHeader />
<main>
  <GameBoard :variants="['scissors','spook','paper','lizard','rock']" />
</main>
  <VButton name="Rules"  />
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
  background-image: var(--gradient-background);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 4rem 1rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
}
main{
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}
</style>
