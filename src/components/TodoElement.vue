<template>
    <li> {{ todo.text }}</li>
</template>

<script setup lang="ts">
defineProps(['todo'])
</script>

<style scoped></style>
