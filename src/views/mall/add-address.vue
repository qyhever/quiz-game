<template>
  <div>
    <van-nav-bar class="circle-navbar" fixed border title="添加地址" @touchmove.prevent.stop.native>
      <div class="circle-navbar__left" slot="left" @click="onToBack">取消</div>
      <div class="circle-navbar__right" slot="right" @click="onSaveAddress">保存</div>
    </van-nav-bar>
    <div class="info-container">
      <!-- 新增地址 -->
      <div class="new_address">
        <h1>新增地址</h1>
        <ul>
          <li>
            <span>联系人</span>
            <input type="text" placeholder="您的姓名" v-model="form.name" />
          </li>
          <li>
            <span>手机号</span>
            <input type="text" placeholder="您的电话" v-model="form.phone" />
          </li>
          <li>
            <span>收货地址</span>
            <div class="choice_address" @click="show=true">
              <van-icon name="location-o" size="0.36rem" color="rgba(240, 98, 98, 1)" />
              <div class="address_text">{{addressContent}}</div>
              <van-icon name="arrow" size="0.24rem" color="rgba(240, 98, 98, 1)" />
            </div>
          </li>
          <li>
            <span>门牌号</span>
            <input type="text" placeholder="详细地址" v-model="form.detailAddress" />
          </li>
          <li>
            <span>设为默认收货地址</span>
            <van-switch
              v-model="checked"
              size="18px"
              active-color="#07c160"
              inactive-color="#ee0a24"
            />
          </li>
        </ul>
      </div>
      <!-- 上次地址 -->
      <div class="history_address">
        <h1>上次地址</h1>
        <ul>
          <li v-for="(item,index) in addressList" :key="index">
            <div class="address_message">
              <p>
                <span>{{item.name}}</span>
                <span>{{item.phone}}</span>
              </p>
              <p>{{`${item.province}${item.city}市${item.region}${item.detailAddress}`}}</p>
            </div>
            <div class="address_opertion">
              <p v-if="item.defaultStatus===1" class="address_default">
                <img src="../../assets/images/sel01.png" alt />
                <span>已默认</span>
              </p>
              <p v-else @click="setDefaultAddress(item)" class="address_undefault">
                <img src="../../assets/images/sel02.png" alt />
                <span>设为默认</span>
              </p>
              <p>
                <span @click="useAddress(item)">使用</span>
                <span @click="deleteAddress(item.id)">删除</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 省份选择 -->
      <van-popup v-model="show" :round="true" position="bottom" :style="{ height: '40%' }">
        <van-area
          ref="vanArea"
          :area-list="areaList"
          @confirm="confirm"
          @cancel="cancal"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          title="选择地址"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
import areaList from "@/utils/area";
import { validator } from "@/utils/validate";
import {
  getAddressList,
  setDefaultAddress,
  addAddress,
  deleteAddress
} from "@/api/mall";
export default {
  data() {
    return {
      areaList,
      show: false,
      addressList: [],
      addressContent: "请选择收货地址",
      checked: false,
      form: {
        name: "",
        phone: "",
        province: "",
        city: "",
        region: "",
        detailAddress: "",
        defaultStatus: 0
      }
    };
  },
  mounted() {
    this.getAddressList();
  },
  methods: {
    getAddressList() {
      getAddressList().then(res => {
        this.addressList = res.rows;
      });
    },
    // 设为默认地址
    setDefaultAddress(item) {
      setDefaultAddress(item.id).then(() => {
        this.getAddressList();
        this.$set(item, "defaultStatus", 1);
      });
    },
    confirm(data) {
      if (!data[0].name || !data[1].name || !data[2].name) {
        this.$showModal("收货地址请选择完整");
        return;
      }
      this.addressContent = `${data[0].name}${data[1].name}${data[2].name}`;
      this.form.province = data[0].name;
      this.form.city = data[1].name;
      this.form.region = data[2].name;
      this.form.postCode = data[2].code;

      this.show = false;
    },
    cancal() {
      this.show = false;
      this.$refs.vanArea.reset();
    },
    // 保存地址
    onSaveAddress() {
      this.checked
        ? (this.form.defaultStatus = 1)
        : (this.form.defaultStatus = 0);
      if (!validator(this.form.phone, "mobile")) {
        return this.$showModal("请输入正确的手机号");
      }
      if (
        !this.form.name ||
        !this.form.province ||
        !this.form.city ||
        !this.form.region ||
        !this.form.detailAddress
      ) {
        return this.$showModal("请将信息填写完整");
      }
      addAddress(this.form).then(() => {
        for (const key in this.form) {
          this.form[key] = "";
        }
        this.addressContent = "请选择收货地址";
        this.checked = false;
        this.getAddressList();
      });
    },
    // 删除地址
    deleteAddress(id) {
      deleteAddress(id).then(() => {
        this.getAddressList();
      });
    },
    // 使用地址
    useAddress(item) {
      this.$store.commit("SET_ORDER_ADDRESS", item);
      this.$router.replace("/mall-order");
    },
    // 返回上一步
    onToBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.circle-navbar__left {
  font-size: 0.28rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(77, 77, 77, 1);
}
.circle-navbar__right {
  display: initial;
  padding: 0.08rem 0.16rem;
  background: rgba(246, 148, 110, 1);
  border-radius: 0.22rem;
  font-size: 0.28rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.info-container {
  height: calc(100vh - 46px);
  overflow-y: auto;
  position: relative;
  top: 0.88rem;
  .new_address {
    padding: 0.3rem 0.3rem 0;
    border-top: 0.12rem solid rgba(245, 245, 245, 1);
    border-bottom: 0.16rem solid rgba(245, 245, 245, 1);
    h1 {
      margin: 0;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(191, 191, 191, 1);
    }
    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.3rem 0;
        border-bottom: 1px solid rgba(235, 235, 235, 1);
        &:last-child {
          border-bottom: 0;
        }
        &:nth-of-type(3) {
          .choice_address {
            display: flex;
            align-items: center;
            .address_text {
              margin: 0 0.2rem 0 0.1rem;
            }
          }
        }
        input {
          text-align: right;
        }
      }
    }
  }
  .history_address {
    padding: 0.3rem 0.3rem 0;
    h1 {
      margin: 0 0 0.42rem 0;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(191, 191, 191, 1);
    }
    ul {
      li {
        margin-bottom: 0.32rem;
        border: 1px solid rgba(249, 94, 95, 1);
        border-radius: 0.14rem;
        .address_message {
          padding: 0.33rem;
          border-bottom: 1px solid rgba(235, 235, 235, 1);
          p {
            font-size: 0.28rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(77, 77, 77, 1);
            &:nth-of-type(1) {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0.28rem;
              span {
                font-family: Microsoft YaHei;
                font-weight: 400;
                &:nth-of-type(1) {
                  font-size: 0.32rem;
                  color: rgba(0, 0, 0, 1);
                }
                &:nth-of-type(2) {
                  font-size: 0.28rem;
                  color: rgba(77, 77, 77, 1);
                }
              }
            }
          }
        }
        .address_opertion {
          padding: 0.33rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .address_default {
            display: flex;
            align-items: center;
            img {
              width: 0.44rem;
              height: 0.44rem;
              margin-right: 0.06rem;
            }
            span {
              padding: 0 !important;
              margin-right: 0 !important;
              background: #fff !important;
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(128, 128, 128, 1);
            }
          }
          .address_undefault {
            display: flex;
            align-items: center;
            img {
              width: 0.44rem;
              height: 0.44rem;
              margin-right: 0.06rem;
            }
            span {
              padding: 0 !important;
              background: #fff !important;
              margin-right: 0 !important;
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(128, 128, 128, 1);
            }
          }
          p {
            span {
              border-radius: 0.06rem;
              padding: 0.11rem 0.24rem;
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              &:nth-of-type(1) {
                margin-right: 0.32rem;
                background: rgba(82, 140, 244, 1);
              }
              &:nth-of-type(2) {
                background: rgba(249, 94, 95, 1);
              }
            }
          }
        }
      }
    }
  }
}
</style>
