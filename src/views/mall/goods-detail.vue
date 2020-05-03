<template>
  <com-page-navbar-wrapper title="商品详情">
    <div class="goods">
      <div class="cover-wrapper">
        <img class="com-image" v-if="detail.picture" :src="detail.picture" alt="cover">
      </div>
      <div class="name-wrapper">
        <div class="name">{{detail.commodityName}}</div>
      </div>
      <div class="amount-wrapper">
        <div class="amount">¥{{detail.price}}</div>
        <div class="remain">剩余：{{detail.stock}}件</div>
      </div>
      <div class="goods__title">兑换方式</div>
      <div class="count-control-wrapper">
        <div class="goods__label">选择数量</div>
        <div class="count-control">
          <van-stepper class="step" :max="detail.stock" v-model="count" />
        </div>
      </div>
      <div class="exchange-wrapper">
        <div class="goods__label">兑换方式</div>
        <div class="exchange-list">
          <van-radio-group v-model="payMode" checked-color="#F95E5F">
            <van-radio name="1">
              <div class="exchange-label">竞豆兑换：</div>
              <div class="exchange-amount">{{detail.bean}}竞豆</div>
            </van-radio>
            <van-radio name="2">
              <div class="exchange-label">现金兑换：</div>
              <div class="exchange-amount">¥{{detail.conversionPrice}}</div>
            </van-radio>
            <van-radio name="3">
              <div class="exchange-label">现金+竞豆：</div>
              <div class="exchange-amount">¥{{detail.combinationPrice}}+{{detail.combinationBean}}竞豆</div>
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="goods__detail">
        <div class="goods__title">商品详情</div>
        <div class="goods__detail-content">{{detail.detail}}</div>
      </div>
      <div class="footer">
        <div class="footer__left">
          <div class="footer__icon-wrapper">
            <img class="com-image" src="@/assets/images/mall/buycar.png" alt="buycar">
          </div>
          <div class="footer__left-text" @click="onJoinCart">加购物车</div>
        </div>
        <van-button class="footer__button" @click="onSubmit">立即兑换</van-button>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
import { mapGetters } from 'vuex'
import { getGoodsDetail, addGoodsToCart } from '@/api/mall'
export default {
  data() {
    return {
      payMode: '1',
      count: 1,
      detail: {}
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  mounted() {
    if (!this.$route.query.id) {
      this.$router.back()
    } else {
      this.query()
    }
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value
    },
    async query() {
      try {
        const res = await getGoodsDetail(this.$route.query.id)
        this.detail = res.data || {}
      } catch (err) {
        console.log(err)
      }
    },
    async onJoinCart() {
      if (!this.token) {
        this.$router.push('/login')
        return
      }
      try {
        await addGoodsToCart(this.$route.query.id, this.count)
        this.$toast.success({
          mask: true,
          forbidClick: true,
          message: '添加成功'
        })
      } catch (err) {
        console.log(err)
      }
    },
    onSubmit() {
      localStorage.setItem('order-data', JSON.stringify({
        orderList: [
          Object.assign({}, this.detail, {
            count: this.count
          })
        ],
        total: this.detail.price * Number(this.count),
        payMode: this.payMode
      }))
      this.$router.push('/mall-order')
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods {
    height: 100%;
    overflow-y: auto;
  }
  .goods__title {
    width: 102px;
    height: 28px;
    line-height: 28px;
    padding-left: 16px;
    border-radius: 0 14px 14px 0;
    background-color: #F95E5F;
    color: #fff;
    font-size: $font-size-medium;
    font-weight: 700;
  }
  .goods__label {
    padding-left: 15px;
    font-weight: 700;
  }
  .cover-wrapper {
    height: rem2px(496);
  }
  .name-wrapper {
    display: flex;
    align-items: center;
    height: 44px;
    padding-left: 15px;
    background-color: #FB5F66;
    color: #fff;
    font-size: $font-size-medium;
    .name, .type {
      font-weight: 700;
    }
    .name {
      padding-right: 4px;
    }
  }
  .amount-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 19px;
    padding-right: 15px;
    height: 56px;
    .amount {
      color: #F95E5F;
      font-size: $font-size-extra-large;
      font-weight: 700;
    }
    .remain {
      color: #808080;
      font-size: $font-size-extra-small;
    }
  }
  .count-control-wrapper {
    padding: 13px 0;
    display: flex;
    align-items: center;
  }
  .count-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 34px;
    padding: 0 7px;
    margin-left: 38px;
    border-radius: 17px;
    border: 1px solid #F95E5F;
  }
  .step {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /deep/ .van-stepper__minus, /deep/ .van-stepper__plus {
      border-radius: 50%;
    }
    /deep/ .van-stepper__input {
      background-color: #fff;
    }
  }
  .exchange-list {
    padding-top: 24px;
    padding-left: 26px;
    border-bottom: 6px solid #EDF1F5;
    /deep/ .van-radio {
      padding-bottom: 20px;
    }
    /deep/ .van-radio__label {
      display: flex;
      .exchange-label {
        color: #4D4D4D;
      }
      .exchange-amount {
        color: #F95E6E;
        font-size: $font-size-medium;
      }
    }
    /deep/ .van-icon {
      display: none;
    }
  }
  .goods__detail {
    padding-top: 17px;
  }
  .goods__detail-content {
    padding: 16px 0 60px 16px;
  }
  .footer {
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    display: flex;
    background-color: #fff;
  }
  .footer__left {
    width: 60px;
    height: 100%;
    border: 1px solid #EBEBEB;
    border-right-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer__icon-wrapper {
    width: 20px;
    height: 20px;
  }
  .footer__left-text {
    padding-top: 4px;
    font-size: $font-size-extra-small;
  }
  .footer__button {
    flex: 1;
    height: 44px;
    line-height: 42px;
    background-color: #F95E5F;
    color: #fff;
    font-weight: 700;
  }
</style>
