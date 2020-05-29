<template>
  <item-description
  mainTitle="Development Team"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
      <div class="d-flex justify-content-end dev-team__preview">
        <img
        src="@/assets/dev-team/dev_team_prev.svg" alt="">
        <div class="d-flex flex-column dev-team__preview__menu">
          <div  class="d-flex flex-column align-items-center dev-team__preview__menu__item">
            <img src="@/assets/dev-team/sprint_backlog_icon.svg" alt="">
            <span> Sprint Backlog </span>
          </div>
          <div  class="d-flex flex-column align-items-center dev-team__preview__menu__item">
            <span>3 - 9</span>
            <span>per team</span>
          </div>
          <div  class="d-flex flex-column align-items-center dev-team__preview__menu__item">
            <img src="@/assets/product-increment/increment_icon.svg" alt="">
            <span>Increment</span>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:item-description>
        <div class="dev-team__desc">
          <p>{{$t('dev-team_desc_one')}}</p>
          <p> {{$t("dev-team_desc_two")}}</p>
          <ul>
            <li v-for="(desc, index) in listDescription" :key="index">
                {{$t(desc)}}
            </li>
          </ul>
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
export default class DevTeam extends Vue {
  avatarMssges = [
    'avatar_mssge_roles_devTeam_one',
    'avatar_mssge_roles_devTeam_two'
  ]

  listDescription = [
    'dev-team_list_one',
    'dev-team_list_two',
    'dev-team_list_three',
    'dev-team_list_four',
    'dev-team_list_five'
  ]
}
</script>
<style lang="scss">
.dev-team{
  &__preview {
    width: 340px;
    &__menu{
      margin-left: 24px;
      &__item {
        z-index: 900;
        font-size: 14px;
        padding-bottom: 2px;
        color: black;
        @include main-title-font;
        &:first-child ,
        &:nth-child(2){
          margin-bottom: 100px;
        }
        &.active{
          padding-bottom: 0px;
          border-bottom: 2px solid $primary;
          transition: 0.2s;
        }
        &:hover{
          text-decoration: none;
          color: black;
        }
        img {
          display: block;
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px){
  .dev-team{
      &__preview{
        display: none;
      }
      &__ownership{
        display: none;
      }
  }
}
</style>
