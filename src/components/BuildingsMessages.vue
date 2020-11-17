<template>
  <ul class="buildingsMessages">
      <MessagesListMessage
      class="messagesListMessage"
      v-for="(message, i) in messages"
      :message="message"
      :key="i" />
  </ul>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.buildingsMessages {
  height: 100vh;
  flex-grow: 1;
  overflow-y:auto;
  padding: 16px;
  word-break: break-word;
  flex-direction: column;
  display: flex;
  width: 100%;
}
</style>

<script>
import MessagesListMessage from './MessagesListMessage'

export default {
  props: {
    messages: {
      type: Array
    }
  },
  components: {
    MessagesListMessage
  }
}
</script>
