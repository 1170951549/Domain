<template>
  <div class="container-fluid banner">
    <div class="bannerLift col-lg-7 col-md-7 col-sm-7 col-xs-12">
      <h1>域名查询</h1>
      <p>支持多域名查询</p>
      <form>
        <input type="text" placeholder="请输入域名(逗号隔开)xxx.baidu.com,xxxxguge.com,xxxhuohu.com">
        <button @click="seek">检测</button>
      </form>
    </div>
    <div class="bannerRight col-lg-3 col-md-5 col-sm-5">
      <a href="javascript:;">
        <img src="../assets/image/banner.jpg"/>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: "banner",
    data(){
      return{

      }
    },
    methods:{
      seek(){

      }
    }

  }
</script>

<style scoped>

</style>
