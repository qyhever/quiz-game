<template>
  <com-page-navbar-wrapper title="登录/注册" @touchmove.prevent.stop.native>
    <div class="user-container">
      <div class="user__header">
        <div class="user__header-logo-wrapper">
          <img class="user__header-logo" src="@/assets/images/user/logo.png" alt="logo">
        </div>
      </div>
      <div class="user__panel">
        <div class="panel__title">验证成功！</div>
        <div class="panel__desc">
          恭喜您获得188竞豆！已放进您的钱包可前往我的—我的竞豆查收
        </div>
        <van-button class="panel__button" block @click="onSubmit">返回首页</van-button>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  export default {
    methods: {
      onSubmit() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .user__header {
    position: relative;
    height: 0;
    padding-bottom: 24%;
    background: url("~@/assets/images/user/header-bg.png");
    background-size: 100% 100%;
  }
  .user__header-logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 152px;
    height: 39px;
  }
  .user__header-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .user__panel {
    padding: 58px 43px 0;
    text-align: center;
  }
  .panel__title {
    color: $color-text-primary;
    font-size: $font-size-large;
    font-weight: 700;
  }
  .panel__desc {
    padding: 35px 0 52px;
    line-height: 22px;
    color: #4D4D4D;
  }
  .panel__button {
    background-color: #F95E5F;
    border: 0;
    border-radius: 5px;
    height: 37px;
    line-height: 35px;
    color: #fff;
  }
</style>
