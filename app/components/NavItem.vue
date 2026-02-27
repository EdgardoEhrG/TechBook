<template>
  <div class="nav-item-container">
    <FontAwesomeIcon :icon="iconName" />
    <span class="nav-item-text">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
  iconName: string;
}>();
</script>

<style lang="scss" scoped>
.nav-item-container {
  width: 500px;

  @include flexer(row, flex-start, center);

  margin: 10px;
  margin-bottom: 5px;
  padding: 10px;
  padding-left: 150px;

  background-color: rgb(180, 179, 178);

  border-radius: 10px;

  &:hover {
    background-color: rgb(218, 214, 209);
    cursor: pointer;
  }

  .nav-item-text {
    display: inline-block;

    margin-left: 10px;

    font-size: 20px;
  }
}
</style>
