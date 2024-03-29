<template>
  <com-page-tabbar-wrapper navbar-visible :navbar-title-visible="false">
    <!-- 头部区域 -->
    <div class="logo-wrapper" slot="navbarLeft">
      <img class="logo" src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="sign-wrapper" slot="navbarRight">
      <button v-if="!token" class="sign-button" @click="onToLogin">注册/登录</button>
    </div>
    <cube-scroll ref="scroll">
      <!-- 轮播区域 -->
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <img class="swipe-item-image" :src="item.pic" alt="swipe" />
        </van-swipe-item>
      </van-swipe>
      <!-- 游戏列表 -->
      <ul class="game-list clearfix">
        <li class="game-item" v-for="(item, index) in games" :key="index" @click="onToMatchDetail(item)">
          <div class="game-item__image-wrapper">
            <img class="game-item__image" @load="onImageLoad" :src="item.gameIcon" alt="game" />
          </div>
          <p class="game-item__title">{{item.gameName}}</p>
        </li>
      </ul>
      <hot-quiz :list="quizs" />
      <team-list :games="games" :list="teams" />
      <hot-information :list="infos" />
      <hot-competition :list="competitions" />
      <div class="bottom-container">
        <div class="register-wrapper" v-if="!token">
          <van-button class="register-button" @click="onToRegister">马上注册，即送188竞豆</van-button>
        </div>
        <div class="home-back-top-wrapper">
          <div class="home-back-top" @click="onBackTop">
            <div class="home-back-top__text">返回顶部</div>
            <van-icon class="home-back-top__icon" name="arrow-up" />
          </div>
        </div>
      </div>
      <div class="gap"></div>
    </cube-scroll>
  </com-page-tabbar-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import HotQuiz from "./components/hot-quiz";
import TeamList from "./components/team-list";
import HotInformation from "./components/hot-information";
import HotCompetition from "./components/hot-competition";
import {
  getHotQuizData,
  getHotInfoData,
  getBannerData,
  getTotalGames,
  getHotCompetitionData
} from "@/api/home";
export default {
  components: {
    HotQuiz,
    TeamList,
    HotInformation,
    HotCompetition
  },
  data() {
    return {
      banners: [],
      games: [],
      quizs: [],
      teams: [],
      infos: [],
      competitions: []
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      const promises = [
        this.queryBannerData(),
        this.queryTotalGames(),
        this.queryHotQuizData(),
        this.queryHotInfoData(),
        this.queryHotCompetitionData()
      ];
      this.$loading.open();
      Promise.all(promises)
        .then(data => {
          this.$loading.close();
          const [banners, games, quizs, infos, competitions] = data;
          this.banners = banners;
          this.games = games;
          this.quizs = quizs;
          this.infos = infos;
          this.competitions = competitions;
        })
        .catch(err => {
          this.$loading.close();
          console.log(err);
        });
    },
    // 轮播图
    queryBannerData() {
      return getBannerData().then(res => res.data);
    },
    // 全部游戏
    queryTotalGames() {
      return getTotalGames().then(res => {
        window.sessionStorage.setItem("gameList", JSON.stringify(res.rows));
        return res.rows;
      });
    },
    // 热门竞猜
    queryHotQuizData() {
      return getHotQuizData().then(res => res.rows);
    },
    // 热门资讯
    queryHotInfoData() {
      return getHotInfoData().then(res => res.rows);
    },
    // 热门赛事
    queryHotCompetitionData() {
      return getHotCompetitionData().then(res => res.rows);
    },
    onImageLoad() {
      this.$refs.scroll.refresh();
    },
    onBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    onToLogin() {
      this.$router.push("/login");
    },
    onToRegister() {
      this.$router.push("/register");
    },
    onToMatchDetail({id}) {
      this.$router.push(`/competition-intro?id=${id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
// navbar
.logo-wrapper,
.sign-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  width: 89px;
  height: 24px;
}
.sign-button {
  width: 81px;
  height: 25px;
  background: rgba(245, 78, 101, 1);
  border: 1px dashed rgba(255, 194, 10, 1);
  border-radius: 5px;
  font-size: $font-size-extra-small;
}
// swipe
.swipe,
.swipe .van-swipe-item {
  height: 40vw;
}
.swipe-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
// game
.game-list {
  padding-top: 6px;
}
.game-item {
  position: relative;
  float: left;
  width: 25%;
  // 兼容写法
  height: 0;
  padding-bottom: 25%;
  margin-bottom: 10px;
  text-align: center;
  .game-item__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 22px;
    padding: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .game-item__image {
    width: 1.2rem;
    height: 1.2rem;
    object-fit: cover;
  }
  .game-item__title {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 22px;
    line-height: 22px;
    color: $color-text-primary;
    font-size: $font-size-extra-small;
  }
}
.bottom-container {
  background-color: $color-page-bg;
}
.register-wrapper {
  padding-top: 40px;
  text-align: center;
}
.register-button {
  width: 88%;
  background: #f54e65;
  border: 1px dashed #ffc20a;
  border-radius: 8px;
  height: 37px;
  line-height: 37px;
  color: #fff;
}
.home-back-top-wrapper {
  padding: 25px 0 23px;
  display: flex;
  justify-content: center;
}
.home-back-top {
  @include extend-click();
  display: flex;
  color: #123461;
  font-size: $font-size-extra-small;
}
.home-back-top__text {
  margin-right: 5px;
}
.gap {
  height: 28px;
  background-color: #fff;
}
</style>
