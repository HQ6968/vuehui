<template>
  <div :class=" className ">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Col",
    props:['md'],
    computed:{
      className(){
        let s = ''
        if (this.md){
          s += 'col-md-' + this.md
        }
        return s
      }
    }
  }
</script>

<style scoped>

</style>