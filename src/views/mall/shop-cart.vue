<template>
  <com-page-navbar-wrapper title="购物车">
    <div class="shopcart">
      <div class="goods-list">
        <com-loadmore :fetchData="query">
          <template slot-scope="{list}">
            <div
              class="goods-item"
              v-for="(item, index) in list"
              :key="index">
              <van-checkbox :key="index" v-model="item.checked" checked-color="#F95E5F"></van-checkbox>
              <div class="goods-item__image-wrapper">
                <img class="com-image" src="@/assets/images/mall/goods.png" alt="goods">
              </div>
              <div class="goods-item__content">
                <div>
                  <div class="goods-item__name">游戏手办A款</div>
                  <div class="goods-item__amount">￥60+60竞豆</div>
                </div>
                <div class="goods-item__content-footer">
                  <div class="shopcart-control">control</div>
                </div>
              </div>
            </div>
          </template>
        </com-loadmore>
      </div>
      <div class="footer">
        <div class="footer__left">
          <van-checkbox v-model="totalChecked" checked-color="#F95E5F">全选</van-checkbox>
          <div class="footer__left-amount">￥120+120竞豆</div>
        </div>
        <van-button class="footer__button">结算</van-button>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
export default {
  data() {
    return {
      totalChecked: false
    }
  },
  methods: {
    async query() {
      return Array(9).fill({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .shopcart {
    height: 100%;
  }
  .goods-list {
    position: fixed;
    top: $header-height;
    left: 0;
    right: 0;
    bottom: 49px;
    width: 100%;
    overflow: hidden;
  }
  .goods-item {
    display: flex;
    align-items: center;
    padding: 15px 25px 20px 16px;
    border-bottom: 10px solid #F7F7F7;
  }
  .goods-item__image-wrapper {
    width: 90px;
    height: 90px;
  }
  .goods-item__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
  .goods-item__name {
    padding-bottom: 16px;
    color: #4D4D4D;
    font-size: $font-size-medium;
  }
  .goods-item__amount {
    color: #F06262;
  }
  .goods-item__content-footer {
    display: flex;
    justify-content: flex-end;
  }
  .footer {
    @include border-top-1px(#EBEBEB);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    display: flex;
  }
  .footer__left {
    flex: 1;
    height: 100%;
    padding-left: 20px;
    padding-right: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer__left-amount {
    color: #F95E5F;
  }
  .footer__button {
    width: rem2px(200);
    height: 100%;
    line-height: 47px;
    background-color: #F95E5F;
    color: #fff;
  }
</style>
