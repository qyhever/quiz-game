<template>
  <div class="player_content">
     <img src="../../../assets/images/player-touxiang.png" alt="">
     <div class="player_message van-multi-ellipsis--l2">
         <p>{{item.playerName}}</p>
         <p>QGhappy战队现役选手</p>
     </div>
     <span class="player_count">12</span>
  </div>
</template>

<script>
export default {
    props: {
         item: Object
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .player_content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .31rem 0; 
        border-bottom: 1px solid rgba(235,235,235,1);
        img {
            width: 1.32rem;
            height: 1.32rem;
        }
        .player_message {
            position: absolute;
            left: 1.8rem;
            width: 3.5rem;
            font-size:.32rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            p {
                &:nth-of-type(1){
                    margin-bottom: .26rem;
                    font-size:.32rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
                 &:nth-of-type(2){
                    font-size:.24rem;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(128,128,128,1);
                }
            }
        }
        .player_count {
            background:rgba(249,94,95,1);
            border-radius:.18rem;
            padding: .1rem .12rem;
            font-size:.2rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
    }
</style>
