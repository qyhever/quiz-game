<template>
  <com-page-tabbar-wrapper>
    <!-- 头部 -->
    <div class="my_header">
      <img src="../../assets/images/my/user-touxiang.png" alt />
      <div class="header_message">
        <p>中竞网瑞雯</p>
        <span>ID:23569331311</span>
      </div>
      <img @click="onToPersonalData" src="../../assets/images/my/user-change.png" alt />
    </div>
    <div class="line_1"></div>
    <!-- 我的关注 -->
    <div class="my_follow">
      <span class="follow_tips">我的关注</span>
      <ul>
        <router-link to="/follow-match">
          <li>
            <img src="../../assets/images/my/user-game.png" />
            <span>比赛</span>
          </li>
        </router-link>
        <router-link to="/follow-team">
          <li>
            <img src="../../assets/images/my/user-zhandui.png" />
            <span>战队</span>
          </li>
        </router-link>
        <router-link to="/follow-player">
          <li>
            <img src="../../assets/images/my/user-peo.png" />
            <span>选手</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="line_2"></div>
    <!-- 操作栏 -->
    <div class="my_operation">
      <ul>
        <li class="operation_message" @click="onToMeunList('/bean-detailed')">
          <span class="my_bean">我的竞豆</span>
          <span class="my_count">132662</span>
          <span class="recharge_btn">充值</span>
        </li>
        <div class="line_3"></div>
        <li @click="onToMeunList('/guessing-competition')">
          <span>我的竞猜</span>
          <van-icon name="arrow" />
        </li>
        <div class="line_3"></div>
        <li @click="onToMeunList('/my-order')">
          <span>我的订单</span>
          <van-icon name="arrow" />
        </li>
      </ul>
      <div class="line_2"></div>
      <ul>
        <li>
          <span>代理推广</span>
          <van-icon name="arrow" />
        </li>
        <div class="line_3"></div>
        <li @click="onToMeunList('/system-message')">
          <span>系统消息</span>
          <span>12</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
  </com-page-tabbar-wrapper>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onToPersonalData() {
      this.$router.push("/personal-data");
    },
    onToMeunList(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.line_1 {
  width: 100%;
  height: 1px;
  background: rgba(242, 242, 242, 1);
}
.line_2 {
  width: 100%;
  height: 0.12rem;
  background: rgba(242, 242, 242, 1);
}
.line_3 {
  width: 100%;
  height: 1px;
  margin-bottom: 0.2rem;
  background: rgba(242, 242, 242, 1);
}
.my_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.71rem 0.37rem 0.49rem;
  img {
    &:nth-of-type(1) {
      width: 1.35rem;
      height: 1.35rem;
    }
    &:nth-of-type(2) {
      width: 0.44rem;
      height: 0.44rem;
    }
  }
  .header_message {
    margin-left: -1.8rem;
    p {
      font-size: 0.32rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.27rem;
    }
    span {
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(128, 128, 128, 1);
    }
  }
}
.my_follow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.14rem 0 0.14rem 0.31rem;
  .follow_tips {
    flex: 2;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  ul {
    flex: 8;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin-bottom: 0.23rem;
      }
      span {
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
      }
    }
  }
}

.my_operation {
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.34rem 0.4rem 0 0.28rem;
    &:nth-of-type(1) {
      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.37rem;
        &::before {
          display: inline-block;
          content: "";
          width: 0.44rem;
          height: 0.44rem;
        }
        &:nth-of-type(1) {
          &::before {
            background: url("../../assets/images/my/user-p1.png") no-repeat
              center/100%;
          }
          .my_bean {
            margin-left: -6.6rem;
          }
          .my_count {
            font-size: 0.28rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(254, 74, 133, 1);
            margin-left: -6.6rem;
          }
          .recharge_btn {
            display: inline-block;
            padding: 0.13rem 0.3rem;
            border: 0.01rem solid rgba(249, 94, 95, 1);
            border-radius: 0.26rem;
            font-size: 0.28rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(254, 74, 133, 1);
          }
        }
        &:nth-of-type(2) {
          &::before {
            background: url("../../assets/images/my/user-p2.png") no-repeat
              center/100%;
          }
        }
        &:nth-of-type(3) {
          &::before {
            background: url("../../assets/images/my/user-p3.png") no-repeat
              center/100%;
          }
        }

        span {
          margin-left: -4.4rem;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(77, 77, 77, 1);
        }
      }
    }

    &:nth-of-type(2) {
      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.37rem;
        &::before {
          display: inline-block;
          content: "";
          width: 0.44rem;
          height: 0.44rem;
        }
        &:nth-of-type(1) {
          &::before {
            background: url("../../assets/images/my/user-p4.png") no-repeat
              center/100%;
          }
        }
        &:nth-of-type(2) {
          position: relative;
          &::before {
            background: url("../../assets/images/my/user-p5.png") no-repeat
              center/100%;
          }
          span {
            &:nth-of-type(2) {
              position: absolute;
              right: 0.4rem;
              display: inline-block;
              width: 0.4rem;
              line-height: 0.4rem;
              text-align: center;
              background: rgba(249, 94, 95, 1);
              border-radius: 50%;
              font-size: 0.22rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
        }

        span {
          margin-left: -4.4rem;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(77, 77, 77, 1);
        }
      }
    }
  }
}
</style>

