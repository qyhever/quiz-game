<template>
  <div class="circle_content">
    <div class="circle_head">
      <img :src="item.avatar" alt />
      <div class="circle_info">
        <p>{{item.nickname}}</p>
        <span>{{item.before}}</span>
      </div>
      <span class="circle_follow">关注</span>
    </div>
    <div class="circle_body">
      <div class="circle_text" v-if="item.content">{{item.content}}</div>
      <img v-if="item.picture&&item.picture.split(',').length ===1" :src="item.picture" alt />
      <ul v-else class="img_list">
        <li v-for="(item,index) in item.picture.split(',')" :key="index">
          <img v-if="item" :src="item" alt />
        </li>
      </ul>
    </div>
    <div class="circle_foot">
      <ul>
        <li>
          <van-icon name="share" size="0.32rem" />
          <span>{{item.shareTotal || 0}}</span>
        </li>
        <li>
          <van-icon name="chat-o" size="0.32rem" />
          <span>{{item.commentTotal || 0}}</span>
        </li>
        <li>
          <van-icon name="good-job-o" size="0.32rem" />
          <span>{{item.zanTotal || 0}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.circle_content {
  padding: 0.3rem;
  border-top: 0.2rem solid rgba(244, 244, 244, 1);
  .circle_head {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.92rem;
      height: 0.92rem;
      border-radius: 50%;
    }
    .circle_info {
      position: absolute;
      left: 1.1rem;
      display: flex;
      flex-direction: column;
      p {
        margin-bottom: 0.12rem;
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(249, 94, 95, 1);
      }
      span {
        font-size: 0.2rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
      }
    }
    .circle_follow {
      padding: 0.1rem 0.3rem;
      border: 1px solid rgba(239, 118, 118, 1);
      border-radius: 0.22rem;
    }
    .circle_unfollow {
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(179, 179, 179, 1);
    }
  }
  .circle_body {
    padding-top: 10px;
    .circle_text {
      margin: 0.29rem 0 0.4rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    img {
      width: 100%;
      height: 3.5rem;
    }
    .img_list {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0 0.08rem 0.08rem 0;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
        img {
          width: 2.23rem;
          height: 2.23rem;
        }
      }
    }
  }
  .circle_foot {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0.4rem 0 0.32rem;
      li {
        display: flex;
        align-items: center;
        span {
          margin-left: 0.12rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
}
</style>
