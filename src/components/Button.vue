<template>
  <button v-if="flag === true" @click="buttonClickHandler">{{ msg }}</button>
  <button v-else>Chú cường vlogs</button>
</template>

<script>
export default {
  props: {
    msg: String,
    flag: Boolean,
    bClick: String,
  },
  methods: {
    buttonClickHandler() {
      debugger; // eslint-disable-line no-debugger
      this.$emit("openDialog");
    },
  },
};
</script>

<style>
</style>