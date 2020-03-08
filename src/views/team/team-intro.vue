<template>
  <com-page-navbar-wrapper title="战队介绍">
    <div class="intro">
      <div class="intro-header">
        <div class="header__image-wrapper">
          <img class="com-image" src="@/assets/images/home/team.png" alt="team">
        </div>
        <div class="header__content">
          <div class="header__title">EDG</div>
          <div class="header__row">全名：EdwardGaming</div>
          <div class="header__row">游戏：英雄联盟</div>
          <div class="header__row">热度：536823</div>
        </div>
      </div>
      <div class="intro__title">
        <div class="intro__title-square"></div>
        <div class="intro__title-text">战队介绍</div>
      </div>
      <div class="intro__desc">
        EdwardGaming，LPL联盟成员之一，是中国最受欢迎、表现最为出色的队伍之一。2017年LPL夏季赛得胜之后，他们已经拿到了五届LPL冠军，连续五次捧起德玛西亚杯，从而荣获了“五冠王”的美称。同时，他们也是全球总决赛常客。2015季中冠军赛上，他们还击败了SKTelecomT1，成为除了SKT之外唯一一支夺得季中冠军赛奖杯的战队。
       EDG是中国人最最耳熟能详的战队之一。他们在2014年取得LPL春季赛、夏季赛冠军，在2015年取得LPL春季赛冠军、MSI季中邀请赛冠军。在2016年取得LPL夏季赛冠军，德玛西亚杯五连冠。是一只强大的老牌电竞战队。                   
      </div>
      <div class="intro__title">
        <div class="intro__title-square"></div>
        <div class="intro__title-text">队员介绍</div>
      </div>
      <div class="member-wrapper">
        <cube-scroll
          class="scroll"
          ref="scroll"
          direction="horizontal">
          <div class="member-list">
            <div
              class="member-item"
              :class="{active: active === memberIndex}"
              v-for="(member, memberIndex) in memberList"
              :key="memberIndex"
              @click="onMemberToggle(member, memberIndex, $event)">
              <div class="item__image-wrapper">
                <img class="com-image" src="@/assets/images/home/member.png" alt="member">
              </div>
              <p class="item__text">中单Doinb</p>
            </div>
          </div>
        </cube-scroll>
        <div class="member-padding" style="height: 10px; background: #fff"></div>
      </div>
      <div class="intro__desc intro__desc--member">
        外号厂长、诺导。中国知名电子竞技选手，EDG战队打野选手。2012年8月加入WE，夺得中国LOL首个世界冠军，并帮助战队一年内获得十冠，并成为2013年全明星赛成员，从此声名大噪。2014年加入广州EDG电子竞技俱乐部，帮助战队迅速成长为国内顶尖强队。
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
export default {
  data() {
    return {
      memberList: Array(12).fill(null),
      active: 0
    }
  },
  methods: {
    onMemberToggle(member, memberIndex, event) {
      console.log(member, event.target.offsetLeft)
      this.active = memberIndex
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
    width: 95px;
    height: 95px;
    padding-top: 7px;
    background-color: #fff;
    border: 5px solid #ECECEC;
    border-radius: 5px;
    font-size: $font-size-extra-small;
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
