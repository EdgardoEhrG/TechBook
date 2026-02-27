<template>
  <div class="default-layout">
    <Header />

    <main class="content">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100%;

  @include flexer(column, space-between, center);

  .content {
    width: 100%;
    height: 100%;
  }

  background-color: white;
}
</style>
