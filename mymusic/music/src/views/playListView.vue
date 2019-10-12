<template>
  <div>
    <m-header>全部歌单</m-header>
    <div class="play-wrapper">
      <play-list :data="playListData"></play-list>
    </div>
  </div>
</template>
<script>
import mHeader from "../components/mHeader";
import playList from "../components/playList";

import axios from "axios";
export default {
  name: "play-list-view",
  components: {
    mHeader,
    playList
  },
  data() {
    return {
      playListData: []
    };
  },
  created() {
    this.getPlayList();
  },
  methods: {
    // 获取每日推荐
    async getPlayList() {
      const { data } = await axios.get("/api/personalized");
      if (data.code === 200) {
        this.playListData = data.result;
      }
    }
  }
};
</script>
<style lang="less">
.play-wrapper {
  margin-top: 90px;
  background-color: #fff;
  padding: 30px 20px;
}
</style>