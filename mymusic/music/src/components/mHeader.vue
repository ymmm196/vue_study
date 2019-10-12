<template name="component-name">
  <div class="header" :class="{'red':red}">
    <i class="iconfont icon-zuo" @click="goBack"></i>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "m-header",
  props: {
    red: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 返回上一页
    goBack() {
      this.$router.go(-1);
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
  line-height: 90px;
  color: #fefefe;
  font-size: 34px;
  text-align: center;
  z-index: 9;
  &.red {
    background-color: #f2353c;
  }
  i {
    position: absolute;
    font-size: 50px;
    left: 20px;
  }
}
</style>