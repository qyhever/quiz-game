<template>
  <div>
    <com-block-header title="热门赛事" control-text="更多" @click-right="onToCompetition"/>
    <div class="competition-list">
      <div class="item" v-for="(item, index) in list" :key="index" @click="onToCompetitionDetail(item)">
        <div class="item__image-wrapper">
          <img class="item__image" :src="item.picture" alt="competition">
        </div>
        <div class="item__footer">
          <div class="item__text">{{item.matchName}}</div>
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
    onToCompetition() {
      this.$router.push('/competition?type=competition')
    },
    onToCompetitionDetail({id}) {
      this.$router.push(`/competition-intro?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .competition-list {
    padding: 22px 7px 10px 22px;
    font-size: 0;
  }
  .item {
    position: relative;
    display: inline-block;
    width: 46%;
    height: 0;
    padding-bottom: 26.3%;
    margin-right: 4%;
    margin-bottom: 4%;
  }
  .item__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__footer {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 18px;
    background:rgba(0, 0, 0, 0.5);
    line-height: 18px;
    text-align: center;
  }
  .item__text {
    color: #fff;
    font-size: $font-size-extra-small;
  }
</style>
