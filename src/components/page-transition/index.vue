<template>
  <transition :name="name">
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: 'pageTransition',
    props: {
      name: {
        type: String,
        default: 'move'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .move-enter, .move-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .move-enter-active, .move-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
</style>
