<template>
<svg xmlns="http://www.w3.org/2000/svg" :viewBox="building.viewBox" :id="building.id">
  <g id="Calque_2" data-name="Calque 2">
    <g v-html="building.code">
    </g>
    <Window class="windowWrap" v-for="(windowData, i) in building.windows" :key="i" :windowData="windowData" :building="building" :usersPosition="usersPosition"/>
  </g>
</svg>
</template>

<style lang="scss">
.messageTest {
  background-color: red;
}
</style>

<script>
import Window from '../components/Window.vue'
export default {
  props: {
    building: {
      type: Object
    },
    usersPosition: {
      type: Object
    }
  },
  components: {
    Window
  }

}
</script>
