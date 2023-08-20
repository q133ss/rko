<script setup>
  import MainLeftNavMenu from "./components/shared/MainLeftNavMenu.vue";
  import MainHeadInfo from "./components/shared/MainHeadInfo.vue";
  import MainPage from "./components/pages/main/MainPage.vue";
</script>

<template>
  <div class="wrap">
    <MainLeftNavMenu />
    <div class="inner">
      <MainHeadInfo class="top-info" />
      <div class="content">
        <MainPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    display: flex;
  }
  .inner {
    flex: 1;
    padding: 1rem 2rem;
  }
  .top-info {
    margin-bottom: 2rem;
  }
</style>
