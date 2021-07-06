<template>
<header class="header">
  <div class="header__wrapper">
  <h1>Rocks<br>Paper<br>Scissors<br>Lizard<br>Spook</h1>
  <ScoreBoard />
  </div>
</header>
<main>
  <VButton name="Rules"  />
</main>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import VButton from "./components/VButton.vue";
export default {
  components: { ScoreBoard, VButton }
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
  font-family: 'Barlow Semi Condensed', sans-serif;
}
h1{
  text-transform: uppercase;
  font-weight: 600;
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
