<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  height: 100%;
  background: linear-gradient( white 80%, $primary 20%);
}

.btn-outline-primary {
  &.white {
    @include btn-white-no-bg;
  }
}
</style>
