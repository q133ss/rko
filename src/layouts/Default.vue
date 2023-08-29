<template>
  <div class="wrap">
    <MainLeftNavMenu />
    <div class="inner">
      <MainHeadInfo class="top-info" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
  import MainLeftNavMenu from "@/components/shared/MainLeftNavMenu.vue";
  import MainHeadInfo from "@/components/shared/MainHeadInfo.vue";
</script>

<style scoped lang="scss">
  .wrap {
    background-color: var(--main-bg-color);
    @media (min-width: 1025px) {
      display: flex;
    }
  }
  .inner {
    flex: 1;
    padding: 1rem 2rem;
    overflow: auto;
    @media (max-width: 1366px) {
      padding: 1rem;
    }
    @media (max-width: 768px) {
      min-height: 100vh;
    }
  }
  .top-info {
    margin-bottom: 2rem;
  }
</style>
