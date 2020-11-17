<template>
  <vue-custom-scrollbar class="scroll-area messagesList" :tagname="'ul'" :settings="this.settings" v-chat-scroll="{always: false, smooth: true, notSmoothOnInit: true}">
      <MessagesListMessage
      v-for="(message, i) in messages"
      :message="message"
      :key="i"
      class="messagesListMessage" />
  </vue-custom-scrollbar>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.messagesList {
  flex-grow: 1;
  overflow-y:auto;
  padding: 16px;
  word-break: break-word;
  flex-direction: column;
  border-radius: 48px 48px 0 0;
  background-color: rgba(255,255,255,0.7);
  display: flex;
  transform: scaleY(0);
  transform-origin: bottom;
  opacity: 0;
  transition: all 0.3s ease;

  .messageMore & {
    opacity: 1;
    transform: scaleY(1);
  }
}

.ps__thumb-y {
  background-color:$main-color;
}
</style>

<script>
import MessagesListMessage from './MessagesListMessage'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  props: {
    messages: {
      type: Array
    }
  },
  data () {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  },
  components: {
    MessagesListMessage,
    vueCustomScrollbar
  }
}
</script>
