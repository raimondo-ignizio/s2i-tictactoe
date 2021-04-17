<template>
  <button type="button" @click.once="changeStatus()">{{ buttonStatus }}</button>
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
  font-size: 65px;
  background-color: #3a3a3c;
  border-width: medium;
  border-color: black;
  color: white;
  border-style: double;
  box-shadow: 2px 2px 5px black, -2px -2px 5px black;

}
</style>
