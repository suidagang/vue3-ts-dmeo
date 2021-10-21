import { createApp ,Directive} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-lus引入
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 重置浏览器样式
import "./assets/css/reset.css"
// directive(自定义指令)
import * as directives from '@/comDirective/comNumber';
import * as echarts from 'echarts'; //引入echarts


const app = createApp(App);
Object.keys(directives).forEach(key => {
    app.directive(key, (directives as { [key: string]: Directive })[key]);
});
app.use(ElementPlus);
app.config.globalProperties.$echarts = echarts;
app.use(store).use(router).mount('#app')
