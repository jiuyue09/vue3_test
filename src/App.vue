<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/animate">动画</router-link>
  </div>
  <router-view></router-view>
    <!-- <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition> -->

  <!-- <HelloWorld msg="哈哈哈 " /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
