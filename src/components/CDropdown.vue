<template>
  <Dropdown @on-click="onClick">
    <a href="javascript:void(0)">
      操作
      <Icon type="ios-arrow-down"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem v-for="(item , k) in items" :key="k" :name="item.value">
        {{item.label}}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>


<script>
  export default {
    name: "CDropdown",
    props:['items'],
    methods:{
      onClick(v){
        this.$emit('on-click' , v)
      }
    }
  }
</script>

<style scoped>

</style>