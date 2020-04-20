<template>
  <com-page-navbar-wrapper title="确认订单">
    <div class="info-container">
      <!-- 订单地址(已选地址) -->
      <div class="mall_message" v-if="orderAddress.name">
        <van-icon name="location-o" size="0.4rem" />
        <div class="mall_info">
          <p>
            <span>{{orderAddress.name}}</span>
            <span>{{orderAddress.phone}}</span>
          </p>
          <p>{{`${orderAddress.province}${orderAddress.city}${orderAddress.region}${orderAddress.detailAddress}`}}</p>
        </div>
        <van-icon name="arrow" size="0.3rem" @click="toAddAddress" />
      </div>
      <!-- 订单地址(未选地址) -->
      <div class="mall_message" v-else>
        <van-icon name="location-o" size="0.4rem" />
        <div class="mall_info">添加收货地址</div>
        <van-icon name="add-o" size="0.36rem" color="rgba(240, 98, 98, 1)" @click="toAddAddress" />
      </div>
      <div class="line"></div>
      <!-- 商城订单列表 -->
      <div class="order_list">
        <cube-scroll ref="scroll">
          <ul>
            <li v-for="(item,index) in 25" :key="index">
              <img src="../../assets/images/dingdan_p2.png" alt />
              <div class="order_message">
                <span>游戏手办A款</span>
                <span>￥60+60竞豆</span>
              </div>
              <span class="order_count">x 1</span>
            </li>
          </ul>
          <!-- 订单运费及留言 -->
          <div class="order_freight">
            <ul>
              <li>
                <span>运费</span>
                <span>￥6</span>
              </li>
              <li>
                <span>留言:</span>
                <span>买家留言，选填</span>
              </li>
            </ul>
            <textarea></textarea>
          </div>
        </cube-scroll>
      </div>
      <!-- 订单支付 -->
      <order-pay></order-pay>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import OrderPay from "./components/order-pay";
import {
  getAddressList
} from "@/api/mall";
import { mapGetters } from 'vuex'
export default {
  components: {
    OrderPay
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['orderAddress'])
  },
  mounted() {
    if (!this.orderAddress.id) {
      this.query()
    }
    let orderData = []
    try {
      orderData = JSON.parse(localStorage.getItem('order-data'))
    } catch (err) {
      console.log(err)
    }
    console.log(orderData)
  },
  methods: {
    async query() {
      try {
        const res = await getAddressList()
        const list = res.rows || []
        const defaultAddress = list.find(item => item.defaultStatus === 1) || {}
        this.$store.commit('SET_ORDER_ADDRESS', defaultAddress)
      } catch (err) {
        console.log(err)
      }
    },
    toAddAddress() {
      this.$router.push("/add-address");
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 0.06rem;
  background: url("../../assets/images/buy_xinfeng.png") no-repeat center/100%;
}
.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .mall_message {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.26rem 0 0.35rem;
    margin: 0.24rem 0 0.6rem;
    .mall_info {
      width: 100%;
      margin: 0 0.34rem;
      p {
        &:nth-of-type(1) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.28rem;
          span {
            font-size: 0.32rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }
        }
        &:nth-of-type(2) {
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .order_list {
    height: calc(100vh - 0.88rem - 1.72rem - 0.98rem);
    overflow: hidden;
    ul {
      display: flex;
      flex-direction: column;
      li {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0.36rem 0.28rem;
        border-bottom: 1px solid rgba(235, 235, 235, 1);
        &:last-child {
          border-bottom: 0;
        }
        img {
          width: 1.84rem;
          height: 1.84rem;
        }
        .order_message {
          position: absolute;
          left: 2.4rem;
          display: flex;
          flex-direction: column;
          span {
            font-family: Microsoft YaHei;
            font-weight: 400;
            &:nth-of-type(1) {
              margin-bottom: 0.35rem;
              font-size: 0.32rem;
              color: rgba(77, 77, 77, 1);
            }
            &:nth-of-type(2) {
              font-size: 0.28rem;
              color: rgba(240, 98, 98, 1);
            }
          }
        }
        .order_count {
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(77, 77, 77, 1);
        }
      }
    }
    .order_freight {
      ul {
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.3rem;
          border-bottom: 1px solid rgba(235, 235, 235, 1);
          span {
            font-size: 0.28rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            &:nth-of-type(1) {
              color: rgba(51, 51, 51, 1);
            }
            &:nth-of-type(2) {
              color: rgba(249, 94, 95, 1);
            }
          }
          &:nth-of-type(2) {
            display: initial;
            border-bottom: 0;
            span {
              &:nth-of-type(1) {
                margin-right: 0.26rem;
              }
              &:nth-of-type(2) {
                color: rgba(179, 179, 179, 1);
              }
            }
          }
        }
      }
      textarea {
        width: 100%;
        height: 1.95rem;
        padding: 0.28rem;
        border: 0;
        background: rgba(247, 247, 247, 1);
      }
    }
  }
}
</style>
