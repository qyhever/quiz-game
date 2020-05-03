<template>
  <van-popup
    v-model="visible"
    position="bottom"
  >
    <van-picker
      ref="picker"
      :columns="columns"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </van-popup>
</template>

<script>
  export default {
    props: {
      // value: {
      //   required: true
      // }
    },
    data() {
      return {
        visible: false,
        columns: []
      }
    },
    methods: {
      show(columns, value) {
        this.columns = columns
        this.visible = true
        setTimeout(() => {
          if (value) {
            const defaultIndex = columns.findIndex(v => v.value === value)
            this.$refs.picker.setColumnIndex(0, defaultIndex)
          }
        }, 20)
      },
      hide() {
        this.visible = false
      }
    }
  }
</script>
