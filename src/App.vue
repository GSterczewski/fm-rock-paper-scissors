<template>
<header class="header">
  <div class="header__wrapper">
  <h1>Rocks<br>Paper<br>Scissors<br>Lizard<br>Spook</h1>
  <ScoreBoard />
  </div>
</header>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";
export default {
  components: { ScoreBoard }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
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
}
  .header__wrapper{
    width:60%;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    padding: 2rem;
    border: 2px solid white;
    border-radius:15px;
    color: var(--color-white);
  }
</style>
