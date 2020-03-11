<template>
  <div class="message_content">
    <p class="message_time">{{item.modifyTime}}</p>
    <div class="message_main">
      <div class="message_tips">
        <span>{{item.title}}</span>
        <van-icon :name="iconType" size="0.27rem" @click="onToggle" />
      </div>
      <div
        class="message_text"
        :class="{'van-ellipsis':iconType=='arrow-up'}"
      >{{item.messageContent}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      iconType: "arrow-up"
    };
  },
  methods: {
    onToggle() {
      switch (this.iconType) {
        case "arrow-up":
          this.iconType = "arrow-down";
          break;
        default:
          this.iconType = "arrow-up";
          break;
      }
    }
  }
};
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
        position: relative;
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        &::before {
          position: absolute;
          top: -0.08rem;
          left: -0.2rem;
          display: inline-block;
          width: 0.12rem;
          height: 0.12rem;
          content: "";
          background: rgba(249, 94, 95, 1);
          border-radius: 50%;
        }
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
