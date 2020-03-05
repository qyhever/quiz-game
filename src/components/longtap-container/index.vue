<template>
  <div @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    methods: {
      onTouchstart() {
        this.timer = setTimeout(() => {
          this.$emit('longtap')
        }, 1200)
      },
      onTouchmove() {
        clearTimeout(this.timer)
      },
      onTouchend() {
        clearTimeout(this.timer)
      }
    }
  }
</script>
