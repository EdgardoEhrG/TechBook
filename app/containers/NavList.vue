<template>
  <div class="navigation-list">
    <NavItem
      v-for="link of links"
      :key="link.id"
      :text="link.text"
      :iconName="link.iconName"
    />
  </div>
</template>

<script lang="ts" setup>
import NavItem from '@/components/NavItem.vue';
import type { NavLink } from '~/types';

const props = defineProps<{
  links: NavLink[];
}>();
</script>

<style lang="scss" scoped>
.navigation-list {
  width: 75%;

  @include flexer(column, center, center);
}
</style>
