<template>
  <p>X:{{ x}}   Y:{{ y }}</p>
  <HeaderComponent>
    <p>𓆝</p>
    <p>тэг</p>
  </HeaderComponent>
  <div id="conditionalRendering">
    <div v-if="random > 0.5">Сейчас меня видно</div>
    <div v-else>А уже нет</div>
  </div>

  <!-- <ol>
    <template v-for="todo in todos">
      <TodoElement :todo="todo"></TodoElement>
    </template>
  </ol> -->
  <div class="gallery flex aic jcc">
    <button @click="clickLeft">👈</button>

    <template v-for="image in images">
      <img :src="image.src" :alt="image.alt" :style="'display:' + image.isVisible" />
    </template>

    <button @click="clickRight">👉</button>
  </div>

  <CalendarTable></CalendarTable>
  <FontManager></FontManager>

  <h1 @click="counterStore.increment">{{counterStore.count}}</h1>
</template>

<script setup lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import CalendarTable from "../components/CalendarTable.vue";
//import ToDoElement from '../components/TodoElement.vue';
import { useCounterStore } from '../source/counterCompos.ts';
import FontManager from "../components/FontManager.vue";
// import MemoryGame from "../components/MemoryGame.vue";
// import ForecastTable from "./components/ForecastTable.vue";
import {useMouse} from '../composables/mouse.ts'
import { ref } from "vue";

const {x,y} = useMouse()
const counterStore = useCounterStore()

const random = ref(Math.random());

let images = ref([
  { id: 0, src: "/web36vue/durov.webp", alt: "durov", isVisible: "block" },
  { id: 1, src: "/web36vue/lomonosov.webp", alt: "lomonosov", isVisible: "none" },
  { id: 2, src: "/web36vue/pushkin.webp", alt: "pushkin", isVisible: "none" },
]);

let currentSlide = 0;
let imagesSize = images.value.length;

const clickLeft = () => {
  currentSlide = (currentSlide - 1 + imagesSize) % imagesSize;
  resultOfSlider();
};
const clickRight = () => {
  currentSlide = (currentSlide + 1) % imagesSize; // после последней пикчи переключается на первый
  resultOfSlider();
};
const resultOfSlider = () => {
  for (let el of images.value) {
    el.isVisible = el.id == currentSlide ? "block" : "none";
  }
};

const todos = ref([
  { text: "анжуманя делат" },
  { text: "прес качат" },
  { text: "бегит" },
]);
</script>

<style scoped>
.flex {
  display: flex;
  gap: 20px;
}
.fdc {
  flex-direction: column;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
.gallery {
  display: flex;
  justify-content: center;
}
.gallery img {
  height: 350px;
  width: 350px;
}
h1 {
  user-select: none;
}
</style>