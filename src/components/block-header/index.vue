<template>
  <div class="block-header">
    <div class="block-header__inner">
      <div class="block-header__title">{{title}}</div>
      <div class="block-header__control" v-if="rightVisible" @click="onControlClick">
        <div class="block-header__control-text">{{controlText}}</div>
        <div class="block-header__control-icon"></div>
      </div>
    </div>
    <div class="block-header__angle"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    controlText: {
      type: String,
      default: '全部'
    },
    rightVisible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onControlClick() {
      this.$emit('click-right')
    }
  }
}
</script>

<style lang="scss" scoped>
  .block-header {
    height: 39px;
    display: flex;
    padding-right: 15px;
  }
  .block-header__inner {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 22px;
    background: linear-gradient(to right, #123361, #F95E61);
    color: #fff;
    .block-header__title {
      font-size: $font-size-large;
      font-weight: 700;
    }
    .block-header__control {
      display: flex;
      align-items: center;
    }
    .block-header__control-text {
      font-size: $font-size-extra-small
    }
    .block-header__control-icon {
      width: 16px;
      height: 16px;
      margin-left: 4px;
      background: url("~@/assets/images/block-header-icon.png") no-repeat;
      background-size: 100%;
    }
  }
  .block-header__angle {
    width: 20px;
    margin-left: -1px;
    background: url("~@/assets/images/block-header-angle.png") no-repeat;
    background-size: 100%;
  }
</style>
