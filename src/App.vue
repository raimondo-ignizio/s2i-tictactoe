<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon/tictactoe-icon.png">
    <h1>Tic Tac Toe</h1>
    <p>Click wherever you want on the grid to play. The X start first.</p>
    <GameGrid/>
    <ResetButton/>
  </div>
</template>

<script>
import GameGrid from "./components/GameGrid.vue"
import ResetButton from "./components/ResetButton.vue"


export default {
  name: 'App',
  components: {
    GameGrid,
    ResetButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px 5%;
  padding-bottom: 2%;
  background-color: #6FBCDF;
}

#app img {
  margin-top: 20px;
}

#app p {
  padding-bottom: 5%;
  font-size: 23px;
}

@media only screen and (min-width: 900px) {
  #app {
    width: 900px;
    margin: 20px auto;
  }
}
</style>
