<template>
  <div class="login">
    <div class="centered">
    <img src="../assets/logo.svg" alt="" class="bigLogo">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" name="username" placeholder="Prénom">
      <label>
        <input type="submit">
        <img src="../assets/send.svg" alt="Envoyer le messages" class="button send">
      </label>
    </form>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.login {
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  & .centered {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-content: flex-start;
    width: 90%;
    max-width: 1200px;

    & .bigLogo {
      width: 70%;
      margin-bottom: -16px;
    }
  }

  & form {
    position: relative;
    display: flex;
    width: 80%;
    margin-left: auto;

  & input {
    padding: 20px 24px;
    width: 100%;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 48px 0 0 48px;
    color: $current-user-color;
    transition: border-radius 0.3s ease;

    &::placeholder {
      color: $current-user-color;
    }

    &:-ms-input-placeholder {
      color: $current-user-color;
    }

    &::-ms-input-placeholder {
      color: $current-user-color;
    }
  }

    & input[type="submit"] {
      display: none;
    }

    .button {
      position: absolute;
      height: 50%;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 0.2s;
    }

    .button:hover {
      transform: translateY(-50%) scale(1.1);
    }
}
}
</style>

<script>
import store from '../store'

export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit () {
      store.userRegister({ username: this.username, avatar: 'https://gist.githubusercontent.com/romanechouteau/22d966f8bb245f6fc5326589b12477d2/raw/b03852137cef58d5c491988e42d7975676606a5b/avatarMeRight.svg' })
    }
  }
}
</script>
