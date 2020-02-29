<template>
  <div class="team-container">
    <com-block-header title="战队列表"/>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(item, index) in gameList" :title="item" :key="index">
        <cube-scroll
          class="scroll"
          ref="scroll"
          direction="horizontal"
          v-for="(team, teamIndex) in teamList"
          :key="teamIndex">
          <div class="item van-hairline--bottom">
            <div class="item__team">
              <div class="item__team-image-wrapper">
                <img class="item__team-image" src="@/assets/images/home/team.png" alt="team">
              </div>
              <p class="item__text">FPX</p>
            </div>
            <div class="item__member-list">
              <div class="member-item" v-for="(member, memberIndex) in memberList" :key="memberIndex">
                <div class="item__team-image-wrapper">
                  <img class="item__team-image" src="@/assets/images/home/member.png" alt="member">
                </div>
                <p class="item__text">中单Doinb</p>
              </div>
            </div>
          </div>
        </cube-scroll>
      </van-tab>
    </van-tabs>
    <div class="more">
      <div class="more__button" @click="onPreviewMore">
        <div class="more__text">查看更多</div>
        <van-icon class="more__icon" name="plus" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      gameList: [
        '英雄联盟',
        '王者荣耀',
        '守望先锋'
      ],
      teamList: Array(3).fill(null),
      memberList: Array(5).fill(null)
    }
  },
  methods: {
    onPreviewMore() {
      console.log('onPreviewMore')
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
