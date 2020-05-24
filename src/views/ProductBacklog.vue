<template>
  <div class="container product-backlog">
      <div class="product-backlog__avatar">
        <avatar-talk-guide
          :mssges="mssges"
          mssgWidth="300"
          mssgHeight="180"
          :avatarBg="false"
          cloudDirection="left">
        </avatar-talk-guide>
      </div>
      <div class="row">
      <div class="product-backlog__info col d-flex flex-column align-items-center">
        <div class="product-backlog__info__title">
          <h1>Product Backlog</h1>
        </div>
        <div class="d-flex product-backlog__info__desc">
          <div class="product-backlog__info__desc__prev">
            <img src="@/assets/product-backlog/product_backlog_panel.svg" alt="">
          </div>
          <div class="product-backlog__info__desc__right">
            <ul>
              <li v-for="(pbLi, index) in productBacklogDef" :key="`pb-${index}`">
                {{$t(pbLi)}}
              </li>
            </ul>
            <div class="product-backlog__info__ownership">
              <img src="@/assets/product-backlog/ownership.svg" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AvatarTalkGuide from '@/components/shared/AvatarTalk/AvatarTalkGuide.vue';
@Component({
  components: {
    AvatarTalkGuide
  }
})
export default class ProductBacklog extends Vue {
  mssges = ['avatar_mssge_artifacts_backlog_one']

  productBacklogDef = [
    'product-backlog_list_one',
    'product-backlog_list_two',
    'product-backlog_list_three',
    'product-backlog_list_four'];
}
</script>
<style lang="scss">
  .product-backlog{
    &__avatar{
      margin-top: 16px;
      width: 300px;
      position: absolute;
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
            &>img{
              @include shadow-panel;
            }
        }
        &__right{
          flex-basis: 65%;
          ul {
            list-style-image: url('../assets/bullet.svg');
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
    .product-backlog{
      &__avatar{
        display: none;
      }
    }
  }
   @media only screen and (max-width: 800px){
    .product-backlog{
      &__info{
        &__desc{
          &__prev{
            display:none;
          }
          &__right{
            flex-basis: 100%;
          }
        }
         &__ownership{
            display:none;
          }
      }
    }
  }
</style>
