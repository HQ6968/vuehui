<template  scope="index">
  <div ref="dom" class="charts"></div>
</template>
<script>
  import echarts from 'echarts'
  import tdTheme from './theme.json'
  import {on, off} from "../../util/index"

  echarts.registerTheme('tdTheme', tdTheme)

  export default {
    name: "CEcharts",
    props: ["options"],
    data() {
      return {
        dom: null
      }
    },
    watch: {
      options(value) {
        this.dom.setOption(value);
      },
    },
    methods: {
      resize() {
        this.dom.resize()
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.dom = echarts.init(this.$refs.dom, 'tdTheme')
        this.dom.setOption(this.options || {});
        on(window, 'resize', this.resize)
      });
    },
    beforeDestroy() {
      off(window, 'resize', this.resize)
    }
  }
</script>