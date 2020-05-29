<template>
  <item-description
  customWidth="375"
  mainTitle="Sprint Review"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <div class="d-flex flex-column sprint-review__preview">
          <h5 class="sprint-review__preview__item">
            4hs for one-month sprint
          </h5>
          <img src="@/assets/sprint-review/sprint_review_icon.svg"
            alt=""
            class="sprint-review__preview__item">
          <img src="@/assets/arrow_down.svg"
            alt=""
            class="sprint-review__preview__item">
          <h5>
              Inspect and Adapt
          </h5>
          <img src="@/assets/product-increment/increment_icon.svg"
            alt=""
            class="sprint-review__preview__item">
          <img class="sprint-review__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
          <h5>Refactor Produt Backlog (if needed)</h5>
          <img class="sprint-review__preview__item"
            src="@/assets/product-owner/product_backlog_icon.svg"
            alt="">
        </div>
    </template>
    <template v-slot:item-description>
        <div class="sprint-review__desc">
          <p>{{$t('sprint-review_one')}}</p>
          <p>{{$t('sprint-review_two')}}</p>
          <p>{{$t('sprint-review_three')}}</p>
          <ul>
            <li v-for="(desc,index) in reviewListDescription" :key="index">
            {{$t(desc)}}
          </li>
          </ul>
          <p>{{$t('sprint-review_four')}}</p>
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
export default class SprintReview extends Vue {
  avatarMssges = [
    'avatar_mssge_events_sprint-review_one'
  ]

  reviewListDescription = [
    'sprint-review_list_one',
    'sprint-review_list_two',
    'sprint-review_list_three',
    'sprint-review_list_four',
    'sprint-review_list_five',
    'sprint-review_list_six',
    'sprint-review_list_seven',
    'sprint-review_list_eight'
  ]
}
</script>
<style lang="scss">
h5 {
   @include main-title-font;
   font-size: 18px;
   text-align: center;
}
.requirement{
  @include shadow-panel;
}
.sprint-review{
  &__preview {
    margin-left: 60px;
    a {
      color: $secondary;
      &.active{
        margin-bottom: 0;
          h5 {
            border-bottom: 2px solid $primary;
          }
      }
      &:hover{
        text-decoration: none;
      }
    }
    &__item {
      margin-bottom: 24px;
      &:last-child{
        align-self: center;
        h5 {
          width: 80px;
        }
      }
    }
  }
  &__desc {
    h4 {
      margin-bottom: 20px;
      @include main-title-font;
    }
  }
}
</style>
