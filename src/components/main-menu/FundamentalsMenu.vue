<template>
  <div class="artifact container">
    <div class="row d-flex justify-content-around">
      <h2 class="artifact__menu"
      @click="subItemSelected(fundamental)"
       v-for="fundamental in fudamentalList" :key="fundamental.name">
        {{ $t(fundamental.name) }}
      </h2>
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
      { name: MssgeType.ARTIFACT_PROD_BACKLOG },
      { name: MssgeType.ARTIFACT_SPRINT_BACKLOG },
      { name: MssgeType.ARTIFACT_INCREMENT }
    ],
    [this.fundamentalsType.VALUES]: [
      { name: MssgeType.VALUES_COMMITMENT },
      { name: MssgeType.VALUES_COURAGE },
      { name: MssgeType.VALUES_OPENNES },
      { name: MssgeType.VALUES_RESPECT },
      { name: MssgeType.VALUES_FOCUS }

    ],
    [this.fundamentalsType.ROLES]: [
      { name: MssgeType.ROLES_SCRUM_MASTER },
      { name: MssgeType.ROLES_PROD_OWNER },
      { name: MssgeType.ROLES_DEV_TEAM }
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
.artifact {
  position: absolute;
  bottom: 5%;
  &__menu {
    color: white;
    margin-top: 20px;
    padding-bottom: 5px;
    cursor: pointer;
    &:hover{
        border-bottom: 5px solid white;
        padding-bottom: 0px;
        transition: 0.5s;
    }
    &:nth-child(5){
      text-align: left;
    }
  }
}
@media only screen and (min-height: 900px) {
  .artifact {
    bottom: 10%;
  }
}
</style>
