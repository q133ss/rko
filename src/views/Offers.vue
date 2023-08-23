<template>
  <div class="offers">
    <HeadLayout :head="head" />
    <div class="offers__content">
      <ul class="offers__filters">
        <li class="offers__filter" v-for="(link, i) in filters" :key="i">
          <router-link class="offers__link" to="/" :class="{ active: i == 0 }">{{ link }}</router-link>
        </li>
      </ul>
      <ul class="offers__articles">
        <li class="offers__article" v-for="offer in offers" :key="offer.id">
          <OffevSmallArticle :offer="offer" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import SvgIcon from "@/components/shared/SvgIcon.vue";
  import OffevSmallArticle from "@/components/shared/OffevSmallArticle.vue";
  import HeadLayout from "@/components/shared/HeadLayout.vue";

  const head = {
    link: "/offers",
    icon: "bank",
    title: "Предложения",
  };

  const filters = ["Все предложения", "Регистрация бизнеса", "РКО", "Заявка на кредитную карту"];

  const offers = [
    {
      logo: "/images/logos/logo-bank-open.svg",
      name: "Открытие Банк",
      filter: "РКО",
      price: 5000,
      award: 2,
      offerLink: "OfferArticle",
      list: [
        "<b>0 ₽</b> безлимитные рублевые платежи",
        "<b>До 2 000 000 ₽ бесплатно</b> переводы физ.лицам в месяц",
        "<b>До 5 000 000 ₽ бесплатно</b> внутренние переводы ИП на личный счет",
        "<b>Кэшбэк до 5%</b> по бизнес-карте",
        "<b>до 450 000 ₽</b> на развитие бизнеса от партнеров Банка",
      ],
    },
    {
      logo: "/images/logos/mts-bank-logo.jpg",
      name: "МТС Банк",
      filter: "РКО",
      price: 2400,
      award: 4,
      list: [
        "<b>Преимущества открытия счета в МТС Банке:</b>",
        "<b>Реквизиты сразу после заявки:</b> работайте с договорами контрагентов без ожидания.",
        "<b>Бесплатные переводы: </b> совершайте бесплатные переводы на счета физлиц до 1 млн. ₽.",
        "<b>Бонусы от партнеров:</b> откройте счет и получайте доступ к предложениям от партнеров.",
        "<b>Надежность:</b> входим в ТОП-40 банков по активам.",
      ],
    },
  ];
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_offers.scss";
</style>
