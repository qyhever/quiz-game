<template>
  <com-page-navbar-wrapper title="战队列表">
    <div class="team">
      <!-- tab nav区域 -->
      <div class="tab-nav-wrapper">
        <div class="tab-nav__icon-wrapper">
          <img class="com-image" src="@/assets/images/competition/menu-active.png" alt="menu">
        </div>
        <van-tabs v-model="activeNav" class="com-tab-nav">
          <van-tab
            v-for="(item, index) in navs"
            :key="index"
            :name="item.value"
            :title="item.label"
            />
        </van-tabs>
        <!-- <div class="tab-nav">
          <div
            class="tab-nav-item"
            :class="{active: activeNav === item.value}"
            v-for="(item, index) in navs"
            :key="index"
            @click="onNavToggle(item.value)">
            {{item.label}}
          </div>
        </div> -->
      </div>
      <!-- team -->
      <div class="team-list" v-if="teams.length">
        <div class="team-item" v-for="(item, index) in teams" :key="index" @click="onToIntro(item)">
          <div class="team-item__image-wrapper">
            <img class="com-image" v-if="item.combatTeamIcon" :src="item.combatTeamIcon" alt="team">
          </div>
          <div class="team-item__footer">{{item.combatTeamName}}</div>
        </div>
      </div>
      <div v-else class="com-empty">暂无数据</div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
import { getTotalGames, getHotTeamData, getTeamListByGameId } from '@/api/home'
const HOT_COMPETITION_KEY = 'hot'
export default {
  data() {
    return {
      navs: [
        {label: '热门战队', value: HOT_COMPETITION_KEY}
      ],
      activeNav: HOT_COMPETITION_KEY,
      teams: [],
      cacheData: {}
    }
  },
  watch: {
    activeNav() {
      this.queryTeamList()
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query() {
      const promises = [
        this.queryTotalGames(),
        this.queryHotTeamData()
      ]
      this.$loading.open()
      Promise.all(promises)
        .then(data => {
          this.$loading.close()
          const [games, hotTeams] = data
          this.navs = this.navs.concat(games.map(v => ({
            label: v.gameName,
            value: v.id
          })))
          this.teams = hotTeams
          this.cacheData[HOT_COMPETITION_KEY] = hotTeams.slice() // copy一份到缓存中
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
    // 热门战队
    queryHotTeamData() {
      return getHotTeamData().then(res => res.rows)
    },
    // 战队列表
    async queryTeamList() {
      if (this.cacheData[this.activeNav]) { // 缓存数据
        this.teams = this.cacheData[this.activeNav]
      } else {
        try {
          const res = await getTeamListByGameId(this.activeNav)
          this.teams = res.rows || []
          this.cacheData[this.activeNav] = this.teams.slice() // copy一份到缓存中
        } catch (err) {
          console.log(err)
        }
      }
    },
    onNavToggle(value) {
      this.activeNav = value
    },
    onToIntro({id}) {
      this.$router.push(`/team-intro?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .team {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  // tab
  .tab-nav-wrapper {
    margin-top: 15px;
    padding-left: 17px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F5F5F5;
  }
  .tab-nav__icon-wrapper {
    width: 22px;
    height: 22px;
  }
  .com-tab-nav {
    flex: 1;
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
      color: #F95E5F;
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
  // team
  .team-list {
    padding: 11px 0 0 8.27%;
    font-size: 0;
  }
  .team-item {
    position: relative;
    display: inline-block;
    width: 11.62%;
    height: 0;
    padding-bottom: 19.19%;
    margin-right: 8.13%;
    margin-bottom: 5.95%;
    font-size: $font-size-extra-small;
  }
  .team-item__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 26px;
  }
  .team-item__footer {
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: 0;
    height: 26px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @include ellipsis();
  }
</style>
