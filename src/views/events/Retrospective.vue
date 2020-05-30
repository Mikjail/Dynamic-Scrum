<template>
  <item-description
  :mainTitle="$t('events_sprint-retro')"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <div class="d-flex flex-column sprint-retro__preview">
          <h5 class="sprint-retro__preview__item">
            {{$t('sprint-retro_event-time')}}
          </h5>
          <img src="@/assets/sprint-retro/sprint_retro.svg"
              alt=""
              class="sprint-retro__preview__item--arrows">
          <img src="@/assets/three_v-arrows.svg"
            alt=""
            class="sprint-retro__preview__item">
          <div class="d-flex justify-content-between sprint-retro__preview__item__does">
            <div class="sprint-retro__preview__item__does__item">
              <h5>
                  {{$t('inspect')}}
              </h5>
              <img class="sprint-retro__preview__item"
                src="@/assets/arrow_down.svg"
                alt="">
              <img src="@/assets/sprint-retro/relationships.svg" alt="">
              <h5>
               {{$t('sprint-retro_inspect')}}
              </h5>
            </div>
            <div class="sprint-retro__preview__item__does__item">
              <h5>
                  {{$t('identify')}}
              </h5>
              <img class="sprint-retro__preview__item"
                src="@/assets/arrow_down.svg"
                alt="">
              <img src="@/assets/sprint-retro/improvement.svg" alt="">
              <h5>
                {{$t('sprint-retro_identify')}}
              </h5>
            </div>
            <div class="sprint-retro__preview__item__does__item">
              <h5>
                  {{$t('create')}}
              </h5>
              <img class="sprint-retro__preview__item"
                src="@/assets/arrow_down.svg"
                alt="">
              <img src="@/assets/sprint-retro/plan.svg" alt="">
              <h5>
                {{$t('sprint-retro_create')}}
              </h5>
            </div>
          </div>
          <img class="sprint-retro__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
            <h5 class="sprint-retro__preview__item">
              {{$t('inspect-adapt')}}
            </h5>
          <img class="sprint-retro__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
            <h5>
              {{$t('sprint-goal')}}
            </h5>
        </div>
    </template>
    <template v-slot:item-description>
        <div class="sprint-retro__desc">
          <p v-for="(desc,index) in dailyDescription" :key="index">
            {{$t(desc)}}
          </p>
          <ul>
            <li v-for="(retro, index) in retroList" :key="index">
                {{$t(retro)}}
            </li>
          </ul>
          <p>
            {{$t('sprint_retro_five')}}
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
export default class Retrospective extends Vue {
  avatarMssges = [
    'avatar_mssge_events_sprint-retro_one'
  ]

  dailyDescription = [
    'sprint-retro_one',
    'sprint-retro_two',
    'sprint-retro_three',
    'sprint-retro_four'
  ]

  retroList = [
    'sprint-retro_list_one',
    'sprint-retro_list_two',
    'sprint-retro_list_three'
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
.sprint-retro{
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
     &__does{
       &__item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        flex-basis: 33.33%;
        h5 {
          &:nth-of-type(2){
            font-size: 14px;
          }

        }
        h5,
        img{
          margin-bottom: 24px;
        }
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
