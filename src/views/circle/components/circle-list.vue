<template>
  <div class="circle_content">
    <div class="circle_head">
      <img src="../../../assets/images/circle/chat_p01.png" alt />
      <div class="circle_info">
        <p>英雄联盟那些事</p>
        <span>15分钟前</span>
      </div>
      <span class="circle_follow">关注</span>
    </div>
    <div class="circle_body">
      <div class="circle_text">LPL全明星周末11月30日海口冯小刚电影公社正式开幕</div>
      <!-- <img src="../../../assets/images/circle/chat_p07.png" alt /> -->
      <ul class="img_list">
        <li>
          <img src="../../../assets/images/circle/chat_p08.png" alt />
        </li>
        <li>
          <img src="../../../assets/images/circle/chat_p09.png" alt />
        </li>
        <li>
          <img src="../../../assets/images/circle/chat_p10.png" alt />
        </li>
        <li>
          <img src="../../../assets/images/circle/chat_p09.png" alt />
        </li>
        <li>
          <img src="../../../assets/images/circle/chat_p10.png" alt />
        </li>
      </ul>
    </div>
    <div class="circle_foot">
      <ul>
        <li>
          <van-icon name="share" size="0.32rem" />
          <span>36</span>
        </li>
        <li>
          <van-icon name="chat-o" size="0.32rem" />
          <span>1020</span>
        </li>
        <li>
          <van-icon name="good-job-o" size="0.32rem" />
          <span>3020</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
