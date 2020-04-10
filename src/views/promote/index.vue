<template>
  <com-page-navbar-wrapper title="代理推广" @touchmove.prevent.stop.native>
    <div class="notice">推广10人即可成为代理，赚取佣金!</div>
    <div class="commission-container">
      <div class="commission-header">
        <router-link to="/promote-detail" class="commission-header__text">明细</router-link>
        <div class="commission-header__title">您的当前竞豆</div>
        <router-link to="/friend" class="commission-header__text">好友</router-link>
      </div>
      <div class="commission-body">
        <div class="commission-body__text">{{user.bean}}</div>
        <van-button class="commission-body__button" @click="onToWithdrawal">竞豆</van-button>
      </div>
    </div>
    <div class="com-gap"></div>
    <div class="method-container">
      <div class="promote__title">我的推广</div>
      <div class="method-list">
        <div class="method-item" @click="handleShowQrcode">
          <div class="method-item__image-wrapper">
            <img class="method-item__image" src="@/assets/images/promote/qrcode.png" alt="promote">
          </div>
          <div class="method-item__text">二维码</div>
        </div>
        <div class="method-item" @click="handleCopyLink">
          <div class="method-item__image-wrapper">
            <img class="method-item__image" src="@/assets/images/promote/link.png" alt="promote">
          </div>
          <div class="method-item__text">邀请链接</div>
        </div>
        <div class="method-item" @click="handleShowPromoteCode">
          <div class="method-item__image-wrapper">
            <img class="method-item__image" src="@/assets/images/promote/promote-code.png" alt="promote">
          </div>
          <div class="method-item__text">推广码</div>
        </div>
      </div>
    </div>
    <div class="com-gap"></div>
    <div class="description">
      <div class="promote__title">推广说明</div>
      <ul class="description-list">
        <li class="description-item">
          1.邀请10个好友注册参与竞猜，即可成为代理，成为代理后邀请好友或好友竞猜获得奖金即可收获佣金。
        </li>
        <li class="description-item">
          2.推广获竞豆，玩家通过你的推广链接注册的，玩家或房主中奖后您可获得平台费用的？%奖励，佣金不设上限。现在你推广的朋友中奖你也有收入了，一起来嗨吧！
        </li>
        
      </ul>
    </div>
    <dialog-qrcode :user="user" :url="url" ref="dialogQrcode" />
    <dialog-promote-code :user="user" :invitationCode="invitationCode" ref="dialogPromoteCode" />
  </com-page-navbar-wrapper>
</template>

<script>
  import { mapGetters } from 'vuex'
  import handleClipboard from '@/utils/clipboard'
  import DialogQrcode from './components/dialog-qrcode'
  import DialogPromoteCode from './components/dialog-promote-code'
  export default {
    components: {
      DialogQrcode,
      DialogPromoteCode
    },
    data() {
      return {
        info: {},
        invitationCode: '',
        url: ''
      }
    },
    computed: {
      ...mapGetters(['user'])
    },
    mounted() {
      if (this.user.invitationCode) {
        this.invitationCode = this.user.invitationCode
      }
      this.url = window.location.origin + `/#/register?invitationCode=${this.invitationCode}`
    },
    methods: {
      onToWithdrawal() {
        // this.$router.push('/withdrawal')
        this.$router.push('/bean-detailed')
      },
      handleCopyLink($event) {
        handleClipboard(this.url, $event)
          .then(() => {
            this.$dialog({
              message: '推广链接复制成功！',
              confirmButtonText: '确定'
            })
          })
          .catch(() => {
            this.$dialog({
              message: '复制失败',
              confirmButtonText: '确定'
            })
          })
      },
      handleShowQrcode() {
        this.$refs.dialogQrcode.open()
      },
      handleShowPromoteCode() {
        this.$refs.dialogPromoteCode.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .promote__title {
    padding: 15px;
    color: #4D4D4D;
    font-weight: 700;
  }
  .notice {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    background-color: #F95E5F;
    color: #fff;
  }
  .commission-container {
    padding: 0 17px 16px;
  }
  .commission-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
  .commission-header__title {
    color: #4D4D4D;
    font-size: $font-size-medium;
  }
  .commission-header__text {
    color: #F95E5F;
  }
  .commission-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .commission-body__text {
    padding-bottom: 15px;
    color: #F95E5F;
    font-size: 28px;
  }
  .commission-body__button {
    width: rem2px(240);
    height: 32px;
    line-height: 30px;
    border-radius: 16px;
    background-color: #F95E5F;
    color: #fff;
  }
  .method-list {
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
  }
  .method-item {
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .method-item__image-wrapper {
    width: 34px;
    height: 34px;
    margin-bottom: 7px;
  }
  .method-item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .description-list {
    padding: 0 30px;
  }
  .description-item {
    line-height: 24px;
  }
</style>
