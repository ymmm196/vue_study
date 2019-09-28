<template >
  <div class="input-group">
    <input type="text" class="form-control" ref="keyword" v-model="keyword" @keyup.13="add" />
    <div class="input-group-addon" style="padding:2px;">
      <input type="date" v-model="date" />
    </div>
    <span class="input-group-btn">
      <!-- <button class="btn btn-success" type="button" @click="add">添加</button> -->
      <TodoButton class="btn-success" @click.native="add">添加</TodoButton>
    </span>
  </div>
</template>
<script>
import TodoButton from "./TodoButton.vue";
export default {
  props: ["addItem", "active"],
  data() {
    return {
      keyword: "",
      // date: (new Date().toLocaleDateString()).replace(/\//g,'-')
      date: ""
    };
  },
  methods: {
    add() {
      let data = {
        id: Date.now(),
        content: this.keyword,
        done: false,
        date: this.date,
        selected: false
      };
      //    this.addItem(data);
      // 触发自定义事件
      this.$emit("additem", data);

      // <todo-form v-on:additem="事件处理函数"/>
      // this.$on('additem',事件处理函数)

      //    清空并获得焦点
      this.keyword = "";
      this.$refs.keyword.focus();
    }
  },
  components: { TodoButton }
};
</script>