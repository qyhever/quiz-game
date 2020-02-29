<template>
  <div class="app-wrapper">
    <div class="navbar" v-if="navbarVisible" @touchmove.stop.prevent>
      <div class="navbar__left">
        <slot name="navbarLeft"></slot>
      </div>
      <div class="navbar__right">
        <slot name="navbarRight"></slot>
      </div>
      <div class="navbar__title" v-if="navbarTitleVisible">{{navbarTitle}}</div>
    </div>
    <div class="main-wrapper" :class="{'has-navbar': navbarVisible}">
      <div class="main">
        <slot></slot>
      </div>
    </div>
    <div class="tabbar" @touchmove.stop.prevent>
      <router-link
        class="tabbar-item"
        v-for="item in tabbars"
        :key="item.path"
        :to="item.path">
        <div class="tabbar-item__image-wrapper">
          <img
            class="tabbar-item__image"
            :src="getTabbarItemIconPath(item)"
            alt="加载失败" :title="item.title">
        </div>
        <p class="tabbar-item__title">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navbarTitleVisible: {
      type: Boolean,
      default: true
    },
    navTitle: {
      type: String
    },
    navbarVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabbars: [
        {
          path: '/home',
          icon: 'home',
          title: '首页'
        },
        {
          path: '/competition',
          icon: 'competition',
          title: '赛事'
        },
        {
          path: '/mall',
          icon: 'mall',
          title: '商城'
        },
        {
          path: '/circle',
          icon: 'circle',
          title: '圈子'
        },
        {
          path: '/my',
          icon: 'my',
          title: '我的'
        }
      ]
    }
  },
  computed: {
    navbarTitle() {
      if (this.navTitle) {
        return this.navTitle
      }
      const currentTabbar = this.tabbars.find(item => item.path === this.$route.path)
      if (currentTabbar) {
        return currentTabbar.title
      }
      return ''
    }
  },
  methods: {
    getTabbarItemIconPath({path, icon}) {
      const iconName = this.$route.path === path ? `${icon}-active` : icon
      return require(`@/assets/images/tabbar/${iconName}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main-wrapper {
    // flex: 1;
    // padding-top: 0;
    // padding-bottom: $footer-height;
    // overflow: hidden;
    position: absolute;
    top: 0;
    bottom: $footer-height;
    width: 100%;
    overflow: hidden;
    &.has-navbar {
      // padding-top: $header-height;
      top: $header-height;
    }
  }
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    // overflow-y: auto;
    // -webkit-overflow-scrolling: touch;
    overflow: hidden;
  }
  .navbar {
    @include limit-width();
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 44px;
    background: url("~@/assets/images/navbar.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: $font-size-medium;
  }
  .navbar__left {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
  }
  .navbar__right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 16px;
  }
  .tabbar {
    @include limit-width();
    z-index: 99;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    background-color: #fff;
    border-top: 4px solid $color-page-bg;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tabbar-item {
    padding: 0 14px;
    .tabbar-item__image-wrapper {
      width: 24px;
      height: 24px;
      margin-bottom: 4px;
      .tabbar-item__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .tabbar-item__title {
      font-size: $font-size-extra-small;
      color: $color-text-secondary;
    }
    &.router-link-active {
      .tabbar-item__image-wrapper {
        animation: zoom 0.4s;
      }
      .tabbar-item__title {
        color: #FF6666;
      }
    }
  }
  @keyframes zoom {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
