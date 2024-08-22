<template>
  <h1 v-if="bool" @click="str += '!'">{{ str }}</h1>
  <h1 v-else @click="str += '!'">{{ str.split("").reverse().join("") }}</h1>
  <button v-on:click="(bool = !bool), (color += 150)" :style="'color:#' + color">
    Reverse
  </button>

  <div id="conditionalRendering">
    <div v-if="random > 0.5">Сейчас меня видно</div>
    <div v-else>А уже нет</div>
  </div>

  <div id="toDoRender">
    <ol>
      <li v-for="todo in todos">
      {{ todo.text }}
      </li>
    </ol>
  </div>

  <div id="gallery">
    <p @click="clickLeft">👈</p>
    <img  id="first" src="/public/durov.webp" alt="durov">
    <img  v-show="isHidden" id="second" src="/public/lomonosov.webp" alt="durov">
    <img  v-show="isHidden" id="third" src="/public/pushkin.webp" alt="durov">
    <p @click="clickRight">👉</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const str = ref("Damn it is vue");
const random = Math.random();
const bool = ref(true);
const color = ref(123123);
const isHidden = ref(false);
const todos = [{ text: "анжуманя делат" }, { text: "прес качат" }, { text: "бегит" }];


</script>

<style scoped>

h1 {
  user-select: none;
}
</style>
// https://v3.ru.vuejs.org/ru/guide/introduction.html#декларативная-отрисовка

// Создать html-страницу с галереей.
// В один момент времени на экране отображается одно изо-
// бражение и две кнопки: Назад и Вперед. При нажатии на кнопки
// изображения должны переключатся в указанном порядке. Когда
// следующего/предыдущего изображения нет, то соответствующую
// кнопку необходимо блокировать. Изображения хранить в заранее
// подготовленном массиве.
// https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fu2hokqg7m6Lf8XzSUQmFzEzsNa0rcHNd3HsfXplhaVeFoa32FakalGYWc30LL1EAq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FJS%2F%D0%94%D0%97%2FJS_DZ_Modul_4_Week_13_1532340649.pdf&name=JS_DZ_Modul_4_Week_13_1532340649.pdf&nosw=1