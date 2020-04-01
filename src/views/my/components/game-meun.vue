<template>
  <div class="game_meun">
    <p>全部游戏</p>
    <ul>
      <li
        :class="{active:currentNav==index}"
        v-for="(item,index) in meunList"
        :key="index"
        @click="onNavToggle(index)"
      >
        <img :src="item.gameIcon" alt />
        <span>{{item.gameName}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentNav: 0
    };
  },
  computed: {
    meunList() {
      return JSON.parse(window.sessionStorage.getItem("gameList"));
    }
  },
  methods: {
    onNavToggle(value) {
      this.currentNav = value;
      this.$emit("sendData", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.game_meun {
  p {
    padding: 0.6rem 0 0.3rem 0.33rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    &::before {
      display: inline-block;
      content: "";
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.5rem;
      background: url("../../../assets/images/match/all.png") no-repeat
        center/100%;
      vertical-align: bottom;
    }
  }
  ul {
    li {
      padding: 0.18rem 0.34rem;
      font-size: 0.28rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(77, 77, 77, 1);
      img {
        width: 0.36rem;
        height: 0.36rem;
        margin-right: 0.34rem;
      }
      span {
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
      }
    }
    .active {
      background: rgba(249, 94, 95, 1);
      span {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
