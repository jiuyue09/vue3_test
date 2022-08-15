<template>
  <div :style="fontstyle">
    <!-- {{ rate }} -->
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span
          @mouseover="mouseOver(num)"
          @click="onRate(num)"
          v-for="num in 5"
          :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from "vue";

let rate = computed(() => {
  return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value);
});
let props = defineProps({
  value: Number,
  modelValue:Number,
  theme: { type: String, default: "orange" },
});

console.log(props);

let width = ref(props.value);
// let emits = defineEmits('update-rate');
let emits = defineEmits(['update:modelValue']);


const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#faab14",
  green: "#73d13d",
  blue: "#40a9ff",
};

const fontstyle = computed(() => {
  const color = `color:${themeObj[props.theme]};`;
  return color;
});

function mouseOut() {
  console.log("mouseOut,mouseOut,mouseOut");
  width.value = props.value;
}

function mouseOver(i) {
  width.value = i;
  console.log("mouseOver,mouseOver,mouseOver");
}

function onRate(num) {
  emits('update-rate',num)
}

const fontwidth = computed(() => `width:${width.value}em`);
</script>

<style>
.rate {
  display: inline-block;
  position: relative;
}

.rate > span.hollow {
  /* text-decoration: line-through;
  color: gray; */
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
