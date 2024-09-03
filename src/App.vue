<template>
  <HeaderComponent>
    <p>𓆝</p>
    <p>тэг</p>
  </HeaderComponent>
  <div id="conditionalRendering">
    <div v-if="random > 0.5">Сейчас меня видно</div>
    <div v-else>А уже нет</div>
  </div>

  <ol>
    <template v-for="todo in todos">
      <TodoElement :todo="todo"></TodoElement>
    </template>
  </ol>
  <div class="gallery flex aic jcc">
    <button @click="clickLeft">👈</button>

    <template v-for="image in images">
      <img :src="image.src" :alt="image.alt" :style="'display:' + image.isVisible" />
    </template>

    <button @click="clickRight">👉</button>
  </div>

  <CalendarTable></CalendarTable>
  <ForecastTable></ForecastTable>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import CalendarTable from "./components/CalendarTable.vue";
import TodoElement from "./components/TodoElement.vue";
import ForecastTable from "./components/ForecastTable.vue";
import { ref } from "vue";

const random = ref(Math.random());

let images = ref([
  { id: 0, src: "durov.webp", alt: "durov", isVisible: "block" },
  { id: 1, src: "lomonosov.webp", alt: "lomonosov", isVisible: "none" },
  { id: 2, src: "pushkin.webp", alt: "pushkin", isVisible: "none" },
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
// https://v3.ru.vuejs.org/ru/guide/introduction.html#декларативная-отрисовка // Создать
// Создать html-страницу с блоками информации, которые от- // крываются по щелчку на
заголовок. В один момент времени может // быть развернут только один блок информации. //
https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fu2hokqg7m6Lf8XzSUQmFzEzsNa0rcHNd3HsfXplhaVeFoa32FakalGYWc30LL1EAq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FJS%2F%D0%94%D0%97%2FJS_DZ_Modul_4_Week_13_1532340649.pdf&name=JS_DZ_Modul_4_Week_13_1532340649.pdf
