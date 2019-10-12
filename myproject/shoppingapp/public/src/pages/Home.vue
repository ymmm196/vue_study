<template>
  <div>
    <el-carousel height="200px">
      <el-carousel-item v-for="item in adlist" :key="item.data">
        <img :src="item.image" style="width:100%"/>
      </el-carousel-item>
    </el-carousel>

    <div v-for="category in recommend" :key="category.title">
        <h4>{{category.title}}</h4>
        <el-row :gutter="20">
            <el-col 
            :span="6" 
            v-for="item in category.item" 
            :key="item.goods_id" 
            style="height:360px"
            @click.native="goto(item.goods_id)"
            >
                <el-image
                style="width:100%"
                :src="item.goods_image"
                fit="contain"></el-image>
                <h4>{{item.goods_name}}</h4>
                <p class="price"><del>{{item.goods_price}}</del><span>{{item.goods_promotion_price}}</span></p>
            </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name:'Home',
  // props:['a'],//测试：接收定义时传入的参数
    data(){
        return {
            adlist:[],
            recommend:[]
        }
    },
  methods: {
    goto(id) {
    //   this.$router.push(`/goods/${id}`);
      this.$router.push({ name: "goods", params: { id} });
    }
  },
  async created() {
    // 发起ajax请求
    let { data:{datas} } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
      params: {
        act: "index"
      }
    });
    
    // 轮播图数据
    this.adlist = datas[0].adv_list.item;

    // 春夏新品推荐
    this.recommend = datas.slice(1).map(item=>{
        return item.goods
    });//[{title,item},{},{},{}]
  },

  beforeRouteLeave(to,from,next){
    console.log('Home.beforeRouteLeave');
    next();
  }
};
</script>
<style lang="scss" scoped>
    
</style>