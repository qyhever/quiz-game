<template>
  <com-page-navbar-wrapper title="修改手机号">
    <div class="phone_content">
      <div class="line"></div>
      <div class="phone_head phone">
        <p>输入已绑定手机号</p>
        <input type="text" v-model="form.phone" placeholder="请输入已绑定手机号" />
      </div>
      <div class="phone_body">
        <p>输入验证码</p>
        <div>
          <input type="text" v-model="form.code" placeholder="请输入验证码" />
          <button @click="sendCode">发送</button>
        </div>
      </div>
      <div class="phone_foot phone">
        <p>输入新的手机号码</p>
        <input type="text" v-model="form.newPhone" placeholder="请输入新的手机号码" />
      </div>

      <van-button type="info" block @click="onSubmit">确认修改</van-button>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import { validator } from "@/utils/validate";
import { editPhone } from "@/api/user";
export default {
  data() {
    return {
      form: {
        phone: "",
        code: "",
        newPhone: ""
      }
    };
  },
  methods: {
    // 发送验证码
    sendCode() {
      const { phone } = this.form;
      if (!validator(phone, "mobile")) {
        return this.$showModal("请输入正确的手机号");
      }
    },
    onSubmit() {
      const { phone, code, newPhone } = this.form;
      if (!validator(phone, "mobile") || !validator(newPhone, "mobile")) {
        return this.$showModal("请输入正确的手机号");
      }
      if (!validator(code, "phoneVerifyCode")) {
        return this.$showModal("请输入四位数的验证码");
      }
      editPhone(this.form)
        .then(res => {
          if (res.code === 200) {
            this.$showModal("手机号修改成功");
          }
        })
        .catch();
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 0.12rem;
  background: rgba(242, 242, 242, 1);
}
.phone_content {
  .phone {
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
  .phone_body {
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
