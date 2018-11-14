<template>
  <div class="content-table">
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
    <div class="container-fluid contentTable">
      <ul class="thead clearfix">
        <li>
          <p>域名</p>
          <span v-for="item in domaiNameList">{{item.域名}}</span>
        </li>
        <li>
          <p>中国</p>
          <span v-for="cnstatus in cn">{{cnstatus.状态码}}</span>
        </li>
        <li>
          <p>美国</p>
          <span v-for="usastatus in usa">{{usastatus.状态码}}</span>
        </li>
        <li>
          <p>时间</p>
          <span v-for="cnstatus in cn">{{cnstatus|dateFrm}}</span>
        </li>
      </ul>
      <ul class="tfoot">
        <li style="padding-top: 15px">总共10条</li>
        <li style="padding-top: 5px">
          <select>
            <option>1</option>
          </select>
        </li>
        <li class="clearfix">
          <i class="tableBtn">&lt;</i>
          <span>1</span>
          <i class="tableBtn">&gt;</i>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import moment from "moment";//时间
export default {
  name: "content-table",
  data(){
    return{
      domaiNameAll:[],
      domaiNameList:[],
      cn:[],
      usa:[],
      realmNameAll:[]
    }
  },
  filters:{
    dateFrm:function(el){
      return moment(el).format("YYYY-MM-DD");
    }
  },
  methods:{
    seek(){
      $(".thead span").remove();
      this.realmNameAll = $(".realmName").val().split(",");
      if(this.realmNameAll==""){
        console.log("不能为空");
        return;
      }else{
        for(var i=0;i<this.realmNameAll.length;i++){
          //中国
          this.$http.get('urlname/cn/'+ this.realmNameAll[i]).then((res)=>{
            this.domaiNameAll=res;
            this.domaiNameList.push({"域名":this.domaiNameAll.url.split("/")[2]});
            // if(this.domaiNameAll.status==200||this.domaiNameAll.status==301){
            //   this.domaiNameAll.status="正常"
            // }else if(this.domaiNameAll.status==404){
            //   this.domaiNameAll.status="错误"
            // }
            this.cn.push({"状态码":this.domaiNameAll.body});
            console.log(this.cn)
          });
          //美国
          this.$http.get('urlname/usa/'+ this.realmNameAll[i]).then((res)=>{
            this.domaiNameAll=res;
          //  this.domaiNameList.push({"域名":this.domaiNameAll.url.split("/")[2]});
            // if(this.domaiNameAll.status==200||this.domaiNameAll.status==301){
            //   this.domaiNameAll.status="正常"
            // }else if(this.domaiNameAll.status==404){
            //   this.domaiNameAll.status="错误"
            // }
            this.usa.push({"状态码":this.domaiNameAll.body})
          });
        }
        console.log(this.realmNameAll);
      };
    },
  },


}
</script>

<style scoped>

</style>
