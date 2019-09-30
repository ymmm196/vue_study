<template>
  <div>
    <Tab />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/TodoList.vue";
import Tab from "./components/Tab.vue";
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "app",
  components: {
    // HelloWorld,
    // TodoList
    Tab
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
