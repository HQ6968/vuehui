<template>
  <div class="lang-dropdown">
    <Dropdown trigger="click">
      <a href="javascript:void(0)">
        <i class="fa fa-language fa-fw" aria-hidden="true"></i>{{ title }}
        <Icon :size="18" type="md-arrow-dropdown"/>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem v-for="(value, key) in localList" :name="key" :key="`lang-${key}`">{{ value
          }}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
  export default {
    name: 'lang',
    data() {
      return {
        langList: {
          'zh-CN': '语言',
          'zh-TW': '語言',
          'en-US': 'Lang',
        },
        localList: {
          'zh-CN': '中文简体',
          'zh-TW': '中文繁体',
          'en-US': 'English',
        },
      }
    },
    props: {
      lang: {
        type: String,
        default: 'zh-CN',
      },
    },
    watch: {
      lang(lang) {
        this.$i18n.locale = lang
      },
    },
    computed: {
      title() {
        return this.langList[this.lang]
      },
    },
  }
</script>

<style>
  .lang-dropdown {
    display: inline-block;
  }
  .lang-dropdown .ivu-dropdown-item {
    text-align: left;
  }
</style>