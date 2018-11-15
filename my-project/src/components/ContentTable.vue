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
      <!--<ul class="thead clearfix">-->
        <!--<li>-->
          <!--<p>域名</p>-->
          <!--<span v-for="item in domaiNameAll">{{item.域名}}</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>中国</p>-->
          <!--<span v-for="cn in domaiNameAll" >{{cn.状态}}</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>美国</p>-->
          <!--<span v-for="item in domaiNameAll">{{item.状态}}</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>时间</p>-->
          <!--<span v-for="cn in domaiNameAll" >{{cn|dateFrm}}</span>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<ul class="tbody clearfix">-->
          <!--<li v-for="itme in domaiNameAll">-->
            <!--<span v-for="item in domaiNameAll">{{item.域名}}</span>-->
            <!--<span v-for="cn in domaiNameAll" >{{cn.状态}}</span>-->
            <!--<span v-for="cn in domaiNameAll" >{{cn.状态}}</span>-->
            <!--<span v-for="cn in domaiNameAll" >{{cn|dateFrm}}</span>-->
          <!--</li>-->
      <!--</ul>-->
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
      realmNameAll:[],//搜索的域名
      DomaiNameAll:[],//中国
      domaiNameAll:[],
      hosts:{//服务器
        'cn':'cn',
        'usa':'usa'
      },
    }
  },
  filters:{
    dateFrm:function(el){
      return moment(el).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods:{
    //请求服务器
    sendHTTP(region){
      for (var i = 0; i < this.realmNameAll.length; i++) {
        this.$http.get('urlname/'+region+'/' + this.realmNameAll[i]).then((res) => {
          this.DomaiNameAll = res;
          this.domaiNameAll.push(res);
          // this.domaiNameAll.push({"地区":this.DomaiNameAll.url.split("/")[1],"域名": this.DomaiNameAll.url.split("/")[2], "状态": this.DomaiNameAll.body});
        });
      };
    },
    seek(){
      $(".thead span").remove();
      this.realmNameAll = $(".realmName").val().split(",");//逗号分隔
      if(this.realmNameAll==""){
        return;
      }else{
        //中国
        this.sendHTTP(this.hosts.cn);
        //美国
        this.sendHTTP(this.hosts.usa);
        // console.log( this.domaiNameAll);
      };
      console.log(this.domaiNameAll);
    },
  },
}
</script>

<style scoped>

</style>
