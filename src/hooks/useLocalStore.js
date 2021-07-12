const useLocalStorage = () => {

    const localStorageKey = "rpsls-score";
    
    const isLocalStorageAvailable = () => {
      const name = "localStorageTest-RPSLS";
      try {
        localStorage.setItem(name,name);
        localStorage.removeItem(name);
        return true;
      } catch(e) {
        console.warn("local storage not available");
        return false;
      }
    }
    const saveScore = (score) => {
      if(isLocalStorageAvailable()){
        localStorage.setItem(localStorageKey,JSON.stringify(score));
      }
    };
    
    const loadScore = (target) => {
      if(isLocalStorageAvailable()){
        let savedScore = localStorage.getItem(localStorageKey);
        if(savedScore){
          target.value = JSON.parse(savedScore);
        } 
      }

    };

    return {
      saveScore,
      loadScore
    }
};

export default useLocalStorage;