<template>
  <div class="container home">
    <div class="row d-flex justify-content-center align-items-end home__main-avatar">
      <div class="d-flex justify-content-center align-items-center home__main-avatar__img">
        <img src="@/assets/main/main-avatar.svg" alt />
      </div>
    </div>
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center home__main-title">
        <h2>Scrum</h2>
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
            :class="{ active: menuItem === fundamentalsType.ARTIFACTS }"
            @click="selectMenu(fundamentalsType.ARTIFACTS)"
          >Artifact</h2>
        </div>
        <div class="home__main-menu__nav-item">
          <h2
            @mouseover="arrowActive = 'center'"
            @mouseleave="arrowActive = ''"
            @click="selectMenu(fundamentalsType.VALUES)"
            :class="{ active: menuItem === fundamentalsType.VALUES }"
          >Values</h2>
        </div>
        <div class="home__main-menu__nav-item">
          <h2
            @mouseover="arrowActive = 'right'"
            @mouseleave="arrowActive = ''"
            @click="selectMenu(fundamentalsType.ROLES)"
            :class="{ active: menuItem === fundamentalsType.ROLES }"
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
import { FundamentalsEnum } from '@/components/main-menu/Fundamentals';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    FundamentalsMenu
  }
})
export default class Home extends Vue {
  fundamentalsType = FundamentalsEnum;

  menuItem: string = FundamentalsEnum.ARTIFACTS;

  arrowActive = '';

  selectMenu(menuItem: string) {
    this.menuItem = '';
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
  &__main-avatar {
    height: 30%;
    &__img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      background: $primary-gradient;
    }
  }
  &__main-title {
    width: 80%;
    h2 {
      position: relative;
      top: 32px;
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
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
