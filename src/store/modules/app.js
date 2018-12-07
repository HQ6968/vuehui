import co from 'co'
import {menuList} from "../../service";

export default {
  namespaced: true,
  state:{
    menus:[]
  },
  mutations:{
    setMenus(state, data){
      state.menus = data
    }
  },
  getters:{
  },
  actions:{
    getMenuAction({commit}){
      return co(function *() {
        let data = yield menuList()
        commit('setMenus' , data)
        return data
      })
    }
  },
}