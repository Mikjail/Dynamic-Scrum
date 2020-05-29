<template>
  <div class="container home">
    <div class="home__avatar-talk">
      <avatar-talk-guide :mssges="mssge[mssgeType]"></avatar-talk-guide>
    </div>
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center home__main-title">
        <h4
          @click="selectMenu(homeMenuType.VALUES)"
          :class="{ active: menuItem === homeMenuType.VALUES }">
        Scrum
        </h4>
        <div class="d-flex home__arrows">
          <img src="@/assets/arrow_left.svg" alt v-show="arrowActive === 'left'" />
          <img src="@/assets/arrow_center.svg" alt v-show="arrowActive === 'center'" />
          <img src="@/assets/arrow_right.svg" alt v-show="arrowActive === 'right'" />
        </div>
      </div>
      <div class="d-flex home__main-menu">
        <div class="home__main-menu__nav-item">
          <h4
            @mouseover="arrowActive = 'left'"
            @mouseleave="arrowActive = ''"
            :class="{ active: menuItem === homeMenuType.ARTIFACTS }"
            @click="selectMenu(homeMenuType.ARTIFACTS)">
            {{$t('menu_artifacts')}}
            </h4>
        </div>
        <div class="home__main-menu__nav-item">
          <h4
            @mouseover="arrowActive = 'center'"
            @mouseleave="arrowActive = ''"
            @click="selectMenu(homeMenuType.EVENTS)"
            :class="{ active: menuItem === homeMenuType.EVENTS }">
            {{$t('menu_events')}}
            </h4>
        </div>
        <div class="home__main-menu__nav-item">
          <h4
            @mouseover="arrowActive = 'right'"
            @mouseleave="arrowActive = ''"
            @click="selectMenu(homeMenuType.ROLES)"
            :class="{ active: menuItem === homeMenuType.ROLES }">
            {{$t('menu_roles')}}
            </h4>
        </div>
      </div>
    </div>
    <div class="home__footer fixed-bottom">
      <transition name="fade">
        <fundamentals-menu
        :menuItem="menuItem"
        @subItemSelected="subItemSelected"
        v-if="menuItem" />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import FundamentalsMenu from '@/components/main-menu/FundamentalsMenu.vue';
import AvatarTalkGuide from '@/components/shared/AvatarTalk/AvatarTalkGuide.vue';
import { FundamentalsEnum, MssgeType, SubItem } from '@/components/main-menu/Fundamentals';
import { homeMssges } from '@/components/main-menu/Mssges';

import { Component, Vue } from 'vue-property-decorator';
@Component({ components: { FundamentalsMenu, AvatarTalkGuide } })
export default class Home extends Vue {
  homeMenuType = FundamentalsEnum;

  menuItem: string = MssgeType.VALUES;

  arrowActive = '';

  mssgeType: string = MssgeType.VALUES;

  mssge = homeMssges

  beforeMount() {
    this.menuItem = localStorage.getItem('dsSelectedMenu') || MssgeType.VALUES;
  }

  selectMenu(menuItem: MssgeType) {
    this.menuItem = '';
    this.mssgeType = menuItem;
    localStorage.setItem('dsSelectedMenu', menuItem);
    setTimeout(() => {
      this.menuItem = menuItem;
    }, 100);
  }

  subItemSelected(subItem: SubItem) {
    this.mssgeType = subItem.name;
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.home {
  height: 100%;
  &__avatar-talk {
    padding-top: 16px;
  }
  &__main-title {
    width: 80%;
    h4 {
      @include main-title-font;
      cursor: pointer;
      position: relative;
      top: 32px;
      padding-bottom: 5px;
      &.active {
        border-bottom: 5px solid $secondary;
        transition: 0.5s;
        padding-bottom: 0;
      }
    }
  }
  &__arrows {
    width: 100%;
    height: 64px;
    img {
      position: relative;
      &:first-child {
        flex-basis: 50%;
      }
      &:nth-child(2) {
        margin: auto;
        top: 20px;
      }
      &:nth-child(3) {
        flex-basis: 33.33%;
        text-align: right;
        margin-left: 57%;
      }
      flex-basis: 33.33%;
    }
  }
  &__main-menu {
    width: 80%;
    margin-top: 50px;
    &__nav-item {
      @include main-title-font;
      flex-basis: 33.33%;
      display: flex;
      justify-content: center;
      h4 {
        cursor: pointer;
        &.active {
          border-bottom: 5px solid $secondary;
          transition: 0.5s;
        }
      }
    }
  }
  &__footer{
    background-color: $primary;
    height: 17%;
  }
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (min-height: 900px) {
  .home {
    height: 100%;
    &__avatar-talk {
      padding-top: 80px;
    }
  }
}
</style>
