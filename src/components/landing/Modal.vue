<template>
  <div class="modal" :class="{ modal_show: show }">
    <div class="modal-holder" @click="$emit('close')"></div>
    <div class="modal__content">
      <slot />
      <button class="modal__close" @click="$emit('close')">X</button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({ show: Boolean });
</script>

<style scoped lang="scss">
  .modal {
    pointer-events: none;
    visibility: hidden;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;

    transition: visibility 0.3s ease;
    &_show {
      pointer-events: auto;
      visibility: visible;
      .modal-holder {
        pointer-events: auto;
        opacity: 1;
      }
      .modal__content {
        opacity: 1;
      }
    }
  }
  .modal-holder {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    inset: 0;
    background: rgba(236, 236, 236, 0.1);
    backdrop-filter: blur(5px);
    transition: opacity 0.3s ease;
  }
  .modal__content {
    position: relative;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .modal__close {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: none;
    padding: 0;
    margin: 0;

    background-color: transparent;

    width: 1.8rem;
    height: 1.8rem;
    flex-shrink: 0;

    margin-left: 0.625rem;

    transition: transform 0.15s ease;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.2rem;
      height: 80%;
      background-color: var(--main-dark-blue-color);
      border-radius: 5rem;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
</style>
