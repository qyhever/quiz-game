<template>
  <cube-scroll
    class="cube-scroll"
    ref="scrollContainer"
    :data="list"
    :options="bsOptions"
    :scrollEvents="['scroll']"
    @pulling-down="onPullingDown"
    @scroll="onScroll">
      <slot :list="list"></slot>
      <div class="empty-wrapper" v-if="!loading && !list.length">
        <slot name="empty">
          <div class="empty-center">
            <img class="empty-image" :src="emptyImage" alt="empty">
            <div class="empty-text">{{emptyText}}</div>
          </div>
        </slot>
      </div>
  </cube-scroll>
</template>

<script>
import { addClass, removeClass } from '@/utils/dom'
export default {
  name: 'com-loadmore',
  props: {
    fetchData: {
      type: Function
    },
    autoQuery: {
      type: Boolean,
      default: true
    },
    backTop: {
      type: Boolean,
      default: true
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    emptyImage: {
      default: require('@/assets/images/empty.png')
    }
  },
  data() {
    return {
      loading: false,
      list: [],
      bsOptions: {
        pullDownRefresh: {
          threshold: 90,
          stopTime: 1000,
          txt: '刷新成功'
        }
      }
    }
  },
  mounted() {
    if (this.autoQuery) {
      this.query()
    }
    if (this.backTop) {
      this.$nextTick(() => {
        this.createBackTop()
      })
    }
  },
  activated() {
    this.$refs.scrollContainer.refresh()
  },
  beforeDestroy() {
    this.backTopDom.remove()
  },
  methods: {
    onPullingDown() {
      this.query()
    },
    query() {
      this.loading = true
      this.fetchData().then(list => {
        this.loading = false
        this.list = list
        // this.$nextTick(() => {
        //   this.$refs.scrollContainer.refresh()
        // })
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },
    onScroll({y}) {
      if (Math.abs(y) >= 1400) {
        addClass(this.backTopDom, 'show')
      } else {
        removeClass(this.backTopDom, 'show')
      }
    },
    refresh() {
      this.$nextTick(() => {
        this.$refs.scrollContainer.refresh()
      })
    },
    // 创建 返回顶部 按钮
    createBackTop() {
      const backTopDom = document.createElement('div')
      backTopDom.className = 'com-back-top'
      const imgDom = document.createElement('img')
      imgDom.src = require('@/assets/images/back-top.png')
      backTopDom.appendChild(imgDom)
      document.body.appendChild(backTopDom)
      this.backTopDom = backTopDom
      backTopDom.addEventListener('click', () => {
        this.$refs.scrollContainer.scrollTo(0, 0, 500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .cube-scroll {
    /deep/ .cube-pulldown-loaded {
      color: $color-text-secondary;
    }
  }
  .empty-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .empty-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .empty-image {
      // width: 184px;
      // height: 152px;
      width: 114px;
    }
    .empty-text {
      margin-top: 12px;
      color: $color-text-secondary;
      font-size: $font-size-small;
    }
  }
</style>
