<template>
  <div class="message_content">
    <p class="message_time">11-28</p>
    <div class="message_main">
      <div class="message_tips">
        <span>推荐好友领福利咯</span>
        <van-icon name="arrow-down" size="0.27rem" />
      </div>
      <div class="message_text">
        推荐好友最高可获得188竞豆！竞猜奖励多多哦~
        快邀请您的好友一起来玩耍吧！
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.message_content {
  padding: 0.34rem 0 0;
  .message_time {
    width: 1.44rem;
    line-height: 0.44rem;
    margin: 0 auto;
    text-align: center;
    background: rgba(191, 191, 191, 1);
    border-radius: 0.05rem;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  .message_main {
    margin-top: 0.38rem;
    padding: 0.32rem;
    background: rgba(255, 254, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 0.12rem;
    .message_tips {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .message_text {
      line-height: 2;
      padding: 0.2rem 0;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}
</style>
