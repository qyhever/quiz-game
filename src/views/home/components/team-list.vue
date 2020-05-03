<template>
  <div class="team-container">
    <com-block-header title="战队列表" @click-right="onToTeamList"/>
    <van-tabs v-model="active">
      <van-tab v-for="(item, index) in games" :key="index" :title="item.gameName" :name="item.id">
        <template v-if="teams.length">
          <cube-scroll
            class="scroll"
            ref="scroll"
            direction="horizontal"
            v-for="(team, teamIndex) in teams"
            :key="teamIndex">
            <div class="item van-hairline--bottom" @click="onToTeamDetail(team)">
              <div class="item__team">
                <div class="item__team-image-wrapper">
                  <img class="item__team-image" :src="team.combatTeamIcon" alt="team" :onerror="onImageError">
                </div>
                <p class="item__text">{{team.combatTeamName}}</p>
              </div>
              <div class="item__member-list" v-if="team.players && team.players.length">
                <div class="member-item" v-for="(member, memberIndex) in team.players" :key="memberIndex">
                  <div class="item__team-image-wrapper">
                    <img class="item__team-image" :src="getImage(member.playerPicture)" alt="member" :onerror="onImageError">
                  </div>
                  <p class="item__text">{{member.position}}{{member.playerName}}</p>
                </div>
              </div>
              <div class="item__member-list" v-else></div>
            </div>
          </cube-scroll>
        </template>
        <div v-else class="com-empty">暂无数据</div>
      </van-tab>
    </van-tabs>
    <div class="more">
      <div class="more__button" @click="onToTeamList">
        <div class="more__text">查看更多</div>
        <van-icon class="more__icon" name="plus" />
      </div>
    </div>
  </div>
</template>

<script>
import { getHotTeamData } from '@/api/home'
export default {
  props: {
    games: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      active: '',
      teams: [],
      cacheData: {}
    }
  },
  watch: {
    'games.length'(newVal) {
      if (newVal) {
        this.active = this.games[0].id
      }
    },
    active() {
      this.query()
    }
  },
  methods: {
    async query() {
      if (this.cacheData[this.active]) {
        this.teams = this.cacheData[this.active]
      } else {
        try {
          const res = await getHotTeamData(this.active)
          this.teams = res.rows || []
          this.cacheData[this.active] = this.teams.slice() // copy一份到缓存中
        } catch (err) {
          console.log(err)
        }
      }
    },
    onToTeamList() {
      this.$router.push('/team')
    },
    onToTeamDetail({id}) {
      this.$router.push(`/team-intro?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .team-container /deep/ .van-tabs__wrap {
    &:after {
      border-color: #F5F5F5;
    }
  }
  .scroll /deep/ .cube-scroll-content {
    display: inline-block;
  }
  .item {
    display: flex;
    padding: 16px 0;
    white-space: nowrap;
    &:after {
      border-color: #EBEBEB;
    }
  }
  .item:last-of-type {
    &:after {
      display: none;
    }
  }
  .item__team {
    display: inline-block;
    padding: 6px 22px;
    text-align: center;
    width: 120px;
  }
  .item__team-image-wrapper {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .item__team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__text {
    padding-top: 13px;
    color: $color-text-primary;
    font-size: $font-size-extra-small;
    font-weight: 700;
  }
  .item__member-list {
    display: inline-block;
    white-space: nowrap;
  }
  .member-item {
    display: inline-block;
    // width: rem2px(190);
    // height: rem2px(190);
    width: 95px;
    height: 95px;
    padding-top: 6px;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    text-align: center;
    vertical-align: middle;
  }
  .member-item + .member-item {
    margin-left: 8px;
  }
  .more {
    display: flex;
    justify-content: center;
    padding-bottom: 26px;
    font-size: $font-size-base;
    color: #B3B3B3;
    .more__button {
      @include extend-click();
      display: flex;
    }
    .more__text {
      margin-right: 7px;
    }
  }
</style>
