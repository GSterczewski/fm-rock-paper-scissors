<template>
<div class="layout-wrapper">
<VHeader>
  <ScoreBoard :score="score" />
</VHeader>
<main>
    <GameBoard :variants="Object.values(possibleFigures)"
      :handleFigureSelect="selectPlayerFigure" :gameStage="currentGameStage" :handlePlayAgain="playAgain"
     />
</main>
  <div class="rules-button-container">
    <VButton name="Rules"  />
  </div>
</div>
</template>

<script>
import VHeader from "./components/VHeader.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import GameBoard from "./components/GameBoard.vue";
import VButton from "./components/VButton.vue";
import { ref } from "vue";
export default {
  components: { VHeader, VButton, GameBoard, ScoreBoard },
  setup(){
    const gameStages = {
      beforeSelect: 0,
      selected: 1,
      won: 2,
      lost: 3 
    };
    const possibleFigures = {
      0 : "rock",
      1 : "paper",
      2 : "scissors",
      3 : "lizard",
      4 : "spook"
    };
    
    const resultsMap = {
      "rock" : ["lizard","scissors"],
      "paper" : ["rock","spook"],
      "scissors" : ["paper","lizard"],
      "lizard" : ["spook","paper"],
      "spook" : ["scissors","rock"]
    }
    // game score state
    const score = ref(0);

    const incrementScore = () => {
      score.value++;
    };
    const decrementScore = () => {
      score.value--;
    };

    
    
    //game stage state
    const currentGameStage = ref(gameStages.beforeSelect);
    const setStage = stage => {
      currentGameStage.value = stage;
    };

    // figure selection state
    
    const playerFigure = ref(null);
    const houseFigure = ref(null);
    
      const getRandomNumberInRange = (min,max) => Math.round(Math.random() * (max - min) + min);
      
      

      const wait = (fn,delay) => new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(fn());
        },delay)
      })


      const fireFunctionMultipleTimes = (fn, count, delay = 0) => {
        let results = [];
        for(let i = 0; i < count; i++ ){
          results.push(wait(fn,delay*i));
        }
        return results;
      }
      const selectHouseFigure = () => {
        houseFigure.value = getRandomNumberInRange(0,4);
        console.log("house selected : ",possibleFigures[houseFigure.value]); 
      };

      const getWinner = () => {
            
          if(resultsMap[possibleFigures[playerFigure.value]].includes(possibleFigures[houseFigure.value])){
            console.log("player won");
            setStage(gameStages.won);
            incrementScore();
          } else{
            console.log("player lost");
            setStage(gameStages.lost);
            if(score.value > 0) decrementScore();
          }
        }

      const selectPlayerFigure = figure => {
        playerFigure.value = figure;
        console.log("player selected : ", possibleFigures[playerFigure.value]);
        setStage(gameStages.selected);
        Promise.all(fireFunctionMultipleTimes(selectHouseFigure,10,200)).then(()=>{
          getWinner();
        });
    };
      const playAgain = () => {
        setStage(gameStages.beforeSelect);

      };  
    return {
      score,
      currentGameStage,
      selectPlayerFigure,
      playerFigure,
      houseFigure,
      possibleFigures,
      playAgain
    }
  }
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
main{
  width:60%;
  min-width:320px;
}

</style>
