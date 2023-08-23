<template>
  <div class="offer" v-if="offer">
    <div class="offer__head">
      <div class="offer__left">
        <div class="offer__logo" v-if="offer.logo">
          <img class="offer__img" :src="offer.logo" :alt="offer.name" />
        </div>
        <div class="offer__name">
          {{ offer.name }} <br />
          {{ offer.filter }}
        </div>
      </div>
      <div class="offer__right">
        <div class="offer__price">
          Оплата: <b>{{ offer.price }} ₽</b>
        </div>
        <div class="offer__awrad">+{{ offer.award }} вознаграждения</div>
      </div>
    </div>
    <div class="offer__wrap">
      <div class="offer__info">
        <div class="offer__content" v-html="offer.text" v-if="offer.text"></div>
        <ul class="offer__list" v-if="offer.list">
          <li class="offer__item" v-for="item in offer.list" :key="item.id" v-html="item"></li>
        </ul>
      </div>
      <div class="offer__buttons">
        <Button class="offer__button" yellowTransparent :to="{ name: offer.offerLink }">Информация по офферу</Button>
        <Button class="offer__button" yellow>Оставить заявку</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/shared/Button.vue";
  const props = defineProps({
    offer: Object,
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_offer.scss";
</style>
