<template>
  <div>
    <com-block-header title="热门竞猜" @click-right="onToCompetition"/>
    <div class="hot-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item-header">
          <div class="item-header__left">
            <div class="item-header__icon">
              <img class="item-header__image" :src="require(`@/assets/images/home/gameicon${item.picture}`)" alt="game">
            </div>
            <div class="item-header__title">{{item.matchName}}</div>
          </div>
          <div class="item-header__time">{{item.matchTime | formatDate('MM-DD HH:mm')}}</div>
        </div>
        <div class="item-body">
          <div class="item-body__left">
            <div class="item-body__team">
              <div class="item-body__image-wrapper" @click="onToTeamDetail(item.ateamId)">
                <!-- TODO aicon 1001.PNG -->
                <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item-body__team-name">{{item.aname}}</p>
            </div>
            <div class="item-body__score">
              <span>{{item.ascore}}</span>
              <span>:</span>
              <span>{{item.bscore}}</span>
            </div>
            <div class="item-body__team">
              <div class="item-body__image-wrapper" @click="onToTeamDetail(item.bteamId)">
                <!-- TODO bicon 114.PNG -->
                <img class="item-body__image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item-body__team-name">{{item.bname}}</p>
            </div>
          </div>
          <div class="item-body__right">
            <div class="item-body__right-title">{{item.beanNumber}}人竞猜</div>
            <!-- TODO status -->
            <!-- class settlement end -->
            <van-button class="item-body__right-button" @click="onToQuizDetail(item)">参与竞猜</van-button>
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
export default {
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    onToCompetition() {
      this.$router.push('/competition?type=quiz')
    },
    onToQuizDetail({id}) {
      this.$router.push(`/quiz-detail?id=${id}`)
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
