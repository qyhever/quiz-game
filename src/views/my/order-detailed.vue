<template>
  <com-page-navbar-wrapper title="我的订单">
    <div class="order_content">
      <cube-scroll ref="scroll">
        <!-- 订单状态 -->
        <div class="order_status">
          <van-icon name="passed" size="0.64rem" color="rgba(106,192,123,1)" />
          <span>{{statusText}}</span>
        </div>
        <div class="order_message" v-for="(item,index) in orderDetail.orderItems" :key="index">
          <div class="order_price">
            <img :src="item.picture" alt />
            <div>
              <p>{{item.commodityName}}</p>
              <p>￥{{item.combinationPrice}}+{{item.combinationBean}}竞豆</p>
            </div>
          </div>
          <ul class="price_detail">
            <li>
              <span>运费：</span>
              <span>商家包邮</span>
            </li>
            <li>
              <span>竞豆支付：</span>
              <span>{{item.combinationBean}}</span>
            </li>
            <li>
              <span>现金支付：</span>
              <span>￥{{item.combinationPrice}}</span>
            </li>
          </ul>
        </div>
        <!-- 订单详情 -->
        <div class="order_detailed">
          <ul>
            <li>
              <span>订单号</span>
              <p>{{orderDetail.orderSn}}</p>
            </li>
            <li>
              <span>订单时间</span>
              <p>{{orderDetail.createTime}}</p>
            </li>
            <li>
              <span>快递单号</span>
              <p>{{orderDetail.orderSn}}</p>
            </li>
            <li>
              <span>物流详情</span>
              <p>订单已发货</p>
              <p>
                <span>2019-11-26 8:30:20</span>
                <van-icon name="arrow" />
              </p>
            </li>
          </ul>
        </div>
        <!-- 收货地址 -->
        <div class="receiving_message">
          <ul>
            <li>
              <p>收货地址</p>
              <p>
                <span>{{orderDetail.name}} {{orderDetail.phone}}</span>
                <span class="edit_address">
                  <!-- <van-icon name="edit" /> -->
                  <!-- <s>修改地址</s> -->
                </span>
              </p>
              <p>{{orderDetail.province}}{{orderDetail.city}}{{orderDetail.region}}{{orderDetail.detailAddress}}</p>
            </li>
            <li>
              <span>配送方式</span>
              <p>快递包邮</p>
            </li>
            <li>
              <span>我的留言</span>
              <p>麻烦送到店铺打电话，谢谢。</p>
            </li>
          </ul>
        </div>
      </cube-scroll>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
  import {
    getOrderDetail
  } from "@/api/user";
  export default {
    data() {
      return {
        orderDetail: {},
        list: ['待付款', '待发货', '已发货', '已完成', '已关闭', '无效订单']
      };
    },
    computed: {
      statusText() {
        return this.list[this.orderDetail.orderStatus]
      }
    },
    mounted() {
      this.getOrderDetail();
    },
    methods: {
      // 获取订单详情
      getOrderDetail() {
        getOrderDetail(this.$route.query.orderId)
          .then(res => {
            this.orderDetail = res.data
          })
          .catch();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .order_content {
    height: calc(100vh - 0.88rem);
    overflow: hidden;
    background: rgba(242, 242, 242, 1);

    .order_status {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.28rem;
      background: rgba(255, 255, 255, 1);

      span {
        margin-left: 0.33rem;
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
      }
    }

    .order_message {
      margin: 0.24rem;
      padding: 0.24rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.12rem;

      .order_price {
        display: flex;
        align-items: center;

        img {
          width: 1.32rem;
          height: 1.32rem;
          margin-right: 0.11rem;
        }

        div {
          height: 1.32rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          p {
            font-family: Microsoft YaHei;

            &:nth-of-type(1) {
              font-size: 0.28rem;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }

            &:nth-of-type(2) {
              font-size: 0.24rem;
              font-weight: 400;
              color: rgba(249, 94, 95, 1);
            }
          }
        }
      }

      .price_detail {
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.2rem 0;

          span {
            font-size: 0.28rem;
            font-family: Microsoft YaHei;
            font-weight: 400;

            &:nth-of-type(1) {
              color: rgba(128, 128, 128, 1);
            }

            &:nth-of-type(2) {
              color: rgba(249, 94, 95, 1);
            }
          }

          &:nth-of-type(1) {
            span {
              &:nth-of-type(2) {
                font-weight: bold;
                color: rgba(76, 76, 76, 1);
              }
            }
          }
        }
      }
    }

    .order_detailed {
      margin: 0.24rem;
      padding: 0.24rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.12rem;

      ul {
        li {
          margin-top: 0.24rem;
          padding-bottom: 0.24rem;
          border-bottom: 1px solid rgba(242, 242, 242, 1);
          display: flex;
          flex-direction: column;

          span {
            margin-bottom: 0.25rem;
            font-size: 0.24rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(128, 128, 128, 1);
          }

          p {
            font-size: 0.24rem;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(77, 77, 77, 1);
          }

          &:nth-of-type(4) {
            padding-bottom: 0;

            p {
              &:nth-of-type(2) {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 0.12rem;

                span {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
    }

    .receiving_message {
      margin: 0.24rem;
      padding: 0.24rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.12rem;

      ul {
        li {
          margin-top: 0.24rem;
          padding-bottom: 0.24rem;
          border-bottom: 1px solid rgba(242, 242, 242, 1);
          display: flex;
          flex-direction: column;

          span {
            margin-bottom: 0.25rem;
            font-size: 0.24rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(128, 128, 128, 1);
          }

          p {
            font-size: 0.24rem;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(77, 77, 77, 1);
          }

          &:nth-of-type(1) {
            p {
              &:nth-of-type(1) {
                font-weight: 400;
                color: rgba(128, 128, 128, 1);
              }

              &:nth-of-type(2) {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0;
                margin: 0.22rem 0;

                span {
                  margin-bottom: 0;

                  &:nth-of-type(1) {
                    font-weight: bold;
                    color: rgba(77, 77, 77, 1);
                  }
                }

                .edit_address {
                  s {
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
