<template>
  <button type="button" @click="resetGame()">Restart the game</button>
</template>

<script>

export default {
  name: "ResetButton",
  methods: {
    resetGame: function() {
      window.location.reload();
    }
  }
}
</script>

<style scoped>

button {
  height: 40px;
  width: 150px;
  margin-top: 15%;
  font-size: 16px;
  background-color: #3a3a3c;
  font-weight: bold;
  color: white;
}

</style>
