<template>
  <div class="artifact container">
    <div class="row d-flex">
      <div class="artifact__menu" v-for="fundamental in fudamentalList" :key="fundamental.name">
        <router-link
          :to="fundamental.route"
          class="artifact__menu__btn btn btn-outline-primary white"
          tag="button"
          >{{ $t(fundamental.name) }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { FundamentalsEnum, Fundamentals } from './Fundamentals';

@Component
export default class FundamentalsMenu extends Vue {
  @Prop({ required: true }) menuItem!: FundamentalsEnum;

  fundamentalsType = FundamentalsEnum;

  fundamentals: Fundamentals = {
    [this.fundamentalsType.ARTIFACTS]: [
      { name: 'artifact_product-backlog', route: 'artifacts/productBacklog' },
      { name: 'artifact_sprint-backlog', route: 'artifacts/sprintBacklog' },
      { name: 'artifact_increment', route: 'artifacts/increment' }
    ],
    [this.fundamentalsType.VALUES]: [
      { name: 'values_commitment', route: 'values/commitment' },
      { name: 'values_courage', route: 'values/courage' },
      { name: 'values_focus', route: 'values/focus' },
      { name: 'values_opennes', route: 'values/opennes' },
      { name: 'values_respect', route: 'values/respect' }
    ],
    [this.fundamentalsType.ROLES]: [
      { name: 'roles_scrum-master', route: 'roles/scrumMaster' },
      { name: 'roles_product-owner', route: 'roles/productOwner' },
      { name: 'roles_dev-team', route: 'roles/devTeam' }
    ]
  };

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
    flex-basis: 33.33%;
    margin-top: 20px;
    &:nth-child(4) {
      margin-left: 16.65%;
    }
    &__btn {
      width: 176px;
    }
  }
}
@media only screen and (min-height: 900px) {
  .artifact {
    bottom: 10%;
  }
}
</style>
