<template>
  <div>
    <com-block-header title="热门竞猜" @click-right="onToCompetition"/>
    <div class="hot-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item-header">
          <div class="item-header__left">
            <div class="item-header__icon">
              <img class="item-header__image" :src="require('@/assets/images/home/gameicon1.png')" alt="game">
            </div>
            <div class="item-header__title">{{item.matchName}}</div>
          </div>
          <div class="item-header__time">{{item.matchTime | formatDate('MM-DD HH:mm')}}</div>
        </div>
        <div class="item-body">
          <div class="item-body__left">
            <div class="item-body__team">
              <div class="item-body__image-wrapper" @click="onToTeamDetail(item.aTeamId)">
                <!-- TODO aicon 1001.PNG -->
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
              <div class="item-body__image-wrapper" @click="onToTeamDetail(item.bTeamId)">
                <!-- TODO bicon 114.PNG -->
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
