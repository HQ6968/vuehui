<template>
  <div v-if="isShow">
    <slot></slot>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getMediaType} from "./index";

  export default {
    name: "media",
    props:['type'],
    data(){
      return {

      }
    },
    computed:{
      ...mapGetters('app' , ['winWidth']),
      isShow(){
        if (!this.type){
          return true
        }


        const mediaType = getMediaType(this.winWidth)
        // a:b
        switch (mediaType) {
          case 'sm':
            // :sm
            return ['sm' , ':sm'].indexOf(this.type) > -1
          case 'md':
            return [':sm' , 'sm' , 'lg:' , 'lg'].indexOf(this.type) ===  -1
          case 'lg':
            return ['lg' ,'sm:' , 'md:', ':lg'].indexOf(this.type) > -1
        }

        return true
      }
    }
  }
</script>