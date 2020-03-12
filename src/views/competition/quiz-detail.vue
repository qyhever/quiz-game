<template>
  <com-page-navbar-wrapper title="竞猜详情">
    <div class="quiz-detail">
      <van-tabs class="tab" v-model="active" title-active-color="#F95E5F">
        <van-tab title="当前竞猜"></van-tab>
        <van-tab title="相关竞猜"></van-tab>
      </van-tabs>
      <!-- 头部区域 -->
      <div class="quiz-header-wrapper">
        <div class="notice">
          <div class="notice__left">
            <img src="@/assets/images/my/user-p1.png" alt="user" class="notice__icon">
            <div class="notice__title">竞豆池26659326</div>
          </div>
          <div>6099人参与</div>
        </div>
        <div class="quiz-header">
          <div class="quiz-header-top">
            <div class="quiz-header-top__left">
              <div class="quiz-header-top__icon">
                <img class="quiz-header-top__image" src="@/assets/images/home/gameicon1.png" alt="game">
              </div>
              <div class="quiz-header-top__title">LPL职业联赛</div>
            </div>
            <div class="quiz-header-top__time">11-22 19:00</div>
          </div>
          <div class="quiz-header-body">
            <div class="header__team">
              <div class="header__image-wrapper">
                <img class="com-image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="header__team-name">AG超玩会</p>
            </div>
            <div class="header__score">
              <div class="header__status">比赛进行中</div>
              <div class="header__score-text">
                <span>1</span>
                <span>:</span>
                <span>1</span>
              </div>
            </div>
            <div class="header__team">
              <div class="header__image-wrapper">
                <img class="com-image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="header__team-name">AG超玩会</p>
            </div>
          </div>
        </div>
      </div>
      <div class="stripe"></div>
      <div class="block">
        <div class="block-header">
          <div class="block-header__left">
            <div class="block-header__tag">猜全场</div>
            <div class="block-header__title">全场胜出战队是？</div>
          </div>
          <div class="block-header__right">6天后结束</div>
        </div>
        <div class="block-body">
          <div class="quiz-item-wrapper" v-for="(item, index) in Array(2)" :key="index">
            <div class="quiz-item">
              <div class="quiz-item__title">AG超玩会胜出</div>
              <div class="quiz-item__value">赔率1.16</div>
            </div>
          </div>
        </div>
      </div>
      <div class="stripe"></div>
      <div class="block">
        <div class="block-header">
          <div class="block-header__left">
            <div class="block-header__tag">猜比分</div>
            <div class="block-header__title">全场比分是？</div>
          </div>
          <div class="block-header__right">6天后结束</div>
        </div>
        <div class="block-body">
          <div class="quiz-item-wrapper" v-for="(item, index) in Array(4)" :key="index">
            <div class="quiz-item">
              <div class="quiz-item__title">AG超玩会胜出</div>
              <div class="quiz-item__value">赔率1.16</div>
            </div>
          </div>
        </div>
      </div>
      <div class="com-gap"></div>
      <div class="join-container">
        <div class="join-title">最新参与</div>
        <div class="join-list">
          <div class="join-row join-row--header">
            <div class="join-col">昵称</div>
            <div class="join-col">内容</div>
            <div class="join-col">时间</div>
            <div class="join-col">竞豆</div>
          </div>
          <div class="join-row" v-for="(item, index) in Array(6)" :key="index">
            <div class="join-col join-col--name">小明</div>
            <div class="join-col join-col--result">AG胜出</div>
            <div class="join-col join-col--time">11-22 15:11</div>
            <div class="join-col join-col--bean">1100</div>
          </div>
        </div>
      </div>
      <div class="footer" @click="show">
        <div class="footer__left">
          <img src="@/assets/images/my/user-touxiang.png" alt="avatar" class="footer__avatar">
          <div class="footer__name">瑞雯</div>
        </div>
        <div class="footer__right">
          <div class="footer__right-text">16888</div>
          <img class="footer__right-icon" src="@/assets/images/my/user-p1.png" alt="bean">
        </div>
      </div>
      <!-- popup -->
      <van-popup class="popup" v-model="visible" position="bottom">
        <div class="close-wrapper">
          <img @click="hide" src="@/assets/images/user/close.png" alt="close" class="popup__icon--close">
        </div>
        <div class="popup-container">
          <div class="popup-header">
            <div class="popup-header__tag">猜全场</div>
            <div class="popup__title">全场胜出战队是？</div>
          </div>
          <div class="popup-body">
            <div class="popup__row">
              <div class="popup__col">
                <div class="popup__label">您已选择</div>
                <div class="popup__value popup__value--red">AG超玩会胜出</div>
              </div>
            </div>
            <div class="popup__row">
              <div class="popup__col">
                <div class="popup__label">赔率</div>
                <div class="popup__value">1.16</div>
              </div>
              <div class="popup__col">
                <div class="popup__label">中奖可赢</div>
                <div class="popup__value">6380.00</div>
              </div>
            </div>
            <div class="popup__row">
              <div class="popup__col">
                <div class="popup__label">您已选择</div>
                <div class="popup__value">AG超玩会胜出</div>
              </div>
            </div>
            <van-field v-model="count" placeholder="请输入投注数量" size="large" />
            <div class="radio-list">
              <div
                class="radio-item"
                v-for="(item, index) in radios"
                :key="index"
                @click="onRadioClick(item.value)">
                {{item.label}}  
              </div>
            </div>
            <van-button class="popup__button" block>确认投注</van-button>
          </div>
        </div>
      </van-popup>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        active: '1',
        visible: false,
        radios: [
          {label: '10', value: '10'},
          {label: '100', value: '100'},
          {label: '1000', value: '1000'},
          {label: '10000', value: '10000'},
          {label: '全部', value: 'all'}
        ],
        activeRadio: 'all'
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      },
      onRadioClick(value) {
        this.activeRadio = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quiz-detail {
    height: 100%;
    overflow-y: auto;
  }
  .tab {
    /deep/ .van-tabs__line {
      background-color: #F95E5F;
    }
  }
  .quiz-header-wrapper {
    padding-top: 15px;
    background-color: #1D4D87;
  }
  .notice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 91.5%;
    height: 32px;
    padding: 0 15px;
    margin: 0 auto 15px;
    background-color: #FFF5E7;
    border-radius: 4px;
    color: #FFA31F;
    font-size: $font-size-extra-small;
  }
  .notice__left {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .notice__icon {
    width: 22px;
    height: 22px;
    margin-right: 9px;
  }
  .quiz-header-top {
    height: 32px;
    padding-left: 21px;
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $font-size-extra-small;
    color: #fff;
  }
  .quiz-header-top__left {
    display: flex;
    align-items: center;
  }
  .quiz-header-top__title {
    margin-left: 13px;
  }
  .quiz-header-top__icon {
    width: 20px;
    height: 20px;
  }
  .quiz-header-top__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .quiz-header-body {
    padding: 10px 5.33%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header__image-wrapper {
    width: 75px;
    height: 75px;
  }
  .header__team-name {
    padding-top: 8px;
    text-align: center;
    color: #fff;
  }
  .header__status {
    color: #FFA31F;
  }
  .header__score {
    text-align: center;
  }
  .header__score-text {
    margin-bottom: 12px;
    color: #FF4F4F;
    font-size: 40px;
  }
  .header__button {
    width: rem2px(200);
    height: 36px;
    line-height: 34px;
    background-color: #FFA31F;
    border-color: #FFA31F;
    color: #fff;
    font-size: $font-size-medium;
    font-weight: 700;
  }
  .stripe {
    height: 8px;
    background: url("~@/assets/images/competition/stripe.png");
    background-size: cover;
  }
  .block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px 15px;
    font-size: $font-size-extra-small;
  }
  .block-header__left {
    display: flex;
    align-items: center;
  }
  .block-header__tag {
    display: flex;
    align-items: center;
    height: 22px;
    line-height: 22px;
    margin-right: 8px;
    padding: 0 15px;
    background-color: #FF4F4F;
    color: #fff;
    text-align: center;
  }
  .block-header__title {
    color: #4D4D4D;
    font-size: $font-size-base;
    font-weight: 700;
  }
  .block-header__right {
    color: #FF4F4F;
  }
  .block-body {
    padding-left: rem2px(32);
    font-size: 0;
  }
  .quiz-item-wrapper {
    display: inline-block;
    height: rem2px(120);
    width: 45.68%;
    margin-right: rem2px(30);
    margin-bottom: rem2px(30);
    background-color: #FFEBEB;
    border: 2px solid #FF4F4F;
    border-radius: 2px;
  }
  .quiz-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: $font-size-base;
  }
  .quiz-item__value {
    padding-top: 8px;
    color: #FFA31F;
    font-weight: $font-size-extra-small;
  }
  .join-title {
    padding: 15px;
    font-weight: 700;
  }
  .join-container {
    padding-bottom: 60px;
  }
  .join-row {
    display: flex;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: $font-size-extra-small;
    &.join-row--header {
      background-color: #FFEBEB;
      border: 1px solid #FF4F4F;
    }
    .join-col {
      flex: 1;
      &.join-col--name {
        color: #4D4D4D;
      }
      &.join-col--result {
        font-weight: 700;
      }
      &.join-col--name {
        color: #808080;
      }
      &.join-col--name {
        color: #FF4F4F;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 16px;
    background-color: #1D4D87;
  }
  .footer__left, .footer__right {
    display: flex;
    align-items: center;
    font-size: $font-size-medium;
  }
  .footer__avatar {
    width: 41px;
    height: 41px;
  }
  .footer__name {
    margin-left: 15px;
    color: #fff;
  }
  .footer__right-text {
    margin-right: 10px;
    color: #FFC43C;
    font-weight: 700;
  }
  .footer__right-icon {
    width: 27px;
    height: 27px;
  }
  .close-wrapper {
    padding-bottom: 45px;
    text-align: center;
  }
  .popup {
    background-color: transparent;
    overflow-y: inherit;
    overflow-y: initial;
  }
  .popup__icon--close {
    width: 32px;
    height: 32px;
  }
  .popup-container {
    background-color: #fff;
  }
  .popup-header {
    display: flex;
    align-items: center;
    height: 36px;
    padding-left: 15px;
    background-color: #FF4F4F;
    color: #fff;
  }
  .popup-header__tag {
    height: 22px;
    line-height: 22px;
    padding: 0 15px;
    border: 1px solid #fff;
    border-radius: 2px;
    text-align: center;
    font-size: $font-size-extra-small;
  }
  .popup__title {
    margin-left: 8px;
    font-weight: 700;
  }
  .popup-body {
    padding: 16px 16px 48px;
  }
  .popup__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .popup__col {
    display: flex;
    align-items: center;
  }
  .popup__label {
    padding-right: 16px;
    color: #4D4D4D;
    color: #F8A042;
    font-weight: 700;
  }
  .popup__value {
    color: #F8A042;
    font-weight: 700;
  }
  .popup__value--red {
    color: #FF4F4F;
  }
</style>
