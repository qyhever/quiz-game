<template>
  <com-page-navbar-wrapper title="赛事介绍">
    <div class="intro">
      <div class="intro-video-wrapper">
        <div class="intro-video" v-html="match.matchIntroduce">
          <!-- <video
            class="video"
            poster="@/assets/images/competition/video.png"
            controls
            src="@/assets/video/v.mp4">
          </video> -->
        </div>
      </div>
      <div class="intro-header">
        <div class="intro__title">{{match.matchName}}</div>
        <div class="intro-header__right">
          <div class="intro-header__text">{{match.gameName}}</div>
          <img class="intro-header__icon" :src="match.gameIcon" alt="game">
        </div>
      </div>
      <com-block-header title="最新竞猜" control-text="更多" @click-right="onToCompetition"/>
      <div class="quiz-list" v-if="guesses.length">
        <div class="quiz-item" v-for="(item, index) in guesses" :key="index">
          <div class="item-header">
            <div class="item-header__left">
              <div class="item-header__icon">
                <!-- TODO picture -->
                <img class="item-header__image" src="@/assets/images/home/gameicon1.png" alt="game">
              </div>
              <div class="item-header__title">{{item.matchName}}</div>
            </div>
            <div class="item-header__time">{{item.matchTime | formatDate('MM-DD hh:mm')}}</div>
          </div>
          <div class="item-body">
            <div class="item-body__left">
              <div class="item-body__team">
                <!-- @click="onToTeamDetail(item.ateamId)" -->
                <div class="item-body__image-wrapper">
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
                <!-- @click="onToTeamDetail(item.bteamId)" -->
                <div class="item-body__image-wrapper">
                  <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
                </div>
                <p class="item-body__team-name">{{item.bName}}</p>
              </div>
            </div>
            <div class="item-body__right">
              <div class="item-body__right-title">{{item.number}}人竞猜</div>
              <!-- :disabled="item.status !== 1" -->
              <van-button
                class="item-body__right-button"
                :class="getQuizStatusClass(item.status || 0)"
                @click="onToQuizDetail(item)">
                {{item.status || 0 | filterQuizStatus}}
              </van-button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="com-empty">暂无数据</div>
      <com-block-header title="参赛战队" :right-visible="false"/>
      <div class="team-list" v-if="teams.length">
        <div class="team-item" v-for="(item, index) in teams" :key="index">
          <div class="team-item__image-wrapper" @click="onToTeamDetail(item.id)">
            <!-- TODO combatTeamIcon -->
            <img class="com-image" src="@/assets/images/home/team.png" alt="team">
          </div>
          <div class="team-item__footer">{{item.combatTeamName}}</div>
        </div>
      </div>
      <div v-else class="com-empty">暂无数据</div>
      <com-block-header title="相关资讯" control-text="更多" @click-right="onToInformation"/>
      <div class="info-list" v-if="infos.length">
        <div class="info-item" v-for="(item, index) in infos" :key="index" @click="onToInformationDetail(item)">
          <div class="info-item__cover-wrapper">
            <!-- TODO picture -->
            <img class="info-item__cover" src="@/assets/images/home/information1.png" alt="cover">
          </div>
          <div class="info-item__content">
            <div class="info-item__title">{{item.title}}</div>
            <div class="info-item__content-footer">
              <div class="info-item__tag">{{item.className}}</div>
              <div class="info-item__date">日期：{{item.releaseTime | formatDate('MM-DD')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="com-empty">暂无数据</div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
import { getMatchDetail, getMatchJoinTeam, getMatchInfo } from '@/api/home'
export default {
  data() {
    return {
      match: {},
      guesses: [],
      teams: [],
      infos: []
    }
  },
  mounted() {
    if (!this.$route.query.id) {
      this.$router.back()
    } else {
      this.query()
    }
  },
  methods: {
    query() {
      this.queryBasicData()
      this.queryTeam()
      this.queryMatchInfo()
    },
    async queryBasicData() {
      try {
        const res = await getMatchDetail(this.$route.query.id)
        const data = res.data || {}
        this.match = data.matchVideo || {}
        this.guesses = data.guessingCompetition.rows || []
      } catch (err) {
        console.log(err)
      }
    },
    async queryTeam() {
      try {
        const res = await getMatchJoinTeam(this.$route.query.id)
        this.teams = res.rows || []
      } catch (err) {
        console.log(err)
      }
    },
    async queryMatchInfo() {
      try {
        const res = await getMatchInfo(this.$route.query.id)
        this.infos = res.rows || []
      } catch (err) {
        console.log(err)
      }
    },
    onToCompetition() {
      this.$router.push('/competition?type=quiz')
    },
    onToInformation() {
      this.$router.push('/information')
    },
    onToTeamDetail(id) {
      this.$router.push(`/team-intro?id=${id}`)
    },
    onToQuizDetail({id, matchInfoId}) {
      this.$router.push({
        path: '/quiz-detail',
        query: {
          id,
          matchInfoId
        }
      })
    },
    onToInformationDetail({id}) {
      this.$router.push(`/information-detail?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .intro {
    height: 100%;
    overflow-y: auto;
  }
  .intro-video-wrapper {
    position: relative;
    height: 0;
    padding-bottom: 56.53%;
  }
  .intro-video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /deep/ .ql-video {
      width: 100%;
      height: 100%;
    }
    /deep/ iframe {
      width: 100%;
      height: 100%;
    }
  }
  .video {
    width: 100%;
    height: 100%;
  }
  .intro-header {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 15px;
  }
  .intro__title{
    font-size: $font-size-large;
    font-weight: 700;
  }
  .intro-header__right {
    display: flex;
    align-items: center;
  }
  .intro-header__text {
    color: #808080;
    margin-right: 12px;
  }
  .intro-header__icon {
    width: 20px;
    height: 20px;
  }
  .quiz-list {
    padding-top: 15px;
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
    &.settlement {
      background-color: #153561;
      color: #B9CAE0;
    }
    &.end {
      background-color: #E6E6E6;
      color: $color-text-secondary;
    }
  }
  // team
  .team-list {
    padding: 15px 0 15px 8.27%;
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
  // info
  .info-list {
    padding: 15px;
  }
  .info-item {
    display: flex;
    padding-bottom: 15px;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  .info-item__cover-wrapper {
    width: 80px;
    height: 51px;
  }
  .info-item__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info-item__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
  .info-item__title {
    line-height: 18px;
    color: $color-text-primary;
    font-size: $font-size-extra-small;
  }
  .info-item__content-footer {
    display: flex;
    align-items: center;
  }
  .info-item__tag {
    display: flex;
    align-items: center;
    height: 16px;
    padding: 0 6px;
    border: 1px solid #176BFF;
    border-radius: 4px;
    color: #176BFF;
    font-size: $font-size-extra-small;
  }
  .info-item__date {
    // transform: scale(0.8);
    margin-left: 9px;
    color: #B3B3B3;
    font-size: $font-size-extra-small;
  }
</style>
