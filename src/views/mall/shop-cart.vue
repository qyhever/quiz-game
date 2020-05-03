<template>
  <com-page-navbar-wrapper title="购物车">
    <div slot="header-right" class="delete-wrapper" @click="onDelete">
      <van-icon name="delete" />
    </div>
    <div class="shopcart">
      <div class="goods-list">
        <cube-scroll :data="list">
          <div
            class="goods-item"
            v-for="(item) in list"
            :key="item.id">
            <van-checkbox
              :key="item.id"
              v-model="item.checked"
              checked-color="#F95E5F"
              @click="onCheckBoxClick"
            />
            <div class="goods-item__image-wrapper">
              <img class="com-image" src="@/assets/images/mall/goods.png" alt="goods">
            </div>
            <div class="goods-item__content">
              <div>
                <div class="goods-item__name">{{item.commodityName}}</div>
                <div class="goods-item__paytype" @click="onShowPicker(item)">
                  <div class="goods-item__amount">￥{{item.price}}</div>
                  <!-- <van-icon name="arrow-down" /> -->
                </div>
              </div>
              <div class="goods-item__content-footer">
                <div class="shopcart-control">
                  <!--  TODO max -->
                  <van-stepper
                    class="step"
                    v-model="item.count"
                    @plus="onUpdateCount(item, 1)"
                    @minus="onUpdateCount(item, -1)"
                  />
                </div>
              </div>
            </div>
          </div>
        </cube-scroll>
      </div>
      <div class="footer">
        <div class="footer__left">
          <van-checkbox v-model="totalChecked" checked-color="#F95E5F" @click="onTotalCheckBoxClick">全选</van-checkbox>
          <div class="footer__left-amount">￥{{total}}</div>
        </div>
        <van-button class="footer__button" @click="onSubmit" :disabled="!selectedList.length">结算</van-button>
      </div>
    </div>
    <com-paytype-picker ref="paytypePicker"/>
  </com-page-navbar-wrapper>
</template>

<script>
import { getCartData, deleteCart, updateCartCount } from '@/api/mall'
export default {
  data() {
    return {
      totalChecked: false,
      list: []
    }
  },
  computed: {
    selectedList() {
      return this.list.filter(item => item.checked)
    },
    total() {
      return this.selectedList.reduce((x, y) => {
        return x + Number(y.count) * y.price
      }, 0)
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    async query() {
      try {
        const res = await getCartData()
        const list = res.data.cart || []
        this.list = list.map(item => Object.assign({}, item, {
          checked: false
        }))
      } catch (err) {
        console.log(err)
      }
    },
    onCheckBoxClick() {
      // checked 更新是异步的，必须在更新完成之后操作
      setTimeout(() => {
        this.totalChecked = this.list.every(item => item.checked)
      }, 20)
    },
    onTotalCheckBoxClick() {
      this.list = this.list.map(item => Object.assign({}, item, {
        checked: !this.totalChecked
      }))
    },
    onSubmit() {
      localStorage.setItem('order-data', JSON.stringify({
        orderList: this.selectedList,
        total: this.total
      }))
      this.$router.push('/mall-order')
    },
    onShowPicker(data) {
      console.log(data)
      // const columns = [
      //   {
      //     text: `竞豆兑换: ¥${data.bean}竞豆`,
      //     value: '1'
      //   },
      //   {
      //     text: `现金兑换: ¥${data.conversionPrice}`,
      //     value: '2'
      //   },
      //   {
      //     text: `现金+竞豆: ${data.combinationPrice}+${data.combinationBean}竞豆`,
      //     value: '3'
      //   }
      // ]
      // this.$refs.paytypePicker.show(columns, '3')
    },
    onDelete() {
      if (!this.selectedList.length) {
        return this.$showModal('请先选择商品')
      }
      this.$dialog.confirm({
        message: '确定要删除选中商品吗？'
      })
        .then(() => {
          const idList = this.selectedList.map(v => v.id)
          deleteCart({
            checkList: idList.join(',')
          })
          .then(() => {
            this.list = this.list.filter(v => idList.indexOf(v.id) < 0)
          })
          .catch(console.log)
        })
        .catch(console.log)
    },
    async onUpdateCount(data, count) {
      try {
        const res = await updateCartCount({
          cartId: String(data.id),
          count
        })
        console.log(res)
      } catch (err) {
        console.log(err)
      }
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
  .step {
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /deep/ .van-stepper__minus, /deep/ .van-stepper__plus {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #F85F5E;
      color: #fff;
    }
    /deep/ .van-stepper__minus--disabled, /deep/ .van-stepper__plus--disabled {
      background-color: #FFE7EB;
    }
    /deep/ .van-stepper__input {
      background-color: #fff;
    }
  }
  .goods-item__name {
    padding-bottom: 16px;
    color: #4D4D4D;
    font-size: $font-size-medium;
  }
  .goods-item__paytype {
    display: flex;
  }
  .goods-item__amount {
    margin-right: 10px;
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
  .delete-wrapper {
    padding: 0 15px;
    margin-right: -16px;
    /deep/ .van-icon-delete {
      font-size: 18px;
    }
  }
</style>
