<template>
  <div class="index">
    <app-header></app-header>
    <banner></banner>
    <contentTable></contentTable>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from '../components/Header'//头部组件
import Footer from '../components/Footer';//底部组件
import Banner from '../components/Banner';//搜索
import ContentTable from '../components/ContentTable';//内容


export default {
  name: "index",
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "banner":Banner,
    "contentTable":ContentTable,
  }
}
</script>

<style scoped>

</style>
