<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <p>{{ $store.state.name }}</p>
  <p>{{ $store.getters["newName"] }}</p>
  <button @click="actionFN">actionFN</button>
  <router-view />
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    // 使用vuex仓库
    const store = useStore();
    console.log(store.state.name);
    console.log(store.getters.newName);
    const actionFN = () => {
      // 提交根模块的mutation函数
      // store.commit("updateName");
      // 调用根模块的action函数
      store.dispatch("upName");
    };
    return {
      actionFN,
    };
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
