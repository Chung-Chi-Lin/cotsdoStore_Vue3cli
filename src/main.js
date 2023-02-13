import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
// 註冊全域 千分號、日期
app.config.globalProperties.$filters = {
  currency, date,
};
// vee-validate-rule
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
// 註冊全域吐司訊息
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(VueAxios, axios);
app.use(router);
app.use(VueSweetalert2);
// 自訂 loading 樣式導入
app.component('VueLoading', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
