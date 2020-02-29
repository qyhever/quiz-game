<template>
  <van-popup
    v-model="visible"
    position="bottom"
  >
    <van-datetime-picker
      :value="value"
      :type="type"
      @confirm="onDateConfirm"
      @cancel="hide"
    />
  </van-popup>
</template>

<script>
  export default {
    props: {
      value: {
        required: true
      },
      type: {
        type: String,
        default: 'date'
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      },
      onDateConfirm(val) {
        this.visible = false
        this.$emit('input', val)
      }
    }
  }
</script>
