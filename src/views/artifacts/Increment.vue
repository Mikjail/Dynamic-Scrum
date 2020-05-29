<template name="fade">
    <item-description
      mainTitle="Product Increment"
      :avatarMssges="avatarMssges">
        <template v-slot:item-preview>
            <div class="product-increment__preview d-flex flex-column align-items-center">
              <requirement-unit> </requirement-unit>
              <img src="@/assets/arrow_down.svg" alt="">
              <div class="d-flex justify-content-center product-increment__preview__done">
                <span>
                  Items Meets definition of Done
                </span>
                <img src="@/assets/product-increment/done_icon.svg" alt="">
              </div>
              <img src="@/assets/arrow_down.svg" alt="">
              <img src="@/assets/product-increment/increment_icon.svg" alt="">
            </div>
        </template>
        <template v-slot:item-description>
            <div class="sprint-backlog__desc">
              <p>{{$t('product-increment_one')}}</p>
              <p>{{$t('product-increment_two')}}</p>
            </div>
        </template>
      </item-description>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ItemDescription from '@/components/shared/ItemDescription/ItemDescription.vue';
import RequirementUnit from '@/components/shared/RequirementUnit/RequirementUnit.vue';
@Component({
  components: {
    ItemDescription,
    RequirementUnit
  }
})
export default class Increment extends Vue {
  avatarMssges = ['avatar_mssge_artifacts_increment_one', 'avatar_mssge_artifacts_increment_two']
}
</script>
<style lang="scss">
h5 {
   @include main-title-font;
}
.requirement{
  @include shadow-panel;
}
.product-increment{
  &__preview {
    margin-left: 80px;
    &>img{
      margin-bottom: 32px;
    }
    &__done {
      margin-bottom: 32px;
      span{
        @include main-title-font;
        font-size: 14px;
        text-align: center;
        width: 70px;
        margin-right: 10px;
      }
    }
  }
}
</style>
