<template>
  <router-link :to="{path:'/order-detailed',query: {orderId: item.id}}">
    <div class="order_content">
      <img :src="item.img" alt />
      <div class="order_name">{{commodityName.join()}}</div>
      <span>订单状态：{{statusText}}</span>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    data() {
      return {
        list: ['待付款', '待发货', '已发货', '已完成', '已关闭', '无效订单']
      }
    },
    computed: {
      commodityName() {
        return this.item.orderItems.map(res => {
          return res.commodityName
        })
      },
      statusText() {
        return this.list[this.item.orderStatus]
      }
    }
  };
</script>

<style lang="scss" scoped>
  .order_content {
    position: relative;
    margin-top: 0.24rem;
    padding: 0.24rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.12rem;

    img {
      width: 1.32rem;
      height: 1.32rem;
    }

    .order_name {
      max-width: 2.8rem;
      position: absolute;
      top: 0.28rem;
      left: 1.8rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }

    span {
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(128, 128, 128, 1);
    }
  }
</style>
