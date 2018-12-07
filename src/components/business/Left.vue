<template>
  <ul class="nav" id="side-menu">
    <li class="nav-header">
      <div class="dropdown profile-element">
        <span><img alt="image" class="img-circle" src="http://ozwpnu2pa.bkt.clouddn.com/profile_small.jpg"/></span>
        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear">
                               <span class="block m-t-xs"><strong class="font-bold">Beaut-zihan</strong></span>
                                <span class="text-muted text-xs block">超级管理员<b class="caret"></b></span>
                                </span>
        </a>
        <ul class="dropdown-menu animated fadeInRight m-t-xs">
          <li>
            <a class="J_menuItem" href="form_avatar.html">修改头像</a>
          </li>
          <li>
            <a class="J_menuItem" href="profile.html">个人资料</a>
          </li>
          <li>
            <a class="J_menuItem" href="contacts.html">联系我们</a>
          </li>
          <li>
            <a class="J_menuItem" href="mailbox.html">信箱</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">安全退出</a>
          </li>
        </ul>
      </div>
      <div class="logo-element">H+
      </div>
    </li>

    <li v-for="(v,k) in items" :key="k" :class="{active: v.open}">
      <a href="javascript:;" @click="toggleBlock(v)">
        <i class="fa fa-home"></i> <span class="nav-label">{{v.title}}</span> <span class="fa arrow"></span>
      </a>
      <ul class="nav nav-second-level collapse" :class="{in: v.open }" :style="{height: v.open ? 'auto' : 0}" v-if="v.children">
        <li v-for="(v1 , k1) in v.children" :key="k1">
          <a class="J_menuItem" @click.stop="itemClick(v1)" data-index="0">{{v1.title}}</a>
        </li>
      </ul>
    </li>

  </ul>
</template>

<script>

  export default {
    name: "Left",
    components:{
    },
    data() {
      return {
        items: [
          {
            title: "主页",
            icon: "fa-home",
            open:false,
            children: [
              {
                title: "测试",
                icon: "fa-home",
              },
              {
                title: "测试",
                icon: "fa-home",
              },
              {
                title: "测试",
                icon: "fa-home",
              },
            ]
          },
          {
            title: "主页",
            icon: "fa-home",
            open:false,
            children: [
              {
                title: "测试",
                icon: "fa-home",
              },
              {
                title: "测试",
                icon: "fa-home",
              },
              {
                title: "测试",
                icon: "fa-home",
              },
            ]
          },
        ]
      }
    },
    methods: {
      itemClick(v) {
        this.$emit('itemClick', v)
      },
      toggleBlock(v){
        v.open = !v.open
        if (v.open){
          this.items.forEach(item => {
            if (item !== v ){
              item.open = false
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>