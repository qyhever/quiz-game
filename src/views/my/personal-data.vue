<template>
  <com-page-navbar-wrapper title="个人资料" @touchmove.prevent.stop.native>
    <div class="personal_data">
      <ul>
        <li>
          <span>头像</span>
          <img src="../../assets/images/my/user-touxiang.png" alt />
          <van-icon name="arrow" />
        </li>
        <li>
          <span>昵称</span>
          <span class="personal_name">中竞网瑞雯</span>
          <van-icon name="arrow" />
        </li>
      </ul>
      <ul>
        <li @click="onToMeunList('/edit-phone')">
          <span>修改手机号</span>
          <van-icon name="arrow" />
        </li>
        <li @click="onToMeunList('/edit-emial')">
          <span>修改绑定邮箱</span>
          <van-icon name="arrow" />
        </li>
      </ul>

      <van-button type="info" block>注销登录</van-button>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onToMeunList(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-icon-arrow {
  margin-right: 0.33rem;
}
.personal_data {
  height: 100vh;
  background: rgba(242, 242, 242, 1);
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0.6rem;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1rem;
      padding: 0.24rem 0 0.19rem;
      border-bottom: 1px solid rgba(235, 235, 235, 1);
      img {
        position: absolute;
        right: 0.8rem;
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
      }
      span {
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
    &:nth-of-type(1) {
      margin-bottom: 0.12rem;
      border-top: 0.12rem solid rgba(242, 242, 242, 1);
      background: rgba(255, 255, 255, 1);
      li {
        position: relative;
        .personal_name {
          position: absolute;
          right: 0.8rem;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(166, 166, 166, 1);
        }
      }
    }

    &:nth-of-type(2) {
      margin: 0.12rem 0;
      background: rgba(255, 255, 255, 1);
    }
  }
  .van-button {
    position: fixed;
    bottom: 1.16rem;
    left: 0.8rem;
    width: 80%;
  }
}
</style>
