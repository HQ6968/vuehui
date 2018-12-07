<template>
  <FormItem :label="label" :prop="label">
    <DatePicker type="date" placeholder="请选择时间" v-model="data" style="width: 100%"></DatePicker>
  </FormItem>
</template>

<script>
  import {watchValue} from "./util";

  export default {
    name: "cDatePicker",
    props: ['name', 'label'],
    data() {
      return {
        data: ''
      }
    },
    mounted() {
      watchValue(this, 'data')
    }
  }
</script>