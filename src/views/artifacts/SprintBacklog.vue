<template>
  <item-description
  mainTitle="Sprint Backlog"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <img
        class="sprint-backlog__preview"
        src="@/assets/sprint-backlog/sprint_backlog_panel.svg" alt="">
    </template>
    <template v-slot:item-description>
        <div class="sprint-backlog__desc">
          <p>{{$t('sprint-backlog_one')}}</p>
          <p>{{$t('sprint-backlog_two')}}</p>
        </div>
        <div class="sprint-backlog__ownership">
          <img src="@/assets/sprint-backlog/ownership.svg" alt="">
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
export default class SprintBacklog extends Vue {
  avatarMssges = ['avatar_mssge_artifacts_sprintBacklog_one', 'avatar_mssge_artifacts_sprintBacklog_two']
}
</script>
<style lang="scss">
.sprint-backlog{
  &__preview{
    width: 380px;
  }
  &__ownership {
    margin-top: 100px;
  }
}

@media only screen and (max-width: 1000px){
  .sprint-backlog{
      &__preview{
        display: none;
      }
      &__ownership{
        display: none;
      }
  }
}
</style>
