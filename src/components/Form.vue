<script>
export default {
  emits: ['submit-form'],
  methods: {
    submitForm(e) {
      e.preventDefault()

      const name = document.querySelector('#name').value
      const surname = document.querySelector('#surname').value
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      const confirmPassword = document.querySelector('#confirm-password').value

      if (!name || !surname || !email || !password || !confirmPassword) {
        alert('Вы указали не все данные!')
        return
      } else {
        const userData = {
          name,
          surname,
          email,
          password,
          confirmPassword
        }

        this.$emit('submit-form', e, userData)
      }
    }
  }
}
</script>

<template>
  <form action="#" @submit="submitForm" class="popup__form form">
    <fieldset class="form__inputs-group">
      <label
        >Имя
        <input id="name" type="text" class="form__input" />
      </label>
      <label>
        Фамилия
        <input id="surname" type="text" class="form__input" />
      </label>
      <label>
        Электолнная почта
        <input id="email" type="email" class="form__input" />
      </label>
      <label>
        Пароль
        <input id="password" type="password" class="form__input" />
      </label>
      <label>
        Подтвердите пароль
        <input id="confirm-password" type="password" class="form__input" />
      </label>
    </fieldset>
    <button type="submit" class="button button_type_send form__button">Отправить</button>
  </form>
</template>

<style>
  .form {
    display: flex;
    flex-direction: column;
    padding: 12px 14px;
  }

  .form__inputs-group {
    border: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .form__inputs-group label:last-of-type {
    flex-grow: 1;
    margin-left: 18px;
  }

  .form__input {
    display: block;
    padding: 8px;
    border: none;
    border-bottom: 1px solid rgb(77, 76, 76);
    outline: none;
    font-weight: 100;
  }

  .form__button {
    margin: 40px auto 0;
    max-width: 150px;
  }

  @media screen and (max-width: 542px) {
    .form__inputs-group {
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
    }

    .form__inputs-group label:last-of-type {
      flex-grow: 0;
      margin-left: 0;
    }

    .form__input {
      width: 250px;
    }
  }
</style>
