<template>
  <com-page-navbar-wrapper title="忘记密码" @touchmove.prevent.stop.native>
    <div class="user-container">
      <div class="user__panel">
        <div class="panel__form">
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">输入已绑定手机号</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model="form.phone"
                type="tel"
                clearable
                maxlength="11"
                placeholder="请输入已绑定手机号"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">输入验证码</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model="form.verifyCode"
                clearable
                maxlength="6"
                placeholder="输入验证码"
                :border="false"
              />
              <van-button class="form-item__button form-item__button--verify" block>发送</van-button>
            </div>
          </div>
          <div class="form-item--submit">
            <van-button class="form-item__button form-item__button--submit" block>登录</van-button>
          </div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          phone: '',
          password: '',
          verifyCode: ''
        },
        autouser: false
      }
    },
    methods: {
      onNavToggle(value) {
        this.currentNav = value
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
  .user__panel {
    padding: 20px 16px 0;
    border-top: 6px solid #F2F2F2;
  }
  .form-item {
    margin-bottom: 20px;
  }
  .form-item__label {
    padding-bottom: 14px;
  }
  .form-item__label-text {
    color: $color-text-primary;
  }
  .form-item__content {
    display: flex;
    /deep/ .van-cell {
      flex: 1;
      padding: 6.5px 16px;
      border-radius: 5px;
      background-color: #F0F0F0;
      .van-field__control {
        @include input-placeholder(#A6A6A6, 12px);
      }
    }
  }
  .form-item__button {
    background-color: #F95E5F;
    border: 0;
    border-radius: 5px;
    height: 37px;
    line-height: 35px;
    color: #fff;
  }
  .form-item__button--verify {
    width: 105px;
    margin-left: 16px;
  }
  .form-item--submit {
    padding-top: 40px;
  }
  .form-item__button--submit {
    width: 81%;
    margin: 0 auto;
    height: 44px;
    line-height: 42px;
  }
</style>
