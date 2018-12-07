<template>
  <div class="ibox float-e-margins">
    <div class="ibox-title">
      <h5>{{title}}</h5>
    </div>
    <div class="ibox-content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "IBox",
    props:['title']
  }
</script>

<style scoped>

</style>