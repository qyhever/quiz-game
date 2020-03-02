<template>
  <com-page-transition>
    <com-page-navbar-wrapper
      title="资讯详情"
      type="fullpage"
      v-if="visible"
      :zIndex="10"
      :onBack="close">
      <div class="detail">
        <div class="detail__header">
          <div class="detail__title">
            LPL全明星周末11月30日海口冯小刚电影公社正式开幕
          </div>
          <div class="detail__desc">
            <div class="detail__desc-left">
              <span class="text">来源：赛事官方</span>
              <span class="text">作者：赛事红</span>
            </div>
            <div class="detail__date">2019-12-02</div>
          </div>
        </div>
        <div class="detail__body">
          备受瞩目的《英雄联盟》LPL全明星周末，即将于11月30日在海南海口冯小刚电影公社正式揭开帷幕，这里将点燃2019赛季的最后一把火焰，专属于LPL选手、主播和粉丝们的全明星赛终于到来。
        </div>
      </div>
    </com-page-navbar-wrapper>
  </com-page-transition>
</template>

<script>
  export default {
    data() {
      return {
        detail: {},
        visible: false
      }
    },
    methods: {
      query() {
        // ...
      },
      open() {
        this.visible = true
      },
      close() {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    padding: 0 16px;
  }
  .detail__header {
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
</style>
