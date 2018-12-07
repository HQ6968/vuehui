<template>
  <FormItem :label="label" :prop="label">

    <CheckboxGroup v-model="data">
      <Checkbox v-for="option in options" :label="option.title"></Checkbox>
    </CheckboxGroup>

  </FormItem>
</template>

<script>
  import {findForm} from "./util";
  import {emitter} from "../../mixins/index";

  export default {
    name: "ccheckbox",
    props: ['name', 'label', 'options'],
    mixins:[emitter],
    data() {
      return {
        data: [],
      }
    },
    mounted() {

      const pvm = findForm(this)
      const model = pvm.$props.model
      //let me = this

      let titleArr = []
      //JSON.parse(model[this.name]).forEach(v => {
      model[this.name].forEach(v => {
        titleArr.push(this.options.find(v1 => v1.value == v).title)
      })
      this.data = titleArr

      this.$watch('data', function (newVal) {
        let valueArr = []
        newVal.forEach(v => {
          valueArr.push(this.options.find(v1 => v1.title == v).value)
        })
        //model[this.name] = JSON.stringify(valueArr)
        model[this.name] = valueArr
        this.broadcast('FormItem', 'on-form-change', valueArr);
      })

      // pvm.$watch('model',{
      //   deep:true,
      //   handler(newVal){
      //     let titleArr = []
      //     JSON.parse(newVal[me.name]).forEach(v => {
      //       titleArr.push(me.options.find(v1 => v1.value == v).title)
      //     })
      //     me.data = titleArr
      //   }
      // })


    }
  }
</script>