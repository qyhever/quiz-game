<template>
  <com-page-tabbar-wrapper>
    <van-nav-bar class="circle-navbar" fixed border title="圈子">
    <div class="circle-navbar__right" slot="right">
      <div class="image-wrapper" @click="onSearch">
        <img class="image" src="@/assets/images/circle/search.png" alt="搜索">
      </div>
      <div class="image-wrapper" @click="onWrite">
        <img class="image" src="@/assets/images/circle/write.png" alt="搜索">
      </div>
    </div>
    </van-nav-bar>
  </com-page-tabbar-wrapper>
</template>

<script>
export default {
  methods: {
    onSearch() {
      console.log('onSearch')
    },
    onWrite() {
      console.log('onWrite')
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle-navbar {
    height: $header-height;
    line-height: $header-height;
    &:after {
      border-color: #e6e6e6;
    }
  }
  .circle-navbar__right {
    display: flex;
    .image-wrapper {
      @include extend-click();
    }
    .image-wrapper + .image-wrapper {
      margin-left: 22px;
    }
    .image {
      width: 22px;
      height: 22px;
    }
  }
</style>
