<template>
  <com-page-navbar-wrapper title="竞猜详情">
    <div class="quiz-detail">
      <van-tabs class="tab" v-model="active" title-active-color="#F95E5F">
        <van-tab title="当前竞猜"></van-tab>
        <van-tab title="相关竞猜"></van-tab>
      </van-tabs>
      <!-- 头部区域 -->
      <div class="quiz-header-wrapper">
        <div class="notice">
          <div class="notice__left">
            <!-- TODO -->
            <img src="@/assets/images/my/user-p1.png" alt="user" class="notice__icon">
            <div class="notice__title">竞豆池{{match.beanNumber}}</div>
          </div>
          <div>{{match.number}}人参与</div>
        </div>
        <div class="quiz-header">
          <div class="quiz-header-top">
            <div class="quiz-header-top__left">
              <div class="quiz-header-top__icon">
                <!-- TODO picture -->
                <img class="quiz-header-top__image" src="@/assets/images/home/gameicon1.png" alt="game">
              </div>
              <div class="quiz-header-top__title">{{match.matchName}}</div>
            </div>
            <div class="quiz-header-top__time">{{match.matchTime | formatDate('MM-DD HH:mm')}}</div>
          </div>
          <div class="quiz-header-body">
            <div class="header__team">
              <div class="header__image-wrapper">
                <!-- TODO aicon -->
                <img class="com-image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="header__team-name">{{match.aName}}</p>
            </div>
            <div class="header__score">
              <div class="header__status">比赛进行中</div>
              <div class="header__score-text">
                <span>{{match.aScore}}</span>
                <span>:</span>
                <span>{{match.bScore}}</span>
              </div>
              <!-- ownerStatus 0:未申请/1:已申请/2：已过期 -->
              <van-button
                v-if="isInFourDays(match.matchTime)"
                class="header__button"
                @click="onApplyHouseGroup"
                :disabled="match.ownerStatus !== 0">
                申请房主
              </van-button>
            </div>
            <div class="header__team">
              <div class="header__image-wrapper">
                <!-- TODO bicon -->
                <img class="com-image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="header__team-name">{{match.bName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="stripe"></div>
      <div class="block" v-for="(item, index) in betting" :key="index">
        <div class="block-header">
          <div class="block-header__left">
            <div class="block-header__tag">{{item.className}}</div>
            <div class="block-header__title">{{item.title}}</div>
          </div>
          <!-- TODO -->
          <div class="block-header__right">{{item.endTime | formatDateTime}} 结束</div>
        </div>
        <div class="block-body" v-if="item.bettings && item.bettings.length">
          <div
            class="quiz-item-wrapper"
            :class="{small: item.bettings.length > 2}"
            v-for="(v, i) in item.bettings"
            :key="i"
            @click="show(item, v)">
            <div class="quiz-item">
              <div class="quiz-item__title">{{v.bettingName}}</div>
              <div class="quiz-item__value">赔率{{v.odds}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="com-gap"></div>
      <div class="join-container">
        <div class="join-title">最新参与</div>
        <div class="join-list">
          <div class="join-row join-row--header">
            <div class="join-col">昵称</div>
            <div class="join-col">内容</div>
            <div class="join-col">时间</div>
            <div class="join-col">竞豆</div>
          </div>
          <div class="join-row" v-for="(item, index) in join" :key="index">
            <div class="join-col join-col--name">{{item.nickname}}</div>
            <div class="join-col join-col--result">{{item.bettingName}}</div>
            <div class="join-col join-col--time">{{item.createTime | formatDate('MM-DD HH:mm')}}</div>
            <div class="join-col join-col--bean">{{item.bean}}</div>
          </div>
        </div>
      </div>
      <div class="footer" v-if="user.id">
        <div class="footer__left">
          <img v-if="user.avatar" :src="user.avatar" alt="avatar" class="footer__avatar">
          <img v-else src="@/assets/images/promote/avatar.png" alt="avatar" class="footer__avatar">
          <div class="footer__name">{{user.nickname}}</div>
        </div>
        <div class="footer__right">
          <div class="footer__right-text">{{user.bean}}</div>
          <img class="footer__right-icon" src="@/assets/images/my/user-p1.png" alt="bean">
        </div>
      </div>
      <!-- popup -->
      <van-popup class="popup" v-model="visible" position="bottom">
        <div class="close-wrapper">
          <img @click="hide" src="@/assets/images/user/close.png" alt="close" class="popup__icon--close">
        </div>
        <div class="popup-container">
          <div class="popup-header">
            <div class="popup-header__tag">{{currentData.className}}</div>
            <div class="popup__title">{{currentData.title}}</div>
          </div>
          <div class="popup-body">
            <div class="popup__row">
              <div class="popup__col">
                <div class="popup__label">您已选择</div>
                <div class="popup__value popup__value--red">{{currentData.bettingName}}</div>
              </div>
            </div>
            <div class="popup__row">
              <div class="popup__col">
                <div class="popup__label">赔率</div>
                <div class="popup__value">{{currentData.odds}}</div>
              </div>
              <div class="popup__col">
                <div class="popup__label">中奖可赢</div>
                <div class="popup__value">{{winCount}}</div>
              </div>
            </div>
            <div class="popup__row">
              <div class="popup__col">
                <div class="popup__label">剩余竞豆</div>
                <div class="popup__value">{{user.bean}}</div>
              </div>
            </div>
            <van-field
              v-model="count"
              maxlength="12"
              placeholder="请输入投注数量"
              :border="false"
              size="large"
              clearable
            />
            <div class="radio-list">
              <div
                class="radio-item"
                :class="{active: activeRadio === item.value}"
                v-for="(item, index) in radios"
                :key="index"
                @click="onRadioClick(item.value)">
                {{item.label}}
              </div>
            </div>
            <van-button class="popup__button" block @click="onSubmit">确认投注</van-button>
          </div>
        </div>
      </van-popup>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getQuizDetail, bettingQuiz } from '@/api/home'
  import { applyHouseGroup } from '@/api/user'
  export default {
    data() {
      return {
        active: '1',
        visible: false,
        radios: [
          {label: '10', value: '10'},
          {label: '100', value: '100'},
          {label: '1000', value: '1000'},
          {label: '10000', value: '10000'},
          {label: '全部', value: ''}
        ],
        activeRadio: '',
        count: '',
        match: {}, // 赛事
        betting: [], // 押注
        join: [], // 参加
        currentData: {},
        winCount: 0
      }
    },
    watch: {
      count(newVal) {
        if (newVal) {
          this.activeRadio = ''
          const winCount = Number(this.currentData.odds || 0) * Number(newVal)
          this.winCount = winCount.toFixed(2)
        } else {
          this.winCount = 0
        }
      },
      activeRadio(newVal) {
        if (newVal) {
          this.count = ''
          const winCount = Number(this.currentData.odds || 0) * Number(newVal)
          this.winCount = winCount.toFixed(2)
        } else {
          this.winCount = 0
        }
      }
    },
    computed: {
      ...mapGetters(['user', 'token'])
    },
    mounted() {
      console.log(this.isInFourDays('2020-03-28 22:43'))
      if (!this.$route.query.id || !this.$route.query.matchInfoId) {
        this.$router.back()
      } else {
        this.query()
        this.radios = this.radios.map(item => {
          if (item.value === '') {
            return {
              ...item,
              value: this.user.bean
            }
          }
          return item
        })
        this.activeRadio = this.user.bean
      }
    },
    methods: {
      async query() {
        try {
          const res = await getQuizDetail(this.$route.query.id, this.$route.query.matchInfoId)
          const data = res.data || {}
          this.match = data.match || {}
          this.betting = data.betting || []
          this.join = (data.join || []).filter(Boolean)
        } catch (err) {
          console.log(err)
        }
      },
      show(data, item) {
        this.visible = true
        this.currentData = Object.assign({}, data, item)
      },
      hide() {
        this.visible = false
      },
      onRadioClick(value) {
        this.activeRadio = value
      },
      async onApplyHouseGroup() {
        try {
          const res = await applyHouseGroup(this.$route.query.matchInfoId)
          console.log(res)
          this.$toast.success({
            mask: true,
            forbidClick: true,
            message: '申请成功'
          })
          this.match.ownerStatus = 1
        } catch (err) {
          console.log(err)
        }
      },
      async onSubmit() {
        if (!this.token) {
          this.$router.push('/login')
          return
        }
        try {
          const bean = this.count ? this.count : this.activeRadio
          await bettingQuiz({
            matchInfoId: this.$route.query.matchInfoId,
            bettingId: this.currentData.bettingId,
            bean: Number(bean)
          })
          this.$toast.success({
            mask: true,
            forbidClick: true,
            message: '投注成功'
          })
          setTimeout(() => {
            this.$router.back()
          }, 2000)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quiz-detail {
    height: 100%;
    overflow-y: auto;
  }
  .tab {
    /deep/ .van-tabs__line {
      background-color: #F95E5F;
    }
  }
  .quiz-header-wrapper {
    padding-top: 15px;
    background-color: #1D4D87;
  }
  .notice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 91.5%;
    height: 32px;
    padding: 0 15px;
    margin: 0 auto 15px;
    background-color: #FFF5E7;
    border-radius: 4px;
    color: #FFA31F;
    font-size: $font-size-extra-small;
  }
  .notice__left {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .notice__icon {
    width: 22px;
    height: 22px;
    margin-right: 9px;
  }
  .quiz-header-top {
    height: 32px;
    padding-left: 21px;
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $font-size-extra-small;
    color: #fff;
  }
  .quiz-header-top__left {
    display: flex;
    align-items: center;
  }
  .quiz-header-top__title {
    margin-left: 13px;
  }
  .quiz-header-top__icon {
    width: 20px;
    height: 20px;
  }
  .quiz-header-top__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .quiz-header-body {
    padding: 10px 5.33%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header__image-wrapper {
    width: 75px;
    height: 75px;
  }
  .header__team-name {
    padding-top: 8px;
    text-align: center;
    color: #fff;
  }
  .header__status {
    color: #FFA31F;
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
    height: 24px;
    line-height: 22px;
    background-color: #FFA31F;
    border-color: #FFA31F;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
  .stripe {
    height: 8px;
    background: url("~@/assets/images/competition/stripe.png");
    background-size: cover;
  }
  .block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px 15px;
    font-size: $font-size-extra-small;
  }
  .block-header__left {
    display: flex;
    align-items: center;
  }
  .block-header__tag {
    display: flex;
    align-items: center;
    height: 22px;
    line-height: 22px;
    margin-right: 8px;
    padding: 0 15px;
    background-color: #FF4F4F;
    color: #fff;
    text-align: center;
  }
  .block-header__title {
    color: #4D4D4D;
    font-size: $font-size-base;
    font-weight: 700;
  }
  .block-header__right {
    color: #FF4F4F;
  }
  .block-body {
    padding-left: rem2px(32);
    font-size: 0;
  }
  .quiz-item-wrapper {
    display: inline-block;
    height: rem2px(120);
    width: 45.68%;
    margin-right: rem2px(30);
    margin-bottom: rem2px(30);
    background-color: #FFEBEB;
    border: 2px solid #FF4F4F;
    border-radius: 2px;
    &.small {
      width: 28.8%;
    }
  }
  .quiz-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: $font-size-base;
  }
  .quiz-item__value {
    padding-top: 8px;
    color: #FFA31F;
    font-weight: $font-size-extra-small;
  }
  .join-title {
    padding: 15px;
    font-weight: 700;
  }
  .join-container {
    padding-bottom: 60px;
  }
  .join-row {
    display: flex;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: $font-size-extra-small;
    &.join-row--header {
      background-color: #FFEBEB;
      border: 1px solid #FF4F4F;
    }
    .join-col {
      flex: 1;
      &.join-col--name {
        color: #4D4D4D;
      }
      &.join-col--result {
        font-weight: 700;
      }
      &.join-col--name {
        color: #808080;
      }
      &.join-col--name {
        color: #FF4F4F;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 16px;
    background-color: #1D4D87;
  }
  .footer__left, .footer__right {
    display: flex;
    align-items: center;
    font-size: $font-size-medium;
  }
  .footer__avatar {
    width: 41px;
    height: 41px;
  }
  .footer__name {
    margin-left: 15px;
    color: #fff;
  }
  .footer__right-text {
    margin-right: 10px;
    color: #FFC43C;
    font-weight: 700;
  }
  .footer__right-icon {
    width: 27px;
    height: 27px;
  }
  .close-wrapper {
    padding-bottom: 45px;
    text-align: center;
  }
  .popup {
    background-color: transparent;
    overflow-y: inherit;
    overflow-y: initial;
  }
  .popup__icon--close {
    width: 32px;
    height: 32px;
  }
  .popup-container {
    background-color: #fff;
    /deep/ .van-cell {
      height: 42px;
      border: 1px solid #D9D9D9;
      border-radius: 21px;
      .van-field__control {
        text-align: center;
      }
    }
  }
  .popup-header {
    display: flex;
    align-items: center;
    height: 36px;
    padding-left: 15px;
    background-color: #FF4F4F;
    color: #fff;
  }
  .popup-header__tag {
    height: 22px;
    line-height: 22px;
    padding: 0 15px;
    border: 1px solid #fff;
    border-radius: 2px;
    text-align: center;
    font-size: $font-size-extra-small;
  }
  .popup__title {
    margin-left: 8px;
    font-weight: 700;
  }
  .popup-body {
    padding: 16px 16px 48px;
  }
  .popup__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
  }
  .popup__col {
    display: flex;
    align-items: center;
  }
  .popup__label {
    padding-right: 16px;
    color: #4D4D4D;
    font-weight: 700;
  }
  .popup__value {
    color: #F8A042;
    font-weight: 700;
  }
  .popup__value--red {
    color: #FF4F4F;
  }
  .radio-list {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .radio-item {
    flex: 1;
    margin-right: 16px;
    background-color: #FFDFDF;
    border-radius: 5px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    &:last-of-type {
      margin-right: 0;
    }
    &.active {
      background-color: #FF4F4F;
      color: #fff;
    }
  }
  .popup__button {
    height: 36px;
    line-height: 34px;
    background-color: #FF4F4F;
    border: 0;
    border-radius: 5px;
    color: #fff;
  }
</style>
