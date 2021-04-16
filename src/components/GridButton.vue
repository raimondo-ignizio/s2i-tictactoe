<template>
  <button type="button" @click="changeStatus()">{{ buttonStatus }}</button>
</template>

<script>
export default {
  name: "GridButton",
  data: function() {
    return {
      buttonStatus: ""
    };
  },
  methods: {
    changeStatus() {
      this.$store.commit("changeStatus");
      this.buttonStatus = this.$store.state.buttonStatus;
    }
  }
}
</script>

<style scoped>
button {
  font-size: 75px;
}
</style>
