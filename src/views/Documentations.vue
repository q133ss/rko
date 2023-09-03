<template>
  <div class="documentation">
    <HeadLayout :head="head" />
    <div class="documentation__title">Документация</div>
    <div class="documentation__docs">
      <div class="documentation__box">
        <div
          v-if="styleClass"
          class="documentation__box-disabled"
          @click="styleClass = !styleClass"
        ></div>
        <div class="documentation__descr">Документация для пользователя</div>
        <div class="documentation__text">Внутренняя документация сервиса</div>
        <div class="documentation__doc">
          <Button class="documentation__doc-button" icon="download" purple>Скачать</Button>
          <div class="documentation__doc-descr">Соглашение на обработку персональных данных</div>
        </div>
        <div class="documentation__doc">
          <Button class="documentation__doc-button" icon="download" purple>Скачать</Button>
          <div class="documentation__doc-descr">Политика конфиденциальности</div>
        </div>
      </div>
    </div>
    <div class="documentation__items">
      <div class="documentation__item">
        <div class="documentation__title">Пользовательское соглашение: №Дог-01/02-23/5</div>
        <Button class="documentation__item-button" icon="download" purple>Скачать соглашение</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HeadLayout from "@/components/shared/HeadLayout.vue";
  import Button from "@/components/shared/Button.vue";
  import { ref } from "@vue/reactivity";

  const showPrompt = ref(true);
  const notOperations = ref(true);
  const styleClass = ref(true);

  const head = {
    link: "/documentations",
    icon: "documents",
    title: "Документы",
  };
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_documentations.scss";
</style>
