<template>
  <com-page-tabbar-wrapper navbar-visible>
    <div v-for="(item, index) in list" :key="index">内容{{index+1}}</div>
  </com-page-tabbar-wrapper>
</template>

<script>
export default {
  data() {
    return {
      list: Array(150).fill(null)
    }
  }
}
</script>
