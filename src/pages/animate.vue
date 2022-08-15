<template>
  <div class="box" :style="{ width: width + 'px' }">这是东</div>
  <button @click="change">click</button>

  <transition name="fade">
    <h1 v-if="showTitle">哈喽呀</h1>
  </transition>

  <transition name="modal">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">输入为空</div>
    </div>
  </transition>

  <ul v-if="todos.length">
    <transition-group name="flip-list">
      <li v-for="(todo, b) in todos" :key="b">
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span :class="{ done: todo.done }"> {{ todo }} </span>
        <span @click="removeTodo($event,b)">❌</span>
      </li>
    </transition-group>
  </ul>

  <span class="dustbin">🌶🐔</span>

  <div class="animation-wrap">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="animate" v-show="animate.show">
            🌶🐔
        </div>
    </transition>
  </div>



</template>

<script setup>
import { reactive, ref } from "vue";

let width = ref(100);
let showTitle = ref(true);
let showModal = ref(false);

let animate = reactive({
    show:false,
    el:null
})

let todos = ref([
  "语文",
  "数学",
  "语文",
  "数学",
  "语文",
  "数学",
  "语文",
  "数学",
]);

function change() {
  // width.value += 10;
  //   showTitle.value = !showTitle.value;
  //   showModal.value = true;
  //   setTimeout(() => {
  //     showModal.value = false;
  //   }, 1500);

  todos.value.push("啦啦");
}

function removeTodo(el,i) {
    console.log('删除',el)
    animate.el = el.target;
    animate.show = true;
  todos.value.splice(i, 1);
}

function beforeEnter(el) {
    console.log(el)
    let dom = animate.el
    let rect = dom.getBoundingClientRect();

    let x = window.innerWidth - rect.left - 60;
    let y = rect.top - 90;

    el.style.transform = `translate(-${x}px,${y}px)`

}

function enter(el,done) {
    console.log(el,done)
    document.body.offsetHeight
    el.style.transform =  `translate(0,0)`;
    el.addEventListener('transitionend',done);
}

function afterEnter(el) {
    console.log(el)
    animate.show = false;
    el.style.display = 'none';
}


</script>

<style>
.box {
  /* width: 100px; */
  background: red;
  height: 100px;
  position: relative;
  /* transition: width 1s linear; */
  /* transform: ; */
  /* translate: width 1s linear; */
  /* traslation:width 1s linear; */
  /* animation: move1111 2s linear infinite; */
}

@keyframes move1111 {
  0% {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}

.info {
  padding: 20px;
  color: white;
  background: red;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}

.flip-list-move {
  transition: transform 1s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  transform: translate(30px, 30px);
  opacity: 0;
}



.animation-wrap .animate {
    position: fixed;
    right: 100px;
    top: 10px;
    z-index: 100;
    transition: all 0.5s linear;
    height: 100px;
}

</style>
