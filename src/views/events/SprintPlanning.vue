<template>
  <item-description
  customWidth="388"
  :mainTitle="$t('events_sprint-planning')"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <div class="d-flex flex-column sprint-planning__preview">
          <h5 class="sprint-planning__preview__item">
            {{$t('sprint-planning__event-time')}}
          </h5>
          <img src="@/assets/sprint-planning/sprint_planning.svg"
              alt=""
              class="sprint-planning__preview__item">
          <h5 class="sprint-planning__preview__item">
            {{$t('answer')}}
          </h5>
          <img src="@/assets/two_arrows.svg"
            alt=""
            class="sprint-planning__preview__item">
          <div class="d-flex justify-content-center sprint-planning__preview__item--answer">
            <a href="javascript:void(0)"
              @click="topicSelected='what'"
              :class="isActive('what')">
              <h5>
                 {{$t('sprint-planning_what_title')}}
            </h5>
            </a>
            <a href="javascript:void(0)"
              @click="topicSelected = 'how'"
              :class="isActive('how')">
              <h5>
                {{$t('sprint-planning_how_title')}}
              </h5>
            </a>
          </div>
          <img class="sprint-planning__preview__item"
            src="@/assets/arrow_down.svg"
            alt="">
          <a href="javascript:void(0)"
            @click="topicSelected = 'goal'"
            :class="isActive('goal')"
            class="sprint-planning__preview__item">
            <h5>
              {{$t('sprint-planning_goal_title')}}
            </h5>
          </a>
        </div>
    </template>
    <template v-slot:item-description>
        <div class="sprint-planning__desc">
          <h4>{{$t(sprintPlanningTopics[topicSelected].title)}}</h4>
          <p v-for="(desc,index) in sprintPlanningTopics[topicSelected].desc" :key="index">
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
export default class SprintPlanning extends Vue {
  avatarMssges = [
    'avatar_mssge_events_sprint-planning_one',
    'avatar_mssge_events_sprint-planning_two',
    'avatar_mssge_events_sprint-planning_three'
  ]

  sprintPlanningTopics = {
    what: {
      title: 'sprint-planning_what_title',
      desc: [
        'sprint-planning_what_one',
        'sprint-planning_what_two',
        'sprint-planning_what_three'
      ]
    },
    how: {
      title: 'sprint-planning_how_title',
      desc: [
        'sprint-planning_how_one',
        'sprint-planning_how_two',
        'sprint-planning_how_three',
        'sprint-planning_how_four'
      ]
    },
    goal: {
      title: 'sprint-planning_goal_title',
      desc: [
        'sprint-planning_goal_one',
        'sprint-planning_goal_two'
      ]
    }
  }

  topicSelected = 'what';

  isActive(topic: string) {
    return { active: topic === this.topicSelected };
  }
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
.sprint-planning{
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
      &--answer {
        margin-bottom: 28px;
        a{
           &:first-child{
            flex-basis: 50%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
           &:nth-child(2){
            flex-basis: 40%;
          }
          margin-bottom: 2px;
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
 .sprint-planning {
    &__preview {
      &__item{
        &:last-child{
          h5 {
            width: 150px !important;
          }
        }
      }
    }
  }
}
</style>
