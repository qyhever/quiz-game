<template>
  <com-page-tabbar-wrapper navbar-visible>
    <div class="competition">
      <div class="nav">
        <div
          class="nav-item"
          :class="{active: currentNav === item.value}"
          v-for="(item, index) in navs"
          :key="index"
          @click="onNavToggle(item.value)">
          {{item.label}}
        </div>
      </div>
      <component :is="currentNav"></component>
    </div>
  </com-page-tabbar-wrapper>
</template>

<script>
import Competition from './competition'
import Quiz from './quiz'
export default {
  components: {
    Competition,
    Quiz
  },
  data() {
    return {
      navs: [
        {label: '赛事列表', value: 'competition'},
        {label: '竞猜列表', value: 'quiz'}
      ],
      currentNav: 'competition'
    }
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .competition {
    height: 100%;
    overflow-y: auto;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    padding: 0 16px;
    .nav-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      background-color: #fff;
      border: 1px solid #1D4D87;
      color: #808080;
      &:first-of-type {
        border-radius: 4px 0 0 4px;
        border-right: 0;
      }
      &:last-of-type {
        border-radius: 0 4px 4px 0;
        border-left: 0;
      }
      &.active {
        background-color: #1D4D87;
        border-color: #1D4D87;
        color: #fff;
        font-size: $font-size-medium;
        font-weight: 700;
      }
    }
  }
</style>
