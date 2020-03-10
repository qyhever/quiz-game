<template>
  <com-page-navbar-wrapper title="登录/注册">
    <div class="user-container">
      <div class="user__header">
        <div class="user__header-logo-wrapper">
          <img class="user__header-logo" src="@/assets/images/user/logo.png" alt="logo">
        </div>
      </div>
      <div class="user__panel">
        <div class="panel__header">
          <div class="panel__title">注册</div>
        </div>
        <div class="panel__form">
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">输入账号</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.phone"
                type="tel"
                clearable
                maxlength="11"
                placeholder="请输入手机号码"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">登录密码</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.password"
                type="password"
                clearable
                maxlength="25"
                placeholder="输入登录密码"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">确认密码</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.confirmPassword"
                type="password"
                clearable
                maxlength="25"
                placeholder="再次输入登录密码"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">设置昵称</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.nickname"
                clearable
                maxlength="20"
                placeholder="输入昵称"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item form-item--verify">
            <div class="form-item__label">验证码</div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.verifyCode"
                clearable
                maxlength="4"
                placeholder="请输入验证码"
                :border="false"
              />
            </div>
            <div class="form-item__verify-image-wrapper" @click="queryVerifyCode">
              <img v-if="verifyCodeUrl" class="form-item__verify-image" :src="verifyCodeUrl" alt="verify">
            </div>
          </div>
          <div class="form-item form-item--verify">
            <div class="form-item__label">手机验证</div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.phoneVerifyCode"
                type="tel"
                clearable
                maxlength="4"
                placeholder="请输入短信验证码"
                :border="false"
              />
            </div>
            <div class="form-item__button--verify-wrapper">
              <van-button class="form-item__button form-item__button--verify" :disabled="verifyDisabled" @click="onSendCode">获取</van-button>
            </div>
          </div>
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-text">邀请码</div>
            </div>
            <div class="form-item__content form-item__content--invitation">
              <van-field
                v-model.trim="form.invitationCode"
                clearable
                maxlength="20"
                placeholder="输入邀请码"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item--checkbox">
            <van-checkbox
              v-model="agreed"
              checked-color="#328EFF"
              icon-size="16px"
              shape="square">
              <span>我已阅读并同意</span>
              <router-link class="form-item__link" to="/protocol">《中竞网用户服务协议》</router-link>
            </van-checkbox>
          </div>
          <div class="form-item--submit">
            <van-button class="form-item__button form-item__button--submit" block :disabled="disabled" @click="onSubmit">注册</van-button>
          </div>
        </div>
        <div class="panel__footer">
          <router-link to="/login" class="panel__footer-text">已有账号，点我登录</router-link>
        </div>
      </div>
    </div>
    <!-- width="76.87%" -->
    <van-dialog
      className="mail-dialog"
      v-model="visible"
      width="288px"
      :showConfirmButton="false">
      <div class="dialog__inner-wrapper">
        <div class="dialog__inner">
          <div class="dialog__header">
            <p>验证邮箱</p>
            <p>即送188劲豆</p>
          </div>
          <div class="dialog__body">
            <div class="dialog__body-text">注册成功！</div>
            <van-button class="dialog__body-button" @click="onToMail">马上验证邮箱</van-button>
          </div>
          <div class="dialog__close-wrapper">
            <img class="dialog__close" @click="close" src="@/assets/images/user/close.png" alt="close"/>
          </div>
        </div>
      </div>
    </van-dialog>
  </com-page-navbar-wrapper>
</template>

<script>
  import { validator } from '@/utils/validate'
  import { getDataURI } from '@/utils'
  import { register, getVeifyCode } from '@/api/user'
  export default {
    data() {
      return {
        form: {
          phone: '',
          password: '',
          confirmPassword: '',
          nickname: '',
          verifyCode: '',
          phoneVerifyCode: '',
          invitationCode: ''
        },
        agreed: false,
        visible: false,
        verifyCodeUrl: ''
      }
    },
    computed: {
      verifyDisabled() {
        const { phone } = this.form
        return !phone || phone.length !== 11
      },
      disabled() {
        const { phone, password, confirmPassword, nickname, verifyCode, phoneVerifyCode } = this.form
        return !phone || phone.length !== 11 || !password || !confirmPassword || !nickname || !verifyCode || !phoneVerifyCode
      }
    },
    mounted() {
      this.queryVerifyCode()
    },
    methods: {
      async queryVerifyCode() {
        try {
          const reponse = await getVeifyCode()
          this.verifyCodeUrl = getDataURI(reponse.img)
        } catch (err) {
          console.log(err)
        }
      },
      async onSubmit() {
        const { phone, password, confirmPassword, nickname, verifyCode, phoneVerifyCode, invitationCode } = this.form
        if (!validator(phone, 'mobile')) {
          return this.$showModal('请输入正确的手机号')
        }
        if (password !== confirmPassword) {
          return this.$showModal('两次密码输入不一致')
        }
        if (!validator(verifyCode, 'imageVerifyCode')) {
          return this.$showModal('验证码应该为数字和字母组合4位')
        }
        if (!validator(phoneVerifyCode, 'phoneVerifyCode')) {
          return this.$showModal('短信验证码应该为4位数字')
        }
        if (!this.agreed) {
          return this.$showModal('请阅读并同意用户服务协议')
        }
        console.log({ phone, password, confirmPassword, nickname, verifyCode, phoneVerifyCode })
        try {
          const params = {
            phone,
            password,
            confirmPassword,
            nickname,
            code: verifyCode,
            phoneCode: phoneVerifyCode
          }
          if (invitationCode) {
            params.invitationCode = invitationCode
          }
          const reponse = await register(params)
          console.log(reponse)
          this.visible = true
        } catch (err) {
          console.log(err)
        }
      },
      close() {
        this.visible = false
      },
      onToMail() {
        this.$router.push('/mail')
      },
      onSendCode() {
        const { phone } = this.form
        if (!validator(phone, 'mobile')) {
          return this.$showModal('请输入正确的手机号')
        }
        console.log(phone)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-container {
    height: 100%;
    overflow-y: auto;
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
    padding: 0 40px;
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
  .form-item {
    height: 37px;
    display: flex;
    align-items: center;
    margin-bottom: 13px;
  }
  .form-item__label {
    display: flex;
    align-items: center;
    width: 4em;
    margin-right: 12px;
  }
  .form-item__label-text {
    color: #4D4D4D;
  }
  .form-item__content {
    flex: 1;
    /deep/ .van-cell {
      height: 37px;
      border-radius: 5px;
      background-color: #F0F0F0;
      .van-field__control {
        @include input-placeholder(#A6A6A6, 12px);
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
        color: $color-text-secondary;
      }
    }
  }
  .form-item__link {
    color: #328EFF;
  }
  .form-item__content--invitation {
    /deep/ .van-cell {
      width: rem2px(256);
    }
  }
  .form-item__button {
    background-color: #F95E5F;
    border: 0;
    border-radius: 5px;
    height: 37px;
    line-height: 35px;
    color: #fff;
    &.van-button--disabled {
      background-color: #D9D9D9;
    }
  }
  .form-item__button--verify-wrapper {
    display: flex;
    align-items: center;
    margin-left: 12px;  
  }
  .form-item__button--verify {
    width: 76px;
    height: 24px;
    line-height: 22px;
  }
  .form-item--submit {
    padding: 47px 0 15px;
  }
  .panel__footer {
    padding-bottom: 68px;
    text-align: center;
  }
  .panel__footer-text {
    padding-bottom: 3px;
    border-bottom: 2px solid #E1E1E1;
    color: #808080;
  }
  .dialog__inner-wrapper {
    position: relative;
    padding-bottom: 94%;
    background: url("~@/assets/images/user/checkmail.png");
    background-size: 100% 100%;
  }
  .dialog__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .dialog__header {
    height: 54%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(255, 239, 221, 1) 0%,  rgba(209, 175, 110, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
  }
  .dialog__body {
    height: 46%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dialog__body-text {
    color: $color-text-primary;
    font-weight: 700;
  }
  .dialog__body-button {
    margin-top: 20px;
    width: 70%;
    height: 32px;
    line-height: 30px;
    background-color: #F54E65;
    border: 0;
    border-radius: 15px;
    color: #fff;
  }
  .dialog__close-wrapper {
    position: absolute;
    width: 100%;
    bottom: -59px;
    padding-top: 27px;
    text-align: center;
  }
  .dialog__close {
    width: 32px;
    height: 32px;
  }
  .mail-dialog {
    overflow: inherit;
    overflow: initial;
    background-color: transparent;
  }
</style>
