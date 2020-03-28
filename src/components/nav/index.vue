<template>
  <div class="nav" :class="{'has-slider': slider}">
    <div
      class="nav-item"
      :class="{active: value === item[options.value]}"
      v-for="(item, index) in navs"
      :key="index"
      @click="onNavToggle(item[options.value], $event)">
      {{item[options.label]}}
    </div>
    <div class="nav-slider" :style="sliderStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    navs: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value'
      })
    },
    slider: {
      type: Boolean,
      default: false
    },
    lineWidth: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sliderStyle: {}
    }
  },
  mounted() {
    if (this.slider) {
      const navEl = document.querySelector('.nav .nav-item')
      this.sliderStyle = {
        width: this.lineWidth || (navEl.clientWidth + 'px')
      }
    }
  },
  methods: {
    onNavToggle(value, event) {
      this.$emit('input', value)
      if (this.slider) {
        this.$nextTick(() => {
          const { offsetLeft, clientWidth } = event.target
          this.sliderStyle = {
            width: this.lineWidth || (clientWidth + 'px'),
            transition: 'transform 0.2s linear 0s',
            transform: `translateX(${offsetLeft}px) translateZ(0px)`
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    position: relative;
    height: 40px;
    display: flex;
    &.has-slider {
      .nav-item:after {
        background-color: transparent;
      }
    }
  }
  .nav-item {
    position: relative;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size .15s;
    font-size: $font-size-extra-small;
    color: $color-text-secondary;
    &.active {
      color: #000;
      // font-size: $font-size-base;
      font-weight: 700;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      margin: 0 -2px;
      transition: width .2s;
      background-color: #F95E5F;
    }
  }
  .nav-slider {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: #F95E5F;
  }
</style>
