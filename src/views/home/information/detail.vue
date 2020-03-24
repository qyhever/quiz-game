<template>
  <com-page-navbar-wrapper title="资讯详情">
      <div class="detail">
        <div class="detail__header">
          <div class="detail__title">{{detail.title}}</div>
          <div class="detail__desc">
            <div class="detail__desc-left">
              <span class="text">来源：{{detail.source}}</span>
              <span class="text">作者：{{detail.author}}</span>
            </div>
            <div class="detail__date">{{detail.releaseTime | formatDate}}</div>
          </div>
        </div>
        <div class="detail__body">
          <div v-html="detail.content"></div>
          <video
            class="video"
            poster="@/assets/images/competition/video.png"
            controls
            src="@/assets/video/v.mp4">
          </video>
        </div>
      </div>
    </com-page-navbar-wrapper>
</template>

<script>
  import { getInfoDetail } from '@/api/home'
  export default {
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      if (!this.$route.query.id) {
        this.$router.back()
      } else {
        this.query()
      }
    },
    methods: {
      async query() {
        try {
          const res = await getInfoDetail(this.$route.query.id)
          this.detail = res.data || {}
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    padding: 0 16px;
  }
  .detail__header {
    padding-top: 10px;
    margin-bottom: 39px;
  }
  .detail__title {
    padding-bottom: 20px;
    line-height: 28px;
    color: $color-text-primary;
    font-size: $font-size-large;
    font-weight: 700;
  }
  .detail__desc {
    display: flex;
    justify-content: space-between;
    color: #808080;
    font-size: $font-size-extra-small;
  }
  .detail__desc-left {
    .text + .text {
      margin-left: 12px;
    }
  }
  .video {
    width: 100%;
    height: 56.53vw;
  }
</style>
