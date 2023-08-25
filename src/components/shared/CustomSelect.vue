<template>
  <div class="custom-select" :class="{ 'custom-select_open': showSubmenu && arrow }">
    <div class="custom-select__title">{{ title }}</div>
    <button class="custom-select__button" :class="{ 'custom-select__button_small': icon }" @click="toggleSubmenu">
      {{ placeholder }}
      <span class="custom-select__icon" v-if="arrow"></span>
      <span class="custom-select__custom-icon" v-if="icon">
        <img :src="icon" alt="Иконка" aria-hidden="true" />
      </span>
    </button>
    <div class="custom-select__selecteds" v-if="selecteds.length > 0">
      <div class="custom-select__selected" v-for="(select, index) in selecteds" :key="index">
        {{ select.title }} <button class="custom-select__cross" @click="removeItem(index)"></button>
      </div>
    </div>
    <div class="custom-select__dropdown" v-if="showSubmenu">
      <ul class="custom-select__menu">
        <li class="custom-select__item" v-for="item in sublistItems" :key="item.id">
          <button class="custom-select__item-btn" @click="addSelect(item)">{{ item.title }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";

  const showSubmenu = ref(false);
  const selecteds = reactive([]);

  const props = defineProps({
    title: String,
    placeholder: String,
    icon: String,
    sublistItems: Array,
    arrow: Boolean,
  });

  function toggleSubmenu() {
    showSubmenu.value = !showSubmenu.value;
  }

  function closeSubmenu() {
    showSubmenu.value = false;
  }

  function addSelect(e) {
    selecteds.push(e);
  }
  function removeItem(index) {
    selecteds.splice(index, 1);
  }
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_custom-select.scss";
</style>
