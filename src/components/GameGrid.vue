<template>
  <div id="game-grid">
    <GridButton/>
    <GridButton/>
    <GridButton/>
    <GridButton/>
    <GridButton/>
    <GridButton/>
    <GridButton/>
    <GridButton/>
    <GridButton/>
  </div>
</template>

<script>
import GridButton from "./GridButton.vue"

export default {
  name: "Game",
  components: {
    GridButton
  }
}
</script>

<style>
#game-grid {
  margin: 20px auto;
  display: grid;
  justify-content: center;
  grid-template: 80px 80px 80px / 80px 80px 80px;
}

@media only screen and (min-width: 640px) {
  #game-grid {
    grid-template: 120px 120px 120px / 120px 120px 120px;
  }
}
</style>
