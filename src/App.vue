<template>
  <el-container>
    <el-header>
      <el-menu :default-active="state.activeIndex" mode="horizontal" class="menu" @select="handleSelect">
        <el-menu-item index="home">Home</el-menu-item>
        <el-menu-item index="about">About</el-menu-item>
        <el-menu-item index="contact">Contact</el-menu-item>
      </el-menu>
    </el-header>
    <div v-if="state.activeIndex === 'home'">
      <TaskApp />
    </div>
  </el-container>
</template>

<script>
import { reactive } from 'vue';
import TaskApp from './components/TaskApp.vue';
import { ElMenu, ElMenuItem } from 'element-plus';

import 'element-plus/es/components/menu/style/css';
import 'element-plus/es/components/menu-item/style/css';

export default{
  name: 'App',
  components: {
    TaskApp,
    ElMenu,
    ElMenuItem
  },
  setup() {

    const state = reactive({activeIndex: 'home'});

    function handleSelect(index) {
      state.activeIndex = index;
      console.log(state.activeIndex);
    }
    return {
      state,
      handleSelect
    };
  }
};
</script>

<style>

.menu {
  justify-content: center;
  width: 100%;
}

</style>