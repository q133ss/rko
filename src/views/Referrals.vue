<template>
  <div class="referrals">
    <div class="referrals__head">
      <router-link class="referrals__link" to="/applications">
        <SvgIcon class="referrals__icon" name="form" />
        <div class="referrals__link-text">Заявки</div>
      </router-link>
      <router-link class="referrals__link" to="/referrals">
        <SvgIcon class="referrals__icon" name="services" />
        <div class="referrals__link-text">Реф.Ссылки</div>
      </router-link>
      <Button class="referrals__button" icon="export" yellow>Экспорт</Button>
      <Button class="referrals__button" icon="plus" to="/applications/create" purple>Создать заявку</Button>
    </div>
    <div class="referrals__content">
      <div class="referrals__inputs">
        <div class="referrals__item">
          <DateSelect />
        </div>
        <div class="referrals__item">
          <CustomSelect
            title="Офферы"
            placeholder="Выберите оффер"
            icon="/images/icons/loupe.svg"
            :sublistItems="offers"
          />
        </div>
        <div class="referrals__item">
          <CustomSelect title="Статус (Конверсии)" placeholder="Выберите статус" :sublistItems="status" arrow />
        </div>
      </div>
      <div class="referrals__apply">
        <Button class="referrals__apply-button" yellow>Применить</Button>
      </div>
    </div>
    <div class="referrals__info">
      <table class="referrals__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата создания</th>
            <th>Оффер</th>
            <th>ГЕО | IP</th>
            <th>Устройство</th>
            <th>Статус</th>
            <th>Доход</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Referrer</th>
            <th>Комментарий</th>
            <th>ID Рекламодателя</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID0043</td>
            <td>2023-07-09</td>
            <td>(1) Локо Банк RKO</td>
            <td>65:5453:543</td>
            <td>-</td>
            <td>Отправлен</td>
            <td>799</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>4000</td>
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

<style scoped lang="scss">
  @import "@/assets/scss/pages/_referrals.scss";
</style>
