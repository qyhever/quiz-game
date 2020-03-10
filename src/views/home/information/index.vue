<template>
  <com-page-navbar-wrapper title="资讯列表">
    <div class="info-container">
      <ul class="tab__nav" @touchmove.prevent.stop>
        <li
          class="tab__nav-item"
          :class="{active: currentNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)">
          {{item.label}}  
        </li>
      </ul>
      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="query">
            <template slot-scope="{list}">
              <div class="item" v-for="(item, index) in list" :key="index" @click="onToDetail(item)">
                <div class="item__image-wrapper">
                  <img class="item__image" src="@/assets/images/home/information1.png" alt="information">
                </div>
                <div class="item__body">
                  <div class="item__title">2019MDL 成都  Major 决战在即  英雄传承共见证！</div>
                  <div class="item__body-footer">
                    <div class="item__date">日期：11-22</div>
                  </div>
                </div>
              </div>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
    <information-detail ref="detail" />
  </com-page-navbar-wrapper>
</template>

<script>
  import InformationDetail from './detail'
  export default {
    components: {
      InformationDetail
    },
    data() {
      return {
        navs: [
          {label: '全部', value: ''},
          {label: '资讯', value: '1'},
          {label: '赛事', value: '2'},
          {label: '视频', value: '3'}
        ],
        currentNav: ''
      }
    },
    methods: {
      onNavToggle(value) {
        this.currentNav = value
      },
      onToDetail() {
        console.log('onToDetail')
        this.$refs.detail.open()
      },
      query() {
        // mock
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(Array(10).fill(null))
          }, 1500)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .tab__nav {
    display: flex;
    height: 44px;
    border-bottom: 6px solid $color-page-bg;
    padding: 0 22px;
  }
  .tab__nav-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    color: $color-text-secondary;
    font-size: $font-size-extra-small;
    &:after {
      display: none;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #F95E5F;
    }
    &.active {
      color: #000;
      font-size: $font-size-base;
      font-weight: 700;
      &:after {
        display: block;
      }
    }
  }
  .tab__panel-wrapper {
    flex: 1;
    overflow: hidden;
  }
  .tab__panel {
    height: 100%;
    padding: 12px 21px 0;
    overflow: hidden;
  }
  .item {
    display: flex;
    padding-bottom: 15px;
  }
  .item__image-wrapper {
    width: 80px;
    height: 51px;
  }
  .item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__body {
    flex: 1;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: $font-size-extra-small;
  }
  .item__title {
    color: $color-text-primary;
    line-height: 18px;
  }
  .item__body-footer {
    display: flex;
    justify-content: flex-end;
  }
  .item__date {
    color: #B3B3B3;
  }
</style>
