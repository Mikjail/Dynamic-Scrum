<template>
    <div class="d-flex flex-column requirement">
      <div class="d-flex justify-content-between requirement__top">
        <span class="requirement__top__title">
          Login Feature
        </span>
        <img class="requirement__top__menu"
          src="@/assets/req_menu_icon.svg" />
      </div>
      <div class="d-flex justify-content-between requirement__bottom">
        <span class="requirement__bottom__desc">
          Create login/logout view
        </span>
        <span class="requirement__bottom__sp">
            5
        </span>
      </div>
    </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
@Component()
export default class RequirementUnit extends Vue {}
</script>
<style lang="scss" scoped>
.requirement {
  border: 1px solid $primary;
  width: 216px;
  border-radius: 4px;
  padding: 8px 10px;
  margin-bottom: 24px;
  @include main-title-font;
  &__top{
    height: 20px;
    &__title{
      font-size: 12px;
      color: black;
    }
    &__menu{
      margin-right: 8px;
    }
  }
  &__bottom{
    &__desc{
      font-size: 10px;
      color: gray;
    }
    &__sp{
      font-size: 8px;
      color: white;
      font-weight: 600;
      background-color: $primary;
      padding: 1px 10px;
      border-radius: 4px;
    }
  }
}
</style>
