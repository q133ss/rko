<template>
  <button class="button" :class="{ button_purple: purple, button_orange: orange, button_green: green, button_yellow: yellow }">
    <div class="button__icon" v-if="icon">
      <SvgIcon class="button__svg" :name="icon" />
    </div>
    <slot />
  </button>
</template>

<script setup>
  import SvgIcon from "../shared/SvgIcon.vue";
  const props = defineProps({
    icon: {
      type: String,
    },
    purple: {
      type: Boolean,
    },
    orange: {
      type: Boolean,
    },
    green: {
      type: Boolean,
    },
    yellow: {
      type: Boolean,
    },
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_button.scss";
</style>
