<template>
  <div class="room_content">
    <div class="room_time">
      <span>11-28 23:09</span>
      <span>未结算</span>
    </div>
    <ul>
      <li>
        <img src="../../../assets/images/player-touxiang.png" alt />
        <div class="room_info">
          <span>LPL职业联赛</span>
          <p>
            <span>
              KPL
              <s>vs</s>
              LPL
            </span>
          </p>
        </div>
        <span>2</span>
      </li>
      <li>
        <div class="room_left">
          <span>共计投注</span>
          <span>5000</span>
        </div>
        <div class="room_right">
          <span>赛果</span>
          <span>进行中...</span>
        </div>
      </li>
      <li>
        <div class="room_left">
          <span>盈亏情况</span>
          <span>等待结算</span>
        </div>
         <div class="room_right">
          <span>房主收益</span>
          <span>等待结算</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.room_content {
  .room_time {
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

      &:nth-of-type(2) {
        padding: 0.1rem 0.25rem;
        background: rgba(255, 163, 31, 1);
        border-radius: 0.04rem;
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
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
        .room_info {
          display: flex;
          position: absolute;
          left: 0.88rem;
          span {
            margin-right: 0.28rem;
            font-size: 0.22rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(128, 128, 128, 1);
          }
          s {
            text-decoration: none;
            color: #ffa31f;
          }
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
        .room_left {
          span {
            &:nth-of-type(2) {
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
          }
        }
        .room_right {
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
        .room_left {
          span {
            &:nth-of-type(2) {
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
          }
        }
        .room_right {
          align-items: center;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: rgba(41, 217, 54, 1);
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
