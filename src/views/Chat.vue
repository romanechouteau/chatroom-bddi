<template>
  <div class="layout">
    <Buildings :messages="store.messagesDisplayed" :usersPosition.sync="store.usersPosition" />
    <div v-bind:class="[isMore ? 'messageMore' : '', 'messagesBlock']">
      <MessagesList :messages="store.messages" />
      <MessageBox @sendMessage="onSendMessage" @userTyping="onTyping" @more="onMoreClick" />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .messagesBlock {
    height: 90%;
    width: 80%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>

<script>
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import Buildings from '../components/Buildings.vue'

import store from '../store'

export default {
  data () {
    return {
      store,
      more: false
    }
  },
  computed: {
    isMore () {
      return this.more === true
    }
  },
  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    },
    onTyping () {
      store.userTyping()
    },
    onMoreClick () {
      this.more = !this.more
    }
  },
  components: {
    MessageBox,
    MessagesList,
    Buildings
  }
}
</script>
