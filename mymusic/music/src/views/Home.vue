<template>
  <div>
    <div class="header">
      <div class="personal">我的</div>
      <div>MIKO</div>
      <i class="iconfont icon-chaxun"></i>
    </div>
    <!-- swiper -->
    <div class="swiper-content home-item">
      <swiper :options="swiperOption" v-if="newSongData.length>1">
        <swiper-slide v-for="(item,index) in newSongData" :key="index">
          <img :src="`${item.song.album.blurPicUrl}?param=400y400`" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <ul class="nav home-item">
      <li @click="goToRecommend">
        <div class="icon-container">
          <i class="iconfont icon-date icon"></i>
        </div>
        <p>每日推荐</p>
      </li>
      <li @click="goToPlayList">
        <div class="icon-container">
          <i class="iconfont icon-music-list icon"></i>
        </div>
        <p>歌单</p>
      </li>
      <li @click="goToRank">
        <div class="icon-container">
          <i class="iconfont icon-rank icon"></i>
        </div>
        <p>排行榜</p>
      </li>
    </ul>
    <div class="home-item">
      <div class="title-wrapper">
        <div class="title">每日推荐</div>
        <div class="more" @click="goToPlayList">
          <i class="iconfont icon-more"></i>
        </div>
      </div>
      <!-- 每日推荐列表 -->
      <div class="paly-list">
        <play-list :data="playListData"></play-list>
      </div>
    </div>
    <div class="home-item">
      <div class="title-wrapper">
        <div class="title">热门歌手</div>
        <div class="more" @click="goToArtists">
          <i class="iconfont icon-more"></i>
        </div>
      </div>
      <!-- 热门歌手列表 -->
      <ul class="artists-list">
        <li v-for="(item,index) in artistsData" :key="index">
          <img v-lazy="`${item.picUrl}?param=400y400`" alt />
          <div>
            <p class="name">{{item.name}}</p>
            <p class="info">专辑{{item.albumSize}}张，共{{item.musicSize}}首歌</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入axios
import axios from "axios";
import PlayList from "../components/playList";

export default {
  name: "home",
  components: {
    PlayList
  },
  data() {
    return {
      // 轮播图的配置信息
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        slidesPerView: 1,
        spaceBetween: 30,
        // slidesPerGroup: 3,
        // grabCursor: true,//鼠标光标
        autoplay: {
          delay: 2000, //秒
          stopOnLastSlide: false,
          disableOnInteraction: false //滑动不会失效
        },
        loop: true,
        loopFillGroupWithBlank: true
      },
      // 轮播图数据
      newSongData: [],
      // 首页每日推荐数据
      playListData: [],
      // 首页的热门歌手列表
      artistsData: []
    };
  },

  created() {
    this.getNewSongs();
    this.getPlayList();
    this.getArtists();
  },
  methods: {
    // 获取推荐内容
    async getNewSongs() {
      const { data } = await axios.get("/api/personalized/newsong");
      if (data.code === 200) {
        this.newSongData = data.result;
      }
    },
    // 获取每日推荐
    async getPlayList() {
      const { data } = await axios.get("/api/personalized");
      if (data.code === 200) {
        this.playListData = data.result.slice(0, 6);
      }
    },
    // 获取热门歌手列表
    async getArtists() {
      const { data } = await axios.get("/api/top/artists?limit=10");
      if (data.code === 200) {
        this.artistsData = data.artists;
      }
    },
    // 点击事件
    goToRecommend() {
      this.$router.push({
        name: "recommend"
      });
    },
    goToPlayList() {
      this.$router.push({
        name: "playListView"
      });
    },
    goToRank() {
      this.$router.push({
        name: "rank"
      });
    },
    goToArtists() {
      this.$router.push({
        name: "artists"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #f2353c;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 36px;
  z-index: 9;
  .personal {
    color: #f9aeb0;
  }
  i {
    font-size: 36px;
  }
}
.home-item {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  .title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    .title {
      padding-left: 20px;
      font-size: 34px;
      border-left: 6px solid #f2353c;
      color: #4c4c4c;
      line-height: 38px;
    }
    .more {
      width: 50px;
      height: 38px;
      border: 1px solid #ccc;
      border-radius: 25px;
      color: #bfbfbf;
      text-align: center;
      line-height: 38px;
    }
  }
}
.swiper-content {
  margin-top: 90px;
  .swiper-container {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
}
.nav {
  padding: 20px 30px 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  li {
    text-align: center;
  }
  .icon-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: red;
    margin-bottom: 20px;
    line-height: 120px;
  }
  .icon {
    font-size: 70px;
    color: white;
  }
}
.play-list {
  min-height: 650px;
}
.artists-list {
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    border: 1px solid #e6e6e6;
    margin-left: -20px;
    margin-right: -20px;
  }
  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .name {
    font-size: 30px;
    color: #000;
    margin-bottom: 20px;
  }
  .info {
    font-size: 24px;
    color: #b2b2b2;
  }
}
</style>