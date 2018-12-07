<template>
    <div v-if="isExpand">
        <slot></slot>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { findParent } from './form/util'

  export default {
    name: 'expander',
    mounted () {
    },
    computed: {
      ...mapGetters('container', ['getById']),
      isExpand () {
        return this.getById(findParent(this, 'SearchForm').storeId).isExpand
      },
    },
  }
</script>