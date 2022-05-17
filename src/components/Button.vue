<template>
  <button v-if="flag === true">{{ msg }}</button>
  <button v-else>Chú cường vlogs</button>
</template>

<script>
export default {
  props: {
    msg: String,
    flag: Boolean,
  },
};
</script>

<style>
</style>