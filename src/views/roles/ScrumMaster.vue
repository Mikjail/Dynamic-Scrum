<template>
  <item-description
  mainTitle="Scrum Master"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
      <div class="d-flex justify-content-end scrum-master__preview">
        <img
        src="@/assets/scrum-master/scrum_master_prev.svg" alt="">
        <div class="d-flex flex-column scrum-master__preview__menu">
          <a href="javascript:void(0)"
            @click="serviceTo = 'product-owner'"
            :class="isActive('product-owner')"
            class="d-flex flex-column align-items-center scrum-master__preview__menu__item">
            <img src="@/assets/scrum-master/po_icon.svg" alt="">
            <span> Product Owner </span>
          </a>
          <a href="javascript:void(0)"
            @click="serviceTo = 'development-team'"
            :class="isActive('development-team')"
            class="d-flex flex-column align-items-center scrum-master__preview__menu__item">
            <img src="@/assets/scrum-master/dt_icon.svg" alt="">
            <span>Develpment Team</span>
          </a>
          <a href="javascript:void(0)"
            @click="serviceTo = 'organization'"
            :class="isActive('organization')"
            class="d-flex flex-column align-items-center scrum-master__preview__menu__item">
            <img src="@/assets/scrum-master/org_icon.svg" alt="">
            <span> Organization</span>
          </a>
        </div>
      </div>
    </template>
    <template v-slot:item-description>
        <div class="scrum-master__desc">
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
import ItemDescription from '@/components/shared/ItemDescription/ItemDescription.vue';
@Component({
  components: {
    ItemDescription
  }
})
export default class ScrumMaster extends Vue {
  avatarMssges = ['avatar_mssge_scrum-master_one', 'avatar_mssge_scrum-master_two', 'avatar_mssge_scrum-master_three']

  serviceTo = 'product-owner';

  scrumMasterDesc = {
    'product-owner': [
      'scrum-master_po_one',
      'scrum-master_po_two',
      'scrum-master_po_three',
      'scrum-master_po_four',
      'scrum-master_po_five',
      'scrum-master_po_six',
      'scrum-master_po_seven'
    ],
    'development-team': [
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
.scrum-master{
  &__preview {
    width: 340px;
    > img {
      margin-top: 30px;
    }
    &__menu{
      margin-left: 24px;
      margin-top: 80px;
      &__item {
        z-index: 900;
        font-size: 14px;
        padding-bottom: 2px;
        color:$secondary;
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
        margin-bottom: 70px;
      }
    }
  }
  &__desc{
    ul {
      padding-left:5px;
    }
  }
}
</style>
