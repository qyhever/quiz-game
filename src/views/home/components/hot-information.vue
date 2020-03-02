<template>
  <div>
    <com-block-header title="热门资讯" control-text="更多" @click-right="onToInformation"/>
    <div class="info-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item__cover-wrapper">
          <img class="item__cover" src="@/assets/images/home/information.png" alt="cover">
        </div>
        <div class="item__content">
          <div class="item__title">2019MDL 成都  Major 决战在即  英雄传承共见证！</div>
          <div class="item__content-footer">
            <div class="item__tag">资讯</div>
            <div class="item__date">日期：11-22</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: Array(5).fill(null)
    }
  },
  methods: {
    onToInformation() {
      this.$router.push('/information')
    }
  }
}
</script>

<style lang="scss" scoped>
  .info-list {
    padding: 20px;
  }
  .item {
    display: flex;
    padding-bottom: 15px;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  .item__cover-wrapper {
    width: 80px;
    height: 51px;
  }
  .item__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
  .item__title {
    line-height: 18px;
    color: $color-text-primary;
    font-size: $font-size-extra-small;
  }
  .item__content-footer {
    display: flex;
    align-items: center;
  }
  .item__tag {
    display: flex;
    align-items: center;
    height: 16px;
    padding: 0 6px;
    border: 1px solid #176BFF;
    border-radius: 4px;
    color: #176BFF;
    font-size: $font-size-extra-small;
    transform: scale(0.8);
  }
  .item__date {
    // transform: scale(0.8);
    margin-left: 9px;
    color: #B3B3B3;
    font-size: $font-size-extra-small;
  }
</style>
