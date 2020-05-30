<template>
  <item-description
  :mainTitle="$t('roles_product-owner')"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
      <div class="d-flex justify-content-end product-owner__preview">
        <img
        src="@/assets/product-owner/product_owner_prev.svg" alt="">
        <div class="d-flex flex-column product-owner__preview__menu">
          <div  class="d-flex flex-column align-items-center product-owner__preview__menu__item">
            <img src="@/assets/product-owner/product_backlog_icon.svg" alt="">
            <span>{{$t('artifact_product-backlog')}}</span>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:item-description>
        <div class="product-owner__desc">
          <p>{{$t('product-owner_desc_one')}}</p>
          <p> {{$t("product-owner_desc_four")}}</p>
          <ul>
            <li v-for="(desc, index) in listDescription" :key="index">
                {{$t(desc)}}
            </li>
          </ul>
          <p>{{$t("product-owner_desc_one")}}</p>
          <p>{{$t("product-owner_desc_two")}}</p>
          <p> {{$t("product-owner_desc_three")}}</p>
        </div>
    </template>
  </item-description>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ItemDescription from '@/components/ItemDescription/ItemDescription.vue';
@Component({
  components: {
    ItemDescription
  }
})
export default class ProductOwner extends Vue {
  avatarMssges = [
    'avatar_mssge_roles_productOwner_one'
  ]

  listDescription = [
    'product-owner_list_one',
    'product-owner_list_two',
    'product-owner_list_three',
    'product-owner_list_four'
  ]
}
</script>
<style lang="scss">
.product-owner{
  &__preview {
    width: 340px;
    > img {
      margin-top: 80px;
    }
    &__menu{
      margin-left: 24px;
      &__item {
        z-index: 900;
        font-size: 14px;
        padding-bottom: 2px;
        color: black;
        @include main-title-font;
        &.active{
          padding-bottom: 0px;
          border-bottom: 2px solid $primary;
          transition: 0.2s;
        }
        &:hover{
          text-decoration: none;
          color: black;
        }
        img {
          display: block;
        }
        margin-bottom: 70px;
      }
    }
  }
}

@media only screen and (max-width: 1000px){
  .product-owner{
      &__preview{
        display: none;
      }
      &__ownership{
        display: none;
      }
  }
}
</style>
