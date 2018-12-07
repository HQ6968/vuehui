<template>
  <FormItem :label="label" :prop="name" :icon="iconRight">
    <Input v-model="data"  :type="type" :placeholder="placeholder">
      <span slot="prepend" v-if="icon">
        <Icon :size="iconSize" :type="iconType"></Icon>
      </span>
    </Input>
  </FormItem>
</template>

<script>
  import {watchValue} from "./util";

  export default {
    name: "cinput",
    props: ['name', 'label','icon','type','placeholder','iconRight'],
    data() {
      return {
        data: ''
      }
    },
    inject: ['form'],
    mounted() {
        watchValue(this , 'data')
    },
    methods:{

    },
    computed:{
      iconType(){
        return this.icon.split(':')[0]
      },
      iconSize(){
        let sp = this.icon.split(':')
        if(sp[1]){
          return sp[1]
        }
        return 14
      }
    }
  }
</script>