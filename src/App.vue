<template>
<VHeader />
<main>
  <VButton name="Rules"  />
</main>
</template>

<script>
import VHeader from "./components/VHeader.vue";
import VButton from "./components/VButton.vue";
export default {
  components: { VHeader, VButton }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
*{
  box-sizing: border-box;
  margin:0;
}
body{
  background-image: var(--gradient-background);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 4rem 1rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
}

</style>
