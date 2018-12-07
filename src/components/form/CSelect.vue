<template>
  <FormItem :label="label" :prop="label">
    <Select v-model="data" :filterable="filterable">
      <Option v-for="option in options" :value="option.value">{{option.title}}</Option>
    </Select>
  </FormItem>
</template>

<script>
  import {watchValue} from "./util";

  export default {
    name: "cselect",
    props: ['name', 'label', 'options', 'filterable'],
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