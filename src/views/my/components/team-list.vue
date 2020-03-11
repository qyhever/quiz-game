<template>
  <div class="team_content">
    <img src="../../../assets/images/icon_g0131.png" alt />
    <div class="team_name van-multi-ellipsis--l2">{{item.combatTeamName}}</div>
    <span class="team_count">12</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.team_content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.31rem 0;
  border-bottom: 1px solid rgba(235, 235, 235, 1);
  img {
    width: 1.32rem;
    height: 1.32rem;
  }
  .team_name {
    position: absolute;
    left: 1.8rem;
    width: 3.5rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  .team_count {
    background: rgba(249, 94, 95, 1);
    border-radius: 0.18rem;
    padding: 0.1rem 0.12rem;
    font-size: 0.2rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
