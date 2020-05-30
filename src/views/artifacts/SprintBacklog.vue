<template>
  <item-description
  :mainTitle="$t('artifact_sprint-backlog')"
  :avatarMssges="avatarMssges">
    <template v-slot:item-preview>
        <img
        class="sprint-backlog__preview"
        :src="require(`@/assets/sprint-backlog/${$t('sprint-backlog_img')}`)" alt="">
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
import ItemDescription from '@/components/ItemDescription/ItemDescription.vue';
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

@media only screen and ( min-width: 600px) and (max-width: 1300px){
  .sprint-backlog {
      &__preview{
        left: -50px;
        position: relative;
      }
      &__ownership{
        display: none;
      }
  }
}

@media only screen and (max-width: 500px){
  .sprint-backlog{
      &__preview{
        display: block;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      &__ownership{
        display: none;
      }
  }
}
</style>
