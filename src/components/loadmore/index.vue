<template>
  <cube-scroll
    class="cube-scroll"
    ref="scrollContainer"
    :data="list"
    :options="options"
    :scrollEvents="['scroll']"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp"
    @scroll="onScroll">
    <slot :list="list"></slot>
    <div class="weui-loadmore weui-loadmore_line" v-if="allLoaded">
      <span class="weui-loadmore__tips">我是有底线的</span>
    </div>
    <!--<template slot="pulldown" slot-scope="props">-->
      <!--<div-->
        <!--v-if="props.pullDownRefresh"-->
        <!--class="cube-pulldown-wrapper"-->
        <!--:style="props.pullDownStyle">-->
        <!--<div-->
          <!--v-show="props.beforePullDown"-->
          <!--class="before-trigger"-->
          <!--:style="{paddingTop: props.bubbleY + 'px'}">-->
          <!--<span :class="{rotate: props.bubbleY > pullDownRefreshThreshold - 40}">↓</span>-->
        <!--</div>-->
        <!--<div class="after-trigger" v-show="!props.beforePullDown">-->
          <!--<div v-show="props.isPullingDown" class="loading">-->
            <!--<cube-loading></cube-loading>-->
          <!--</div>-->
          <!--<div v-show="!props.isPullingDown" class="text"><span class="refresh-text">更新成功</span></div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</template>-->
  </cube-scroll>
</template>

<script>
  import { addClass, removeClass } from '@/utils/dom'
  import Loading from '../loading'
  export default {
    name: 'cube-loadmore',
    props: {
      params: {
        type: Object,
        default: () => ({})
      },
      fetchData: {
        type: Function,
        required: true
      },
      autoQuery: {
        type: Boolean,
        default: true
      },
      backTop: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        list: [],
        paper: {
          page: 1,
          count: 10
        },
        pullDownRefreshThreshold: 60,
        allLoaded: false,
        options: {
          pullDownRefresh: {
            threshold: 90,
            stopTime: 1000,
            txt: '更新成功'
          },
          pullUpLoad: {
            txt: {
              more: '加载中...',
              noMore: '我是有底线的'
            }
          }
        },
        firstQuery: true
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
    beforeDestroy() {
      if (this.backTopDom) {
        this.backTopDom.remove()
      }
    },
    methods: {
      query() {
        Loading.open()
        this.fetchData(this.paper)
        .then(list => {
          Loading.close()
          if (this.paper.page === 1) {
            this.list = list
            if (!this.firstQuery) {
              this.$refs.scrollContainer.disable()
              setTimeout(() => {
                this.$refs.scrollContainer.enable()
              }, 600)
            }
            if (this.firstQuery) {
              this.firstQuery = false
            }
            // this.$nextTick(() => {
            //   this.$refs.scrollContainer.refresh()
            // })
          } else {
            this.list = this.list.concat(list)
          }
          if (list.length < this.paper.count) {
            this.allLoaded = true
            this.options.pullUpLoad = false
          }
        })
        .catch(err => {
          console.log(err)
          Loading.close()
        })
      },
      onPullingDown() {
        this.paper.page = 1
        // 下拉重置 全部加载完成状态，启用触底加载
        this.allLoaded = false
        this.options.pullUpLoad = {
          txt: {
            more: '加载中...',
            noMore: '我是有底线的'
          }
        }
        this.query()
      },
      onPullingUp() {
        this.paper.page = this.paper.page + 1
        this.query()
      },
      onScroll({y}) {
        if (Math.abs(y) >= 1000) {
          addClass(this.backTopDom, 'show')
        } else {
          removeClass(this.backTopDom, 'show')
        }
      },
      refresh() {
        this.$refs.scrollContainer.refresh()
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
<style lang="less" scoped>
  .cube-scroll {
    /deep/ .cube-pulldown-loaded {
      color: #999;
      font-size: 14px;
    }
    /deep/ .cube-pullup-wrapper .before-trigger {
      color: #999;
      font-size: 14px;
    }
  }
  .cube-pulldown-wrapper {
    .before-trigger  {
      font-size: 30px;
      line-height: 30px;
      align-self: flex-end;
      span {
        display: inline-block;
        transition: all 0.3s;
        color: #666;
        &.rotate {
          transform: rotate(180deg);
        }
      }
    }
    .after-trigger {
      .refresh-text {
        color: grey;
      }
    }
  }
  .weui-loadmore {
    background-color: #fff;
  }
</style>
