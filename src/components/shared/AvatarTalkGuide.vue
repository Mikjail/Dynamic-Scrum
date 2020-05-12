<template>
  <div class="row d-flex flex-column align-items-center main-avatar">
    <div
      :class="bgTypeSelected"
      class="d-flex flex-column justify-content-center align-items-center main-avatar__cloud-mssge"
    >
      <transition name="fade">
        <p v-if="mssgeReady" v-html="$t(mssges[indexShowing])"></p>
      </transition>
      <div class="main-avatar__cloud-mssge__btns" v-if="mssgeReady">
        <button
          @click="backMssge"
          class="btn main-avatar__cloud-mssge__btns__back"
          v-if="isBackAvailable"
        >
          Back
        </button>
        <button
          class="btn main-avatar__cloud-mssge__btns__next"
          @click="nextMssge"
          v-if="isNextAvailable"
        >
          Next
        </button>
      </div>
      <div
        class="d-flex justify-content-center align-items-center main-avatar__typing"
        v-if="!mssgeReady"
      >
        <typing-dots></typing-dots>
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center main-avatar__img"
    >
      <img src="@/assets/main/main-avatar.svg" alt />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Watch
} from 'vue-property-decorator';
import TypingDots from './TypingDots.vue';

@Component({ components: { TypingDots } })
export default class AvatarTalkGuide extends Vue {
  @Prop({ required: true }) mssges!: Array<string>;

  @Prop({ default: 'frame' }) bgType!: string;

  @Watch('mssges')
  onMssgesChanged() {
    this.indexShowing = 0;
  }

  mssgeReady = false;

  prevMssge = '';

  indexShowing = 0;

  lengthOfMessage = 0;

  get isBackAvailable() {
    const currentIndex = this.indexShowing + 1;
    return currentIndex > 1;
  }

  get isNextAvailable() {
    const currentIndex = this.indexShowing + 1;
    return currentIndex < this.lengthOfMessage;
  }

  mounted() {
    this.lengthOfMessage = this.mssges.length;
    this.showMssge();
  }

  updated() {
    this.lengthOfMessage = this.mssges.length;
    console.log('changed');
    this.showMssge();
  }

  showMssge() {
    const mssgeToshow = this.mssges[this.indexShowing];
    if (this.mssges[this.indexShowing] && this.prevMssge !== mssgeToshow) {
      this.prevMssge = mssgeToshow;
      this.mssgeReady = false;
      setTimeout(() => {
        this.mssgeReady = true;
      }, 1000);
    }
  }

  nextMssge() {
    this.indexShowing += 1;
    this.showMssge();
  }

  backMssge() {
    this.indexShowing -= 1;
    this.showMssge();
  }

  get bgTypeSelected() {
    return {
      'main-avatar__cloud-mssge--frame': this.bgType === 'frame',
      'main-avatar__cloud-mssge--cloud': this.bgType === 'cloud'
    };
  }
}
</script>
<style lang="scss">
.main-avatar {
  &__cloud-mssge {
    margin-left: 400px;
    padding: 5px 24px 10px;
    &__btns {
      width: 100%;
      bottom: 15px;
      position: absolute;
      &__next {
        float: right;
        right: 16px;
        position: relative;
      }
      &__back {
        float: left;
        left: 15px;
        position: relative;
      }
      button {
        color: white;
        text-decoration: underline;
        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
    &--frame {
      height: 180px;
      width: 350px;
      border-radius: 25px;
      padding-bottom: 40px;
      background-color: $primary;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: 32px;
        left: 24px;
        width: 0;
        height: 0;
        border: 45px solid transparent;
        border-top-color: $primary;
        border-bottom: 0;
        border-left: 0;
        margin-left: -24px;
        margin-bottom: -55px;
      }
    }
    &--cloud {
      height: 200px;
      width: 200px;
      background: url('../../assets/mssge_cloud.svg') center no-repeat;
    }
    color: white;
    p {
      text-indent: 10px;
      text-align: justify;
      margin: 0;
      font-size: 15px;
      width: 100%;
      ul{
        padding-left: 25px;
      }
    }
  }
  &__img {
    height: 170px;
    width: 170px;
    margin-top: 24px;
    border-radius: 50%;
    background: $primary-gradient;
  }
  &__typing {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
