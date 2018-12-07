<template>
  <div>
    <i-table :loading="loading" :columns="tcolumns" :data="tdata"></i-table>
    <div style="margin: 10px;overflow: hidden" v-if="total">
      <div style="float: right;">
        <page :total="total" :current="current" @on-change="changePage"></page>
      </div>
    </div>
  </div>
</template>
<script>
  import co from 'co'
  import objectPath from 'object-path'
  import CDropdown from '../CDropdown'

  export default {
    name: 'datatable',
    props: ['columns', 'data', 'api', 'filter'],
    components: {
      CDropdown
    },
    data() {
      return {
        tdata: [],
        tcolumns: [],
        loading: false,
        total: 0,
        current: 1,
      }
    },

    mounted() {
      this.columns.map(v => {
        if (v._render) {
          v.render = (h, params) => {
            let comps = [];
            v._render.forEach((conf, i) => {
              // 数组处理
              if (Array.isArray(conf)) {
                let items = [];
                conf.forEach(item => {
                  if (!item.show || item.show(params)) {
                    items.push({
                      label: item.title,
                      value: item.key,
                    })
                  }
                });

                // 二级菜单
                comps.push(h(CDropdown, {
                  props: {items},
                  on: {
                    'on-click': (v) => {
                      this.btnClick(v, params)
                    }
                  }
                }));
              } else {
                if (!conf.show || conf.show(params)) {
                  comps.push(
                    h('a', {
                      on: {
                        click: () => {
                          this.btnClick(conf.key, params)
                        },
                      },
                    }, conf.title),
                  )
                }
              }
            });

            // 添加线条放到外面
            let html = [];
            comps.forEach(item => {
              html.push(item);
              html.push(h('Divider', {
                props: {
                  type: 'vertical',
                }
              }));
            });

            html.pop();
            return h('div', html)
          };

          v.align || (v.align = 'center');
          v.title || (v.title = '操作');
        }

        // key命名空间支持
        if (/[\.\[]/.test(v.key) && !v.render) {
          v.render = (h, params) => {
            return h('span', {}, objectPath.get(params.row, v.key, v.default))
          }
        }

        this.tcolumns.push(v)

      });
      this.load(1)
    },

    methods: {
      changePage(p) {
        this.load(p)
      },
      load(p) {
        this.current = p;
        if (this.api) {
          let me = this;
          me.loading = true;
          co(function* () {
            let data = yield me.api(p, me.filter);
            me.tdata = data.items;
            me.total = data.count;
            me.loading = false
          }).catch(e => {
            me.loading = false;
            throw e
          })
        }
      },
      btnClick(key, param) {
        this.$emit('btnClick', key, param)
      },
    },
  }
</script>