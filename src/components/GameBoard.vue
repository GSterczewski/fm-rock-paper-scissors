<template>
  <div class="gameboard">
    <div class="gameboard--1" v-if="currentGameState === gameStates.beforePick">
      <svg xmlns="http://www.w3.org/2000/svg"  width="329" height="313"><path fill="none" stroke="#000" stroke-width="15" d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z" opacity=".2"/></svg>
      <PlayButton v-for="variant in variants" :key="variant" :variant="variant" :clickHandler="pick" />
    </div>
    <div class="gameboard--2" v-if="currentGameState === gameStates.picked">
      <h1>GaMEBOARD 2</h1>
    </div>
  </div>
</template>

<script>
import PlayButton from "./PlayButton.vue";
import { ref } from "vue";
export default {
  components:{ PlayButton },
  props: {
    variants : {
      type: Array,
      default: []
    }
  },
  setup(){
    
    const gameStates = {
      beforePick : 0,
      picked: 1
    };
    let currentGameState = ref(gameStates.beforePick);

    const pick = () => {
      currentGameState.value = gameStates.picked;
      console.log(currentGameState)
    };

    return {
      currentGameState,
      gameStates,
      pick
    }
  }
}
</script>

<style lang="scss">
  .gameboard--1{
    position:relative;
    & >*:not(:nth-child(1)){
      position:absolute;

    }
    & >*:nth-child(2){
      top:0;
      left:50%;
      transform: translate(-50%, -25%);
    }
    & >*:nth-child(3){
      top:0;
      // left:-25px;
      left: -10%;
      top:70px;
      top:20%;
    }
    & >*:nth-child(4){
      top:0;
      right:-10%;
      top: 20%;
    }
    & >*:nth-child(5){
      bottom: -10%;
      right: 10%;
    }
    & >*:nth-child(6){
      bottom: -10%;
      left: 10%;
    }
  @media(max-width:500px){
    transform: scale(0.8);
    }
  }
    
</style>