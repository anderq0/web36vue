<template>
  <p>Turtle page</p>
  <img src="/ninjaturtles.webp" alt="" />

  <div class="turtlesBio flex aic jcc">
    <button @click="clickLeft"></button>
    <template v-for="image in images">
      <div class="character" :style="'display:' + image.isVisible">
        <img :src="image.src" :alt="image.alt" />
        <p >{{ image.description }}</p>
      </div>
    </template>
    <button @click="clickRight"></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let images = ref([
  {
    id: 0,
    src: "leonardo.png",
    alt: "leo",
    isVisible: "block",
    description:
      "Leonardo is the calm, focused, and disciplined leader of his brothers, the Teenage Mutant Ninja Turtles. Nicknamed Leo, he is usually seen with a blue mask and twin swords.",
  },
  {
    id: 1,
    src: "rafael.png",
    alt: "rafael",
    isVisible: "none",
    description:
      "Raphael is the most violent of the four brothers. A straight-up brawler, he has  very little patience for things like stealth, hiding in shadows, or keeping his voice down. While he's fiercely loyal to his brothers, he's also often the one giving them a hard time.",
  },
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
</script>

<style scoped>
.turtlesBio button{
  height: 400px;
}
.flex {
  display: flex;
  gap: 20px;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
.turtlesBio {
  display: flex;
  justify-content: center;
}
.character img {
  height: 250px;
  width: 250px;
}
.character {
  height: 400px;
  width: 400px;
  background-color: #1a1a1a;
}
</style>
