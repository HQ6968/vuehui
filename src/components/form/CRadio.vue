<template>
  <FormItem :label="label" :prop="label">

    <RadioGroup v-model="data">
      <Radio v-for="option in options" :label="option.value">{{option.title}}</Radio>
    </RadioGroup>

  </FormItem>
</template>

<script>
  import {watchValue} from "./util";

  export default {
    name: "cradio",
    props: ['name', 'label', 'options'],
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