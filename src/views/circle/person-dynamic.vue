<template>
  <com-page-navbar-wrapper title="个人动态">
    <div class="person-dynamic">
      <div class="header">
        <div class="title">张三的全职</div>
        <van-button class="follow-button" @click="onFollow">关注</van-button>
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="item-header">
            <div class="item__title">张三</div>
            <div class="item-header__right">
              <div>2020年4月2日</div>
              <div>18:08</div>
            </div>
          </div>
          <div class="item-content">
            这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
          </div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
export default {
  data() {
    return {
      list: Array(2).fill({})
    }
  },
  methods: {
    onFollow() {
      console.log('onFollow')
    }
  }
}
</script>

<style lang="scss" scoped>
  .person-dynamic {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    .title {
      font-size: $font-size-large;
    }
  }
  .follow-button {
    margin-left: 12px;
    background-color: #F54E65;
    border: 0;
    border-radius: 5px;
    height: 32px;
    line-height: 30px;
    color: #fff;
    &.van-button--disabled {
      background-color: #D9D9D9;
    }
  }
  .item {
    padding: 15px;
  }
  .item-header {
    display: flex;
    align-items: center;
  }
  .item__title {
    font-size: $font-size-medium;
  }
  .item-header__right {
    margin-left: 12px;
    > div {
      padding-bottom: 5px;
      color: #b3b3b3;
    }
  }
</style>
