<template>
  <li v-bind:class="[isCurrentUser ? 'currentUser' : '', isRight ? 'bubbleRight' : '']">
    <div class="bulleMessage">
      <div class="bulleBg">
        <img src="../assets/haut_bulle_left.svg" alt class="hautBulle" />
        <div class="bulleRectangle"></div>
        <img src="../assets/bas_bulle_left.svg" alt class="basBulle" />
      </div>
      <div class="messageInfos">
        <div class="messageDate">{{ message.created | moment("HH[h]mm") }}</div>
        <div class="messageUsername">{{ message.user.username }}</div>
      </div>
      <div class="messageText">{{ message.text }}</div>
    </div>
  </li>
</template>

<style lang="scss">
@import "../assets/variables.scss";
 .messagesListMessage {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  min-width: 200px;
  width: fit-content;
  padding-left: 24px;

  .bulleMessage {
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    color: $text-color;
    border-radius: 16px;
    margin-bottom: 4px;

    .bulleBg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      padding-left: 24px;
      opacity: 0.7;

      & .hautBulle {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: -1px;
      }

      & .bulleRectangle {
        background-color: white;
        width: 100%;
        height: 100%;
        border-radius: 0 0 24px 0;
      }

      & .basBulle {
        width: 24px;
        height: auto;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    .messageInfos,
    .messageText {
      z-index: 1;
    }

    .messageInfos {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 8px;
    }

    .messageUsername {
      font-size: 0.9rem;
    }

    .messageDate {
      font-size: 0.8rem;
      margin-top: 8px;
    }

    .messageText {
      word-break: break-word;
      margin-left: auto;
      color: $users-color;
    }
  }

  .messagesList & {
    position: relative;
    margin-right: auto;
    max-width: 50%;
  }

  .buildingsMessages & {
    position: relative;
    margin-right: auto;
    max-width: 400px;
  }

  .messagesList &.currentUser, .buildingsMessages &.bubbleRight {
    margin-left: auto;
    margin-right: 0;
    padding-left: 0px;
    padding-right: 24px;

    & .messageInfos {
      flex-direction: row-reverse;
    }

    & .messageText {
      margin-right: auto;
      margin-left: 0;
    }

    & .bulleBg {
      padding-left: 0;
      padding-right: 24px;

      & .bulleRectangle {
        border-radius: 0 0 0 24px;
      }

      & .hautBulle {
        left: auto;
        bottom: 0;
        right: 0;
        content: url("../assets/haut_bulle_right.svg");
      }

      & .basBulle {
        left: auto;
        bottom: 0;
        right: 0;
        content: url("../assets/bas_bulle_right.svg");
      }
    }
  }

  &.currentUser {
    & .messageText {
      color: $current-user-color;
    }
  }
}
</style>

<script>
import store from '../store'

export default {
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username
    },
    isRight () {
      if (store.$data.usersPosition[this.message.user.username]) {
        return store.$data.usersPosition[this.message.user.username].side === 'right'
      } else {
        return false
      }
    }
  },
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>
