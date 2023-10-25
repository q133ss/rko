<template>
  <div class="applications">
    <div class="applications__head">
      <router-link class="applications__link" to="/applications">
        <SvgIcon class="applications__icon" name="form" />
        <div class="applications__link-text">Заявки</div>
      </router-link>
      <router-link class="applications__link" to="/referrals">
        <SvgIcon class="applications__icon" name="services" />
        <div class="applications__link-text">Реф.Ссылки</div>
      </router-link>
      <Button class="applications__button" icon="export" yellow>Экспорт</Button>
      <Button class="applications__button" icon="plus" to="/applications/create" purple> Создать заявку </Button>
    </div>
    <div class="applications__inputs">
      <div class="applications__item">
        <DateSelect />
      </div>
      <div class="applications__item">
<!--        <CustomInput title="ИНН" :model="inn" @update:model="test" placeholder="Введите ИНН" :sublistItems="dates" />-->

        <label class="custom-input">
          <div class="custom-input__title">ИНН</div>
          <input class="custom-input__input" type="text" v-model="inn" placeholder="Введите ИНН" />
        </label>

      </div>
      <div class="applications__item">
<!--        <CustomInput title="Телефон" placeholder="Введите телефон" :sublistItems="dates" />-->

        <label class="custom-input">
          <div class="custom-input__title">Телефон</div>
          <input class="custom-input__input" type="text" v-model="phone" placeholder="Введите телефон" />
        </label>

      </div>
      <div class="applications__item">
        <CustomSelect
          title="Офферы"
          placeholder="Выберите оффер"
          icon="/images/icons/loupe.svg"
          :sublistItems="offers"
        />
      </div>
      <div class="applications__item">
        <CustomSelect title="Статус" placeholder="Выберите статус" :sublistItems="status" arrow />
      </div>
      <div class="applications__apply">
        <Button class="applications__apply-button" @click="filter" yellow>Применить</Button>
      </div>
    </div>
    <div class="applications__info">
      <table class="applications__table">
        <thead>
          <tr>
            <th>Даты</th>
            <th>Номер</th>
            <th>ИНН</th>
            <th>Юр.лицо</th>
            <th>Телефон</th>
            <th>Город</th>
            <th>Продукт</th>
            <th>Оффер</th>
            <th>Статус</th>
            <th>Детализация</th>
            <th>Доход</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="app in apps">
            <td>2023-07-09</td>
            <td>{{app.attributes.id}}</td>
            <td>{{app.attributes.inn}}</td>
            <td>{{app.attributes.client_name}}</td>
            <td>{{app.attributes.phone}}</td>
            <td>{{app.attributes.city}}</td>
            <td>RKO???</td>
            <td>{{app.attributes.offer_id}}</td>
            <td>{{app.attributes.status}}</td>
            <td>{{app.attributes.detailing}}</td>
            <td>{{app.attributes.earnings}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import SvgIcon from "@/components/shared/SvgIcon.vue";
  import Button from "@/components/shared/Button.vue";
  import CustomSelect from "@/components/shared/CustomSelect.vue";
  import CustomInput from "@/components/shared/CustomInput.vue";
  import DateSelect from "@/components/shared/DateSelect.vue";

  const showSelect = false;
  const hasPoint = false;

  const dates = [
    {
      title: "Сегодня",
      value: "date-1",
    },
    {
      title: "Вчера",
      value: "date-2",
    },
    {
      title: "Неделя",
      value: "date-3",
    },
    {
      title: "Месяц",
      value: "date-4",
    },
    {
      title: "Квартал",
      value: "date-5",
    },
  ];
  const status = [
    {
      title: "Статус 1 (Инфо)",
      value: "status-1",
    },
    {
      title: "Статус 2 (Инфо)",
      value: "status-2",
    },
    {
      title: "Статус 3 (Инфо)",
      value: "status-3",
    },
    {
      title: "Статус 4 (Инфо)",
      value: "status-4",
    },
    {
      title: "Статус 5 (Инфо)",
      value: "status-5",
    },
  ];
  const offers = [
    {
      title: "(3) Локо Банк РКО",
      value: "offer-1",
    },
    {
      title: "(12) Касса Тинькофф",
      value: "offer-2",
    },
    {
      title: "(10) Тинькофф - Кредит для Бизнеса",
      value: "offer-3",
    },
    {
      title: "(3) Локо Банк РКО",
      value: "offer-1",
    },
    {
      title: "(12) Касса Тинькофф",
      value: "offer-2",
    },
    {
      title: "(10) Тинькофф - Кредит для Бизнеса",
      value: "offer-3",
    },
  ];
</script>

<script>
import apiService from "../services/apiService.js";

export default {
  data() {
    return {
      apps: {},
      inn: null,
      dates: null,
      phone: null,
      offerId: null,
      status: null,
    }
  },
  async mounted() {
    this.apps = await apiService.getBids(this.inn, this.dates, this.phone, this.offerId, this.status)
    console.log(this.apps)
  },
  methods: {
    async filter() {
      console.log(this.inn,this.phone)
      this.apps = await apiService.getBids(this.inn, this.dates, this.phone, this.offerId, this.status)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_applications.scss";
  @import "@/assets/scss/components/_custom-input.scss";
</style>
