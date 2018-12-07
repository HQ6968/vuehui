import vuex from 'vuex'
import Vue from "vue";
import app from './modules/app'
import container from './modules/container'


Vue.use(vuex);

export const store = new vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    app,
    container,
  },
});

window['store'] = store;