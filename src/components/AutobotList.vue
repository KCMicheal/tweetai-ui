<template>
  <div>
    <h1>Heelo World</h1>
    <h2>Autobots Created: {{ autobotCount }}</h2>
    <div v-if="autobots.length">
      <AutobotCard v-for="autobot in autobots" :key="autobot.id" :autobot="autobot" />
    </div>
    <div v-else>
      <p>No Autobots available.</p>
    </div>
  </div>
</template>

<script>
import AutobotCard from './AutobotCard.vue';

export default {
  data() {
    return {
      autobots: [],
      autobotCount: 0
    };
  },
  components: {
    AutobotCard
  },
  methods: {
    fetchAutobots() {
      this.$http.get('/autobots')
        .then(response => {
          this.autobots = response.data;
          this.autobotCount = this.autobots.length;
        })
        .catch(error => {
          console.error('Failed to fetch autobots:', error);
        });
    }
  },
  mounted() {
    this.fetchAutobots();

    // Real-time updates
    this.$socket.on('newAutobot', autobot => {
      this.autobots.push(autobot);
      this.autobotCount++;
    });
  }
};
</script>

<style>
h2 {
  margin-bottom: 20px;
}
</style>
