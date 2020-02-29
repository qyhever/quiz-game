<template>
  <div class="page-wrapper" :class="pageWrapperCls">
    <van-nav-bar
      class="navbar"
      :title="title"
      :left-arrow="back"
      @click-left="handleBack">
      <div slot="right">
        <slot name="header-right"></slot>
      </div>
    </van-nav-bar>
    <div class="main-wrapper">
      <div class="main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: ''
      },
      back: {
        type: Boolean,
        default: true
      },
      onBack: {
        type: Function
      }
    },
    computed: {
      pageWrapperCls() {
        return {
          [this.type]: true
        }
      }
    },
    methods: {
      handleBack() {
        if (this.onBack) {
          this.onBack()
        } else {
          this.$router.back()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .navbar {
    background-color: $--color-primary;
    &:after {
      display: none;
    }
    .van-icon, .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__left {
      left: 0;
      width: $header-height;
      &:active {
        opacity: 0.5;
      }
    }
  }
  .main-wrapper {
    position: absolute;
    top: $header-height;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
  .main {
    width: 100%;
    height: 100%;
  }
</style>
