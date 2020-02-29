<template>
  <div>
    <com-block-header title="热门竞猜"/>
    <div class="hot-list">
      <div class="item" v-for="(item, index) in list" :key="index">
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
              <p class="item-body__team-name"></p>
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
              <p class="item-body__team-name"></p>
            </div>
          </div>
          <div class="item-body__right">
            <div class="item-body__right-title">6099人竞猜</div>
            <van-button class="item-body__right-button">参与竞猜</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <div class="more__button" @click="onPreviewMore">
        <div class="more__text">查看更多</div>
        <van-icon class="more__icon" name="plus" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: Array(3).fill(null)
    }
  },
  methods: {
    onPreviewMore() {
      console.log('onPreviewMore')
    }
  }
}
</script>

<style lang="scss" scoped>
  .hot-list {
    padding: 14px 0;
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
  }
  .more {
    display: flex;
    justify-content: center;
    padding-bottom: 26px;
    font-size: $font-size-base;
    color: #B3B3B3;
    .more__button {
      @include extend-click();
      display: flex;
    }
    .more__text {
      margin-right: 7px;
    }
  }
</style>
