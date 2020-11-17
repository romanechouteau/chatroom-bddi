<template>
  <div id="app">
    <router-view />
    <img src="./assets/logo.svg" alt="Logo" class="logo">
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Changa', sans-serif;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('assets/background.svg');
  background-size: cover;
  background-position: center;

  .logo {
    height: 44px;
    position: fixed;
    top: 16px;
    left: 16px;
  }
}
</style>
