<template >
  <div class="container-fluid">
    <h1>单文件组件开发todolist</h1>
    <TodoForm v-on:additem="addItem"></TodoForm>
    <TodoContent v-bind:datalist="datalist"></TodoContent>
  </div>
</template>
<script>
import TodoForm from "./TodoForm.vue";
import TodoContent from "./TodoContent";
import Bus from "../Bus";
import "bootstrap/dist/css/bootstrap.css";
export default {
  data() {
    return {
      datalist: [
        {
          id: 1,
          content: "先定个小目标，赚他5个亿",
          done: false,
          date: "2019-12-25",
          selected: false
        }
      ]
      // activeIndex:0
    };
  },
  methods: {
    addItem(data) {
      this.datalist.unshift(data);
    },
    removeItem(idx) {
      this.datalist.splice(idx, 1);
    },
    completeItem(idx) {
      this.datalist.forEach((item, i) => {
        if (i === idx) {
          item.done = true;
        }
      });
    },
    // 选中或取消数据勾选
    selectItem(idx) {
      this.datalist.forEach((item, i) => {
        if (i === idx) item.selected = !item.selected;
      });
    }
  },
  mounted() {
    // 接收方:给总线实例Bus绑定自定义事件
    Bus.$on("remove", this.removeItem);
    Bus.$on("complete", this.completeItem);
    Bus.$on("select", this.selectItem);
  },
  components: {
    TodoContent,
    TodoForm
  }
};
</script>