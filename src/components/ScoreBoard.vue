<template>
  <div class="scoreboard">
    <h2>Score</h2>
    <div class="scoreboard__score">{{ score }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      score : {
        type: Number,
        default : 0
      }
    }
  }
</script>

<style lang="scss">
  .scoreboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem 3rem;
    border-radius: 0.75rem;
    background-color: var(--color-white);
    color: var(--color-score-text);

    & > h2 {
      text-transform: uppercase;
    }
    
    &__score{
      color : var(--color-text);
      font-size: 4.5rem;
      font-weight: 800;
    
    }
    @media(max-width:740px){
      padding: 0.3rem 2rem;
       &__score {
         font-size: 4rem;
       }
    }
  }
</style>