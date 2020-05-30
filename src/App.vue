<template>
  <div id="app" class="app">
    <div class="app__menu">
      <router-link
        v-if="this.$route.path !== '/'"
        to="/"
        class="app__menu__back-btn"
        tag="a">
        <span> Back </span>
      </router-link>
      <div class="app__menu__language float-right">
        <div class="app__menu__language__selected"
          @click="showList = !showList">
          <img class="float-right"
          src="@/assets/UI/Icons/world.svg"
          alt="">
          |
          {{selectedLang}}
        </div>
         <template v-if="showList">
          <div
          @click="selectLang(lang.type)"
          class="app__menu__language__to-select"
          v-for="lang in languages"
          :key="lang.type">
            <img :src="require(`@/assets/${lang.flag}.svg`)" alt="">
            {{lang.type}}
          </div>
      </template>
      </div>
    </div>
    <div class="app__container">
      <div class="container">
      </div>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- <div class="not-supported">
        <not-supported> </not-supported>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NotSupported from '@/components/not-supported/NotSupported.vue';

@Component({
  components: {
    NotSupported
  }
})
export default class App extends Vue {
  selectedLang = 'En';

  languages = [
    { type: 'en', flag: 'US' },
    { type: 'es', flag: 'ES' }
  ]

  showSelect = false;

  showList = false;

  beforeMount() {
    this.selectedLang = localStorage.getItem('DSlanguage') || 'en';
    this.$i18n.locale = this.selectedLang;
  }

  selectLang(lang: string) {
    localStorage.setItem('DSlanguage', lang);
    this.selectedLang = lang;
    this.showList = false;
    this.$i18n.locale = lang;
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'Norteworthy';
  src: url('./assets/Fonts/Noteworthy-Lt.woff') format('woff');
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  height: 100%;
}

.app {
  .container{
    position: relative;
  }
  &__menu{
    position:fixed;
    width: 100%;
    padding: 16px 25px;
    z-index: 1000;
    &__back-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('./assets/back-btn.svg') no-repeat center;
      width: 60px;
      height: 30px;
      position: relative;
      border: none;
      color: black;
      float:left;
      @include main-title-font;
      font-size: 14px;
      &:hover{
        text-decoration: none;
      }
      span{
        position: relative;
        top: -2px;
        left: 4px;
      }
    }
    &__language{
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 6px 22px #ebeaec;
      border-radius: 4px;
      width: 80px;
      min-height: 30px;
      padding: 0 10px;
      right: 25px;
      z-index: 900;
      &__selected,
      &__to-select {
        height: 30px;
        display: flex;
        justify-content: space-evenly;
        text-transform: capitalize;
        align-items: center;
      }
    }
  }

}

.btn-outline-primary {
  &.white {
    @include btn-white-no-bg;
  }
}

@media only screen and (max-width: 1300px) {
  .app {
    &__menu{
      height: 60px;
      background-color: $primary;
      top: 0;
        &__back-btn {
          background: url('./assets/xs_back-btn.svg') no-repeat center;
          width: 74px;
          color: white;
        }
        &__language{
           box-shadow: 0 6px 22px black;
           background-color: white;
           position: absolute;
        }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, trasnform 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
