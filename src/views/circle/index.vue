<template>
  <com-page-tabbar-wrapper>
    <van-nav-bar class="circle-navbar" fixed border title="圈子" @touchmove.prevent.stop.native>
      <div class="circle-navbar__right" slot="right">
        <div class="image-wrapper" @click="onSearch">
          <img class="image" src="@/assets/images/circle/search.png" alt="搜索" />
        </div>
        <div class="image-wrapper" @click="onWrite">
          <img class="image" src="@/assets/images/circle/write.png" alt="搜索" />
        </div>
      </div>
    </van-nav-bar>
    <div class="info-container">
      <ul class="circle_meun">
        <li
          :class="{active:currentNav==item.value}"
          v-for="(item,index) in meunList"
          :key="index"
          @click="onNavToggle(item.value)"
        >{{item.name}}</li>
      </ul>
      <cube-scroll ref="scroll" class="scroll" direction="horizontal">
        <!-- 推荐 -->
        <div class="circle_recommend">
          <ul>
            <li class="recommend">推荐</li>
            <li v-for="(item,index) in recommendList" :key="index">
              <img :src="item.url" />
              <p>{{item.name}}</p>
              <span>关注</span>
            </li>
          </ul>
        </div>
      </cube-scroll>
      <div class="tab__panel-wrapper">
        <com-loadmore :fetchData="query">
          <template slot-scope="{list}">
            <circle-list v-for="(item,index) in list" :key="index" :item="index"></circle-list>
          </template>
        </com-loadmore>
      </div>
    </div>
  </com-page-tabbar-wrapper>
</template>

<script>
import CircleList from "./components/circle-list";
export default {
  components: {
    CircleList
  },
  data() {
    return {
      meunList: [
        {
          name: "全部",
          value: 1
        },
        {
          name: "关注",
          value: 2
        }
      ],
      currentNav: 1,
      recommendList: [
        {
          name: "王者赛事圈",
          url: require("../../assets/images/chat_p01.png")
        },
        {
          name: "王者赛事圈",
          url: require("../../assets/images/chat_p01.png")
        },
        {
          name: "王者赛事圈",
          url: require("../../assets/images/chat_p01.png")
        },
        {
          name: "赛事直播",
          url: require("../../assets/images/chat_p02.png")
        },
        {
          name: "LOL战场",
          url: require("../../assets/images/chat_p03.png")
        },
        {
          name: "赛事直播",
          url: require("../../assets/images/chat_p02.png")
        },
        {
          name: "LOL战场",
          url: require("../../assets/images/chat_p03.png")
        },
        { name: "LOL战场", url: require("../../assets/images/chat_p04.png") }
      ]
    };
  },
  methods: {
    onSearch() {
      console.log("onSearch");
    },
    onWrite() {
      console.log("onWrite");
    },
    onNavToggle(value) {
      this.currentNav = value;
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
.scroll /deep/ .cube-scroll-content {
  display: inline-block;
}
.circle-navbar {
  height: $header-height;
  line-height: $header-height;
  &:after {
    border-color: #e6e6e6;
  }
}
.circle-navbar__right {
  display: flex;
  .image-wrapper {
    @include extend-click();
  }
  .image-wrapper + .image-wrapper {
    margin-left: 22px;
  }
  .image {
    width: 22px;
    height: 22px;
  }
}

.tab__panel-wrapper {
  height: calc(100vh - 0.88rem);
  overflow: hidden;
}

.info-container {
  width: 100%;
  position: absolute;
  top: 0.88rem;
  display: flex;
  flex-direction: column;
  .circle_meun {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      padding: 0.37rem 0.2rem 0.24rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(77, 77, 77, 1);
    }
    .active {
      position: relative;
      color: rgba(249, 94, 95, 1);
      &::before {
        position: absolute;
        bottom: 0;
        display: inline-block;
        content: "";
        width: 0.55rem;
        height: 0.04rem;
        background: rgba(249, 94, 95, 1);
      }
    }
  }
  .circle_recommend {
    display: flex;
    padding-left: 0.32rem;
    margin: 0.3rem 0;
    ul {
      display: flex;
      align-items: center;
      .recommend {
        width: 0.96rem;
        text-align: center;
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(179, 179, 179, 1);
      }
      li {
        width: 1.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 1.14rem;
          height: 1.14rem;
        }
        p {
          margin: 0.18rem 0 0.23rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(77, 77, 77, 1);
        }
        span {
          padding: 0.1rem 0.3rem;
          border: 1px solid rgba(239, 118, 118, 1);
          border-radius: 0.22rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(249, 94, 95, 1);
        }
      }
    }
  }
}
</style>
