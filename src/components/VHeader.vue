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
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    padding: 2rem;
    border: 2px solid white;
    border-radius:15px;
    color: var(--color-white);
  }
</style>