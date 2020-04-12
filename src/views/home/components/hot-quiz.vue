<template>
  <div>
    <com-block-header title="热门竞猜" @click-right="onToCompetition"/>
    <div class="hot-list">
      <div class="quiz-item" v-for="(item, index) in list" :key="index" @click="onToQuizDetail(item)">
        <!-- <div class="item-header">
          <div class="item-header__left">
            <div class="item-header__icon">
              <img class="item-header__image" :src="item.picture" alt="game">
            </div>
            <div class="item-header__title">{{item.matchName}}</div>
          </div>
          <div class="item-header__time">{{item.matchTime | formatDate('MM-DD HH:mm')}}</div>
        </div>
        <div class="item-body">
          <div class="item-body__left">
            <div class="item-body__team">
              <div class="item-body__image-wrapper" @click="onToTeamDetail(item.aTeamId)">
                <img class="item-body__image" :src="item.aIcon" alt="team">
              </div>
              <p class="item-body__team-name">{{item.aName}}</p>
            </div>
            <div class="item-body__score">
              <span>{{item.aScore}}</span>
              <span>:</span>
              <span>{{item.bScore}}</span>
            </div>
            <div class="item-body__team">
              <div class="item-body__image-wrapper" @click="onToTeamDetail(item.bTeamId)">
                <img class="item-body__image" :src="item.bIcon" alt="team">
              </div>
              <p class="item-body__team-name">{{item.bName}}</p>
            </div>
          </div>
          <div class="item-body__right">
            <div class="item-body__right-title">{{item.hotValue}}竞猜热度</div>
            <van-button
              class="item-body__right-button"
              :class="getQuizStatusClass(item.status)"
              :disabled="item.status !== 1"
              @click="onToQuizDetail(item)">
              {{item.status | filterQuizStatus}}
            </van-button>
          </div>
        </div> -->
        <div class="item-game__icon">
          <img class="item-game__image" :src="item.picture" alt="game">
        </div>
        <div class="item-center">
          <div class="item__row">
            <span>{{item.matchName}}</span>
            <span>{{item.matchTime | formatDate('MM-DD HH:mm')}}</span>
          </div>
          <div class="item__row item__row--center">
            <div class="item__team">
              <span class="item__team-name">{{item.aName}}</span>
              <div class="item-team__image-wrapper" @click.stop="onToTeamDetail(item.aTeamId)">
                <img class="item-team__image" :src="item.aIcon" alt="team">
              </div>
            </div>
            <div class="item__split">VS</div>
            <div class="item__team">
              <div class="item-team__image-wrapper" @click.stop="onToTeamDetail(item.bTeamId)">
                <img class="item-team__image" :src="item.bIcon" alt="team">
              </div>
              <span class="item__team-name">{{item.bName}}</span>
            </div>
          </div>
          <div class="item__row">
            <span>{{item.status | filterQuizStatus}}</span>
            <span>{{item.hotValue}}竞猜热度</span>
          </div>
        </div>
        <div class="item-tag">猜</div>
      </div>
    </div>
    <div class="more">
      <div class="more__button" @click="onToCompetition">
        <div class="more__text">查看更多</div>
        <van-icon class="more__icon" name="plus" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    onToCompetition() {
      this.$router.push('/competition?type=quiz')
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
    onToTeamDetail(id) {
      this.$router.push(`/team-intro?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .hot-list {
    padding: 14px 0;
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
  .item-body__team {
    text-align: center;
  }
  .item-body__team-name {
    padding-top: 2px;
    text-align: center;
    font-size: $font-size-extra-small;
    color: $color-text-primary;
  }
  .item-body__image-wrapper {
    display: inline-block;
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

  .quiz-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .item-game__icon {
    width: 20px;
    height: 20px;
    margin: 0 15px;
  }
  .item-tag {
    padding: 3px 5px;
    border-radius: 3px;
    color: #fff;
    margin: 0 15px;
    background-color: orange;
  }
  .item-game__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-team__image-wrapper {
    display: inline-block;
    width: 44px;
    height: 44px;
  }
  .item-team__image {
    width: 100%;
    height: 100%
  }
  .item-center {
    flex: 1;
  }
  .item__row {
    display: flex;
    justify-content: space-between;
    color: #999;
  }
  .item__row--center {
    margin: 10px 0;
    justify-content: center;
    align-items: center;
  }
  .item__team {
    display: flex;
    align-items: center;
  }
  .item__team-name {
    margin: 0 10px;
    color: #333;
    font-size: 16px;
    font-weight: 700;
  }
  .item__split {
    margin: 0 15px;
    color: orange;
    font-size: 18px;
    font-weight: 700;
  }
</style>
