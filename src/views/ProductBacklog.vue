<template>
  <item-description
  mainTitle="Product Backlog"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <img class="product-backlog__preview"
        src="@/assets/product-backlog/product_backlog_panel.svg" alt="">
    </template>
    <template v-slot:item-description>
        <ul>
          <li v-for="(pbLi, index) in productBacklogDef" :key="`pb-${index}`">
            {{$t(pbLi)}}
          </li>
        </ul>
        <div class="product-backlog__ownership">
          <img src="@/assets/product-backlog/ownership.svg" alt="">
        </div>
    </template>
  </item-description>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ItemDescription from '@/components/shared/ItemDescription/ItemDescription.vue';
@Component({
  components: {
    ItemDescription
  }
})
export default class SprintBacklog extends Vue {
  productBacklogDef = [
    'product-backlog_list_one',
    'product-backlog_list_two',
    'product-backlog_list_three',
    'product-backlog_list_four'
  ];

  avatarMssges = ['avatar_mssge_artifacts_backlog_one']
}
</script>
<style lang="scss">
.product-backlog {
  &__ownership{
    position: relative;
    width: 30%;
    margin-top: 100px;
    margin-left: 25px;
  }
  &__preview{
      @include shadow-panel;
  }
}

@media only screen and (max-width: 800px){
  .product-backlog{
    &__ownership{
      display: none;
    }
  }
}
</style>
