<template>
  <com-page-navbar-wrapper title="添加地址">
    <div class="info-container">
      <!-- 新增地址 -->
      <div class="new_address">
        <h1>新增地址</h1>
        <ul>
          <li>
            <span>联系人</span>
            <input type="text" placeholder="您的姓名" />
          </li>
          <li>
            <span>手机号</span>
            <input type="text" placeholder="您的电话" />
          </li>
          <li>
            <span>收货地址</span>
            <div class="choice_address">
              <van-icon name="location-o" size="0.36rem" color="rgba(240, 98, 98, 1)" />
              <div class="address_text">浙江省江干区</div>
              <van-icon name="arrow" size="0.24rem" color="rgba(240, 98, 98, 1)" />
            </div>
          </li>
          <li>
            <span>门牌号</span>
            <input type="text" placeholder="详细地址" />
          </li>
        </ul>
      </div>
      <!-- 上次地址 -->
      <div class="history_address">
        <h1>上次地址</h1>
        <cube-scroll ref="scroll">
          <ul>
            <li v-for="(item,index) in 10" :key="index">
              <div class="address_message">
                <p>
                  <span>瑞文</span>
                  <span>15872406760</span>
                </p>
                <p>浙江省杭州市江干区九环路五号302</p>
              </div>
              <div class="address_opertion">
                <p class="address_default">
                  <img src="../../assets/images/sel01.png" alt />
                  <span>已默认</span>
                </p>
                <p>
                  <span>编辑</span>
                  <span>使用</span>
                </p>
              </div>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
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
    height: calc(100vh - 0.88rem - 4.5rem);
    overflow: hidden;
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
