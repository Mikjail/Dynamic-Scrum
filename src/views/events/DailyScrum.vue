<template>
  <item-description
  customWidth="456"
  mainTitle="Daily Scrum"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <div class="d-flex flex-column daily-scrum__preview">
          <h5 class="daily-scrum__preview__item">
            15min every 24hs
          </h5>
          <img src="@/assets/daily-scrum/daily_icon.svg"
              alt=""
              class="daily-scrum__preview__item">
          <h5 class="daily-scrum__preview__item">
            Answer
          </h5>
          <img src="@/assets/three_v-arrows.svg"
            alt=""
            class="daily-scrum__preview__item">
          <div class="d-flex justify-content-center daily-scrum__preview__item">
            <h5>
                What did I do yesterday ?
            </h5>
            <h5>
              What will I do today ?
            </h5>
            <h5>
              Do I see any impediment ?
            </h5>
          </div>
          <img class="daily-scrum__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
            <h5 class="daily-scrum__preview__item">
              Inspect and Adapt
            </h5>
          <img class="daily-scrum__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
            <h5>
              Sprint Goal
            </h5>
        </div>
    </template>
    <template v-slot:item-description>
        <div class="daily-scrum__desc">
          <p v-for="(desc,index) in dailyDescription" :key="index">
            {{$t(desc)}}
          </p>
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
export default class DaiyScrum extends Vue {
  avatarMssges = [
    'avatar_mssge_events_daily-scrum_one',
    'avatar_mssge_events_daily-scrum_two',
    'avatar_mssge_events_daily-scrum_three'
  ]

  dailyDescription = [
    'daily-scrum_one',
    'daily-scrum_two',
    'daily-scrum_three',
    'daily-scrum_four',
    'daily-scrum_five',
    'daily-scrum_six'
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
.daily-scrum{
  &__preview {
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
    margin-left: 24px;
  }
}
</style>
