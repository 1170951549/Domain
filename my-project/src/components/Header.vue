<template>
    <header class="header">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="javascript:;">LOGO</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <!--<li><a>个人中心</a></li>-->
              <!--<li><a>监测域名</a></li>-->
              <!--<li class="exit"><a>退出</a></li>-->
              <li><a data-toggle="modal" data-target="#logIn" >登录</a></li>
              <!--<li><a data-toggle="modal" data-target="#center">登录</a></li>-->
              <!--<li><a data-toggle="modal" data-target="#monitor">登录</a></li>-->
              <li class="signUP"><a data-toggle="modal" data-target="#signUp">注册</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      <popup></popup>
    </header>
</template>

<script>
import Popup from "./Popup";//引用弹窗
//弹窗
export default {
  name: "headers",
  data(){
    return{

    }
  },
  methods:{
  },
  components:{
    "popup":Popup
  }
};
</script>

<style scoped>

</style>
