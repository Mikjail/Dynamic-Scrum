<template>
  <div
    :class="alignByCloudType"
    class="row d-flex flex-column main-avatar">
    <div
      :class="cloudTypeSelected"
      :style="styleMssge"
      class="d-flex flex-column justify-content-center align-items-center main-avatar__cloud-mssge">
      <transition name="fade">
        <p
         :style="{ textAlign: mssgAlign }"
         v-if="mssgeReady"
         v-html="$t(mssges[indexShowing])"></p>
      </transition>
      <div class="main-avatar__cloud-mssge__btns" v-if="mssgeReady">
        <button
          @click="backMssge"
          class="btn main-avatar__cloud-mssge__btns__back"
          v-if="isBackAvailable">
          Back
        </button>
        <button
          class="btn main-avatar__cloud-mssge__btns__next"
          @click="nextMssge"
          v-if="isNextAvailable">
          Next
        </button>
      </div>
      <div
        class="d-flex justify-content-center align-items-center main-avatar__typing"
        v-if="!mssgeReady">
        <typing-dots></typing-dots>
      </div>
    </div>
    <div
      :class="bgSelected"
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

  @Prop({ default: 'center' }) cloudDirection!: string;

  @Prop({ default: 'frame' }) cloudType!: string;

  @Prop({ default: '420' }) mssgWidth!: string;

  @Prop({ default: '200' }) mssgHeight!: string;

  @Prop({ default: 'justify' }) mssgAlign!: string;

  @Prop({ default: true }) avatarBg!: boolean;


  @Watch('mssges')
  onMssgesChanged() {
    this.indexShowing = 0;
  }

  mssgeReady = false;

  prevMssge = '';

  indexShowing = 0;

  lengthOfMessage = 0;

  mssgeToSow = ''

  styleMssge = {
    width: `${this.mssgWidth}px`,
    height: `${this.mssgHeight}px`
  }

  get isBackAvailable() {
    const currentIndex = this.indexShowing + 1;
    return currentIndex > 1;
  }

  get isNextAvailable() {
    const currentIndex = this.indexShowing + 1;
    return currentIndex < this.lengthOfMessage;
  }

  get cloudTypeSelected() {
    return {
      'main-avatar__cloud-mssge--center': this.cloudDirection === 'center',
      'main-avatar__cloud-mssge--left': this.cloudDirection === 'left'
    };
  }

  get bgSelected() {
    return {
      'main-avatar__img--no-bg': !this.avatarBg
    };
  }

  get alignByCloudType() {
    return {
      'align-items-center': this.cloudDirection === 'center',
      'align-items-start': this.cloudDirection === 'left'
    };
  }

  mounted() {
    this.lengthOfMessage = this.mssges.length;
    this.showMssge();
  }

  updated() {
    this.lengthOfMessage = this.mssges.length;
    this.showMssge();
  }

  showMssge() {
    const mssgeToshow = this.mssges[this.indexShowing];
    if (mssgeToshow && this.prevMssge !== mssgeToshow) {
      this.mssgeReady = false;
      this.prevMssge = mssgeToshow;
      setTimeout(() => {
        this.mssgeToSow = this.mssges[this.indexShowing];
        this.mssgeReady = true;
      }, 500);
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
}
</script>
<style lang="scss">
.main-avatar {
  &__cloud-mssge {
    padding: 6px 15px 35px 15px;
    &__btns {
      width: 100%;
      bottom: 5px;
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
    &--center {
      border-radius: 25px;
      padding-bottom: 40px;
      position: relative;
      &:after {
        left: 50%;
        border: 25px solid transparent;
        border-bottom: 0;
        margin-left: -25px;
        margin-bottom: -25px;
      }
    }
    &--left {
      border-radius: 25px 25px 25px 0;
      position: relative;
      margin-left: 90px;
      &:after{
          left: 14px;
          border: 29px solid transparent;
          border-bottom: 0;
          border-left: 0;
          margin-left: -14px;
          margin-bottom: -29px;
      }
    }
    &--center,
    &--left{
      background-color: $primary;
      color:white;
      &:after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-top-color: $primary;
      }
    }
    p {
      text-indent: 10px;
      margin: 0;
      font-size: 15px;
      width: 100%;
      ul{
        padding-left: 25px;
      }
      a{
        color: white;
        text-decoration: underline;
      }
    }
  }
  &__img {
    height: 170px;
    width: 170px;
    margin-top: 48px;
    border-radius: 50%;
    background: $primary-gradient;
    &--no-bg{
      background: none;
       margin-top: 10px;
    }
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
