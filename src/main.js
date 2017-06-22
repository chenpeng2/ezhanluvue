import Vue from 'vue';
import router from './router/router.js';
import VueLazyload from 'vue-lazyload';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import './assets/css/cssreset.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueLazyload,{
  loading:require('../src/assets/images/loading.gif')
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
