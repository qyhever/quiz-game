<template>
  <van-dialog
    className="qrcode-dialog"
    v-model="visible"
    width="289px"
    close-on-click-overlay
    :show-confirm-button="false">
    <div class="dialog-header">
      <van-icon class="dialog__icon--close" name="cross" @click="close" />
      <div class="header__avatar-wrapper">
        <img v-if="user.avatar" class="header__avatar" :src="user.avatar" alt="avatar">
        <img v-else src="@/assets/images/promote/avatar.png" class="header__avatar" alt="avatar">
      </div>
      <div class="header__content">
        <div class="header__title">{{user.nickname}}</div>
        <div class="header__subtitle">ID:{{user.id}}</div>
      </div>
    </div>
    <div class="dialog-body">
      <vue-qrcode class="qrcode__image-wrapper" :value="url"></vue-qrcode>
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
      url: {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dialog-header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 0 16px 16px;
    background-color: #fff;
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
  .header__content {
    flex: 1;
    margin-left: 16px;
    color: #4D4D4D;
  }
  .header__subtitle {
    padding-top: 7px;
    font-size: $font-size-extra-small;
  }
  .dialog-body {
    height: 248px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F74D64;
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
</style>
