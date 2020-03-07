<template>
  <com-page-navbar-wrapper title="关注比赛">
    <div class="info-container">
      <span class="all_icon"></span>
      <ul class="tab__nav" @touchmove.prevent.stop>
        <li
          class="tab__nav-item"
          :class="{active: currentNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)"
        >{{item.label}}</li>
      </ul>
      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="query">
            <template slot-scope="{list}">
              <match-list v-for="(item,index) in list" :key="index" :item="index"></match-list>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="left" :style="{ width: '3.6rem',height:'100%' }">
      <game-meun></game-meun>
    </van-popup>
  </com-page-navbar-wrapper>
</template>
<script>
import MatchList from "./components/match-list";
import GameMeun from "./components/game-meun";
export default {
  components: {
    MatchList,
    GameMeun
  },
  data() {
    return {
      navs: [
        { label: "全部", value: "" },
        { label: "英雄联盟", value: "1" },
        { label: "王者荣耀", value: "2" }
      ],
      currentNav: "1",
      show: false
    };
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value;
      if (!value) {
        this.show = true;
      }
    },
    query() {
      // mock
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(Array(10).fill(null));
        }, 1500);
      });
    }
  }
};
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
  height: 0.88rem;
  border-bottom: 0.12rem solid $color-page-bg;
  padding: 0 0.44rem 0 0.8rem;
  &::before {
    position: absolute;
    left: 0.3rem;
    top: 0.16rem;
    display: inline-block;
    width: 0.44rem;
    height: 0.44rem;
    content: "";
    background: url("../../assets/images/match/all.png") no-repeat center/100%;
  }
}
.tab__nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.3rem;
  color: $color-text-secondary;
  font-size: $font-size-extra-small;
  &:after {
    display: none;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.04rem;
    background-color: #f95e5f;
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
  padding: 0 0.33rem;
  overflow: hidden;
}
</style>
