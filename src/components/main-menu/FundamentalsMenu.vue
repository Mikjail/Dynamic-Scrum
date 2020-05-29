<template>
    <div class="row d-flex justify-content-around subitems">
      <div
        class="d-flex flex-column justify-content-end subitems__container"
        v-for="fundamental in fudamentalList"
        :key="fundamental.name">
        <template v-if="fundamental.routeSrc">
          <router-link
              :to="fundamental.routeSrc"
            >
              <img :src="require(`@/assets/UI/Icons/${fundamental.imgSrc}.svg`)" alt="">
               <p>{{$t(fundamental.name)}}</p>
          </router-link>
        </template>
        <template v-else>
          <a href="javascript:void(0)" @click="subItemSelected(fundamental)">
            <img :src="require(`@/assets/UI/Icons/${fundamental.imgSrc}.svg`)" alt="">
            <p>{{$t(fundamental.name)}}</p>
          </a>
        </template>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  FundamentalsEnum, Fundamentals, SubItem, MssgeType
} from './Fundamentals';

@Component
export default class FundamentalsMenu extends Vue {
  @Prop({ required: true }) menuItem!: FundamentalsEnum;

  fundamentalsType = FundamentalsEnum;

  fundamentals: Fundamentals = {
    [this.fundamentalsType.ARTIFACTS]: [
      { name: MssgeType.ARTIFACT_PROD_BACKLOG, imgSrc: 'product_backlog', routeSrc: '/product-backlog' },
      { name: MssgeType.ARTIFACT_SPRINT_BACKLOG, imgSrc: 'sprint_backlog', routeSrc: '/sprint-backlog' },
      { name: MssgeType.ARTIFACT_INCREMENT, imgSrc: 'product_increment', routeSrc: '/product-increment' }
    ],
    [this.fundamentalsType.EVENTS]: [
      { name: MssgeType.EVENTS_SPRINT_PLANNING, imgSrc: 'sprint_planning', routeSrc: '/sprint-planning' },
      { name: MssgeType.EVENTS_DAILY_SCRUM, imgSrc: 'daily_scrum', routeSrc: '/daily-scrum' },
      { name: MssgeType.EVENTS_SPRINT_REVIEW, imgSrc: 'sprint_review', routeSrc: '/sprint-review' },
      { name: MssgeType.EVENTS_SPRINT_RETROSPECTIVE, imgSrc: 'sprint_retro', routeSrc: '/sprint-retro' }
    ],
    [this.fundamentalsType.VALUES]: [
      { name: MssgeType.VALUES_COMMITMENT, imgSrc: 'commitment' },
      { name: MssgeType.VALUES_COURAGE, imgSrc: 'courage' },
      { name: MssgeType.VALUES_OPENNESS, imgSrc: 'openness' },
      { name: MssgeType.VALUES_RESPECT, imgSrc: 'respect' },
      { name: MssgeType.VALUES_FOCUS, imgSrc: 'focus' }
    ],
    [this.fundamentalsType.ROLES]: [
      { name: MssgeType.ROLES_SCRUM_MASTER, imgSrc: 'scrum_master', routeSrc: '/scrum-master' },
      { name: MssgeType.ROLES_PROD_OWNER, imgSrc: 'product_owner', routeSrc: '/product-owner' },
      { name: MssgeType.ROLES_DEV_TEAM, imgSrc: 'dev_team', routeSrc: '/dev-team' }
    ]
  };

  subItemSelected(item: SubItem) {
    this.$emit('subItemSelected', item);
  }

  get fudamentalList() {
    return this.fundamentals[this.menuItem];
  }
}
</script>
<style lang="scss">
.subitems {
  height: 20vh;
  display: flex;
  align-items: center;
  &__container{
     a {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      img{
        height: 50px;
      }
      p{
        margin-bottom: 0;
        color:white;
        margin-top: 10px;
        text-align: center;
      }
  }
}
@media only screen and (min-height: 900px) {
  .subitems {
    bottom: 10%;
  }
}
</style>
