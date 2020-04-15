<template>
  <com-page-navbar-wrapper title="个人动态">
    <div class="person-dynamic">
      <div class="header">
        <div class="title">{{personCircle.nickname}}的圈子</div>
        <van-button v-if="personCircle.isFollow === 0" class="follow-button" @click="onFollow">关注</van-button>
        <div v-else class="follow-text">已关注</div>
      </div>
      <div class="list-wrapper">
        <div class="list">
          <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-header">
              <div class="item__avatar-wrapper">
                <img class="item__avatar" :src="item.avatar" alt="avatar">
              </div>
              <div class="item-header__right">
                <div>{{item.publishTime | formatDate('YYYY年MM月DD日')}}</div>
                <div>{{item.publishTime | formatDate('HH:mm')}}</div>
              </div>
            </div>
            <div class="item-content">
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>

<script>
import { mapGetters } from 'vuex'
import { getPersonalCircle, addFollowCircle } from '@/api/circle'
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters(['personCircle'])
  },
  mounted() {
    if (this.personCircle.id) {
      this.query()
    } else {
      this.$router.back()
    }
  },
  methods: {
    async query() {
      try {
        const res = await getPersonalCircle(this.personCircle.id)
        this.list = res.data || []
      } catch (err) {
        console.log(err)
      }
    },
    onFollow() {
      addFollowCircle({ followUserId: this.personCircle.id }).then(() => {
        this.$toast.success({
          forbidClick: true,
          message: "关注成功"
        });
        this.$store.commit('SET_PERSON_CIRCLE', Object.assign({}, this.personCircle, {
          isFollow: 1
        }))
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .person-dynamic {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .list-wrapper {
    flex: 1;
    overflow: hidden;
  }
  .list {
    height: 100%;
    overflow-y: auto;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    .title {
      font-size: $font-size-large;
    }
  }
  .follow-button {
    margin-left: 12px;
    background-color: #F54E65;
    border: 0;
    border-radius: 5px;
    height: 32px;
    line-height: 30px;
    color: #fff;
    &.van-button--disabled {
      background-color: #D9D9D9;
    }
  }
  .item {
    padding: 15px;
  }
  .item-header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .item__title {
    font-size: $font-size-medium;
  }
  .item__avatar-wrapper {
    width: 44px;
    height: 44px;
  }
  .item__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .item-header__right {
    margin-left: 12px;
    > div {
      padding-bottom: 5px;
      color: #b3b3b3;
    }
  }
  .follow-text {
    margin-left: 10px;
    color: #b3b3b3;
  }
</style>
