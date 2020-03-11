<template>
  <div class="match_content">
    <img v-if="item%2==0" src="../../../assets/images/match/bg0010.png" alt />
    <img v-else src="../../../assets/images/match/bg0030.png" alt />
    <span class="match_going"></span>
    <div class="match_message">
      <p class="van-multi-ellipsis--l2">{{item.matchName}}</p>
      <p>下一场  {{item.nextTime | formatDate('MM-DD HH:mm')}}</p>
      <!-- <p v-else></p> -->
    </div>
    <div v-if="item%2==0" class="match_operation">
      <p>直播中</p>
      <van-button color="#FFA31F">参与竞猜</van-button>
    </div>
    <div v-else class="match_operation">
      <p></p>
      <van-button color="#153561">结算中</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.match_content {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.32rem 0;
  border-bottom: 1px solid rgba(235, 235, 235, 1);
  img {
    width: 2.26rem;
    height: 1.3rem;
  }
  .match_going {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../../../assets/images/match/going.png") no-repeat
      center/100%;
  }
  .match_message {
    width: 2.6rem;
    p {
      &:nth-of-type(1) {
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 0.22rem;
      }
      &:nth-of-type(2) {
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(191, 191, 191, 1);
      }
    }
  }
  .match_operation {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(249, 94, 95, 1);
    }
    .van-button {
      line-height: 1;
      height: 0.42rem;

      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
