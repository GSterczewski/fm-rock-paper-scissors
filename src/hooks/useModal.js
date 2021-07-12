import { ref } from "vue";

const useModal = () => {

  const isRulesModalActive = ref(false);
  
  const showRulesModal = () => {
    isRulesModalActive.value = true;
  };
  const hideRulesModal = () => {
    isRulesModalActive.value = false;
  };

  return {
    isRulesModalActive,
    showRulesModal,
    hideRulesModal
  }
};

export default useModal;