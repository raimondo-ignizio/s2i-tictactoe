<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon/tictactoe-icon.png">
    <h1>Welcome to Tic Tac Toe</h1>
    <Game/>
    <ResetButton/>
  </div>
</template>

<script>
import Game from "./components/Game.vue"
import ResetButton from "./components/ResetButton.vue"


export default {
  name: 'App',
  components: {
    Game,
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
  margin-top: 60px;
}
</style>
