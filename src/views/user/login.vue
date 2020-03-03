<template>
  <com-page-navbar-wrapper title="登录/注册" @touchmove.prevent.stop.native>
    <div class="login-container">
      <div class="login__header">
        <div class="login__header-logo-wrapper">
          <img class="login__header-logo" src="@/assets/images/user/logo.png" alt="logo">
        </div>
      </div>
      <div class="login__panel">
        <div class="panel__header">
          <div class="panel__title">登录</div>
          <router-link to="/forget-password" class="panel__header-extra">忘记密码</router-link>
        </div>
        <div class="panel__form">
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-icon-wrapper">
                <img class="form-item__label-icon" src="@/assets/images/user/user.png" alt="user">
              </div>
              <div class="form-item__label-text">账号</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.phone"
                type="tel"
                clearable
                maxlength="11"
                placeholder="输入手机号码"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-icon-wrapper">
                <img class="form-item__label-icon" src="@/assets/images/user/key.png" alt="key">
              </div>
              <div class="form-item__label-text">密码</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.password"
                type="password"
                clearable
                maxlength="25"
                placeholder="输入密码"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item form-item--verify">
            <div class="form-item__label">验证码</div>
            <div class="form-item__content">
              <van-field
                v-model="form.verifyCode"
                clearable
                maxlength="4"
                placeholder="输入验证码"
                :border="false"
              />
            </div>
            <div class="form-item__verify-image-wrapper">
              <img class="form-item__verify-image" src="@/assets/images/user/verify.png" alt="verify">
            </div>
          </div>
          <div class="form-item--checkbox">
            <van-checkbox
              v-model.trim="autoLogin"
              checked-color="#328EFF"
              icon-size="16px"
              shape="square">
              自动登录(勾选后一周内自动登录)
            </van-checkbox>
          </div>
          <div class="form-item--submit">
            <van-button class="form-item__button--submit" block :disabled="disabled" @click="onSubmit">登录</van-button>
          </div>
        </div>
        <div class="panel__footer">
          <router-link to="/register" class="panel__footer-text">没有账号，点我注册</router-link>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  import { validator } from '@/utils/validate'
  export default {
    data() {
      return {
        form: {
          phone: '',
          password: '',
          verifyCode: ''
        },
        autoLogin: false
      }
    },
    computed: {
      disabled() {
        const { phone, password, verifyCode } = this.form
        return !phone || phone.length !== 11 || !password || !verifyCode
      }
    },
    methods: {
      onSubmit() {
        const { phone, password, verifyCode } = this.form
        if (!validator(phone, 'mobile')) {
          return this.$showModal('请输入正确的手机号')
        }
        if (!validator(verifyCode, 'imageVerifyCode')) {
          return this.$showModal('验证码为数字和字母组合4位')
        }
        console.log({ phone, password, verifyCode })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .login__header {
    position: relative;
    height: 0;
    padding-bottom: 24%;
    background: url("~@/assets/images/user/header-bg.png");
    background-size: 100% 100%;
  }
  .login__header-logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 152px;
    height: 39px;
  }
  .login__header-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .login__panel {
    padding: 0 43px;
  }
  .panel__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  .panel__title {
    color: $color-text-primary;
    font-size: $font-size-large;
    font-weight: 700;
  }
  .panel__header-extra {
    color: #FE7A8C;
  }
  .form-item {
    height: 37px;
    display: flex;
    margin-bottom: 13px;
    border-radius: 5px;
    background-color: #F0F0F0;
  }
  .form-item__label {
    display: flex;
    align-items: center;
  }
  .form-item__label-icon-wrapper {
    width: 16px;
    height: 16px;
    margin-left: 12px;
    margin-right: 8px;
  }
  .form-item__label-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .form-item__label-text {
    color: #4D4D4D;
  }
  .form-item__content {
    flex: 1;
    /deep/ .van-cell {
      padding: 6.5px 16px;
      border-radius: 0 5px 5px 0;
      background-color: #F0F0F0;
      .van-field__control {
        @include input-placeholder(#A6A6A6);
      }
    }
  }
  .form-item--verify {
    background-color: #fff;
    .form-item__label {
      padding-left: 12px;
      padding-right: 17px;
    }
    .form-item__content {
      /deep/ .van-cell {
        border-radius: 5px;
      }
    }
  }
  .form-item__verify-image-wrapper {
    width: 89px;
    height: 100%;
    margin-left: 6px;
  }
  .form-item__verify-image {
    width: 100%;
    height: 100%;
  }
  .form-item--checkbox {
    padding-top: 16px;
  }
  .panel__form {
    /deep/ .van-checkbox {
      .van-checkbox__icon {
        .van-icon {
          border-radius: 5px;
          overflow: hidden;
          border: 1px solid #328EFF;
        }
      }
      .van-checkbox__label {
        color: #328EFF;
      }
    }
  }
  .form-item--submit {
    padding: 50px 0 46px;
  }
  .form-item__button--submit {
    background-color: #F54E65;
    border: 0;
    border-radius: 5px;
    height: 37px;
    line-height: 35px;
    color: #fff;
    &.van-button--disabled {
      background-color: #D9D9D9;
    }
  }
  .panel__footer {
    text-align: center;
  }
  .panel__footer-text {
    padding-bottom: 3px;
    border-bottom: 2px solid #E1E1E1;
    color: #808080;
  }
  @media screen and (max-width: 320px) {
    .form-item--verify {
      .form-item__label {
        padding-left: 0;
        padding-right: 6px;
      }
    }
  }
</style>
