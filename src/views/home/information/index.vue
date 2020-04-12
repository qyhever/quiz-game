<template>
  <com-page-navbar-wrapper title="资讯列表">
    <div class="info-container">
      <ul class="tab__nav" @touchmove.prevent.stop>
        <li
          class="tab__nav-item"
          :class="{active: activeNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)">
          {{item.label}}  
        </li>
      </ul>
      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="queryInfoList" ref="scroll" empty>
            <template slot-scope="{list}">
              <div class="item" v-for="(item, index) in list" :key="index" @click="onToDetail(item)">
                <div class="item__image-wrapper">
                  <!-- TODO picture -->
                  <img class="item__image" src="@/assets/images/home/information1.png" alt="information">
                </div>
                <div class="item__body">
                  <div class="item__title">{{item.title}}</div>
                  <div class="item__body-footer">
                    <div class="item__date">日期：{{item.releaseTime | formatDate('MM-DD')}}</div>
                  </div>
                </div>
              </div>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
  import { getInfoClasses, getInfoList } from '@/api/home'
  export default {
    data() {
      return {
        navs: [
          {label: '全部', value: ''}
        ],
        activeNav: ''
      }
    },
    watch: {
      activeNav() {
        this.$refs.scroll.onPullingDown()
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      onNavToggle(value) {
        this.activeNav = value
      },
      onToDetail({id}) {
        this.$router.push(`/information-detail?id=${id}`)
      },
      query() {
        this.queryInfoClasses()
      },
      async queryInfoClasses() {
        try {
          const res = await getInfoClasses()
          const list = res.rows || []
          this.navs = this.navs.concat(list.map(v => ({
            label: v.className,
            value: v.id
          })))
        } catch (err) {
          console.log(err)
        }
      },
      async queryInfoList({ page, count }) {
        try {
          const res = await getInfoList({
            classId: this.activeNav,
            pageNum: page,
            pageSize: count
          })
          return res.rows || []
        } catch (err) {
          console.log(err)
          throw err
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .tab__nav {
    display: flex;
    height: 44px;
    border-bottom: 6px solid $color-page-bg;
    padding: 0 22px;
  }
  .tab__nav-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    color: $color-text-secondary;
    font-size: $font-size-extra-small;
    &:after {
      display: none;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #F95E5F;
    }
    &.active {
      color: #000;
      font-size: $font-size-base;
      font-weight: 700;
      &:after {
        display: block;
      }
    }
  }
  .tab__panel-wrapper {
    flex: 1;
    overflow: hidden;
  }
  .tab__panel {
    height: 100%;
    padding: 12px 21px 0;
    overflow: hidden;
  }
  .item {
    display: flex;
    padding-bottom: 15px;
  }
  .item__image-wrapper {
    width: 80px;
    height: 51px;
  }
  .item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__body {
    flex: 1;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: $font-size-extra-small;
  }
  .item__title {
    color: $color-text-primary;
    line-height: 18px;
  }
  .item__body-footer {
    display: flex;
    justify-content: flex-end;
  }
  .item__date {
    color: #B3B3B3;
  }
</style>
