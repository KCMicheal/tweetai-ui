<template>
  <div id="app">
    <h1>TweetAI Autobots</h1>
    <AutobotList />
  </div>
</template>

<script>
import AutobotList from './components/AutobotList.vue';

export default {
  components: {
    AutobotList
  }
};
</script>

<style>
/* Basic styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
