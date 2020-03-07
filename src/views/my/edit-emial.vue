<template>
  <com-page-navbar-wrapper title="修改邮箱号">
    <div class="emial_content">
      <div class="line"></div>
      <div class="emial_head emial">
        <p>输入已绑定邮箱号</p>
        <input type="text" placeholder="请输入已绑定邮箱号" />
      </div>
      <div class="emial_body">
        <p>输入邮箱验证码</p>
        <div>
          <input type="text" placeholder="请输入邮箱验证码" />
          <button>发送</button>
        </div>
      </div>
      <div class="emial_foot emial">
        <p>输入新的邮箱号</p>
        <input type="text" placeholder="请输入新的邮箱号" />
      </div>
      <div class="emial_body">
        <p>输入新邮箱验证码</p>
        <div>
          <input type="text" placeholder="请输入新邮箱验证码" />
          <button>发送</button>
        </div>
      </div>

      <van-button type="info" block>确认修改</van-button>
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
.line {
  width: 100%;
  height: 0.12rem;
  background: rgba(242, 242, 242, 1);
}
.emial_content {
  .emial {
    padding: 0.4rem 0.3rem;
    p {
      margin-bottom: 0.28rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    input {
      width: 100%;
      background: rgba(240, 240, 240, 1);
      border-radius: 0.1rem;
      padding: 0.25rem 0.32rem;
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(166, 166, 166, 1);
    }
  }
  .emial_body {
    padding: 0 0.3rem;
    p {
      margin-bottom: 0.28rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    div {
      display: flex;
      justify-content: space-between;
      input {
        width: 65%;
        background: rgba(240, 240, 240, 1);
        border-radius: 0.1rem;
        padding: 0.25rem 0.32rem;
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(166, 166, 166, 1);
      }
      button {
        border: 0;
        padding: 0.25rem 0.8rem;
        background: rgba(249, 94, 95, 1);
        border-radius: 0.1rem;
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .van-button {
    width: 80%;
    margin: 0 auto;
    margin-top: 1.28rem;
    border: 0;
    background: rgba(249, 94, 95, 1);
  }
}
</style>
