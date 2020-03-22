<template>
  <com-page-navbar-wrapper title="竞豆充值">
    <div class="info-container">
      <cube-scroll ref="scroll">
        <div class="bean_detailed">
          <div class="bean_message">
            <div class="bean_count">
              <p>当前竞豆</p>
              <p>{{userInfo.bean}}</p>
            </div>
          </div>
        </div>
        <!-- 价格列表 -->
        <div class="bean_price">
          <h2>选择购买</h2>
          <ul class="price_list">
            <li class="price_item" v-for="(item,index) in priceList" :key="index">
              <img :src="require(`@/assets/images/recharge/recharge_0${item.id}.png`)" alt />
              <p>￥{{item.price}}元</p>
              <p>赠送{{item.give}}豆</p>
            </li>
          </ul>
        </div>
        <div class="line"></div>
        <!-- 选择数量 -->
        <div class="selection_quantity">
          <h2>选择数量</h2>
          <div class="price_tips">
            <span>本次可获得赠送竞豆：</span>
            <span>500</span>
          </div>
          <div class="price_choice">
            <p>
              需要支付：
              <s>￥5元</s>
            </p>
            <van-stepper v-model="value" min="1" max="10" integer />
          </div>
        </div>
        <div class="line"></div>
        <!-- 选择支付方式 -->
        <div class="payment_method">
          <h2>选择支付方式</h2>
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell title="支付宝支付" class="icon_ali" clickable @click="radio = '1'">
                <van-radio slot="right-icon" checked-color="#07c160" name="1" />
              </van-cell>
              <van-cell title="微信支付" class="icon_wechat" clickable @click="radio = '2'">
                <van-radio slot="right-icon" checked-color="#07c160" name="2" />
              </van-cell>
              <van-cell title="银联云闪付" class="icon_card" clickable @click="radio = '3'">
                <van-radio slot="right-icon" checked-color="#07c160" name="3" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
        <div class="payment_btn">
          <span>立即购买</span>
          <p>
            点击立即充值，即表示您已经同意
            <s>《充值活动协议》</s>
          </p>
        </div>
      </cube-scroll>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import { getBeanRecharge } from "@/api/user";
export default {
  data() {
    return {
      priceList: [
        {
          id: 1,
          price: 10,
          give: 5000
        },
        {
          id: 2,
          price: 20,
          give: 10000
        },
        {
          id: 3,
          price: 50,
          give: 50000
        },
        {
          id: 4,
          price: 100,
          give: 5000
        },
        {
          id: 5,
          price: 500,
          give: 10000
        },
        {
          id: 6,
          price: 1000,
          give: 50000
        }
      ],
      value: 1,
      radio: 1
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.info;
    }
  },
  mounted() {
    this.getBeanRecharge();
  },
  methods: {
    // 获取充值列表
    getBeanRecharge() {
      getBeanRecharge()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  height: calc(100vh - 0.88rem);
  overflow: hidden;
}

.bean_detailed {
  display: flex;
  align-items: center;
  margin: 0.28rem 0.32rem 0;
  height: 2.18rem;
  background: url("../../assets/images/bean_bg.png") no-repeat center/100%;

  .bean_message {
    width: 100%;
    padding: 0 0.3rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .bean_count {
      p {
        font-family: Microsoft YaHei;
        color: rgba(255, 255, 255, 1);

        &:nth-of-type(1) {
          margin-bottom: 0.34rem;
          font-size: 0.24rem;
          font-weight: 400;
        }

        &:nth-of-type(2) {
          font-size: 0.56rem;
          font-weight: bold;
        }
      }
    }
  }
}

.bean_price {
  margin: 0 0.32rem;

  h2 {
    margin: 0.46rem 0 0.32rem;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(77, 77, 77, 1);
  }

  .price_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;

    .price_item {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 1.92rem;
        height: 1.92rem;
      }

      p {
        font-family: Microsoft YaHei;
        font-weight: 400;

        &:nth-of-type(1) {
          margin: 0.22rem 0;
          font-size: 0.28rem;
          color: rgba(255, 163, 31, 1);
        }

        &:nth-of-type(2) {
          margin-bottom: 0.4rem;
          font-size: 0.24rem;
          color: rgba(77, 77, 77, 1);
        }
      }
    }
  }
}

.line {
  width: 100%;
  height: 0.12rem;
  background: rgba(245, 245, 245, 1);
}

.selection_quantity {
  margin: 0 0.32rem;

  h2 {
    margin: 0.35rem 0 0.23rem;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(77, 77, 77, 1);
  }

  .price_tips {
    padding: 0.13rem 0.26rem;
    background: rgba(255, 236, 212, 1);

    p {
      font-size: 0.24rem;
      font-family: Microsoft YaHei;

      &:nth-of-type(1) {
        margin-right: 0.13rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }

      &:nth-of-type(2) {
        font-weight: bold;
        color: rgba(249, 94, 95, 1);
      }
    }
  }

  .price_choice {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.41rem 0 0.32rem;

    p {
      margin-bottom: 0.32rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);

      s {
        text-decoration: none;
        font-weight: bold;
        color: rgba(255, 163, 31, 1);
      }
    }
  }

  //改写样式
  .van-stepper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 3.6rem;
    height: 0.68rem;
    border: 1px solid rgba(255, 163, 31, 1);
    border-radius: 0.34rem;
  }

  .van-stepper__input {
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
}
.payment_method {
  margin: 0 0.32rem;
  h2 {
    margin: 0.35rem 0 0.23rem;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(77, 77, 77, 1);
  }
}

.icon_ali {
  .van-cell__title {
    &::before {
      display: inline-block;
      content: "";
      width: 0.44rem;
      height: 0.44rem;
      background: url("../../assets/images/icon_ali.png") no-repeat center/100%;
      vertical-align: middle;
      margin-right: 0.24rem;
    }
  }
}
.icon_wechat {
  .van-cell__title {
    &::before {
      display: inline-block;
      content: "";
      width: 0.44rem;
      height: 0.44rem;
      background: url("../../assets/images/wechat.png") no-repeat center/100%;
      vertical-align: middle;
      margin-right: 0.24rem;
    }
  }
}
.icon_card {
  .van-cell__title {
    &::before {
      display: inline-block;
      content: "";
      width: 0.44rem;
      height: 0.44rem;
      background: url("../../assets/images/icon_pay.png") no-repeat center/100%;
      vertical-align: middle;
      margin-right: 0.24rem;
    }
  }
}
.payment_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    padding: 0.48rem 0;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(31, 31, 31, 1);
  }
  p {
    font-size: 0.2rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
    s {
      text-decoration: none;
      color: rgba(255, 196, 60, 1);
    }
  }
}
</style>
