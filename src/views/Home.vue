<template>
  <div class="container home">
    <div class="home__avatar-talk">
      <avatar-talk-guide :mssges="mssge[mssgeType]"></avatar-talk-guide>
    </div>
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center home__main-title">
        <h2
          @click="selectMenu(homeMenuType.SCRUM)"
          :class="{ active: menuItem === homeMenuType.SCRUM }"
        >Scrum</h2>
        <div class="d-flex home__arrows">
          <img src="@/assets/arrow_left.svg" alt v-show="arrowActive === 'left'" />
          <img src="@/assets/arrow_center.svg" alt v-show="arrowActive === 'center'" />
          <img src="@/assets/arrow_right.svg" alt v-show="arrowActive === 'right'" />
        </div>
      </div>
      <div class="d-flex home__main-menu">
        <div class="home__main-menu__nav-item">
          <h2
            @mouseover="arrowActive = 'left'"
            @mouseleave="arrowActive = ''"
            :class="{ active: menuItem === homeMenuType.ARTIFACTS }"
            @click="selectMenu(homeMenuType.ARTIFACTS)"
          >Artifacts</h2>
        </div>
        <div class="home__main-menu__nav-item">
          <h2
            @mouseover="arrowActive = 'center'"
            @mouseleave="arrowActive = ''"
            @click="selectMenu(homeMenuType.VALUES)"
            :class="{ active: menuItem === homeMenuType.VALUES }"
          >Values</h2>
        </div>
        <div class="home__main-menu__nav-item">
          <h2
            @mouseover="arrowActive = 'right'"
            @mouseleave="arrowActive = ''"
            @click="selectMenu(homeMenuType.ROLES)"
            :class="{ active: menuItem === homeMenuType.ROLES }"
          >Roles</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <transition name="fade">
        <fundamentals-menu :menuItem="menuItem" v-if="menuItem" />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import FundamentalsMenu from '@/components/main-menu/FundamentalsMenu.vue';
import AvatarTalkGuide from '@/components/shared/AvatarTalkGuide.vue';
import { HomeMenuType, MssgeType } from '@/components/main-menu/Fundamentals';

import { Component, Vue } from 'vue-property-decorator';
@Component({ components: { FundamentalsMenu, AvatarTalkGuide } })
export default class Home extends Vue {
  homeMenuType = HomeMenuType;

  menuItem = '';

  arrowActive = '';

  mssgeType = MssgeType.WELCOME;

  mssge = {
    [MssgeType.WELCOME]: ['avatar_mssge_welcome_one'],
    [MssgeType.SCRUM]: [
      'avatar_mssge_scrum_one',
      'avatar_mssge_scrum_two',
      'avatar_mssge_scrum_three'
    ],
    [MssgeType.ARTIFACTS]: [
      'avatar_mssge_artifacts_one',
      'avatar_mssge_artifacts_two',
      'avatar_mssge_artifacts_three'
    ],
    [MssgeType.VALUES]: ['avatar_mssge_one'],
    [MssgeType.ROLES]: ['avatar_mssge_one']
  };

  selectMenu(menuItem: MssgeType) {
    this.menuItem = '';
    this.mssgeType = menuItem;
    setTimeout(() => {
      this.menuItem = menuItem;
    }, 100);
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
    h2 {
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
    height: 100px;
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
      flex-basis: 33.33%;
      display: flex;
      justify-content: center;
      h2 {
        cursor: pointer;
        &.active {
          border-bottom: 5px solid $secondary;
          transition: 0.5s;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
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
      padding-top: 100px;
    }
  }
}
</style>
