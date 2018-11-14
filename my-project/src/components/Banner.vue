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
        cnName:[],
        usaName:[]
      }
    },
    methods:{
      seek(){
         var realmNameAll = $(".realmName").val().split(",");
         if(realmNameAll==""){
           console.log("不能为空");
            return;
         }else{
           for(var i=0;i<realmNameAll.length;i++){
             this.$http.get('urlname/cn/'+ realmNameAll[i]).then((res)=>{
               this.cnName=res;
               console.log("中国"+" "+this.cnName.url.split("/")[2]+" "+this.cnName.status);
             });
             this.$http.get('urlname/usa/'+ realmNameAll[i]).then((res)=>{
               this.usaName=res;
               console.log("美国"+" "+this.usaName.url.split("/")[2]+" "+this.usaName.status);

             });
           }
         }

      },
    },

  };
</script>

<style scoped>

</style>
