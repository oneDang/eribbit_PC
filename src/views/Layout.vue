<template>
  <!-- 顶部 -->
  <AppTopnav></AppTopnav>
  <!-- 导航栏 -->
  <AppHeader></AppHeader>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <!-- 底部 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "../components/app-footer.vue";
export default {
  name: "xtx-layout",
  components: { AppTopnav, AppHeader, AppFooter },
  setup() {
    // 获取vuex仓库
    const store = useStore();
    const profile = computed(() => {
      return store.state.user.profile;
    });
    store.dispatch("category/getListAction");
    return {
      profile,
    };
  },
};
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
