<template>
  <div class="autobot-card">
    <h3>{{ autobot.name }} (@{{ autobot.username }})</h3>
    <p>{{ autobot.email }}</p>
    <ul>
      <li v-for="post in autobot.posts" :key="post.id">
        <strong>{{ post.title }}:</strong> {{ post.body }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    autobot: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.autobot-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  text-align: left;
}

h3 {
  margin: 0 0 10px;
}

ul {
  padding-left: 20px;
}
</style>
