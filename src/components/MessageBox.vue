<template>
  <div class="messageBox">
    <form @submit.prevent="onSubmit">
      <div class="inputWrap">
        <input type="text" v-model="message" @keyup="onTyping" placeholder="Ecrivez votre message ici...">
        <div class="emoji-invoker" @click="toogleDialogEmoji">
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
        </div>
        <VEmojiPicker
            v-show="showDialog"
            @select="selectEmoji"
            lang="fr-FR"
          />
          <div class="buttons">
            <img src="../assets/more.svg" alt="Voir tous les messages" class="button more" @click="onMoreClick">
            <label>
              <input type="submit">
              <img src="../assets/send.svg" alt="Envoyer le messages" class="button send">
            </label>
          </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.messageBox {
  form {
    display: flex;
  }

  .inputWrap {
    position: relative;
    width: 100%;

    & input {
      padding: 20px 100px 20px 48px;
      width: 100%;
      font-size: 1rem;
      outline: none;
      border: none;
      border-radius: 48px;
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

    .emoji-invoker {
      width:24px;
      height: 24px;
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s;
    }
    .emoji-invoker:hover {
      transform: translateY(-50%) scale(1.1);
    }
    .emoji-invoker > svg {
      fill: #b1c6d0;
    }

    .buttons {
      position: absolute;
      height: 50%;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      display: flex;

      & input[type="submit"] {
        display: none;
      }

      & label {
        height: 100%;
      }

      .button {
        height: 100%;
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
      }

      .button:hover {
        transform:scale(1.1);
      }
    }
  }

  .messageMore & {
    & .inputWrap {
      & input {
        border-radius: 0 0 28px 28px;
      }
    }

    & .buttons {
      & .more {
        transform: rotate(180deg);

        &:hover {
          transform: rotate(180deg) scale(1.1);
        }
      }
    }
  }
}

#EmojiPicker {
  display: flex;
  position: absolute;
  top: 0;
  left: 12px;
  transform: translateY(-100%);
  animation: emojiPopUp 0.3s 1;
}

@keyframes emojiPopUp {
  from {
    max-height: 0px;
  }
  to {
    max-height: 100vh;
  }
}
</style>

<script>
import VEmojiPicker from 'v-emoji-picker'

export default {
  data () {
    return {
      message: '',
      showDialog: false
    }
  },
  methods: {
    onSubmit () {
      this.$emit('sendMessage', this.message)
      this.message = ''
    },
    onTyping () {
      if (this.message !== '') {
        this.$emit('userTyping')
      }
    },
    toogleDialogEmoji () {
      this.showDialog = !this.showDialog
    },
    selectEmoji (emoji) {
      this.message += emoji.data
      this.toogleDialogEmoji()
    },
    onMoreClick () {
      this.$emit('more')
    }
  },
  components: {
    VEmojiPicker
  }
}
</script>
