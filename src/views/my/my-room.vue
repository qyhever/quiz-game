<template>
  <com-page-navbar-wrapper title="我的房间">
    <div class="info-container">
      <div class="tab__panel-wrapper">
        <div class="tab__panel">
          <com-loadmore :fetchData="query">
            <template slot-scope="{list}">
              <room-list v-for="(item,index) in list" :key="index" :item="item"></room-list>
            </template>
          </com-loadmore>
        </div>
      </div>
    </div>
  </com-page-navbar-wrapper>
</template>
<script>
import RoomList from "./components/room-list";
import { getMyRoom } from "@/api/user";
export default {
  components: {
    RoomList
  },
  data() {
    return {};
  },
  methods: {
    query({ page, count }) {
      return getMyRoom({ page, count })
        .then(res => res.rows)
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
