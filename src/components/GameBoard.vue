<template>
  <div class="gameboard">
    <div class="gameboard__stage-1" v-if="gameStage === 0">
      <svg xmlns="http://www.w3.org/2000/svg"  width="329" height="313"><path fill="none" stroke="#000" stroke-width="15" d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z" opacity=".2"/></svg>
      <PlayButton v-for="(variant,index) in variants" :key="variant" :variant="variant" :clickHandler="() =>handleFigureSelect(index)" />
    </div>
    <div class="gameboard__stage-2" v-if="gameStage > 0">
      <div class="gameboard__stage-2__section">
        <h2>You picked</h2>
        <div class="selection-placeholder"></div>
      </div>
      <div class="gameboard__stage-2__result-container" v-if="gameStage > 1">
        <h3 v-text="message"></h3>
        <VButton name="play again" class="gameboard__stage-2__button" :clickHandler="handlePlayAgain" />
      </div>
      <div class="gameboard__stage-2__section">
        <h2>The House picked</h2>
        <div class="selection-placeholder"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayButton from "./PlayButton.vue";
import VButton from "./VButton.vue";
import { ref, toRefs, watch, onMounted } from "vue";
export default {
  components:{ PlayButton, VButton },
  props: {
    variants: {
      type: Array,
      default: []
    },
    handleFigureSelect: {
      type: Function,
      default : () => {
        console.warn("figure selection handler not provided!");
      }
    },
    handlePlayAgain: {
      type: Function,
      default : () => {
        console.warn("play again handler not provided!");
      }
    },
    gameStage: {
      type: Number,
      default: 2
    }
  },
  setup(props){
    const resultMessages = {
      win: "you win",
      lost: "you lost"
    }
    const message = ref("");
    const { gameStage } = toRefs(props);
    
    const getMessage = () => {
      if(gameStage.value === 2){
        message.value = resultMessages.win;
      }
      if(gameStage.value === 3){
        message.value = resultMessages.lost;

      }
    };
    
    watch(gameStage, getMessage);

    onMounted(getMessage);
    
    return {
      message
    };
  }
}
</script>

<style lang="scss">
.gameboard{
  width:100%;
  display: flex;
  justify-content: center;
  
}
  .gameboard__stage-1{
    position:relative;
    width:max-content;
   
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
   .gameboard__stage-2 {
     display: flex;
     justify-content: space-around;
     align-items: center;
     width:100%;
     color: var(--color-white);

     &__result-container {
       & > h3 {
         font-size: 4rem;
         margin-bottom:1rem;
       }
     }
     &__button{
       padding: 1.2rem 3.5rem;
       background-color: var(--color-white);
       color: var(--color-text);
     }     
   } 
   .gameboard__stage-2__section {
     width:33%;
     display: flex;
     flex-direction: column;
     align-items: center;
    

     & > h2 {
       margin-bottom:3rem;
       font-weight: 700;
       letter-spacing: 5px;
     }
   }
   .selection-placeholder{
     @include circle(10rem);
     background-color: var(--color-text);
   }
   @media(max-width:1000px){
     .gameboard__stage-2 {
       flex-wrap: wrap;
       &__section{
         width:50%;
       }
       &__result-container{
         order:3;
         margin-top:5rem;
       }
     }
   }
</style>