<template>
  <div class="container item-description">
      <div class="item-description__avatar">
        <avatar-talk-guide
          :mssges="avatarMssges"
          mssgWidth="300"
          mssgHeight="180"
          :avatarBg="false"
          cloudDirection="left">
        </avatar-talk-guide>
      </div>
      <div class="row">
      <div class="item-description__info col d-flex flex-column align-items-center">
        <div class="item-description__info__title">
          <h1>{{mainTitle}}</h1>
        </div>
        <div class="d-flex item-description__info__desc">
          <div class="item-description__info__desc__prev">
            <slot name="item-preview"> </slot>
          </div>
          <div class="item-description__info__desc__right">
            <slot name="item-description"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AvatarTalkGuide from '@/components/shared/AvatarTalk/AvatarTalkGuide.vue';
@Component({
  components: {
    AvatarTalkGuide
  }
})
export default class ProductBacklog extends Vue {
  @Prop({ default: '' }) mainTitle!: string;

  @Prop() avatarMssges!: Array<string>;
}
</script>
<style lang="scss" scoped>
  .item-description{
    &__avatar{
      margin-top: 16px;
      width: 300px;
      position: absolute;
      z-index: 900;
    }
    &__info{
      padding-top: 60px;
      &__title{
        h1{
          @include main-title-font;
        }
      }
      &__desc{
        justify-content: flex-end;
        margin-top: 100px;
        &__prev{
            padding: 0 16px;
        }
        &__right{
          flex-basis: 65%;
          ul {
            list-style-image: url('../../../assets/bullet.svg');
            li{
              margin-bottom: 20px;
            }
          }
        }
      }
      &__ownership{
        position: relative;
        width: 30%;
        margin-top: 100px;
        margin-left: 25px;
      }
    }
  }
  @media only screen and (max-width: 1200px){
  .item-description{
      &__avatar{
        display: none;
      }
    }
  }
   @media only screen and (max-width: 800px){
    .item-description{
      &__info{
        &__desc{
          &__prev{
            display:none;
          }
          &__right{
            flex-basis: 100%;
          }
        }
      }
    }
  }
</style>
