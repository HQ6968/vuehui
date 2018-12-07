<template>
  <div :class="{ 'search-from-wrapper':!inline,'search-inline-from-wrapper':inline}">
  <Form :model.sync="model" :label-width="labelWidth" :inline="inline">
    <Row>
      <Col :md="slotMd" v-if="!isExpand">
        <slot></slot>
      </Col>
      <slot v-if="isExpand"></slot>

      <Col :md="comBtnMd">
        <div :class="{'f-r':comBtnMd === 24}">
          <div style="margin-left: 20px">
            <Button type="primary" @click="handleSearch">搜索</Button>
            <Button style="margin-left: 8px" @click="handleReset">重置</Button>
            <a v-if="hasExpander" style="margin-left: 8px;font-size: 12px" @click="toggleFold">{{expandTitle}}<Icon :type="expandIcon"/></a>
          </div>
        </div>
      </Col>
    </Row>
  </Form>
  </div>
</template>

<script>
  import {ID} from '../util/index'
  import {mapGetters, mapMutations} from 'vuex'
  import {findChild} from "./form/util";

  export default {
    name: "search-from",
    props: ['model', 'labelWidth' ,'btnMd','inline'],
    data() {
      return {
        originData: {},
        isExpand: false,
        hasExpander:false,
        storeId:ID(),
      }
    },
    mounted() {
      this.originData = Object.assign({}, this.model)
      if(findChild(this,'Expander') ){
        this.hasExpander = true
      }
    },
    methods: {
      ...mapMutations('container', ['removeId', 'saveIdData']),
      handleSearch() {
        this.$emit('handleSearch')
      },
      handleReset() {
        for (let field in this.originData) {
          this.model[field] = this.originData[field]
        }
        this.$emit('handleReset')
      },
      toggleFold() {
        this.isExpand = !this.isExpand
        this.saveIdData({
          id: this.storeId,
          data: {isExpand: this.isExpand}
        })
      }
    },
    computed: {
      ...mapGetters('container', ['getById']),
      expandTitle() {
        return this.getById(this.storeId).isExpand ? '收起' : '展开'
      },
      expandIcon() {
        return this.getById(this.storeId).isExpand ? 'ios-arrow-up' : 'ios-arrow-down'
      },
      comBtnMd(){
        if(this.isExpand){
          return 24
        }

        if(!this.btnMd){
          return 5
        }
        return this.btnMd
      },
      slotMd(){
        let rest = 24 - this.comBtnMd
        if(rest <= 0){
          rest = 24
        }
        return rest
      }
    },
    destroyed() {
      this.removeId(this.storeId)
    }
  }
</script>

<style>
  .search-inline-from-wrapper .ivu-form-item{
    margin-bottom: 0;
  }
  .search-from-wrapper {
    background-color: #f6f6f6;
    padding: 10px 10px 0 0;
    border-radius: 3px;
  }

  .search-from-wrapper .ivu-form-item ,.search-from-wrapper .f-r{
    margin-bottom: 10px;
  }

</style>