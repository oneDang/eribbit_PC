import { createStore } from "vuex";
// 创建仓库
// vue2.0 new Vuex.Store({})
// vue3.0 createStore({})
export default createStore({
  state: {
    name: "zs",
  },
  getters: {
    newName(state) {
      return state.name + "~~~~";
    },
  },
  mutations: {
    updateName(state) {
      state.name = "ks";
    },
  },
  actions: {
    upName(ctx) {
      // 发请求
      setTimeout(() => {
        ctx.commit("updateName");
      }, 1000);
    },
  },
  modules: {},
});
