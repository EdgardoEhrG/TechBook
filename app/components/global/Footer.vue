<template>
  <footer class="footer">Footer</footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 80px;

  @include flexer(row, center, center);

  font-size: 20px;

  background-color: rgb(237, 237, 237);
}
</style>
