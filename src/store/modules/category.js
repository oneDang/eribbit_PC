import { topCategory } from "@/api/constants";
import { getAllCategory } from "@/api/category";
// 分类模块
export default {
  namespaced: true,
  state() {
    return {
      // 分类信息集合
      list: topCategory.map((item) => {
        return {
          name: item,
        };
      }),
    };
  },
  mutations: {
    setList(state, headCategory) {
      state.list = headCategory;
    },
  },
  actions: {
    async getListAction({ commit }) {
      const { result } = await getAllCategory();
      commit("setList", result);
    },
  },
};
