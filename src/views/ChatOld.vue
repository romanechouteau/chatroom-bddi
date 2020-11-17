<template>
  <div class="layout">
    <UsersList :users="store.users" />
    <div class="messagesBlock">
      <MessagesList :messages="store.messages" />
      <MessageBox @sendMessage="onSendMessage" @userTyping="onTyping" />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  width: 70%;
  max-width: 900px;
  height: 70%;
  max-height: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  border-radius: 40px;
  color: #003689;

  .messagesBlock {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>

<script>
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'

import store from '../store'

export default {
  data () {
    return {
      store
    }
  },
  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    },
    onTyping () {
      store.userTyping()
    }
  },
  components: {
    MessageBox,
    MessagesList,
    UsersList
  }
}
</script>
