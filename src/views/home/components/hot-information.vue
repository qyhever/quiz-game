<template>
  <div>
    <com-block-header title="热门资讯" control-text="更多" @click-right="onToInformation"/>
    <div class="info-list">
      <div class="item" v-for="(item, index) in list" :key="index" @click="onToInformationDetail(item)">
        <div class="item__cover-wrapper">
          <img class="item__cover" :src="getImage(item.picture)" alt="cover" :onerror="onImageError">
        </div>
        <div class="item__content">
          <div class="item__title">{{item.title}}</div>
          <div class="item__content-footer">
            <div class="item__tag" v-if="item.className">{{item.className}}</div>
            <div class="item__date">{{item.releaseTime | formatDate('MM-DD HH:mm')}}</div>
          </div>
        </div>
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
    onToInformation() {
      this.$router.push('/information')
    },
    onToInformationDetail({id}) {
      this.$router.push(`/information-detail?id=${id}`)
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
