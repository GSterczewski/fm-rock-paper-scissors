import { getRandomNumberInRange } from "../utils/random";
import fireFunctionMultipleTimes from "../utils/fireFunctionMultipleTimes";
import { ref } from "vue";

const useGameLogic = (possibleFigures, gameStages) => {
  
  const resultsMap = {
    "rock" : ["lizard","scissors"],
    "paper" : ["rock","spook"],
    "scissors" : ["paper","lizard"],
    "lizard" : ["spook","paper"],
    "spook" : ["scissors","rock"]
  };


  const playerFigure = ref(null);
  const houseFigure = ref(null);
  const score = ref(0);  
  const currentGameStage = ref(gameStages.beforeSelect);

  const incrementScore = () => {
    score.value++;
  };
  const decrementScore = () => {
    score.value--;
  };

  const setStage = stage => {
    currentGameStage.value = stage;
  };

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
  //  saveScore(score.value);
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
    playerFigure,
    houseFigure,
    playAgain,
    selectPlayerFigure,
    score,
    currentGameStage
  };


};

export default useGameLogic;