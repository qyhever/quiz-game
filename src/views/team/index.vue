<template>
  <com-page-navbar-wrapper title="战队列表">
    <div class="team">
      <!-- tab nav区域 -->
      <div class="tab-nav-wrapper">
        <div class="tab-nav__icon-wrapper">
          <img class="com-image" src="@/assets/images/competition/menu-active.png" alt="menu">
        </div>
        <div class="tab-nav">
          <div
            class="tab-nav-item"
            :class="{active: activeNav === item.value}"
            v-for="(item, index) in navs"
            :key="index"
            @click="onNavToggle(item.value)">
            {{item.label}}
          </div>
        </div>
      </div>
      <!-- team -->
      <div class="team-list">
        <div class="team-item" v-for="(item, index) in teams" :key="index" @click="onToIntro">
          <div class="team-item__image-wrapper">
            <img class="com-image" src="@/assets/images/home/team.png" alt="team">
          </div>
          <div class="team-item__footer">BA黑凤梨</div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
export default {
  data() {
    return {
      teams: Array(10).fill(null),
      navs: [
        {label: '热门战队', value: '1'},
        {label: '英雄联盟', value: '2'},
        {label: '王者荣耀', value: '3'},
        {label: '守望先锋', value: '4'}
      ],
      activeNav: '1'
    }
  },
  methods: {
    onToIntro() {
      this.$router.push('/team-intro')
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
    padding: 0 17px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #F5F5F5;
  }
  .tab-nav__icon-wrapper {
    width: 22px;
    height: 22px;
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
      font-size: $font-size-medium;
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
