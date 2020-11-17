<template>
  <ul class="usersList">
    <UsersListUser
    v-for="(user, i) in users"
    :user="user"
    :key="i" />
  </ul>
</template>

<style lang="scss">
.usersList {
  height: 100%;
  width: 25%;
  padding: 16px;
  background-color: white;
  overflow-y:auto;
  border-radius: 40px;
}
</style>

<script>
import UsersListUser from './UsersListUser'

export default {
  props: {
    users: {
      type: Array
    }
  },
  components: {
    UsersListUser
  }
}
</script>
