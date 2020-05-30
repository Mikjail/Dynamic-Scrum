<template>
  <item-description
  :mainTitle="$t('artifact_product-backlog')"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
    <div class="d-flex flex-column align-items-center product-backlog__preview">
        <div class="product-backlog__preview__ownership">
          <img :src="require(`@/assets/product-backlog/${$t('ownership_img')}`)" alt="">
        </div>
        <img class="product-backlog__preview__panel"
          :src="require(`@/assets/product-backlog/${$t('product-backlog_img')}`)" alt="">
    </div>
    </template>
    <template v-slot:item-description>
        <p v-for="(pbLi, index) in productBacklogDef" :key="`pb-${index}`">
          {{$t(pbLi)}}
        </p>
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
export default class SprintBacklog extends Vue {
  productBacklogDef = [
    'product-backlog_one',
    'product-backlog_two',
    'product-backlog_three',
    'product-backlog_four',
    'product-backlog_five',
    'product-backlog_six'
  ];

  avatarMssges = ['avatar_mssge_artifacts_backlog_one']
}
</script>
<style lang="scss">
.product-backlog {
  &__preview{
    &__ownership{
      margin-left: 120px;
      margin-bottom: 24px;
    }
    &__panel{
      @include shadow-panel;
    }
  }
}

@media only screen and (max-width: 1000px){
  .product-backlog{
    &__ownership{
      display: none;
    }
  }
}
</style>
