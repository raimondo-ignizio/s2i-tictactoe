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
