<template>
  <com-page-navbar-wrapper title="关注战队">
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
               <team-list v-for="(item,index) in list" :key="index" :item="index"></team-list>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import TeamList from "./components/team-list"
  export default {
    components: {
      TeamList
    },
    data() {
      return {
        navs: [
          {label: '全部', value: ''},
          {label: '英雄联盟', value: '1'},
          {label: '王者荣耀', value: '2'}
        ],
        currentNav: ''
      }
    },
    methods: {
      onNavToggle(value) {
        this.currentNav = value
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
    position: relative;
    display: flex;
    height: .88rem;
    border-bottom: .12rem solid $color-page-bg;
    padding: 0 .44rem 0 .8rem;
    &::before {
      position: absolute;
      left: .3rem;
      top: .16rem;
      display: inline-block;
      width:.44rem;
      height:.44rem;
      content: '';
      background: url('../../assets/images/match/all.png') no-repeat center/100%;
    }
  }
  .tab__nav-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 .3rem;
    color: $color-text-secondary;
    font-size: $font-size-extra-small;
    &:after {
      display: none;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: .04rem;
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
    padding: 0 .33rem;
    overflow: hidden;
  }
</style>
