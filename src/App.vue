<template>
<div class="layout-wrapper">
<RulesModal :isActive="isRulesModalActive" :handleClose="hideRulesModal" />
<VHeader>
  <ScoreBoard :score="score" />
</VHeader>
<main>
    <GameBoard :variants="Object.values(possibleFigures)"
      :handleFigureSelect="selectPlayerFigure" 
      :gameStage="currentGameStage" 
      :handlePlayAgain="playAgain"
      :playerFigure="possibleFigures[playerFigure]"
      :houseFigure="possibleFigures[houseFigure]"
     />
</main>
  <div class="rules-button-container">
    <VButton name="Rules" @click="showRulesModal"  />
  </div>
</div>
</template>

<script>
import VHeader from "./components/VHeader.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import GameBoard from "./components/GameBoard.vue";
import VButton from "./components/VButton.vue";
import RulesModal from "./components/RulesModal.vue";
import { ref, onMounted } from "vue";
import useLocalStore from "./hooks/useLocalStore";
export default {
  components: { VHeader, VButton, GameBoard, ScoreBoard, RulesModal },
  setup(){
    const gameStages = {
      beforeSelect : 0,
      selected : 1,
      won : 2,
      lost : 3,
      draw : 4 
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
    const { loadScore, saveScore } = useLocalStore();
    
  onMounted(() => loadScore(score));

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
           if(playerFigure.value === houseFigure.value){
             setStage(gameStages.draw);
           } 
          else if(resultsMap[possibleFigures[playerFigure.value]].includes(possibleFigures[houseFigure.value])){
            console.log("player won");
            setStage(gameStages.won);
            incrementScore();
          } else{
            console.log("player lost");
            setStage(gameStages.lost);
            if(score.value > 0) decrementScore();
          }
          saveScore(score.value);
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
      
      // modal state
      const isRulesModalActive = ref(false);
      
      const showRulesModal = () => {
        isRulesModalActive.value = true;
      };
      const hideRulesModal = () => {
        isRulesModalActive.value = false;
      };

    return {
      score,
      currentGameStage,
      selectPlayerFigure,
      playerFigure,
      houseFigure,
      possibleFigures,
      playAgain,
      showRulesModal,
      hideRulesModal,
      isRulesModalActive
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


main{
  width:100%;
  max-width:1000px;
  min-width:320px;
  height: 60vh;
  display: flex;
  align-items: center;
  margin-top:2rem;
  margin-bottom:2rem;
}

@media(min-width:$desktop-breakpoint){
  .rules-button-container{
    width:100%;
    display: flex;
    justify-content: flex-end;
    padding:1rem;
    
  }
  main {
    margin-bottom:-4rem;

  }
}
</style>
