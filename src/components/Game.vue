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
  grid-template: 120px 120px 120px / 120px 120px 120px;
  justify-content: center;
}
</style>
