<template>
  <svg :x="windowData.x" :y="windowData.y" :width="building.width" :height="building.height">
    <rect :class="[isConnected ? 'connected' : '', 'cls-3 window']" :id="'window-'+windowData.id" :x="0" :y="0" :rx="building.rx" :width="building.width" :height="building.height"/>
    <!-- Avatar Me -->
    <svg v-if="isCurrentUser" preserveAspectRatio="xMidYMax meet" class="avatar" :id="'avatar-'+this.user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6194.2 5911.98"><g id="Calque_2" data-name="Calque 2" :class="[isTyping ? 'typing' : '']"><g id="Calque_1-2" data-name="Calque 1"><g id="Groupe_8" data-name="Groupe 8"><circle id="Ellipse_9" data-name="Ellipse 9" class="avatarWhite" cx="3238.21" cy="2955.99" r="2955.99"/><g id="Groupe_5" data-name="Groupe 5"><circle id="Ellipse_10" data-name="Ellipse 10" class="avatarPink" cx="2794.28" cy="2441.22" r="2287.26"/><ellipse id="Ellipse_11" data-name="Ellipse 11" class="avatarDarkBlue" cx="3036.08" cy="2284.62" rx="391.6" ry="532.71"/><ellipse id="Ellipse_12" data-name="Ellipse 12" class="avatarDarkBlue" cx="1546.75" cy="2284.62" rx="391.6" ry="532.71"/><circle id="Ellipse_13" data-name="Ellipse 13" class="avatarDarkBlue" cx="2508.28" cy="3944.72" r="105.79"/><path id="Tracé_11" data-name="Tracé 11" class="avatarPink" d="M4884.52,2538.32c1282.29,854.8,688,1775.71,688,1775.71s88.41,492.85-316.23,532.71c-560.48,55.16-503.81-745.79-173.79-676.85,229.33-28,485.68-450.35-386.69-1020.08Z"/><path id="Tracé_12" data-name="Tracé 12" class="avatarPink" d="M825.51,2538.32c-1282.29,854.8-688,1775.71-688,1775.71s-88.41,492.85,316.23,532.71c560.48,55.16,503.81-745.79,173.79-676.85-229.33-28-485.68-450.35,386.69-1020.08Z"/></g></g></g></g></svg>
    <!-- Avatar Left -->
    <svg v-else-if="isLeft" preserveAspectRatio="xMidYMax meet" class="avatar" :id="'avatar-'+this.user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6194.2 5911.98"><g id="Calque_2" data-name="Calque 2" :class="[isTyping ? 'typing' : '']"><g id="Calque_1-2" data-name="Calque 1"><circle id="Ellipse_9" data-name="Ellipse 9" class="avatarWhite" cx="2955.99" cy="2955.99" r="2955.99"/><circle id="Ellipse_10" data-name="Ellipse 10" class="avatarBlue" cx="3399.92" cy="2441.22" r="2287.26"/><ellipse id="Ellipse_11" data-name="Ellipse 11" class="avatarDarkBlue" cx="3158.12" cy="2284.62" rx="391.6" ry="532.71"/><ellipse id="Ellipse_12" data-name="Ellipse 12" class="avatarDarkBlue" cx="4647.45" cy="2284.62" rx="391.6" ry="532.71"/><circle id="Ellipse_13" data-name="Ellipse 13" class="avatarDarkBlue" cx="3685.92" cy="3944.72" r="105.79"/><path id="Tracé_11" data-name="Tracé 11" class="avatarBlue" d="M1309.68,2538.32C27.39,3393.12,621.69,4314,621.69,4314s-88.41,492.85,316.22,532.71c560.49,55.16,503.81-745.79,173.8-676.85-229.33-28-485.68-450.35,386.69-1020.08Z"/><path id="Tracé_12" data-name="Tracé 12" class="avatarBlue" d="M5368.69,2538.32c1282.29,854.8,688,1775.71,688,1775.71s88.41,492.85-316.23,532.71C5180,4901.9,5236.64,4101,5566.66,4169.89c229.33-28,485.68-450.35-386.69-1020.08Z"/></g></g></svg>
    <!-- Avatar Right -->
    <svg v-else-if="isRight" preserveAspectRatio="xMidYMax meet" class="avatar" :id="'avatar-'+this.user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6194.2 5911.98"><g id="Calque_2" data-name="Calque 2" :class="[isTyping ? 'typing' : '']"><g id="Calque_1-2" data-name="Calque 1"><circle id="Ellipse_9" data-name="Ellipse 9" class="avatarWhite" cx="3238.21" cy="2955.99" r="2955.99"/><circle id="Ellipse_10" data-name="Ellipse 10" class="avatarBlue" cx="2794.28" cy="2441.22" r="2287.26"/><ellipse id="Ellipse_11" data-name="Ellipse 11" class="avatarDarkBlue" cx="3036.08" cy="2284.62" rx="391.6" ry="532.71"/><ellipse id="Ellipse_12" data-name="Ellipse 12" class="avatarDarkBlue" cx="1546.75" cy="2284.62" rx="391.6" ry="532.71"/><circle id="Ellipse_13" data-name="Ellipse 13" class="avatarDarkBlue" cx="2508.28" cy="3944.72" r="105.79"/><path id="Tracé_11" data-name="Tracé 11" class="avatarBlue" d="M4884.52,2538.32c1282.29,854.8,688,1775.71,688,1775.71s88.41,492.85-316.23,532.71c-560.48,55.16-503.81-745.79-173.79-676.85,229.33-28,485.68-450.35-386.69-1020.08Z"/><path id="Tracé_12" data-name="Tracé 12" class="avatarBlue" d="M825.51,2538.32c-1282.29,854.8-688,1775.71-688,1775.71s-88.41,492.85,316.23,532.71c560.48,55.16,503.81-745.79,173.79-676.85-229.33-28-485.68-450.35,386.69-1020.08Z"/></g></g></svg>
  </svg>
</template>

<style lang="scss">
@import "../assets/variables.scss";

.windowWrap {
  position: relative;

  .avatarWhite{fill:#fff;}.avatarPink{fill:#d17379;}.avatarDarkBlue{fill:#171c33;}.avatarBlue{fill:#4fa0af;}

  .avatar .typing {
    animation: float 0.4s infinite alternate cubic-bezier(0.250, 0.460, 0.450, 0.940);
  }

  @keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
}

  .window {
    transition: all 0.3s ease;

    .buildings &.connected {
      fill: $light-color;
    }
  }
}
</style>

<script>
import store from '../store'

export default {
  data () {
    return {
      store
    }
  },
  computed: {
    isCurrentUser () {
      if (this.user) {
        return this.user === store.$data.user.username
      } else {
        return false
      }
    },
    isConnected () {
      return this.userPosition !== undefined
    },
    isTyping () {
      return store.$data.usersTyping.includes(this.user)
    },
    isRight () {
      if (this.isConnected) {
        return this.userPosition.side === 'right'
      } else {
        return false
      }
    },
    isLeft () {
      if (this.isConnected) {
        return this.userPosition.side === 'left'
      } else {
        return false
      }
    },
    userPosition () {
      return Object.values(this.usersPosition).find(value => value.window === parseInt(this.windowData.id))
    },
    user () {
      return Object.keys(this.usersPosition)[Object.values(this.usersPosition).indexOf(this.userPosition)]
    }
  },
  props: {
    windowData: {
      type: Object
    },
    building: {
      type: Object
    },
    usersPosition: {
      type: Object
    }
  },
  methods: {

  }
}
</script>
