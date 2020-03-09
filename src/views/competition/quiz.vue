<template>
  <div>
    <!-- 头部区域 -->
    <div class="quiz-header">
      <div class="header__team">
        <div class="header__image-wrapper">
          <img class="com-image" src="@/assets/images/home/team.png" alt="team">
        </div>
        <p class="header__team-name">AG超玩会</p>
      </div>
      <div class="header__score">
        <div class="header__score-text">
          <span>1</span>
          <span>:</span>
          <span>1</span>
        </div>
        <van-button class="header__button">参与竞猜</van-button>
      </div>
      <div class="header__team">
        <div class="header__image-wrapper">
          <img class="com-image" src="@/assets/images/home/team.png" alt="team">
        </div>
        <p class="header__team-name">AG超玩会</p>
      </div>
    </div>
    <!-- tab nav区域 -->
    <div class="tab-nav-wrapper">
      <div class="tab-nav__icon-wrapper">
        <img class="com-image" src="@/assets/images/competition/menu-active.png" alt="menu">
      </div>
      <div class="tab-nav">
        <div
          class="tab-nav-item"
          :class="{active: activeNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)">
          {{item.label}}
        </div>
      </div>
    </div>
    <!-- tab panel 区域 -->
    <div class="quiz-list">
      <div class="quiz-item" v-for="(item, index) in list" :key="index">
        <div class="item-header">
          <div class="item-header__left">
            <div class="item-header__icon">
              <img class="item-header__image" src="@/assets/images/home/icon1.png" alt="game">
            </div>
            <div class="item-header__title">LPL职业联赛</div>
          </div>
          <div class="item-header__time">11-22 19:00</div>
        </div>
        <div class="item-body">
          <div class="item-body__left">
            <div class="item-body__team">
              <div class="item-body__image-wrapper">
                <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item-body__team-name">LPL</p>
            </div>
            <div class="item-body__score">
              <span>1</span>
              <span>:</span>
              <span>1</span>
            </div>
            <div class="item-body__team">
              <div class="item-body__image-wrapper">
                <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item-body__team-name">LPL</p>
            </div>
          </div>
          <div class="item-body__right">
            <div class="item-body__right-title">6099人竞猜</div>
            <!-- settlement end -->
            <van-button class="item-body__right-button">参与竞猜</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {label: '热门竞猜', value: '1'},
        {label: '英雄联盟', value: '2'},
        {label: '王者荣耀', value: '3'},
        {label: '守望先锋', value: '4'}
      ],
      activeNav: '1',
      list: Array(10).fill(null)
    }
  },
  methods: {
    onNavToggle(value) {
      this.activeNav = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .quiz-header {
    padding: 10px 5.33%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FAFAFA;
    border-bottom: 5px solid $color-page-bg;
  }
  .header__image-wrapper {
    width: 75px;
    height: 75px;
  }
  .header__team-name {
    padding-top: 8px;
    text-align: center;
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
  // tab
  .tab-nav-wrapper {
    margin-top: 15px;
    padding: 0 17px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F5F5F5;
  }
  .tab-nav__icon-wrapper {
    width: 22px;
    height: 22px;
  }
  .tab-nav {
    flex: 1;
    margin-left: 14px;
    height: 40px;
    display: flex;
  }
  .tab-nav-item {
    position: relative;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size .15s;
    color: $color-text-secondary;
    &.active {
      color: #000;
      font-size: $font-size-medium;
      font-weight: 700;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      margin: 0 -2px;
      transition: width .2s;
      background-color: #F95E5F;
    }
  }
  // tab panel
  .quiz-list {
    padding-top: 12px;
  }
  .item-header {
    height: 32px;
    padding-left: 21px;
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, $color-page-bg, #fff);
    font-size: $font-size-extra-small;
  }
  .item-header__left {
    display: flex;
    align-items: center;
  }
  .item-header__title {
    margin-left: 13px;
    color: #808080;
  }
  .item-header__icon {
    width: 20px;
    height: 20px;
  }
  .item-header__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-header__time {
    color: $color-text-secondary;
  }
  .item-body {
    display: flex;
    padding: 15px 0;
    background-color: #fff;
  }
  .item-body__left {
    flex: 11;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:before, &:after {
      content: "";
    }
  }
  .item-body__team-name {
    padding-top: 2px;
    text-align: center;
    font-size: $font-size-extra-small;
    color: $color-text-primary;
  }
  .item-body__image-wrapper {
    width: 44px;
    height: 44px;
  }
  .item-body__image {
    width: 100%;
    height: 100%
  }
  .item-body__score {
    color: #FF4F4F;
    font-size: 28px;
  }
  .item-body__right {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item-body__right-title {
    padding-bottom: 6px;
    font-size: $font-size-extra-small;
    color: #FFA31F;
  }
  .item-body__right-button {
    width: 68px;
    height: 21px;
    line-height: 21px;
    padding: 0;
    border-color: transparent;
    background-color: #FFA31F;
    font-size: $font-size-extra-small;
    color: #fff;
    &.settlement {
      background-color: #153561;
      color: #B9CAE0;
    }
    &.end {
      background-color: #E6E6E6;
      color: $color-text-secondary;
    }
  }
</style>
