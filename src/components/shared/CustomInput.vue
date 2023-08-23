<template>
  <label class="custom-input" :class="{ 'custom-input_darken': darken }">
    <div class="custom-input__title" v-if="title">{{ title }}</div>
    <input class="custom-input__input" :type="type" :placeholder="placeholder" />
  </label>
</template>

<script setup>
  const props = defineProps({
    darken: Boolean,
    title: String,
    placeholder: String,
    type: {
      default: "text",
      type: String,
    },
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_custom-input.scss";
</style>
