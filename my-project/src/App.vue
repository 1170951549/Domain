<template>
  <div id="app">
    <app-header></app-header>
    <banner></banner>
    <contentTable></contentTable>
    <app-footer></app-footer>
    <popup></popup>
  </div>
</template>
<script>
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/public.css';
import './assets/css/index.css';

import './assets/js/jquery.min';
import './assets/bootstrap/js/bootstrap.min';

import Header from './components/Header';//头部组件
import Footer from './components/Footer';//底部组件
import Banner from './views/Banner';//搜索
import ContentTable from './views/ContentTable';//内容
import Popup from './components/Popup';//弹窗
export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-footer":Footer,
    "banner":Banner,
    "contentTable":ContentTable,
    "popup":Popup
  },
};
</script>

<style>

</style>
