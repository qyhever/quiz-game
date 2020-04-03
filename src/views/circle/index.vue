<template>
  <com-page-tabbar-wrapper>
    <van-nav-bar class="circle-navbar" fixed border title="圈子" @touchmove.prevent.stop.native>
      <div class="circle-navbar__right" slot="right">
        <div class="image-wrapper" @click="onSearch">
          <img class="image" src="@/assets/images/circle/search.png" alt="搜索" />
        </div>
        <div class="image-wrapper" @click="onWrite">
          <img class="image" src="@/assets/images/circle/write.png" alt="发布" />
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
        <div class="circle_recommend">
          <ul>
            <li class="recommend">{{typeVal}}</li>
            <li v-for="(item,index) in recommendList" :key="index">
              <img :src="item.avatar" />
              <p>{{item.nickname}}</p>
              <span @click="addFollowCircle(item)">关注</span>
            </li>
          </ul>
        </div>
      </cube-scroll>
      <div class="tab__panel-wrapper">
        <com-loadmore :fetchData="query" ref="scroll">
          <template slot-scope="{list}">
            <circle-list v-for="(item,index) in list" :key="index" :item="item"></circle-list>
          </template>
        </com-loadmore>
      </div>
    </div>
  </com-page-tabbar-wrapper>
</template>

<script>
import {
  getCircleInfo,
  getFollowCircleInfo,
  circleFollow,
  circleRecommend,
  addFollowCircle
} from "@/api/circle";
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
      typeVal: "推荐",
      type: 1,
      pagingInfo: {},
      recommendList: [],
      circleList: []
    };
  },
  mounted() {
    this.circleRecommend();
  },
  methods: {
    onSearch() {
      console.log("onSearch");
    },
    onWrite() {
      this.$router.push("/circle-release");
    },
    onNavToggle(value) {
      this.currentNav = value;
      switch (value) {
        case 1:
          this.typeVal = "推荐";
          this.type = 1;
          this.circleRecommend();
          this.query(this.pagingInfo);
          break;
        default:
          this.typeVal = "已关注";
          this.type = 0;
          this.circleFollow();
          this.query(this.pagingInfo);
          break;
      }
    },
    query({ page, count }) {
      this.pagingInfo = { page, count };
      if (this.type === 1) {
        return getCircleInfo({ page, count, type: this.type })
          .then(res => res.rows)
          .catch(err => {
            console.log(err);
          });
      }
      return getFollowCircleInfo({ page, count, type: this.type })
        .then(res => res.rows)
        .catch(err => {
          console.log(err);
        });
    },

    // 圈子关注列表
    circleFollow() {
      circleFollow().then(res => {
        this.recommendList = res.rows;
        this.$refs.scroll.refresh()
      });
    },

    // 圈子推荐列表
    circleRecommend() {
      circleRecommend().then(res => {
        this.recommendList = res.rows;
        this.$refs.scroll.refresh()
      });
    },
    // 圈子关注
    addFollowCircle(item) {
      addFollowCircle({ circleId: item.circleId }).then(() => {
        this.$toast.success({
          forbidClick: true,
          message: "关注成功"
        });
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
          border-radius: 50%;
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
