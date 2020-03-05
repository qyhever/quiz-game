<template>
  <com-page-navbar-wrapper title="推广明细" @touchmove.prevent.stop.native>
    <div class="com-gap"></div>
    <div class="record-list">
      <div class="record-item" v-for="(item, index) in list" :key="index">
        <div class="record-item__left">
          <div class="record-item__title">提现</div>
          <div class="record-item__time">2019-11-24  21:00</div>
        </div>
        <!-- plus -->
        <div class="record-item__count">+10</div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        list: Array(3).fill(null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record-list {
    padding: 0 16px;
  }
  .record-item {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include border-bottom-1px(#EBEBEB);
  }
  .record-item__title {
    padding-bottom: 8px;
    color: #4D4D4D;
    font-size: $font-size-medium;
  }
  .record-item__time {
    color: #A6A6A6;
    font-size: $font-size-extra-small;
  }
  .record-item__count {
    color: #7EACFF;
    font-size: $font-size-extra-large;
    .plus {
      color: #F95E5F;
    }
  }
</style>
