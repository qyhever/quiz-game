<template>
  <com-page-navbar-wrapper title="推广明细">
    <div class="com-gap"></div>
    <div class="record-list">
      <com-loadmore :fetchData="query">
        <template slot-scope="{list}">
          <div class="record-item" v-for="(item, index) in list" :key="index">
            <div class="record-item__left">
              <div class="record-item__title">{{item.title}}</div>
              <div class="record-item__time">{{item.createTime | formatDate('YYYY-MM-DD HH:mm')}}</div>
            </div>
            <!-- TODO plus -->
            <div class="record-item__count">{{item.number}}</div>
          </div>
        </template>
      </com-loadmore>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  import { getPromoteDetail } from '@/api/user'
  export default {
    methods: {
      query() {
        return getPromoteDetail().then(res => {
          return res.rows || []
        })
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
