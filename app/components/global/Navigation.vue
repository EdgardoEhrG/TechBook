<template>
  <nav class="navigation">
    <NavList :links="Devlinks" />
    <NavList :links="subDevlinks" />
  </nav>
</template>

<script lang="ts" setup>
import NavList from '~/containers/NavList.vue';

import type { NavLink } from '~/types';

const Devlinks: NavLink[] = [
  { id: 0, text: 'Front-end', iconName: 'pencil' },
  { id: 1, text: 'Back-end', iconName: 'server' },
  { id: 2, text: 'QA', iconName: 'bug' },
  { id: 3, text: 'System Development', iconName: 'code' },
];

const subDevlinks: NavLink[] = [
  { id: 4, text: 'Dev-ops', iconName: 'building' },
  { id: 5, text: 'Cyber Security', iconName: 'shield' },
  { id: 6, text: 'Other', iconName: 'book' },
  { id: 7, text: 'Business Analitics', iconName: 'chart-line' },
];
</script>

<style lang="scss" scoped>
.navigation {
  @include flexer(row, space-between, center);
}
</style>
