<template>
  <com-page-tabbar-wrapper navbar-visible>
    <div class="mall">
      <div class="mall-header">
        <div class="header-item">
          <img class="header-item__icon" src="@/assets/images/mall/bean.png" alt="bean">
          <div class="header-item__text">我的竞豆</div>
          <div class="header-item__count">888</div>
        </div>
        <div class="header-item">
          <img class="header-item__icon" src="@/assets/images/mall/exchange.png" alt="bean">
          <div class="header-item__text">兑换记录</div>
        </div>
      </div>
      <div class="com-gap"></div>
      <div class="tab-nav">
        <div
          class="tab-nav-item"
          :class="{active: currentNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)">
          {{item.label}}
        </div>
      </div>
      <div class="goods-wrapper">
        <div class="goods-list">
          <com-loadmore :fetchData="query">
            <template slot-scope="{list}">
              <div class="goods-item" v-for="(item, index) in list" :key="index" @click="onToGoodsDetail">
                <div class="goods-item__image-container">
                  <div class="goods-item__image-wrapper">
                    <img class="com-image" src="@/assets/images/mall/goods.png" alt="goods">
                  </div>
                </div>
                <div class="goods-item__footer">
                  <div class="goods-item__title">游戏皮肤A款</div>
                  <div class="goods-item__row">
                    <div class="goods-item__row-left">
                      <img class="goods-item__icon" src="@/assets/images/mall/bean-active.png" alt="bean">
                      <div class="goods-item__amount">1888</div>
                    </div>
                    <van-icon class="goods-item__cart" name="cart-o" />
                  </div>
                </div>
              </div>
            </template>
          </com-loadmore>
        </div>
      </div>
      <div class="shopcart">
        <div class="shopcart-badge">12</div>
        <img class="com-image" src="@/assets/images/mall/shopcart.png" alt="shopcart">
      </div>
    </div>
  </com-page-tabbar-wrapper>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {label: '全部', value: ''},
        {label: '游戏手办', value: 'game'},
        {label: '游戏皮肤', value: 'skin'},
        {label: '积分红包', value: 'integral'}
      ],
      currentNav: ''
    }
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value
    },
    onToGoodsDetail() {
      console.log('onToGoodsDetail')
    },
    async query() {
      return Array(9).fill(null)
    }
  }
}
</script>

<style lang="scss" scoped>
  .mall {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .mall-header {
    position: relative;
    height: 45px;
    display: flex;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 24px;
      background-color: #F5F2F3;
    }
  }
  .header-item {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-item__icon {
    width: 15px;
    height: 15px;
    margin-right: 9px;
  }
  .header-item__text {
    margin-right: 10px;
    color: #808080;
    font-size: $font-size-extra-small;
  }
  .header-item__count {
    color: #F54E65;
  }
  .tab-nav {
    height: 40px;
    padding: 0 16px;
    display: flex;
  }
  .tab-nav-item {
    position: relative;
    flex: 1;
    height: 100%;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size .15s;
    font-size: $font-size-extra-small;
    color: $color-text-secondary;
    &.active {
      color: #000;
      font-size: $font-size-base;
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
  .goods-wrapper {
    flex: 1;
    background-color: #EDF1F5;
    overflow: hidden;
  }
  .goods-list {
    height: 100%;
    overflow: hidden;
    padding-top: 1.35%;
    padding-left: 1.35%;
    font-size: 0;
  }
  .goods-item {
    position: relative;
    display: inline-block;
    width: 48.64%;
    height: 0;
    padding-bottom: 48.64%;
    margin-right: 1.35%;
    margin-bottom: 1.35%;
    background-color: #fff;
    font-size: $font-size-base;
  }
  .goods-item__image-container {
    position: relative;
    height: 0;
    padding-bottom: 66.11%;
  }
  .goods-item__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .goods-item__footer {
    position: absolute;
    top: 66.11%;
    left: 11px;
    right: 15px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .goods-item__title {
    padding-bottom: 10px;
  }
  .goods-item__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .goods-item__row-left {
    display: flex;
  }
  .goods-item__icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
  .goods-item__amount {
    color: #F95E5F;
  }
  .goods-item__cart {
    font-size: 17px;
  }
  .shopcart {
    z-index: 9;
    position: fixed;
    width: 40px;
    height: 40px;
    top: 70%;
    right: 12px;
  }
  .shopcart-badge {
    position: absolute;
    top: -8px;
    right: 0;
    width: 18px;
    height: 18px;
    border-radius: 8px;
    background-color: #F95E5F;
    text-align: center;
    line-height: 18px;
    font-size: $font-size-extra-small;
    color: #fff;
  }
</style>
