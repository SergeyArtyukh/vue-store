<template lang="html">
  <div class="v-container">
    <div class="v-profile-page__login-wrapper">
      <div class="title-login-form">
        <p>{{titleLoginForm}}</p>
      </div>
      <form class="" action="" method="post">
        <div
        v-for="(loginElem, index) in loginElems"
        :key="index"
        class="login-form-container">
          <div v-if="loginElem.inputStatus === true" class="input-container">
            <span>{{loginElem.title}}<span style="color:red;">*</span></span>
            <input type="text">
          </div>
          <div class="buttons-wrapper">
            <div
            v-for="(loginButton, index) in loginElem.loginButtons"
            :key="index"
            class="button-container">
              <div :class="loginButton.buttonClass">
                <button>{{loginButton.buttonTitle}}</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleLoginForm: 'Вход в кабинет покупателя',
      loginElems: [
        {
          title: 'Телефон или Email',
          inputStatus: true
        },
        {
          title: 'Пароль',
          inputStatus: true
        },
        {
          loginButtons: [
            {
              buttonTitle: 'Войти',
              buttonClass: 'login-button-class'
            },
            {
              buttonTitle: 'Восстановить пароль',
              buttonClass: 'middle-button-class'
            },
            {
              buttonTitle: 'Зарегистрироаться',
              buttonClass: 'default-button-class'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-profile-page__login-wrapper {
  padding: 20px 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  .title-login-form {
    p {
      font-size: 35px;
      font-weight: bold;
    }
  }
  form {
    width: 100%;
    .login-form-container {
      text-align: left;
      .buttons-wrapper {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .button-container {
          .login-button-class {
            button {
              background-color: #7fc12c;
              color: #FAFDF6;
              border: none;
              width: 5.1em;
              height: 2.5em;
              font-size: 15px;
              font-weight: bold;
              &:hover {
                background-color: #94db36;
              }
            }
          }
          .middle-button-class {
            margin: 0 20px;
          }
          .middle-button-class,
          .default-button-class {
            button {
              background-color: transparent;
              color: #76BC1F;
              border: none;
              border-bottom: 1px green dotted;
              padding: 0;
              font-size: 15px;
            }
          }
        }
      }
      .input-container {
        display: flex;
        flex-direction: column;
        span {
          font-size: 15px;
          font-weight: bold;
        }
        input {
          height: 2.7em;
          border: 1px solid grey;
          border-radius: 0;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
