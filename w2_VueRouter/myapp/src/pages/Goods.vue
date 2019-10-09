<template>
    <div>
       <el-image
        style="width:400px"
        :src="goodsInfo.goods_image"
        fit="contain"></el-image>
        <h1>{{goodsInfo.goods_name}}</h1>
        <p class="price">
            <del>{{goodsInfo.goods_marketprice}}</del>
            <span>{{goodsInfo.goods_price}}</span>
        </p>

        <el-button-group>
            <el-button type="warning" icon="el-icon-shopping-cart-full">加入购物车</el-button>
            <el-button type="danger" icon="el-icon-goods">立即购买</el-button>
        </el-button-group>
        <h4>推荐商品</h4>
        <el-row :gutter="20">
            <el-col 
            :span="6" 
            v-for="item in goodsInfo.goods_commend_list" 
            :key="item.goods_id" 
            style="height:300px"
            @click.native="goto(item.goods_id)"
            >
                <el-image
                style="width:80%"
                :src="item.goods_image_url"
                fit="contain"></el-image>
                <h6>{{item.goods_name}}</h6>
                <p class="price"><del>{{item.goods_promotion_price}}</del><span>{{(item.goods_promotion_price*0.8).toFixed()}}</span></p>
            </el-col>
        </el-row>
    </div>
</template>
<script>

export default {
    data(){
        return {
            goodsInfo:{},
            person:{
                username:'laoxie'
            }
        }
    },
    watch:{
        // 监听实例下的属性
        // 当实例下的$route属性有修改时，执行函数中的代码
        // $route:function(val,oldVal){
        //     // 判断id有改变时，执行ajax请求
        //     if(val.params.id != oldVal.params.id){
        //         this.getData(val.params.id);
        //     }
        // }
    },
    created(){
        console.log('goods:',this.$route)
        let {id} = this.$route.params;

        this.getData(id)

        // 深层次属性的监听
        // this.$watch('person.username',function(val,oldVal){

        // })
    },

    // 路由守卫
    // beforeRouteEnter(to,from,next){
    //     console.log('beforeRouteEnter:',to,from)
    //     next();
    // },
    beforeRouteUpdate(to,from,next){
        console.log('beforeRouteUpdate:',to,from);
        if(to.params.id != from.params.id){
            this.getData(to.params.id);
        }
        next();
    },
    // beforeRouteLeave(to,from,next){
    //     console.log('beforeRouteLeave:',to,from)
    //     next();
    // },
    methods:{
        goto(id){
            this.$router.push('/goods/'+id)
        },
        async getData(id){
            // axios返回的数据格式：{headers,status,data:接口返回的数据}
            let {data:{datas}} = await this.$axios.get('https://www.nanshig.com/mobile/index.php',{
                params:{
                    act:'goods',
                    op:'goods_detail',
                    goods_id:id,
                    key:''
                }
            });
            
            console.log(datas)

            this.goodsInfo = {
                ...datas.goods_info,
                goods_commend_list:datas.goods_commend_list,
                goods_image:datas.goods_image
            }

            console.log(this.goodsInfo)
        }
    }
}
</script>