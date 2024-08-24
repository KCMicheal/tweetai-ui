import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import io from 'socket.io-client';

Vue.prototype.$http = axios;
Vue.prototype.$socket = io('http://localhost:3000'); // Connect to your backend server

new Vue({
  render: h => h(App),
}).$mount('#app');
