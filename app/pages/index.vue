<template>
  <div class="page">
    <Navigation />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
});
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;

  @include flexer(column, center, center);
}
</style>
