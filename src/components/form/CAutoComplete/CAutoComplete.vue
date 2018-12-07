import container from "../../store/modules/container";
<template>
  <FormItem :label="label" :prop="name">
    <div style="position: relative"
         class="cauto-complete ivu-auto-complete ivu-select ivu-select-visible ivu-select-single ivu-select-default">
      <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type">
        <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i>
        <input
            v-model="chooseLabelValue"
            @focus="onFocus"
            @blur="onBlur"
            @keyup="onkeyup"
            autocomplete="off"
            spellcheck="false"
            type="text"
            :placeholder="placeholder"
            class="ivu-input ivu-input-default">
      </div>
      <div
          v-if="isShow"
          @scroll="onScroll"
          class="ivu-select-dropdown ivu-auto-complete"
          style="width: 100%;max-height: 200px; position: absolute; will-change: top, left; transform-origin: center top 0px;">
        <div ref="container">
          <div class="ivu-cell" @click="onClick(v)" v-for="(v , k) in items" :key="k">{{v.label}}</div>
        </div>
      </div>
    </div>
  </FormItem>
</template>

<script>
  import co from 'co'
  import {watchValue} from "../util";
  import {RequestPool} from "./request";

  export default {
    name: "CAutoComplete",
    props: ['label', 'api', 'chooseLabel', 'name', 'placeholder'],
    data() {
      return {
        items: [],
        isShow: false,
        chooseValue: '',
        timer: null,
        chooseLabelValue: '',
        page: 1,
        keyword:'',

        requestPool: RequestPool.instance(),
        dataState:'init',
      }
    },
    inject: ['form'],
    mounted() {

      watchValue(this, 'chooseValue')
      this.chooseLabelValue = this.chooseLabel
      this.requestPool.api = this.api
      this.requestPool.notifyLast = res => {
        let find = res.items.filter(v => v.value == this.chooseValue)
        if(find.length){
          this.chooseLabelValue = find[0].label
        }
      }
    },

    watch: {
      chooseLabelValue(v2 , v1) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.reset()
          this.load()
        }, 500)
      },
      chooseValue(v2 , v1){
        if(this.dataState === 'init'){
          this.page = 1
          this.requestPool.push([this.page, {label: '', value: this.chooseValue}])
        }
      }
    },

    methods: {
      onScroll(e) {
        this.dataState = 'onScroll'
        //console.log(this.$refs.container.offsetHeight - e.target.scrollTop)
        //12090 4340
        let top = this.$refs.container.offsetHeight - e.target.scrollTop
        if (top < 200) {
          this.load()
        }
      },
      onClick(v) {
        this.dataState = 'onClick'
        this.chooseLabelValue = v.label
        this.chooseValue = v.value
        this.keyword = ''
      },
      onFocus() {
        this.isShow = true
        this.load()
      },
      onBlur() {
        setTimeout(() => {
          this.reset()
          this.isShow = false
        }, 200)
      },
      onkeyup(e){
        this.keyword = this.chooseLabelValue
      },
      load() {
        let me = this
        let lock = false
        if (lock) {
          return
        }
        lock = true
        co(function* () {
          let res = yield me.api(me.page, {label: me.keyword, value: ''})
          me.items = [...me.items, ...res.items]
          me.page += 1
          lock = false
        }).catch(e => {
          lock = false
          throw  e
        })
      },
      reset() {
        this.items = []
        this.page = 1
      }
    }
  }
</script>

<style scoped>
  .cauto-complete {
  }
</style>