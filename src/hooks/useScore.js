import { ref } from "vue";

const useScore = () => {

  const score = ref(0);
  
  const incrementScore = () => {
    score.value++;
  };
  const decrementScore = () => {
    score.value--;
  };

  return {
    score,
    incrementScore,
    decrementScore
  }
  
};

export default useScore;