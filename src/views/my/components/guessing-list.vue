<template>
  <div class="guessing_content">
    <div class="guessing_time">
      <span>{{item.createTime | formatDate('MM-DD hh:mm')}}</span>
      <span
        :class="[0,1].includes(item.bettingResult)?'guessing_success':'guessing_fail'"
      >{{[0,1].includes(item.bettingResult)?'已结算':'未结算'}}</span>
    </div>
    <ul>
      <li>
        <img v-if="item.picture" :src="item.picture" alt="game" />
        <p>{{item.matchName}}</p>
        <span>{{item.className}}</span>
      </li>
      <li>
        <div class="guessing_left">
          <span>已投</span>
          <span>{{item.bettingName}}({{item.odds}})</span>
        </div>
        <div class="guessing_right">
          <span>竞豆</span>
          <span>{{item.bean}}</span>
        </div>
      </li>
      <li>
        <div class="guessing_left">
          <span>赛果</span>
          <span>{{item.bettingName}}</span>
        </div>
        <div
          :class="item.bettingResult===0?'guessing_right_success':'guessing_right_fail'"
        >{{item.bettingResult===0?'预测成功':'预测失败'}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.guessing_content {
  .guessing_time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.3rem 0;
    span {
      &:nth-of-type(1) {
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(166, 166, 166, 1);
      }
    }
    .guessing_fail {
      padding: 0.1rem 0.25rem;
      background: rgba(255, 163, 31, 1);
      border-radius: 0.04rem;
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
    .guessing_success {
      padding: 0.1rem 0.25rem;
      background: rgba(82, 140, 244, 1);
      border-radius: 0.04rem;
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }

  ul {
    background: rgba(255, 254, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 0.12rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.26rem;
      border-bottom: 1px solid rgba(235, 235, 235, 1);
      &:nth-of-type(1) {
        position: relative;
        p {
          position: absolute;
          left: 0.88rem;
        }
        span {
          font-size: 0.22rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(249, 94, 95, 1);
        }
      }
      &:nth-of-type(2) {
        div {
          display: flex;
          flex-direction: column;
          span {
            &:nth-of-type(1) {
              font-size: 0.22rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(128, 128, 128, 1);
              margin-bottom: 0.2rem;
            }
          }
        }
        .guessing_left {
          span {
            &:nth-of-type(2) {
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
          }
        }
        .guessing_right {
          align-items: center;
          span {
            &:nth-of-type(2) {
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(255, 163, 31, 1);
            }
          }
        }
      }
      &:nth-of-type(3) {
        align-items: flex-end;
        div {
          display: flex;
          flex-direction: column;
          span {
            &:nth-of-type(1) {
              font-size: 0.22rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(128, 128, 128, 1);
              margin-bottom: 0.2rem;
            }
          }
        }
        .guessing_left {
          span {
            &:nth-of-type(2) {
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
          }
        }
        .guessing_right_success {
          align-items: center;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: rgba(41, 217, 54, 1);
        }
        .guessing_right_fail {
          align-items: center;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: rgba(255, 142, 143, 1);
        }
      }
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
}
</style>
