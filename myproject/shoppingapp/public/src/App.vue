<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="18">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
            <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">
              <!-- <router-link :to="item.path"> -->
              <!-- <router-link :to="{name:item.name}"> -->
                <el-badge :value="12" class="item" v-if="item.name==='cart'" style="line-height:30px">
                  {{item.text}}
                </el-badge>
                <template v-else>
                  {{item.text}}
                </template>
              <!-- </router-link> -->
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" class="txt-right">
          <!-- <el-button-group> -->
            <el-button type="text" @click="goto('/reg')">注册</el-button>
            <el-button type="text" @click="goto('/login')">登录</el-button>
          <!-- </el-button-group> -->
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>&copy;laoxie</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/home",
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "discover",
          path: "/discover",
          text: "发现"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    handleSelect(index, indexpath) {
      console.log(index, indexpath);
      this.activeIndex = index;
    },
    goto(path){
      this.$router.push(path)
    }
  },
  created() {
    //获取url地址参数
    console.log(this.$router);
    this.activeIndex = this.$route.path;
  },
  components: {}
};
</script>
<style lang="scss">
.current {
  color: #f00;
  font-weight: bold;
}
.txt-right{
  text-align:right;margin-top:10px
}

.price{
        del{
            &::before{
                content:'￥'
            }
        }
        >span{
            color:#f00;margin-left:5px;
            &::before{
                content:'￥'
            }
        }
    }

</style>