<template>
  <div class="layout-head" v-if="head">
    <router-link
      class="layout-head__link"
      :to="head.link"
      :class="{ 'router-link-active': $route.path.includes(head.link) }"
    >
      <SvgIcon class="layout-head__icon" :name="head.icon" v-if="head.icon" />
      <div class="layout-head__title" v-if="head.title">{{ head.title }}</div>
    </router-link>
    <div class="layout-head__text" v-if="head.text">{{ head.text }}</div>
  </div>
</template>

<script setup>
  import SvgIcon from "@/components/shared/SvgIcon.vue";
  const props = defineProps({
    head: Object,
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_head-layout.scss";
</style>
