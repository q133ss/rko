<template>
  <div class="applications">
    <div class="applications__head">
      <router-link class="applications__link" to="/">
        <SvgIcon class="applications__icon" name="form" />
        <div class="applications__link-text">Заявки</div>
      </router-link>
      <router-link class="applications__link" to="/">
        <SvgIcon class="applications__icon" name="services" />
        <div class="applications__link-text">Реф.Ссылки</div>
      </router-link>
      <Button class="applications__button" icon="export" yellow>Экспорт</Button>
      <Button class="applications__button" icon="plus" purple>Создать заявку</Button>
    </div>
    <div class="applications__inputs">
      <div class="applications__item">
        <CustomSelect title="Даты" placeholder="2023-07-09 - 2023-08-09" :sublistItems="dates" />
      </div>
      <label class="applications__label">
        <div class="applications__title">Введите ИНН</div>
        <input class="applications__input" type="text" placeholder="Введите ИНН" />
      </label>
      <label class="applications__label">
        <div class="applications__title">Телефон</div>
        <input class="applications__input" type="text" placeholder="Введите телефон" />
      </label>
      <div class="applications__item">
        <CustomSelect title="Офферы" placeholder="Выберите оффер" :sublistItems="dates" />
      </div>
      <div class="applications__item">
        <CustomSelect title="Статус" placeholder="Выберите статус" :sublistItems="dates" arrow />
      </div>
      <div class="applications__apply">
        <Button class="applications__apply-button" yellow>Применить</Button>
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
          <tr>
            <td>2023-07-09</td>
            <td>174</td>
            <td>63120000000</td>
            <td>Степанов Олег Александрович</td>
            <td>89999999999</td>
            <td>г.Сызрань Самарская обл.</td>
            <td>RKO</td>
            <td>(1) Локо Банк RKO</td>
            <td>Отправлен</td>
            <td>-</td>
            <td>4000</td>
          </tr>
          <tr>
            <td>2023-07-09</td>
            <td>174</td>
            <td>63120000000</td>
            <td>Степанов Олег Александрович</td>
            <td>89999999999</td>
            <td>г.Сызрань Самарская обл.</td>
            <td>RKO</td>
            <td>(1) Локо Банк RKO</td>
            <td>Отправлен</td>
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
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_applications.scss";
</style>
