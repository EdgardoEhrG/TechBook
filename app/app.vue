<template>
  <div class="root-container">
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.root-container {
  width: 100%;
  height: 100%;
}
</style>
