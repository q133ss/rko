<template>
  <router-link class="landing-button" :class="{ 'landing-button_success': active }" :to="to" v-if="to">
    <div class="landing-button__decorate">
      <div class="landing-button__text">
        <slot />
      </div>
    </div>
  </router-link>
  <button class="landing-button" :class="{ 'landing-button_success': active }" @click="toggleActive" v-else>
    <div class="landing-button__decorate">
      <div class="landing-button__text">
        <slot />
      </div>
    </div>
  </button>
</template>

<script setup>
  import { ref } from "@vue/reactivity";

  const active = ref(false);

  const props = defineProps({
    to: String,
  });

  function toggleActive() {
    if (active) return; // заглушка удалить (показывает активное состояние)
    active.value = !active.value;
  }
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_button.scss";
</style>
