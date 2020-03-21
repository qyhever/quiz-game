<template>
  <com-page-navbar-wrapper title="登录/注册" @touchmove.prevent.stop.native :onBack="onBack">
    <div class="user-container">
      <div class="user__header">
        <div class="user__header-logo-wrapper">
          <img class="user__header-logo" src="@/assets/images/user/logo.png" alt="logo">
        </div>
      </div>
      <div class="user__panel">
        <div class="panel__header">
          <div class="panel__title">验证邮箱</div>
        </div>
        <div class="panel__form">
          <div class="form-item">
            <div class="form-item__label">
              <div class="form-item__label-circle" :class="{pass: emailPass}"></div>
              <div class="form-item__label-text">邮箱地址</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.mail"
                clearable
                maxlength="30"
                placeholder="输入邮箱地址"
                :border="false"
              />
            </div>
          </div>
          <div class="form-item form-item--verify">
            <div class="form-item__label">
              <div class="form-item__label-circle" :class="{pass: verifyCodePass}"></div>
              <div class="form-item__label-text">验证码</div>
            </div>
            <div class="form-item__content">
              <van-field
                v-model.trim="form.verifyCode"
                clearable
                maxlength="4"
                placeholder="输入验证码"
                :border="false"
              />
            </div>
            <div class="form-item__button--verify-wrapper">
              <div v-if="count > 0" class="form-item__button--verify-text">{{count}}s</div>
              <van-button v-else class="form-item__button form-item__button--verify" :disabled="emailDisabled" @click="onSendCode">获取</van-button>
            </div>
          </div>
          <div class="form-item--submit">
            <van-button
              class="form-item__button form-item__button--submit"
              block
              :disabled="disabled"
              @click="onSubmit">
              确定
            </van-button>
          </div>
        </div>
        <div class="panel__message" v-if="messageVisible">
          <div class="panel__message-icon">*</div>
          <div class="panel__message-text">已向您的邮箱发送验证邮件，请前往邮箱查收并获取验证码。</div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  import { validator } from '@/utils/validate'
  // userBindMail
  import { sendMail } from '@/api/user'
  const MAIL_COUNT_TIME = 'mailCountTime'
  const DEFAULT_COUNT = 10
  export default {
    data() {
      return {
        form: {
          mail: '',
          verifyCode: ''
        },
        count: 0,
        messageVisible: false
      }
    },
    computed: {
      emailPass() {
        const { mail } = this.form
        return mail && validator(mail, 'email')
      },
      verifyCodePass() {
        const { verifyCode } = this.form
        return verifyCode && validator(verifyCode, 'phoneVerifyCode')
      },
      emailDisabled() {
        const { mail } = this.form
        return !mail || !validator(mail, 'email') || this.count > 0
      },
      disabled() {
        const { mail, verifyCode } = this.form
        return !mail || !validator(mail, 'email') || !verifyCode || !validator(verifyCode, 'phoneVerifyCode')
      }
    },
    mounted() {
      this.initCount()
    },
    methods: {
      onBack() {
        this.$router.push('/')
      },
      onSubmit() {
        const { mail, verifyCode } = this.form
        console.log({ mail, verifyCode })
        this.$router.push('/mail-check-success')
      },
      // 发送验证码
      async onSendCode() {
        try {
          const res = await sendMail(this.form.mail)
          console.log(res)
        } catch (err) {
          console.log(err)
        }
        // this.count = DEFAULT_COUNT
        // this.messageVisible = true
        // this.setCount()
        // window.localStorage.setItem(MAIL_COUNT_TIME, new Date().getTime())
      },
      // 从本地取时间进行初始化
      initCount() {
        const currentTime = new Date().getTime() / 1000
        const localTime = Number(window.localStorage.getItem(MAIL_COUNT_TIME)) / 1000
        const passTime = Math.floor(currentTime - localTime) // 已经过去的时间
        if (passTime >= 0 && passTime < DEFAULT_COUNT) {
          this.count = DEFAULT_COUNT - passTime // 剩余时间
          this.setCount() // 开始计时
        }
      },
      // 计时
      setCount() {
        if (this.count > 0) {
          this.countTimer = setTimeout(() => {
            this.count = this.count - 1
            this.setCount()
          }, 1000)
        } else {
          clearTimeout(this.countTimer)
          this.count = 0
        }
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
  .form-item {
    height: 37px;
    display: flex;
    margin-bottom: 13px;
  }
  .form-item__label {
    display: flex;
    align-items: center;
    margin-right: 9px;
  }
  .form-item__label-circle {
    width: 10px;
    height: 10px;
    margin-right: 9px;
    background-color: #F0F0F0;
    border-radius: 50%;
    &.pass {
      background-color: #F54E65;
    }
  }
  .form-item__label-text {
    width: 4em;
    color: #4D4D4D;
  }
  .form-item__content {
    flex: 1;
    /deep/ .van-cell {
      padding: 6.5px 16px;
      border-radius: 5px;
      background-color: #F0F0F0;
      .van-field__control {
        @include input-placeholder(#A6A6A6);
      }
    }
  }
  .form-item__button--verify-wrapper {
    width: 58px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-item__button--verify-text {
    padding-bottom: 4px;
    border-bottom: 2px solid #F54E65;
    color: #808080;
    font-size: $font-size-extra-small;
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
  .form-item__button--verify {
    height: 24px;
    line-height: 22px;
  }
  .form-item--submit {
    padding-top: 43px;
    padding-bottom: 52px;
  }
  .panel__message {
    display: flex;
    color: #4D4D4D;
  }
  .panel__message-icon {
    margin-right: 9px;
    color: #F54E65;
    font-size: 25px;
  }
  .panel__message-text {
    line-height: 20px;
  }
</style>
