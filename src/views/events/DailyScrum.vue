<template>
  <item-description
  customWidth="385"
  :mainTitle="$t('events_daily-scrum')"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <div class="d-flex flex-column daily-scrum__preview">
          <h5 class="daily-scrum__preview__item">
            {{$t('daily-scrum_event-time')}}
          </h5>
          <img src="@/assets/daily-scrum/daily_icon.svg"
              alt=""
              class="daily-scrum__preview__item">
          <h5 class="daily-scrum__preview__item">
            {{$t('answer')}}
          </h5>
          <img src="@/assets/three_v-arrows.svg"
            alt=""
            class="daily-scrum__preview__item">
          <div class="d-flex justify-content-center daily-scrum__preview__item">
            <h5>
              {{$t('daily-scrum_what-did')}}
            </h5>
            <h5>
              {{$t('daily-scrum_what-will')}}
            </h5>
            <h5>
              {{$t('daily-scrum_impediments')}}
            </h5>
          </div>
          <img class="daily-scrum__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
            <h5 class="daily-scrum__preview__item">
              {{$t('inspect-adapt')}}
            </h5>
          <img class="daily-scrum__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
            <h5>
              {{$t('sprint-goal')}}
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
import ItemDescription from '@/components/ItemDescription/ItemDescription.vue';
import RequirementUnit from '@/components/RequirementUnit/RequirementUnit.vue';
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
  }
}

@media only screen and (max-width: 500px){
.daily-scrum{
  &__preview {
      &__item {
        h5 {
          flex-basis: 33.33%
        }
      }
    }
  }
}
</style>
