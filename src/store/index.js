import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegosJson: [],
    opinions:[]
  },
  getters: {
  },
  mutations: {
    changeJuegos(state,datosJson){
      state.juegosJson.push(datosJson)
    },
    changeOpinions(state,opinionObject){
      state.opinions.push(opinionObject);
    },
    delete(state,opinionIndex){
      state.opinions.splice(opinionIndex,1)
    },
    edit(state,editedOpinionObject){
      state.opinions.splice(editedOpinionObject.id,1,editedOpinionObject.opinion)
    }
  },
  actions: {
    async getJuegos({commit}){
      const res = await fetch('games.json');
      console.log(res);
      const json = await res.json();
      for(let datos of json){
        commit('changeJuegos',datos)
      }
    },
    insertOpinion({commit},opinionObject){
      console.log(`Objeto Opinon: ${opinionObject}`);
      commit('changeOpinions',opinionObject);

    },
    deleteOpinion({commit},opinionIndex){
      commit('delete',opinionIndex)
    },
    editOpinion({commit},editedOpinionObject){
      console.log(editedOpinionObject);
      commit('edit',editedOpinionObject)
    }
  },
  modules: {
  }
})
