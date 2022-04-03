import { createStore } from 'vuex'
import  createPersistedState  from  'vuex-persistedstate'

export default createStore({
  state: {
    chocolate: 10,
    oreo: 10,
    chocoflan: 10,
    moka: 10,
    marino: 20,
    hb: 20,
    pedidos: [],
    pedidoAux : {nombre: "", telefono: "", email: "", sabores: [], adornos: [], descripcion: ""}
  },
  getters: {
    getChocolate(state){
      return state.chocolate;
    },
    getOreo(state){
      return state.oreo;
    },
    getChocoflan(state){
      return state.chocoflan;
    },
    getMoka(state){
      return state.moka;
    },
    getPedidoAux(state){
      return state.pedidoAux;
    }
  },
  mutations: {
    restarChocolate(state){
      state.chocolate -= 1;
    },
    restarOreo(state){
      state.oreo -= 1;
    },
    restarChocoflan(state){
      state.chocoflan -= 1;
    },
    restarMoka(state){
      state.moka -= 1;
    },
    restarMarino(state){
      state.marino -= 1;
    },
    restarHB(state){
      state.hb -= 1;
    },
    agregarPedido(state, pedido){
      state.pedidos.push(pedido);
    }
  },
  actions: {
    agregarPedido({commit}, pedido){
      commit("agregarPedido", pedido);
    }
  },
  plugins: [createPersistedState()],
  modules: {
  }
})