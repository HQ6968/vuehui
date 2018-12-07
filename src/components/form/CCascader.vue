<template>

  <FormItem :label="label" :prop="name">
    <Cascader :data="options" v-model="area"></Cascader>
  </FormItem>

</template>

<script>
  import {watchValue} from "./util";
  export default {
    name: "CCascader",
    props:['name' , 'label' , 'options'],

    inject: ['form'],
    mounted() {
      watchValue(this , 'area')
    },
    data(){
      return{
        area:[]
      }
    }
  }
</script>

<style scoped>

</style>