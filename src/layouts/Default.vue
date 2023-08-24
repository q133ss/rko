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
    display: flex;
  }
  .inner {
    flex: 1;
    padding: 1rem 2rem;
    @media (max-width: 1024px) {
      padding: 1rem;
    }
  }
  .top-info {
    margin-bottom: 2rem;
  }
</style>
