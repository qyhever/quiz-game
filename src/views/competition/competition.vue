<template>
  <div>
    <!-- 轮播区域 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img class="swipe-item-image" :src="item.pic" alt="swipe">
      </van-swipe-item>
    </van-swipe>
    <!-- tab nav区域 -->
    <div class="tab-nav-wrapper">
      <div class="tab-nav__icon-wrapper">
        <img class="com-image" src="@/assets/images/competition/menu.png" alt="menu">
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
    <div class="competition-list" v-if="competitions.length">
      <div class="competition-item" v-for="(item, index) in competitions" :key="index" @click="onToIntro(item)">
        <div class="item__main">
          <!-- TODO status -->
          <img class="item__status" src="@/assets/images/competition/going.png" alt="status">
          <!-- <img class="item__status" src="@/assets/images/competition/over.png" alt="status"> -->
          <div class="item__image-wrapper">
            <img class="item__image" :src="item.picture" alt="competition">
          </div>
        </div>
        <div class="item__footer">
          <div class="item__text">{{item.matchName}}</div>
        </div>
      </div>
    </div>
    <div v-else class="com-empty">暂无数据</div>
  </div>
</template>

<script>
import { getBannerData, getTotalGames, getHotCompetitionData, getCompetitionsByGameId } from '@/api/home'
const HOT_COMPETITION_KEY = 'hot'
export default {
  data() {
    return {
      navs: [
        {label: '热门赛事', value: HOT_COMPETITION_KEY}
      ],
      activeNav: HOT_COMPETITION_KEY,
      banners: [],
      games: [],
      competitions: [],
      cacheData: {}
    }
  },
  watch: {
    activeNav() {
      this.queryCompetitions()
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query() {
      const promises = [
        this.queryBannerData(),
        this.queryTotalGames(),
        this.queryHotCompetitionData()
      ]
      this.$loading.open()
      Promise.all(promises)
        .then(data => {
          this.$loading.close()
          const [banners, games, hotCompetitions] = data
          this.banners = banners
          this.navs = this.navs.concat(games.map(v => ({
            label: v.gameName,
            value: v.id
          })))
          this.competitions = hotCompetitions
          this.cacheData[HOT_COMPETITION_KEY] = hotCompetitions.slice()
        })
        .catch(err => {
          this.$loading.close()
          console.log(err)
        })
    },
    // 轮播图
    queryBannerData() {
      return getBannerData().then(res => res.data)
    },
    // 全部游戏
    queryTotalGames() {
      return getTotalGames().then(res => res.rows)
    },
    // 热门赛事
    queryHotCompetitionData() {
      return getHotCompetitionData().then(res => res.rows)
    },
    async queryCompetitions() {
      if (this.cacheData[this.activeNav]) { // 缓存数据
        this.competitions = this.cacheData[this.activeNav]
      } else {
        try {
          const res = await getCompetitionsByGameId(this.activeNav)
          this.competitions = res.rows || []
          this.cacheData[this.activeNav] = this.competitions.slice() // copy一份到缓存中
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
      // font-size: $font-size-medium;
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
  .competition-list {
    padding-top: 12px;
    padding-left: 4.26%;
    font-size: 0;
  }
  .competition-item {
    position: relative;
    display: inline-block;
    width: 45.4%;
    height: 0;
    padding-bottom: 32.32%;
    margin-right: 4.44%;
    margin-bottom: 4.44%;
  }
  .item__main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    padding-bottom: 57.67%;
  }
  .item__status {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
  }
  .item__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__footer {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  .item__text {
    color: #4C4C4C;
    font-size: $font-size-extra-small;
  }
</style>
