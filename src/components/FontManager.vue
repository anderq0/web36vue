<template>
  <div class="fontManager flex fdc jcc aic">
    <div class="chooseAnswer flex">
      <div class="rovniedivi">
        <label for="checkboxBold">Bold</label>
        <input v-model="boldModel" type="checkbox" />
        <label for="checkboxItalic">Italic</label>
        <input v-model="italicsModel" type="checkbox" />
        <label for="checkboxUnderlined">Underlined</label>
        <input v-model="underlinedModel" type="checkbox" />
      </div>

      <div class="rovniedivi">
        <label for="radioLeft">Left</label>
        <input
          name="checkboxes"
          id="left"
          value="text-align: start;"
          v-model="radioModel"
          type="radio"
        />
        <label for="radioJustify">Justify</label>
        <input
          checked
          name="checkboxes"
          id="justify"
          value="text-align: center;"
          v-model="radioModel"
          type="radio"
        />
        <label for="radioRight">Right</label>
        <input
          name="checkboxes"
          id="right"
          value="text-align: end;"
          v-model="radioModel"
          type="radio"
        />
      </div>
    </div>

    <textarea v-model="inputTextManagerModel" class="inputTextManager"></textarea>
    <button @click="resTextManager">Show text</button>
    <div class="flex">
      <div class="textManagerResultDiv" :style="stylesRes">{{ textManagerResult }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const radioModel = defineModel("radioLeftModel");
const textManagerResult = ref("" as string | undefined);
const underlinedModel = defineModel("underlinedModel");
const boldModel = defineModel("boldModel");
const italicsModel = defineModel("italicsModel");
const inputTextManagerModel = defineModel<string>("inputTextManagerModel");
const stylesRes = ref("");
const resTextManager = () => {
  textManagerResult.value = inputTextManagerModel.value;
  stylesRes.value = "";
  if (underlinedModel.value == true) {
    stylesRes.value += "text-decoration: underline;";
  }
  if (boldModel.value == true) {
    stylesRes.value += "font-weight: bold;";
  }
  if (italicsModel.value == true) {
    stylesRes.value += "font-style: italic;";
  }
  stylesRes.value += radioModel.value;
  console.log(radioModel.value);
};
</script>

<style scoped>
.fdc {
  flex-direction: column;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
.rovniedivi {
  display: flex;
  gap: 10px;
  margin-right: 30px;
}
.textManagerResultDiv {
  background-color: rgb(59 59 59);
  height: 200px;
  width: 600px;
  font-size: 20px;
}
.inputTextManager {
  height: 200px;
  font-size: 20px;
  width: 600px;
  resize: none;
}
.flex {
  display: flex;
  gap: 20px;
}
</style>
