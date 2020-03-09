
<template>
  <div>
    <van-nav-bar class="circle-navbar" fixed border title="发布动态" @touchmove.prevent.stop.native>
      <div class="circle-navbar__left" slot="left" @click="onToBack">取消</div>
      <div class="circle-navbar__right" slot="right" @click="onToRelease">发布</div>
    </van-nav-bar>
    <div class="release_content">
      <textarea placeholder="分享我的动态" cols="30" rows="10"></textarea>
      <!-- 上传文件 -->
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="9"
        :deletable="false"
        preview-size="2.12rem"
      />
      <!-- 定位 -->
      <div class="release_location">
        <van-icon name="location-o" size=".24rem" />
        <span>你在哪</span>
      </div>
      <div class="release_emoji">
        <van-icon name="photo-o" size=".44rem" />
        <van-icon name="smile-o" size=".44rem" @click="onShowToggle(isShow)" />
        <div class="wyl">
          <cube-scroll>
            <weibo-emoji
              v-if="isShow"
              class="emoji_content"
              :weiboIcon="weiboIcon"
              @changeEmoji="changeEmoji"
              ref="emoji"
            ></weibo-emoji>
          </cube-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testData from "../../utils/data";
export default {
  data() {
    return {
      fileList: [],
      isShow: false,
      weiboIcon: testData
    };
  },
  methods: {
    changeEmoji(val) {
      console.log(val);
    },
    onToBack() {
      //   this.$router.go(-1);
      this.$dialog
        .confirm({
          title: "",
          message: "是否保存本次编辑"
        })
        .then(() => {
          this.$router.go(-1);
        })
        .catch(() => {
          this.$router.go(-1);
        });
    },
    onToRelease() {
      console.log("发布");
    },
    onShowToggle(isShow) {
      switch (isShow) {
        case true:
          this.isShow = false;
          break;
        default:
          this.isShow = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.van-uploader {
  padding: 0 0.32rem;
}

.emoji_content /deep/ .ej {
  width: 29px !important;
  height: 30px !important;
}
.emoji_content {
  margin-top: 10px;
  width: 100% !important;
}
.wyl {
  height: calc(100vh - 450px);
  overflow: hidden;
}
.circle-navbar__left {
  font-size: 0.28rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(77, 77, 77, 1);
}
.circle-navbar__right {
  display: initial;
  padding: 0.08rem 0.16rem;
  background: rgba(246, 148, 110, 1);
  border-radius: 0.22rem;
  font-size: 0.28rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.release_content {
  position: relative;
  top: 0.88rem;
  textarea {
    width: 100%;
    min-height: 2.8rem;
    padding: 0.3rem 0.32rem;
    border: none;
  }
  .release_location {
    width: 1.44rem;
    display: flex;
    align-items: center;
    background: rgba(245, 245, 245, 1);
    border-radius: 0.2rem;
    padding: 0.08rem 0.15rem;
    margin: 0.24rem 0.32rem;
    span {
      margin-left: 0.11rem;
      font-size: 0.22rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(128, 128, 128, 1);
    }
  }
  .release_emoji {
    padding: 0.23rem 0.32rem;
    background: rgba(244, 244, 244, 1);
    .van-icon {
      margin-right: 0.3rem;
    }
  }
}
</style>
