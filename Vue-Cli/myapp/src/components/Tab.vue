<template>
  <div>
    <ul class="nav nav-pills">
      <li
        :key="item"
        role="presentation"
        v-for="(item,idx) in tabs"
        v-bind:class="{active:idx===currentIdx}"
        v-on:click="changeTab(idx)"
      >
        <a href="#">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: ["体育", "娱乐", "新闻", "视频"],
      currentTab: ""
    };
  }
};
</script>
<style>
</style>