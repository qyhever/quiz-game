<template>
  <com-page-tabbar-wrapper navbar-visible :navbar-title-visible="false">
    <!-- 头部区域 -->
    <div class="logo-wrapper" slot="navbarLeft">
      <img class="logo" src="@/assets/images/logo.png" alt="logo">
    </div>
    <div class="sign-wrapper" slot="navbarRight">
      <button class="sign-button">注册/登录</button>
    </div>
    <cube-scroll ref="scroll">
      <!-- 轮播区域 -->
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="swipe-item-image" src="@/assets/images/home/banner.png" alt="swipe">
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-item-image" src="@/assets/images/home/banner.png" alt="swipe">
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-item-image" src="@/assets/images/home/banner.png" alt="swipe">
        </van-swipe-item>
      </van-swipe>
      <!-- 游戏列表 -->
      <ul class="game-list clearfix">
        <li class="game-item" v-for="(item, index) in gameList" :key="index">
          <div class="game-item__image-wrapper">
            <img class="game-item__image" @load="onImageLoad" :src="require(`@/assets/images/home/icon${item.icon}.png`)" alt="game">
          </div>
          <p class="game-item__title">{{item.title}}</p>
        </li>
      </ul>
      <hot-quiz/>
      <team-list/>
      <hot-information/>
      <hot-competition/>
      <div class="bottom-container">
        <div class="register-wrapper">
          <van-button class="register-button">马上注册，即送188竞豆</van-button>
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
import HotQuiz from './components/hot-quiz'
import TeamList from './components/team-list'
import HotInformation from './components/hot-information'
import HotCompetition from './components/hot-competition'
const gameTextList = ['英雄联盟', '王者荣耀', '绝地求生', 'DOTA2', '守望先锋', '炉石传说', '魔兽争霸', 'CSGO']
export default {
  components: {
    HotQuiz,
    TeamList,
    HotInformation,
    HotCompetition
  },
  data() {
    return {
      gameList: gameTextList.map((title, index) => ({ icon: index + 1, title }))
    }
  },
  methods: {
    onImageLoad() {
      this.$refs.scroll.refresh()
    },
    onBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
  // navbar
  .logo-wrapper, .sign-wrapper {
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
    padding: 16px 0;
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
      padding: .1rem;
    }
    .game-item__image {
      height: 100%;
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
    background: #F54E65;
    border: 1px dashed #FFC20A;
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
