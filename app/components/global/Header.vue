<template>
  <header class="header">Tech Book</header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;

  @include flexer(row, center, center);

  font-size: 20px;

  background-color: rgb(237, 237, 237);
}
</style>
