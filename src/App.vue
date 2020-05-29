<template>
  <div id="app" class="app">
    <div class="app__container">
      <div class="container">
          <div class="app__language float-right">
            <div class="app__language__selected"
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
                class="app__language__to-select"
                v-for="lang in languages"
                :key="lang.type">
                  <img :src="require(`@/assets/${lang.flag}.svg`)" alt="">
                  {{lang.type}}
                </div>
            </template>
          </div>
      </div>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="not-supported">
        <not-supported> </not-supported>
    </div>
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

  selectLang(lang: string) {
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
  &__language{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 22px #ebeaec;
    border-radius: 4px;
    width: 80px;
    min-height: 30px;
    padding: 0 10px;
    margin-top: 16px;
    display: inline-block;
    position: fixed;
    right: 25px;
    z-index: 900;
    &__selected,
    &__to-select {
      display: flex;
      justify-content: space-evenly;
       text-transform: capitalize;
    }
  }
}

.btn-outline-primary {
  &.white {
    @include btn-white-no-bg;
  }
}

@media only screen and(min-width: 625px){
  .not-supported{
    display:none;
  }
}

@media only screen and(max-width: 625px){
  .app__container{
    display:none;
  }
  .not-supported{
    display: flex;
    padding-top: 25%;
    justify-content: center;
    height: 100%;
  }
  body{
    background: linear-gradient(white 90%, #005cff 20%);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, trasnform 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
