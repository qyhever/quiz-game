<template>
  <div class="page-wrapper" :class="pageWrapperCls">
    <van-nav-bar
      class="navbar"
      fixed
      border
      left-arrow
      @click-left="onClickLeft"
      v-bind="$attrs"
      v-on="$listeners"
      @touchmove.prevent.stop.native>
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
      // title: {
      //   type: String,
      //   required: true
      // },
      type: {
        type: String,
        default: ''
      },
      // back: {
      //   type: Boolean,
      //   default: true
      // },
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
      onClickLeft() {
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
    &.fullpage {
      z-index: 99;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
    }
  }
  .navbar {
    height: $header-height;
    line-height: $header-height;
    background-color: #fff;
    &:after {
      border-color: #e6e6e6;
    }
    .van-icon-arrow-left {
      color: #F95E5F;
    }
    .van-nav-bar__title {
      color: $color-text-primary;
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
