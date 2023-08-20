<template>
  <div class="cabinet">
    <div class="cabinet__user">
      <div class="cabinet__box cabinet__box_user">
        <div class="cabinet__photo">
          <img class="cabinet__img" src="/images/big-photo.jpg" alt="Степанов Олег Александрович" />
          <Button class="cabinet__upload" icon="picture" purple>Изменить фото</Button>
        </div>

        <label class="cabinet__label">
          <span class="cabinet__label-title">ФИО</span>
          <input class="default-input" type="text" placeholder="Степанов Олег Александрович" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">E-Mail</span>
          <input class="default-input" type="email" placeholder="StepanovOOO@gmail.com" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Телефон</span>
          <input class="default-input" type="tel" placeholder="+7 (000) 000 - 00 - 00" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Сайт</span>
          <input class="default-input" type="text" placeholder="rkoservice.ru" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Соц.сети</span>
          <input class="default-input" type="text" placeholder="olegstp/vk.com" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Соц.сети</span>
          <input class="default-input" type="text" placeholder="olegstp/tm#523234" />
        </label>
      </div>
    </div>
    <div class="cabinet__info">
      <div class="cabinet__head-buttons">
        <Button class="cabinet__head-button" icon="key" orange>Изменить пароль</Button>
        <Button class="cabinet__head-button" icon="save" green>Сохранить изменения</Button>
      </div>
      <div class="cabinet__box">
        <div class="cabinet__title">Информация и платежные реквизиты</div>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Адрес для корреспонденции</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">ИНН</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">ОГРН</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">БИК</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Наименование банка</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Корреспондентский счет</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Расчетный счет</span>
          <input class="default-input" type="text" placeholder="" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text"></span>
          <Checkbox>Наличие электронного документооборота</Checkbox>
        </label>
      </div>
      <div class="cabinet__docs">
        <div class="cabinet__box">
          <div class="cabinet__title">Документация</div>
          <div class="cabinet__text">
            Просьба прикрепить нижеуказанные документы. <br />
            Данные документы позволят завершить процедуру регистрации и <br />
            осуществлять оплаты агентского вознаграждения.
          </div>
          <div class="cabinet__doc">
            <Button class="cabinet__doc-button" icon="sharp" purple>Прикрепить</Button>
            <div class="cabinet__doc-descr">Фото/скан первого разворота паспорта</div>
          </div>
          <div class="cabinet__doc">
            <Button class="cabinet__doc-button" icon="sharp" purple>Прикрепить</Button>
            <div class="cabinet__doc-descr">Фото/скан разворота с пропиской паспорта</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/shared/Button.vue";
  import Checkbox from "@/components/shared/Checkbox.vue";
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_cabinet.scss";
</style>
