<template>
    <h1 @click="toggle">这是关于页面</h1>
    <Rate :value="score" :theme="theme" @update-rate="update" v-model="score"><span>我们的组件</span></Rate>
    <button @click="evaluate">评分</button>
    <button @click="changeTheme">切换主题</button>
</template>

<script setup>

import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';
import Rate from '../components/Rate.vue'
let score = ref(3)
const { isFullscreen,enter,exit,toggle } = useFullscreen()

let theme = ref('red')

function evaluate() {
    score.value = score.value - 1;
    if(score.value == -1) {
        score.value = 5;
    }
}

function changeTheme() {
    theme.value = ['red','blue','black','yellow','orange','green'][Math.floor(Math.random() * 6)];
}

function update(num) {
    score.value = num;
}

</script>