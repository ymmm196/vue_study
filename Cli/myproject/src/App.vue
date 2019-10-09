<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="18">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
            <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">
              <!-- <router-link :to="item.path"> -->
              <!-- <router-link :to="{name:item.name}"> -->
              {{item.text}}
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
          name: "cart",
          path: "/cart",
          text: "购物车"
        },
        {
          name: "reg",
          path: "/reg",
          text: "注册"
        },
        {
          name: "login",
          path: "/login",
          text: "登录"
        }
      ]
    };
  },
  methods: {
    handleSelect(index, indexpath) {
      // console.log(index, indexpath, a, b);
      this.activeIndex = index;
    }
  },
  created() {
    // 获取url地址参数
    this.activeIndex = this.$route.path;
  },
  components: {}
};
</script>

 <style lang="scss" scoped>
.current {
  color: red;
  font-weight: bold;
}
</style>
