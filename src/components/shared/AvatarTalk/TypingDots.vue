<template>
  <div class="ticontainer">
    <div class="tiblock">
      <div class="tidot"></div>
      <div class="tidot"></div>
      <div class="tidot"></div>
    </div>
  </div>
</template>
<style lang="scss">
.ticontainer {
  .tiblock {
    align-items: center;
    display: flex;
    height: 17px;
  }
  .tidot {
    background-color: white;
    animation: mercuryTypingAnimation 1.5s infinite ease-in-out;
    border-radius: 2px;
    display: inline-block;
    height: 4px;
    margin-right: 2px;
    width: 4px;
    &:nth-child(1) {
      animation-delay: 200ms;
    }
    &:nth-child(2) {
      animation-delay: 300ms;
    }
    &:nth-child(3) {
      animation-delay: 400ms;
    }
  }
}
@keyframes mercuryTypingAnimation {
  0% {
    transform: translateY(0px);
  }
  28% {
    transform: translateY(-5px);
  }
  44% {
    transform: translateY(0px);
  }
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TypingDots extends Vue {}
</script>
