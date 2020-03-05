<template>
  <com-page-navbar-wrapper title="提现" @touchmove.prevent.stop.native class="withdranal-container">
    <div class="withdrawal-header">
      <div class="withdrawal-header__inner">
        <div class="withdrawal-header__left">
          <div class="withdrawal-header__icon-wrapper">
            <!-- <img class="com-image" src="" alt="wx"> -->
          </div>
          <div class="withdrawal-header__label">微信</div>
        </div>
        <van-icon class="withdrawal-header__arrow" name="arrow" />
      </div>
    </div>
    <div class="com-gap"></div>
    <div class="withdrawal-form">
      <div class="withdrawal-form-item">
        <div class="withdrawal-form-item__label">账户余额：</div>
        <div class="withdrawal-form-item__content">¥138.00</div>
      </div>
      <div class="withdrawal-form-item">
        <div class="withdrawal-form-item__label">可提现金额：</div>
        <div class="withdrawal-form-item__content">¥98.00</div>
      </div>
      <div class="withdrawal-form-item">
        <div class="withdrawal-form-item__content">提现金额：</div>
        <div class="withdrawal-form-item__content">
          <van-field v-model="amount" clearable placeholder="输入提现金额" />
        </div>
      </div>
    </div>
    <van-button class="withdrawal__button" block>确认修改</van-button>
  </com-page-navbar-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        amount: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .withdranal-container /deep/ .main {
    background-color: $color-page-bg;
  }
  .withdrawal-header {
    padding: 12px 0;
    background-color: #fff;
  }
  .withdrawal-header__inner {
    padding: 11px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // @include highlight();
  }
  .withdrawal-header__left {
    display: flex;
    align-items: center;
  }
  .withdrawal-header__icon-wrapper {
    width: 22px;
    height: 22px;
    border: 1px solid #eee;
    margin-right: 16px;
  }
  .withdrawal-header__arrow {
    color: #BFBFBF;
    font-size: 24px;
  }
  .withdrawal-form-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    @include border-bottom-1px(#EBEBEB);
    padding: 22px 16px;
    .withdrawal-form-item__label {
      color: #A6A6A6;
    }
    .withdrawal-form-item__content {
      color: #4D4D4D;
    }
    /deep/ .van-cell {
      width: 104px;
      padding-right: 0;
    }
  }
  .withdrawal__button {
    margin: 70px auto 0;
    width: 75%;
    background-color: #F95E5F;
    border-radius: 4px;
    color: #fff;
  }
</style>
