<template>
  <com-page-navbar-wrapper title="系统消息">
    <div class="info-container">
      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="query">
            <template slot-scope="{list}">
              <message-list v-for="(item,index) in list" :key="index" :item="item"></message-list>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import MessageList from "./components/message-list";
import { getSystemMessage } from "@/api/user";
export default {
  components: {
    MessageList
  },
  data() {
    return {};
  },
  methods: {
    query({ page, count }) {
      return getSystemMessage({ page, count })
        .then(res => {
          return res.rows;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(242, 242, 242, 1);
}
.tab__panel-wrapper {
  flex: 1;
  overflow: hidden;
}
.tab__panel {
  height: 100%;
  padding: 0 0.33rem;
  overflow: hidden;
}
</style>
