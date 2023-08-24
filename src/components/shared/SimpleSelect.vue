<template>
  <VueMultiselect
    class="simple-select"
    :options="options"
    :searchable="false"
    :close-on-select="false"
    :show-labels="false"
    :placeholder="placeholder"
    ref="multiselect"
  />
</template>

<script setup>
  import { onMounted, ref } from "@vue/runtime-core";
  import VueMultiselect from "vue-multiselect";

  const multiselect = ref(null);
  const props = defineProps({
    options: Array,
    placeholder: String,
  });
</script>

<style lang="scss">
  @import "vue-multiselect/dist/vue-multiselect.css";
  @import '@/assets/scss/components/_simple-select.scss';
</style>
