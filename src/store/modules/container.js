export default {
  namespaced: true,
  state:{
    container:{}
  },
  mutations:{
    removeId(state,id){
      if(state.container.hasOwnProperty(id)){
        delete state.container[id]
      }
    },
    saveIdData(state , data){
      state.container = {...state.container , [data.id]:data.data}
    },
  },
  getters:{
    getById: state => id => {
      return state.container[id] ? state.container[id] : {}
    }
  },
  actions:{},
}