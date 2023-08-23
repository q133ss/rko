<template>
  <router-link
    class="button"
    :class="{
      button_purple: purple,
      button_orange: orange,
      button_green: green,
      button_yellow: yellow,
      button_brown: brown,
      'button_yellow-transparent': yellowTransparent,
    }"
    :to="to"
    v-if="to"
  >
    <div class="button__icon" v-if="icon">
      <SvgIcon class="button__svg" :name="icon" />
    </div>
    <slot />
  </router-link>
  <button
    class="button"
    :class="{
      button_purple: purple,
      button_orange: orange,
      button_green: green,
      button_yellow: yellow,
      button_brown: brown,
      'button_yellow-transparent': yellowTransparent,
    }"
    v-else
  >
    <div class="button__icon" v-if="icon">
      <SvgIcon class="button__svg" :name="icon" />
    </div>
    <slot />
  </button>
</template>

<script setup>
  import SvgIcon from "../shared/SvgIcon.vue";
  const props = defineProps({
    to: {
      type: String,
    },
    icon: {
      type: String,
    },
    purple: {
      type: Boolean,
    },
    orange: {
      type: Boolean,
    },
    brown: {
      type: Boolean,
    },
    green: {
      type: Boolean,
    },
    yellow: {
      type: Boolean,
    },
    yellowTransparent: {
      type: Boolean,
    },
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_button.scss";
</style>
