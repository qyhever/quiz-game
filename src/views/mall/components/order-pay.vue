<template>
  <!-- 订单支付 -->
  <div class="mall_pay">
    <div class="pay_message">
      <p>待支付：</p>
      <p>
        <span>￥126+120竞豆</span>
        <span>含运费6元</span>
      </p>
    </div>
    <span class="pay_btn" @click="show=true">马上支付</span>

    <!-- 选择支付方式 -->
    <van-popup v-model="show">
      <div class="pay_way">
        <h1>选择支付方式</h1>
        <ul>
          <li>
            <span>竞豆支付（余额：888）</span>
          </li>
          <li>
            <span>微信支付</span>
            <van-icon name="arrow" size="0.2rem" />
          </li>
          <li>
            <span>支付宝支付</span>
            <van-icon name="arrow" size="0.2rem" />
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
// 订单支付
.mall_pay {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 0.98rem;
  display: flex;
  align-items: center;
  padding-left: 0.29rem;
  background: #fff;
  z-index: 999;
  .pay_message {
    width: 100%;
    height: 100%;
    padding-top: 0.18rem;
    display: flex;
    border-top: 1px solid rgba(235, 235, 235, 1);
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    p {
      &:nth-of-type(1) {
        margin-right: 0.23rem;
        font-size: 0.2rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
      }
      &:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        span {
          &:nth-of-type(1) {
            margin-bottom: 0.1rem;
            font-size: 0.28rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(249, 94, 95, 1);
          }
          &:nth-of-type(2) {
            font-size: 0.2rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }
        }
      }
    }
  }
  .pay_btn {
    width: 2rem;
    line-height: 0.98rem;
    text-align: center;
    background: rgba(249, 94, 95, 1);
    border: 1px solid rgba(245, 245, 245, 1);
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
.van-popup {
  border-radius: 0.1rem !important;
}
// 支付方式
.pay_way {
  width: 5.64rem;
  h1 {
    margin: 0.32rem;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  ul {
    border-top: 0.1rem solid rgba(245, 245, 245, 1);
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.26rem 0;
      margin: 0 0.38rem;
      border-bottom: 1px solid rgba(230, 230, 230, 1);
      &:last-child {
        border-bottom: 0;
      }
      span {
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
        &::before {
          display: inline-block;
          content: "";
          width: 0.48rem;
          height: 0.48rem;
          margin-right: 0.18rem;
          vertical-align: middle;
          background: url("../../../assets/images/my/user-p1.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(2) {
        span {
          &::before {
            background: url("../../../assets/images/wechat.png") no-repeat
              center/100%;
          }
        }
      }
      &:nth-of-type(3) {
        span {
          &::before {
            background: url("../../../assets/images/icon_ali.png") no-repeat
              center/100%;
          }
        }
      }
    }
  }
}
</style>
