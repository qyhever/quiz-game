<template>
  <com-page-tabbar-wrapper>
    <!-- 头部 -->
    <div class="my-header">
      <img src="../../assets/images/my/user-touxiang.png" alt />
      <div class="header-message">
        <p>中竞网瑞雯</p>
        <span>ID:23569331311</span>
      </div>
      <img src="../../assets/images/my/user-change.png" alt />
    </div>
    <div class="line-1"></div>
    <!-- 我的关注 -->
    <div class="my-follow">
      <span class="follow-tips">我的关注</span>
      <ul>
        <li>
          <img src='../../assets/images/my/user-game.png' />
          <span>比赛</span>
        </li>
        <li>
           <img src='../../assets/images/my/user-zhandui.png' />
          <span>战队</span>
        </li>
        <li>
           <img src='../../assets/images/my/user-peo.png' />
          <span>选手</span>
        </li>
      </ul>
    </div>
    <div class="line-2"></div>
    <!-- 操作栏 -->
    <div class="my-operation">
      <ul>
        <li class="operation-message">
          <span class="my-bean">我的竞豆</span>
          <span class="my-count">132662</span>
          <span class="recharge-btn">充值</span>
        </li>
        <div class="line-3"></div>
        <li>
          <span>我的竞猜</span>
          <van-icon name="arrow" />
        </li>
        <div class="line-3"></div>
        <li>
          <span>我的订单</span>
          <van-icon name="arrow" />
        </li>
      </ul>
      <div class="line-2"></div>
      <ul>
        <li>
          <span>代理推广</span>
          <van-icon name="arrow" />
        </li>
         <div class="line-3"></div>
        <li>
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
    return {}
  }
}
</script>

<style lang="scss" scoped>
.line-1 {
  width: 100%;
  height: 1px;
  background:rgba(242,242,242,1);
}
.line-2 {
  width: 100%;
  height: .12rem;
  background:rgba(242,242,242,1);
}
.line-3 {
  width: 100%;
  height: 1px;
  margin-bottom: .2rem;
  background:rgba(242,242,242,1); 
}
.my-header {
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
  .header-message {
  margin-left: -1.8rem;
  p {
    font-size:.32rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-bottom: .27rem;
  }
  span {
    font-size:.24rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(128,128,128,1);
  }
}
}
.my-follow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .14rem 0 .14rem .31rem;
  .follow-tips {
    flex: 2;
    font-size:.28rem;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
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
        width: .6rem;
        height: .6rem;
        margin-bottom: .23rem;
      }
      span {
        font-size:.24rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(77,77,77,1);
      }
    }
  }
}

.my-operation {
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .34rem .4rem 0 .28rem;
    &:nth-of-type(1){
      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: .37rem;
          &::before {
            display: inline-block;
            content: '';
            width: .44rem;
            height: .44rem;
          }
        &:nth-of-type(1){
          &::before {
            background: url('../../assets/images/my/user-p1.png') no-repeat center/100%;
          }
          .my-bean {
            margin-left: -6.6rem;
          }
          .my-count {
            font-size:.28rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(254,74,133,1);
             margin-left: -6.6rem;
          }
          .recharge-btn {
            display: inline-block;
            padding: .13rem .3rem;
            border:.01rem solid rgba(249,94,95,1);
            border-radius:.26rem;
            font-size:.28rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(254,74,133,1);
          }
        }
        &:nth-of-type(2){
          &::before {
            background: url('../../assets/images/my/user-p2.png') no-repeat center/100%;
          }
        }
        &:nth-of-type(3){
          &::before {
            background: url('../../assets/images/my/user-p3.png') no-repeat center/100%;
          }
        }

        span {
          margin-left: -4.4rem;
          font-size:.28rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(77,77,77,1);
        }
      }
    }

    &:nth-of-type(2){
      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: .37rem;
          &::before {
            display: inline-block;
            content: '';
            width: .44rem;
            height: .44rem;
          }
        &:nth-of-type(1){
          &::before {
            background: url('../../assets/images/my/user-p4.png') no-repeat center/100%;
          }
        }
        &:nth-of-type(2){
          position: relative;
          &::before {
            background: url('../../assets/images/my/user-p5.png') no-repeat center/100%;
          }
          span {
            &:nth-of-type(2){
              position: absolute;
              right: .4rem;
              display: inline-block;
              width:.4rem;
              line-height:.4rem;
              text-align: center;
              background:rgba(249,94,95,1);
              border-radius:50%;
              font-size:.22rem;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(255,255,255,1);
            }
          }
        }

        span {
          margin-left: -4.4rem;
          font-size:.28rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(77,77,77,1);
        }
      }
    }
  }
}

</style>

