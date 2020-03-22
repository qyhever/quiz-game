<template>
  <com-page-navbar-wrapper title="我的竞豆">
    <div class="info-container">
      <div class="bean_detailed">
        <div class="bean_message">
          <div class="bean_count">
            <p>当前竞豆</p>
            <p>{{userInfo.bean}}</p>
          </div>
          <router-link to="/bean-recharge">
            <div class="bean_btn">充值</div>
          </router-link>
        </div>
      </div>

      <ul class="tab_nav" @touchmove.prevent.stop>
        <li
          :class="{active: currentNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)"
        >{{item.label}}</li>
      </ul>

      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="query" v-if="currentNav==1">
            <template slot-scope="{list}">
              <bean-list v-for="(item,index) in list" :key="index" :item="item"></bean-list>
            </template>
          </com-loadmore>
          <div class="bean_earn" v-else>
            <p>您可以从以下活动赚取竞豆：</p>

            <span>
              <router-link to="/competition?type=quiz">竞猜活动</router-link>
            </span>
            <span>
              <router-link to="/promote">代理推广</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import BeanList from "./components/bean-list";
import { getBeanDetailed } from "@/api/user";
export default {
  components: {
    BeanList
  },
  data() {
    return {
      navs: [
        { label: "明细", value: "1" },
        { label: "赚取", value: "2" }
      ],
      currentNav: "1"
    };
  },
   computed: {
    userInfo() {
      return this.$store.state.user.info;
    }
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value;
    },
    query({ page, count }) {
      return getBeanDetailed({ page, count })
        .then(res => res.rows)
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bean_detailed {
  display: flex;
  align-items: center;
  margin: 0.28rem 0.32rem 0;
  height: 2.18rem;
  background: url("../../assets/images/bean_bg.png") no-repeat center/100%;
  .bean_message {
    width: 100%;
    padding: 0 0.3rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .bean_count {
      p {
        font-family: Microsoft YaHei;
        color: rgba(255, 255, 255, 1);
        &:nth-of-type(1) {
          margin-bottom: 0.34rem;
          font-size: 0.24rem;
          font-weight: 400;
        }
        &:nth-of-type(2) {
          font-size: 0.56rem;
          font-weight: bold;
        }
      }
    }
    .bean_btn {
      width: 1.2rem;
      height: 0.52rem;
      line-height: 2;
      text-align: center;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.26rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 196, 60, 1);
    }
  }
}
.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tab_nav {
  display: flex;
  align-items: center;
  height: 0.88rem;
  border-bottom: 0.12rem solid $color-page-bg;
  padding: 0 0.32rem;
  li {
    flex: 1;
    text-align: center;
    height: 100%;
    line-height: 3;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(77, 77, 77, 1);
    &::before {
      display: inline-block;
      content: "";
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.23rem;
      background: url("../../assets/images/icon_mingxi.png") no-repeat
        center/100%;
      vertical-align: sub;
    }
    &:nth-of-type(1) {
      &::before {
        background: url("../../assets/images/icon_mingxi.png") no-repeat
          center/100%;
      }
    }
    &:nth-of-type(2) {
      &::before {
        background: url("../../assets/images/icon_zhuanqu.png") no-repeat
          center/100%;
      }
    }
  }

  .active {
    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      display: inline-block;
      content: "";
      width: 100%;
      height: 0.04rem;
      background: rgba(255, 196, 60, 1);
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
.bean_earn {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0.62rem 0 0;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(77, 77, 77, 1);
  }
  span {
    margin: 0.24rem 0;
    padding: 0.13rem 0.64rem;
    background: rgba(255, 196, 60, 1);
    border-radius: 0.27rem;
    font-size: 0.28rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    a {
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
