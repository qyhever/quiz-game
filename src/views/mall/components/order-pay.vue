<template>
  <!-- 订单支付 -->
  <div class="mall_pay">
    <div class="pay_message">
      <p>待支付：</p>
      <p>
        <span>￥{{total}}</span>
        <!-- <span>含运费6元</span> -->
      </p>
    </div>
    <span class="pay_btn" @click="onShow">马上支付</span>

    <!-- 选择支付方式 -->
    <van-popup v-model="visible">
      <div class="pay_way">
        <!-- <h1>选择支付方式</h1> -->
        <div class="form-item">
          <div class="form-title">支付类型</div>
          <van-radio-group v-model="form.payMode" checked-color="#F95E5F">
            <van-radio name="1">
              <div class="radio-label">竞豆支付：</div>
              <div class="radio-content">￥{{detail.totalBean}}竞豆</div>
            </van-radio>
            <van-radio name="2">
              <div class="radio-label">现金支付：</div>
              <div class="radio-content">￥{{detail.totalPrice}}竞豆</div>
            </van-radio>
            <van-radio name="3">
              <div class="radio-label">组合支付：</div>
              <div class="radio-content">￥{{detail.combinationPrice}}+{{detail.combinationBean}}竞豆</div>
            </van-radio>
          </van-radio-group>
        </div>
        <div class="form-item" v-if="form.payMode !== '1'">
          <div class="form-title">支付方式</div>
          <div>
            <van-radio-group v-model="form.payType" checked-color="#F95E5F">
              <van-radio name="1">
                <div class="radio-label">
                  <span class="icon-wx"></span>
                  <span>微信</span>
                </div>
              </van-radio>
              <van-radio name="2">
                <div class="radio-label">
                  <span class="icon-alipay"></span>
                  <span>支付宝</span>
                </div>
              </van-radio>
            </van-radio-group>
          </div>
        </div>
        <div class="form-item">
          <div class="form-title">确认密码</div>
          <div class="form-content">
            <van-field
              v-model.trim="form.password"
              type="password"
              clearable
              maxlength="25"
              placeholder="输入密码"
              :border="false"
            />
          </div>
        </div>
        <van-button
          class="button--submit"
          block
          :loading="loading"
          :disabled="loading"
          @click="onSubmit">
          确定支付
        </van-button>
        <!-- <ul>
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
        </ul> -->
      </div>
    </van-popup>
  </div>
</template>

<script>
import { getConfirmOrderData, payOrder } from '@/api/mall'
export default {
  props: {
    total: {
      default: 0
    },
    cartVos: {
      type: Array,
      default: () => ([])
    },
    addressId: {
      default: null
    },
    messsage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
      loading: false,
      form: {
        payMode: '1',
        payType: '1',
        password: ''
      },
      detail: {}
    }
  },
  methods: {
    async onShow() {
      if (!this.addressId) {
        return this.$showModal('请选择地址')
      }
      try {
        const res = await getConfirmOrderData({
          cartVos: this.cartVos,
          addressId: this.addressId,
          messsage: this.messsage
        })
        this.detail = res.data || {}
        this.visible = true
      } catch (err) {
        console.log(err)
      }
    },
    async onSubmit() {
      if (!this.form.password) {
        return this.$showModal('请输入密码')
      }
      try {
        const params = Object.assign({}, this.form, {
          orderSn: this.detail.orderSn
        })
        const res = await payOrder(params)
        console.log(res) 
      } catch (err) {
        console.log(err)
      }
    }
  }
}
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
  padding: 15px;
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
.form-title {
  padding-bottom: 10px;
}
.form-item {
  /deep/ .van-radio {
    margin-bottom: 10px;
  }
  /deep/ .van-radio__label {
    display: flex;
  }
}
.icon-wx, .icon-alipay {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-position: center/100%;
  background-size: 100%;
}
.icon-wx {
  background-image: url("~@/assets/images/wechat.png");
}
.icon-alipay {
  background-image: url("~@/assets/images/icon_ali.png");
}
.form-content {
  /deep/ .van-field {
    padding-top: 0;
    padding-bottom: 0;
    background-color: #F0F0F0;
    .van-field__control {
      @include input-placeholder(#A6A6A6);
      height: 26px;
      line-height: 26px;
    }
  }
}
.button--submit {
    background-color: #F54E65;
    border: 0;
    border-radius: 5px;
    height: 37px;
    line-height: 35px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #fff;
    &.van-button--disabled {
      background-color: #D9D9D9;
    }
  }
</style>
