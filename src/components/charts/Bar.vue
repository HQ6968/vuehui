<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
  import echarts from 'echarts'
  import tdTheme from './theme.json'

  echarts.registerTheme('tdTheme', tdTheme)
  export default {
    name: 'ChartBar',
    props: {
      value: Object,
      text: String,
      subtext: String,
      options: {
        type: Object,
        default: null
      },
    },
    data() {
      return {
        echart: null
      }
    },
    watch: {
        options(value) {
          this.echart.setOption(value)
        }
    },
    mounted() {
      this.$nextTick(() => {
        let option = {};
        if (!this.options) {
          let xAxisData = Object.keys(this.value)
          let seriesData = Object.values(this.value)
          option = {
            grid: {
              top: '10%',
              left: '1.2%',
              right: '2%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              splitLine: {show: false},
              type: 'category',
              data: xAxisData
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: seriesData,
              type: 'bar'
            }]
          }
        } else {
          option = this.options;
        }

        this.echart = echarts.init(this.$refs.dom, 'tdTheme')
        this.echart.setOption(option)
      })
    }
  }
</script>

<style lang="less">
  .charts {
    //
  }
</style>
