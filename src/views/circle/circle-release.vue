
<template>
  <div>
    <van-nav-bar class="circle-navbar" fixed border title="发布动态" @touchmove.prevent.stop.native>
      <div class="circle-navbar__left" slot="left" @click="onToBack">取消</div>
      <div class="circle-navbar__right" slot="right" @click="onToRelease">发布</div>
    </van-nav-bar>
    <div class="release_content">
      <textarea v-model="form.content" placeholder="分享我的动态" cols="30" rows="10"></textarea>
      <!-- 上传文件 -->
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="9"
        :deletable="false"
        :before-read="beforeRead"
        :after-read="afterRead"
        preview-size="2.12rem"
      />
      <!-- 定位 -->
      <div class="release_location">
        <van-icon name="location-o" size=".24rem" />
        <span>{{defaultVal}}</span>
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
import { uploadFile, releaseCircle, releaseCircleDraft } from "@/api/circle";
export default {
  data() {
    return {
      fileList: [],
      isShow: false,
      weiboIcon: testData,
      defaultVal: "你在哪",
      position: "",
      form: {
        content: "",
        picture: [],
        lng: "",
        lat: ""
      }
    };
  },
  mounted() {
    this.addressDetail();
  },
  methods: {
    changeEmoji(val) {
      console.log(val);
    },
    onToBack() {
      for (const key in this.form) {
        if (this.form[key]) {
          this.$dialog
            .confirm({
              title: "",
              message: "是否保存本次编辑"
            })
            .then(() => {
              releaseCircleDraft(this.form).then(res => {
                if (res.code === 200) {
                  this.$router.go(-1);
                }
              });
            })
            .catch(() => {
              this.$router.go(-1);
            });
        } else {
          this.$router.go(-1);
        }
        return;
      }
    },
    onToRelease() {
      if (!this.form.content) {
        this.$showModal("内容不得为空");
        return;
      }
      this.form.picture = this.form.picture.toString();
      releaseCircle(this.form).then(res => {
        this.$dialog({
          message: res.msg
        }).then(() => {
          this.$router.push("/circle");
        });
      });
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
    },
    beforeRead(file) {
      if (file.type.indexOf("image") !== 0) {
        this.$showModal("请上传 jpg或png 格式图片");
        return false;
      }
      return true;
    },
    afterRead(file) {
      const param = new FormData();
      param.append("file", file.file);
      const config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      uploadFile(param, config).then(res => {
        this.form.picture.push(res.data.realFileName);
      });
    },
    // 获取地理位置
    addressDetail() {
      // var self = this;
      const geolocation = new window.BMap.Geolocation();
      geolocation.getCurrentPosition(r => {
        this.defaultVal = `${r.address.province}${r.address.city}`;
        this.form.lng = r.longitude;
        this.form.lat = r.latitude;
      });
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
    width: auto;
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
