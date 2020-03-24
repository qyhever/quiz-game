<template>
  <van-dialog
    className="code-dialog"
    v-model="visible"
    width="289px"
    close-on-click-overlay
    :show-confirm-button="false">
    <div class="dialog-container">
      <div class="dialog-header">
        <van-icon class="dialog__icon--close" name="cross" @click="close" />
        <div class="header__avatar-wrapper">
          <img v-if="user.avatar" class="header__avatar" :src="user.avatar" alt="avatar">
          <img v-else src="@/assets/images/promote/avatar.png" class="header__avatar" alt="avatar">
        </div>
        <div class="header__title">{{user.nickname}}</div>
        <div class="header__content">
          <div class="header__text">这里真的太好玩了！注册即送188竞豆！</div>
          <div class="header__text">和我一起竞猜赢大奖吧！</div>
        </div>
      </div>
      <div class="dialog-body">
        <com-longtap @longtap="handleSaveImage">
          <vue-qrcode class="qrcode__image-wrapper" :value="invitationCode || ' '"></vue-qrcode>
        </com-longtap>
        <van-button class="dialog__button">长按图片保存至相册</van-button>
      </div>
    </div>
  </van-dialog>
</template>

<script>
  import VueQrcode from 'vue-qrcode'
  export default {
    props: {
      user: {
        type: Object,
        default: () => ({})
      },
      invitationCode: {
        type: String,
        default: ''
      }
    },
    components: {
      VueQrcode
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      open() {
        this.visible = true
      },
      close() {
        this.visible = false
      },
      handleSaveImage() {
        console.log('save')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .code-dialog {}
  .dialog-container {
    display: flex;
    flex-direction: column;
    height: 406px;
    background: url("~@/assets/images/promote/promote-code-dialog.png");
    background-size: 100% 100%;
  }
  .dialog-header {
    position: relative;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    // background-color: #F74D64;
    font-size: $font-size-base;
  }
  .dialog__icon--close {
    position: absolute;
    top: 12px;
    right: 12px;
    color: #BFBFBF;
  }
  .header__avatar-wrapper {
    width: 49px;
    height: 49px;
  }
  .header__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header__title {
    padding-top: 4px;
    padding-bottom: 10px;
    color: #fff;
  }
  .header__content {
    background: linear-gradient(0, rgba(255, 239, 221, 1) 0%,  rgba(209, 175, 110, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    line-height: 18px;
  }
  .header__text {
    font-weight: 700;
  }
  .dialog-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: #fff;
  }
  .qrcode__image-wrapper {
    width: 150px;
    height: 150px;
    border: 1px solid #eee;
  }
  .qrcode__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .dialog__button {
    width: rem2px(400);
    height: 32px;
    line-height: 30px;
    margin-top: 20px;
    border-radius: 16px;
    background-color: #F95E5F;
    color: #fff;
  }
</style>
