<template>
  <FormItem :label="label" :prop="name">
    <Input v-model="data" type="textarea" :autosize="autosize"></Input>
  </FormItem>
</template>

<script>
  import {watchValue} from "./util";

  export default {
    name: "ctextarea",
    props: ['name', 'label','size'],
    data() {
      return {
        data: ''
      }
    },
    mounted() {
      watchValue(this, 'data')
    },
    computed:{
      autosize(){
        let map = {minRows: 2,maxRows: 5}
        if(this.size){
          const sp = this.size.split(',')
          map['minRows'] = sp[0]
          if(sp[1]){
            map['maxRows'] = sp[1]
          }
        }
        return map
      }
    }
  }
</script>