import { createApp } from 'vue'
import App from './App.vue'

import lodash from 'lodash';
import axios from 'axios';

// TODO: consider moving these out of the global scope
window._ = lodash;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createApp(App).mount('#app');
