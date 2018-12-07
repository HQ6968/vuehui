<template>
  <FormItem :label="label" :prop="label">
    <i-switch v-model="data" size="large">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </i-switch>
  </FormItem>
</template>

<script>
  import {watchValue} from "./util";

  export default {
    name: "cswitch",
    props: ['name', 'label'],
    data() {
      return {
        data: false
      }
    },
    mounted() {
      watchValue(this, 'data')
    }
  }
</script>