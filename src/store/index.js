import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import cart from "./modules/cart";
import category from "./modules/category";
import user from "./modules/user";
export default createStore({
  modules: {
    cart,
    category,
    user,
  },
  plugins: [
    createPersistedstate({
      key: "erabbit-client-pc-store",
      paths: ["user", "cart"],
    }),
  ],
});
