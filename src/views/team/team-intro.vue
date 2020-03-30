<template>
  <com-page-navbar-wrapper title="战队介绍">
    <div class="intro">
      <div class="intro-header">
        <div class="header__image-wrapper">
          <img v-if="intro.combatTeamIcon" class="com-image" :src="intro.combatTeamIcon" alt=" ">
        </div>
        <div class="header__content">
          <div class="header__title">{{intro.fullName}}</div>
          <div class="header__row">全名：{{intro.combatTeamName}}</div>
          <div class="header__row">游戏：{{intro.gameName}}</div>
          <div class="header__row">热度：{{intro.calorificValue}}</div>
        </div>
      </div>
      <div class="intro__title">
        <div class="intro__title-square"></div>
        <div class="intro__title-text">战队介绍</div>
      </div>
      <div class="intro__desc">
        {{intro.combatTeamIntroduce}}
      </div>
      <div class="intro__title">
        <div class="intro__title-square"></div>
        <div class="intro__title-text">队员介绍</div>
      </div>
      <div class="member-wrapper" v-if="intro.players && intro.players.length">
        <cube-scroll
          class="scroll"
          ref="scroll"
          direction="horizontal">
          <div class="member-list">
            <div
              class="member-item"
              :class="{active: active === memberIndex}"
              v-for="(member, memberIndex) in intro.players"
              :key="memberIndex"
              @click="onMemberToggle(member, memberIndex, $event)">
              <div class="member-item__inner">
                <div class="item__image-wrapper">
                  <!-- TODO playerPicture -->
                  <img class="com-image" src="@/assets/images/home/member.png" alt="member">
                </div>
                <p class="item__text">{{member.position}}{{member.playerName}}</p>
              </div>
            </div>
          </div>
        </cube-scroll>
        <div class="member-padding" style="height: 10px; background: #fff"></div>
      </div>
      <div class="intro__desc intro__desc--member">
        {{memberIntro}}
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
import { getTeamIntro } from '@/api/home'
export default {
  data() {
    return {
      memberList: Array(12).fill(null),
      active: 0,
      intro: {},
      memberIntro: ''
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
    async query() {
      try {
        const res = await getTeamIntro(this.$route.query.id)
        this.intro = res.data[0] || {}
        const players = this.intro.players || []
        this.memberIntro = players[0] && players[0].introduce
      } catch (err) {
        console.log(err)
      }
    },
    onMemberToggle(member, memberIndex, event) {
      console.log(member, event.target.offsetLeft)
      this.active = memberIndex
      this.memberIntro = member.introduce
    }
  }
}
</script>

<style lang="scss" scoped>
  .intro {
    height: 100%;
    overflow-y: auto;
  }
  .scroll /deep/ .cube-scroll-content {
    display: inline-block;
  }
  .intro__title {
    display: flex;
    align-items: center;
    margin-top: 13px;
    padding: 13px 0;
    .intro__title-square {
      width: 16px;
      height: 16px;
      margin-right: 12px;
      background-color: #F95E5F;
    }
    .intro__title-text {
      color: #F95E5F;
      font-size: $font-size-medium;
      font-weight: 700;
    }
  }
  .intro-header {
    padding: 22px 16px 0 16px;
    display: flex;
  }
  .header__image-wrapper {
    width: 120px;
    height: 120px;
  }
  .header__content {
    flex: 1;
    margin-left: 15px;
  }
  .header__title {
    padding-bottom: 14px;
    font-size: $font-size-large;
    font-weight: 700;
  }
  .header__row {
    padding-bottom: 8px;
  }
  .intro__desc {
    text-indent: 2em;
    padding: 0 16px;
    line-height: 22px;
  }
  .member-wrapper {
    position: relative;
    background-color: #ECECEC;
  }
  .member-list {
    padding: 0 21px;
    white-space: nowrap;
    font-size: 0;
  }
  .member-item {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 120px;
    padding-top: 7px;
    background-color: #fff;
    border: 5px solid #ECECEC;
    border-radius: 50%;
    font-size: $font-size-extra-small;
    .member-item__inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &.active {
      border-color: #F95E5F;
      &:after {
        display: block;
      }
    }
    // &:after {
    //   @include triangle(top, 10px, #F95E5F);
    //   display: none;
    //   content: "";
    //   position: absolute;
    //   left: 50%;
    //   bottom: -20px;
    //   transform: translateX(-50%);
    // }
  }
  .item__image-wrapper {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  .item__text {
    padding-top: 10px;
    text-align: center;
  }
  .intro__desc--member {
    padding-bottom: 50px;
  }
</style>
