<template>
  <div class="bean_content">
    <div class="bean_message">
      <p>{{item.describe}}</p>
      <p>{{item.createTime | formatDate}}</p>
    </div>
    <div class="bean_count" :class="item.status==1?'add':'reduce'">{{item.status==1?'+100':'-100'}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.bean_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(235, 235, 235, 1);
  .bean_message {
    p {
      &:nth-of-type(1) {
        margin-bottom: 0.15rem;
        font-size: 0.32rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
      }
      &:nth-of-type(2) {
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(166, 166, 166, 1);
      }
    }
  }
  .bean_count {
    font-size: 0.4rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  .add {
    color: rgba(255, 196, 60, 1);
  }
  .reduce {
    color: rgba(126, 172, 255, 1);
  }
}
</style>

