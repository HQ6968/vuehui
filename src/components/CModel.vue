<template>
  <Modal v-model="modal" :title="title" width="600" @on-ok="submit">
    <solt></solt>
  </Modal>
</template>

<script>
  export default {
    name: "CModel",
    props:['title'],
    data(){
      return {
        modal:false,
      }
    },
    methods:{
      submit(){
        this.$emit('on-ok')
      }
    }
  }
</script>

<style scoped>

</style>