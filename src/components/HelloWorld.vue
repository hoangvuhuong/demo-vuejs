<template>
  <div class="hello">
    <Button-ok :msg="$t('button.test')" :flag="true" @openDialog="openDialog()">
    </Button-ok>
    <BaseDialog :active.sync="isActive" @closeDialog="close()"> </BaseDialog>
    <button type="button" @click="openDialog()">Toggle</button>
  </div>
</template>

<script>
import ButtonOk from "../components/Button.vue";
import BaseDialog from "../components/BaseModalDialog.vue";
export default {
  components: { ButtonOk, BaseDialog },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openDialog() {
      this.isActive = true;
    },
    close() {
      this.isActive = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
