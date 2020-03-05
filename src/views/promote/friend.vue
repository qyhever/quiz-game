<template>
  <com-page-navbar-wrapper title="好友" @touchmove.prevent.stop.native>
    <div class="com-gap"></div>
    <div class="friend-list">
      <div class="friend-item" v-for="(item, index) in list" :key="index">
        <div class="friend-item__avatar-wrapper">
          <img class="com-image" src="@/assets/images/promote/avatar.png" alt="avatar">
        </div>
        <div class="friend-item__content">
          <div class="friend-item__name">用户13312341113</div>
          <!-- noregister -->
          <div class="friend-item__status">已注册</div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        list: Array(3).fill(null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .friend-list {
    padding: 0 16px;
  }
  .friend-item {
    padding: 12px 0;
    display: flex;
    align-items: center;
    @include border-bottom-1px(#EBEBEB);
  }
  .friend-item__avatar-wrapper {
    width: 44px;
    height: 44px;
  }
  .friend-item__content {
    flex: 1;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $color-text-primary;
  }
  .friend-item__status {
    color: #F95E5F;
    font-size: $font-size-extra-small;
    &.noregister {
      color: $color-text-secondary;
    }
  }
</style>
