<template>
  <div>
    <!-- 头部区域 -->
    <div class="quiz-header">
      <div class="header__team">
        <div class="header__image-wrapper">
          <img class="com-image" src="@/assets/images/home/team.png" alt="team">
        </div>
        <p class="header__team-name">{{hotQuiz.aName}}</p>
      </div>
      <div class="header__score">
        <div class="header__score-text">
          <span>{{hotQuiz.aScore}}</span>
          <span>:</span>
          <span>{{hotQuiz.bScore}}</span>
        </div>
        <van-button
          class="header__button"
          :class="getQuizStatusClass(hotQuiz.status)"
          :disabled="hotQuiz.status !== 0"
          @click="onToQuizDetail(hotQuiz)">
          {{hotQuiz.status | filterQuizStatus}}
        </van-button>
      </div>
      <div class="header__team">
        <div class="header__image-wrapper">
          <img class="com-image" src="@/assets/images/home/team.png" alt="team">
        </div>
        <p class="header__team-name">{{hotQuiz.bName}}</p>
      </div>
    </div>
    <!-- tab nav区域 -->
    <div class="tab-nav-wrapper">
      <div class="tab-nav__icon-wrapper">
        <img class="com-image" src="@/assets/images/competition/menu-active.png" alt="menu">
      </div>
      <div class="tab-nav">
        <div
          class="tab-nav-item"
          :class="{active: activeNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)">
          {{item.label}}
        </div>
      </div>
    </div>
    <!-- tab panel 区域 -->
    <div class="quiz-list" v-if="quizs.length">
      <div class="quiz-item" v-for="(item, index) in quizs" :key="index">
        <div class="item-header">
          <div class="item-header__left">
            <div class="item-header__icon">
              <!-- TODO picture -->
              <img class="item-header__image" src="@/assets/images/home/gameicon1.png" alt="game">
            </div>
            <div class="item-header__title">{{item.matchName}}</div>
          </div>
          <div class="item-header__time">{{item.matchTime | formatDate(('MM-DD HH:mm'))}}</div>
        </div>
        <div class="item-body">
          <div class="item-body__left">
            <div class="item-body__team">
              <div class="item-body__image-wrapper">
                <!-- TODO aicon -->
                <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item-body__team-name">{{item.aName}}</p>
            </div>
            <div class="item-body__score">
              <span>{{item.aScore}}</span>
              <span>:</span>
              <span>{{item.bScore}}</span>
            </div>
            <div class="item-body__team">
              <div class="item-body__image-wrapper">
                <!-- TODO aicon -->
                <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item-body__team-name">{{item.bName}}</p>
            </div>
          </div>
          <div class="item-body__right">
            <div class="item-body__right-title">{{item.number}}人竞猜</div>
            <van-button
              class="item-body__right-button"
              :class="getQuizStatusClass(item.status)"
              :disabled="item.status !== 0"
              @click="onToQuizDetail(item)">
              {{item.status | filterQuizStatus}}
            </van-button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="com-empty">暂无数据</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getTotalGames, getHotQuizData, getQuizsByGameId } from '@/api/home'
const HOT_QUIZ_KEY = 'hot'
export default {
  data() {
    return {
      navs: [
        {label: '热门竞猜', value: HOT_QUIZ_KEY}
      ],
      activeNav: HOT_QUIZ_KEY,
      hotQuiz: {},
      quizs: [],
      cacheData: {}
    }
  },
  watch: {
    activeNav() {
      this.queryQuizs()
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  mounted() {
    this.query()
  },
  methods: {
    onToQuizDetail({id, matchInfoId}) {
      this.$router.push({
        path: '/quiz-detail',
        query: {
          id,
          matchInfoId
        }
      })
    },
    query() {
      const promises = [
        this.queryTotalGames(),
        this.queryHotQuizData()
      ]
      this.$loading.open()
      Promise.all(promises)
        .then(data => {
          this.$loading.close()
          const [games, hotQuizs] = data
          this.navs = this.navs.concat(games.map(v => ({
            label: v.gameName,
            value: v.id
          })))
          this.quizs = hotQuizs
          if (hotQuizs.length) {
            this.hotQuiz = hotQuizs[0]
          }
          this.cacheData[HOT_QUIZ_KEY] = hotQuizs.slice()
        })
        .catch(err => {
          this.$loading.close()
          console.log(err)
        })
    },
    // 全部游戏
    queryTotalGames() {
      return getTotalGames().then(res => res.rows)
    },
    // 热门赛事
    queryHotQuizData() {
      return getHotQuizData().then(res => res.rows)
    },
    async queryQuizs() {
      if (this.cacheData[this.activeNav]) { // 缓存数据
        this.quizs = this.cacheData[this.activeNav]
      } else {
        try {
          const res = await getQuizsByGameId(this.activeNav)
          this.quizs = res.rows || []
          this.cacheData[this.activeNav] = this.quizs.slice() // copy一份到缓存中
        } catch (err) {
          console.log(err)
        }
      }
    },
    onNavToggle(value) {
      this.activeNav = value
    },
    onToIntro({id}) {
      this.$router.push(`/competition-intro?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .quiz-header {
    padding: 10px 5.33%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FAFAFA;
    border-bottom: 5px solid $color-page-bg;
  }
  .header__image-wrapper {
    width: 75px;
    height: 75px;
  }
  .header__team-name {
    padding-top: 8px;
    text-align: center;
  }
  .header__score {
    text-align: center;
  }
  .header__score-text {
    margin-bottom: 12px;
    color: #FF4F4F;
    font-size: 40px;
  }
  .header__button {
    width: rem2px(200);
    height: 36px;
    line-height: 34px;
    background-color: #FFA31F;
    border-color: #FFA31F;
    color: #fff;
    font-size: $font-size-medium;
    font-weight: 700;
  }
  // tab
  .tab-nav-wrapper {
    margin-top: 15px;
    padding: 0 17px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F5F5F5;
  }
  .tab-nav__icon-wrapper {
    width: 22px;
    height: 22px;
  }
  .tab-nav {
    flex: 1;
    margin-left: 14px;
    height: 40px;
    display: flex;
  }
  .tab-nav-item {
    position: relative;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size .15s;
    color: $color-text-secondary;
    &.active {
      color: #000;
      font-size: $font-size-medium;
      font-weight: 700;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      margin: 0 -2px;
      transition: width .2s;
      background-color: #F95E5F;
    }
  }
  // tab panel
  .quiz-list {
    padding-top: 12px;
  }
  .item-header {
    height: 32px;
    padding-left: 21px;
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, $color-page-bg, #fff);
    font-size: $font-size-extra-small;
  }
  .item-header__left {
    display: flex;
    align-items: center;
  }
  .item-header__title {
    margin-left: 13px;
    color: #808080;
  }
  .item-header__icon {
    width: 20px;
    height: 20px;
  }
  .item-header__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-header__time {
    color: $color-text-secondary;
  }
  .item-body {
    display: flex;
    padding: 15px 0;
    background-color: #fff;
  }
  .item-body__left {
    flex: 11;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:before, &:after {
      content: "";
    }
  }
  .item-body__team-name {
    padding-top: 2px;
    text-align: center;
    font-size: $font-size-extra-small;
    color: $color-text-primary;
  }
  .item-body__image-wrapper {
    width: 44px;
    height: 44px;
  }
  .item-body__image {
    width: 100%;
    height: 100%
  }
  .item-body__score {
    color: #FF4F4F;
    font-size: 28px;
  }
  .item-body__right {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item-body__right-title {
    padding-bottom: 6px;
    font-size: $font-size-extra-small;
    color: #FFA31F;
  }
  .item-body__right-button {
    width: 68px;
    height: 21px;
    line-height: 21px;
    padding: 0;
    border-color: transparent;
    background-color: #FFA31F;
    font-size: $font-size-extra-small;
    color: #fff;
  }
</style>
