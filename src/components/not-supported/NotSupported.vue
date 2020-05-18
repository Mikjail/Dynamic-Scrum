<template>
  <div class="home__avatar-talk">
    <avatar-talk-guide
    :mssges="mssge"
    mssgWidth="300"
    mssgHeight="180"
    :mssgAlign="'center'"></avatar-talk-guide>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import AvatarTalkGuide from '@/components/shared/AvatarTalk/AvatarTalkGuide.vue';
@Component({
  components: { AvatarTalkGuide }
})
export default class NoSupporter extends Vue {
  mssge = ['not-supported-resolution']
}
</script>
