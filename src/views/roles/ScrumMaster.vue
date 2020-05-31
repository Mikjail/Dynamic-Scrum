<template>
  <item-description
  mainTitle="Scrum Master"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
      <div class="d-flex flex-column align-items-center scrum-master__preview">
        <h5>1 {{$t('per-team')}}!</h5>
        <img
        src="@/assets/scrum-master/scrum_master_prev.svg" alt="">
        <h5>Service to</h5>
        <img src="@/assets/three_v-arrows.svg" alt="">
        <div class="d-flex scrum-master__preview__menu">
          <a href="javascript:void(0)"
            @click="serviceTo = 'roles_product-owner_v2'"
            :class="isActive('roles_product-owner_v2')"
            class="d-flex flex-column align-items-center scrum-master__preview__menu__item">
            <img src="@/assets/scrum-master/po_icon.svg" alt="">
            <span>{{$t('roles_product-owner_v2')}}</span>
          </a>
          <a href="javascript:void(0)"
            @click="serviceTo = 'roles_dev-team_v2'"
            :class="isActive('roles_dev-team_v2')"
            class="d-flex flex-column align-items-center scrum-master__preview__menu__item">
            <img src="@/assets/scrum-master/dt_icon.svg" alt="">
            <span>{{$t('roles_dev-team_v2')}}</span>
          </a>
          <a href="javascript:void(0)"
            @click="serviceTo = 'organization'"
            :class="isActive('organization')"
            class="d-flex flex-column align-items-center scrum-master__preview__menu__item">
            <img src="@/assets/scrum-master/org_icon.svg" alt="">
            <span> {{$t('organization')}}</span>
          </a>
        </div>
      </div>
    </template>
    <template v-slot:item-description>
        <div class="scrum-master__desc">
          <h4>{{$t(serviceTo)}}</h4>
           <ul>
          <li v-for="(smDesc, index) in scrumMasterDesc[serviceTo]" :key="`pb-${index}`">
            {{$t(smDesc)}}
          </li>
        </ul>
        </div>
    </template>
  </item-description>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ItemDescription from '@/components/ItemDescription/ItemDescription.vue';
@Component({
  components: {
    ItemDescription
  }
})
export default class ScrumMaster extends Vue {
  avatarMssges = ['avatar_mssge_scrum-master_one', 'avatar_mssge_scrum-master_two', 'avatar_mssge_scrum-master_three']

  serviceTo = 'roles_product-owner_v2';

  scrumMasterDesc = {
    'roles_product-owner_v2': [
      'scrum-master_po_one',
      'scrum-master_po_two',
      'scrum-master_po_three',
      'scrum-master_po_four',
      'scrum-master_po_five',
      'scrum-master_po_six',
      'scrum-master_po_seven'
    ],
    'roles_dev-team_v2': [
      'scrum-master_dt_one',
      'scrum-master_dt_two',
      'scrum-master_dt_three',
      'scrum-master_dt_four',
      'scrum-master_dt_five'
    ],
    organization: [
      'scrum-master_org_one',
      'scrum-master_org_two',
      'scrum-master_org_three',
      'scrum-master_org_four',
      'scrum-master_org_five'
    ]
  }

  isActive(menuItem: string) {
    return { active: this.serviceTo === menuItem };
  }
}
</script>
<style lang="scss">
.scrum-master {
  &__preview {
    width: 100%;
    > img {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    &__menu {
      width: 100%;
      align-items: flex-end;
      &__item {
        z-index: 900;
        font-size: 14px;
        padding-bottom: 2px;
        color:$secondary;
        flex-basis: 33.33%;
        &.active{
          padding-bottom: 0px;
          border-bottom: 2px solid $primary;
          transition: 0.2s;
        }
        &:hover{
          text-decoration: none;
          color: $secondary;
        }
        img {
          display: block;
        }
      }
    }
  }
  &__desc{
    h4 {
      margin-bottom: 20px;
      @include main-title-font;
    }
    ul {
      padding-left:5px;
    }
  }
}

@media only screen and (max-width: 1000px){
  .scrum-master {
    &__preview{
      &__menu{
        &__item{
          flex-direction: column-reverse !important;
          &.active{
            border-bottom: 0 solid $primary;
            img {
                  transition: 0.2s;
              border-bottom: 2px solid $primary;
            }
          }
        }
      }
    }
    &__desc{
      ul{
       padding-left:24px;
      }
    }
  }
}
</style>
