<template>
  <div class="container-fluid banner">
    <div class="bannerLift col-lg-7 col-md-7 col-sm-7 col-xs-12">
      <h1>域名查询</h1>
      <p>支持多域名查询</p>
      <div class="form">
        <input type="text" placeholder="请输入域名(逗号隔开)xxx.baidu.com,xxxxguge.com,xxxhuohu.com" class="realmName">
        <button @click="seek">检测</button>
      </div>
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
        realmName:[],
      }
    },
    methods:{
      seek(){
        this.$http.get('urlname/test/'+ $(".realmName").val()).then((res)=>{
          this.realmName=res.body;
          console.log(this.realmName);
          // console.log(this.realmName.data.urlname)
          // if(this.realmName == 0){
          //   this.realmName=res.body.data.urlname;
          // }else{
          //   console.log("查询失败");
          // }
          // this.realmName=this.realmName.split(",");
          // console.log(this.realmName);
        });
      }
    }

  }
</script>

<style scoped>

</style>
