<template>
  <com-page-navbar-wrapper title="关注选手">
    <div class="info-container">
      <ul class="tab__nav" @touchmove.prevent.stop>
        <li
          class="tab__nav-item"
          :class="{active: currentNav === item.id}"
          v-for="(item, index) in navList"
          :key="index"
          @click="onNavToggle(item.id)"
        >{{item.gameName}}</li>
      </ul>
      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="query">
            <template slot-scope="{list}">
              <player-list v-for="(item,index) in list" :key="index" :item="item"></player-list>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="left" :style="{ width: '3.6rem',height:'100%' }">
      <game-meun @sendData="getData"></game-meun>
    </van-popup>
  </com-page-navbar-wrapper>
</template>
<script>
import PlayerList from "./components/player-list";
import GameMeun from "./components/game-meun";
import { getFollowPlayer } from "@/api/user";
export default {
  components: {
    PlayerList,
    GameMeun
  },
  data() {
    return {
      pagingInfo: {},
      currentNav: "",
      show: false
    };
  },
  computed: {
    navList() {
      const arr = JSON.parse(window.sessionStorage.getItem("gameList"));
      arr.unshift({ gameName: "全部", id: "" });
      return arr.slice(0, 4);
    }
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value;
      this.query(this.pagingInfo);
      if (!value) {
        this.show = true;
      }
    },
    getData(value) {
      this.currentNav = value;
      this.query(this.pagingInfo);
      this.show = false;
    },
    query({ page, count }) {
      this.pagingInfo = { page, count };
      return getFollowPlayer({
        pageNum: this.pagingInfo.page,
        pageSize: this.pagingInfo.count,
        gameId: this.currentNav
      })
        .then(res => res.rows)
        .catch(err => {
          console.log(err);
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
