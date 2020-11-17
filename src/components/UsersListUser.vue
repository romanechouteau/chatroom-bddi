<template>
    <li>
      <div v-if="hasAvatar" class="avatar" :style="{ backgroundImage: 'url(' + user.avatar + ')' }"></div>
      <div v-else class="avatar" :style="{ backgroundImage: 'url(\'https://picsum.photos/200\')' }"></div>
      <strong v-if="isCurrentUser" class="username">{{ user.username }}</strong>
      <span v-else class="username">{{ user.username }}</span>
    </li>
</template>

<style lang="scss">
.usersList li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 0;
  word-break: break-all;

  .avatar {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .username {
    margin-left: 8px;
    flex-shrink: 1;
  }
}
</style>

<script>
import store from '../store'

export default {
  computed: {
    isCurrentUser () {
      return this.user.username === store.$data.user.username
    },
    hasAvatar () {
      return this.user.avatar !== '' && this.user.avatar !== null
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
