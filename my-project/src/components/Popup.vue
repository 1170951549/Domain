<template>
  <div class="popup">
    <!--登录-->
    <div id="logIn" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">登录</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal form-logIn clearfix">
              <div class="form-group">
                <label for="logInUser" class="col-sm-2 control-label">用户名:</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="logInUser" placeholder="请输入用户名" name="user" v-model="userLogin.用户名">
                  <em style="color: red;display: none;position: absolute"></em>
                </div>
              </div>
              <div class="form-group">
                <label for="logInPassword" class="col-sm-2 control-label">密码:</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" id="logInPassword" placeholder="请输入密码" name="password" v-model="userLogin.密码">
                  <em style="color: red;display: none;position: absolute"></em>
                </div>
              </div>
              <a class="loginBtn col-sm-8 col-xs-8" @click="loginBtn">登录</a>
            </form>
          </div>
          <div class="modal-footer" style="margin-top: 30px;">
            <a data-dismiss="modal" data-toggle="modal" data-target="#signUp">立即注册</a>
            <span>|</span>
            <a data-dismiss="modal" data-toggle="modal" data-target="#findPasd">忘记密码</a>
          </div>
        </div>
      </div>
    </div>
    <!--注册-->
    <div id="signUp" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">用户注册</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal form-signUp clearfix">
              <div class="form-group">
                <label for="signUpUser" class="col-sm-2 control-label">用户名:</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="signUpUser" placeholder="请输入用户名" name="用户名" v-model="userSign.用户名">
                  <em style="color: red;display: none;position: absolute"></em>
                </div>
              </div>
              <div class="form-group">
                <label for="signUpEmail" class="col-sm-2 control-label">邮箱:</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control" id="signUpEmail" placeholder="请输入邮箱" name="邮箱" v-model="userSign.邮箱">
                  <em style="color: red;display: none;position: absolute"></em>
                </div>
              </div>
              <div class="form-group">
                <label for="signUpPassword" class="col-sm-2 control-label">密码:</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" id="signUpPassword" placeholder="请输入密码" name="密码" v-model="userSign.密码">
                  <em style="color: red;display: none;position: absolute"></em>
                </div>
              </div>
              <div class="form-group">
                <label for="signUpPasswordOK" class="col-sm-2 control-label">确认密码:</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" id="signUpPasswordOK" placeholder="请再次确认密码" name="确认密码" v-model="userSign.确认密码">
                  <em style="color: red;display: none;position: absolute"></em>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">验证码:</label>
                <div class="col-sm-8 clearfix">
                  <input type="text" class="form-control verify"  placeholder="请输入验证码" name="verify" v-model="picLyanzhengma">
                  <input type="text" class="form-control verifyOK"  name="verifyOK"  v-model="checkCode"  @click="createCode">
                  <em style="color: red;display: none;position: absolute;top: 35px;"></em>
                </div>
              </div>
              <a class="signUpBtn col-sm-8 col-xs-8" @click="signUpBtn">注册</a>
            </form>
          </div>
          <div class="modal-footer" style="margin-top: 30px;">
            <p>已有账号: <a data-dismiss="modal" data-toggle="modal" data-target="#logIn">快速登录</a></p>
          </div>
        </div>
      </div>
    </div>
    <!--找回密码-->
    <div id="findPasd" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">找回密码</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal clearfix">
              <div class="form-group">
                <label for="findPasdEmail" class="col-sm-2 control-label">邮箱:</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="findPasdEmail" placeholder="请输入有邮箱" name="email">
                </div>
              </div>
              <div class="form-group">
                <label for="findPasdNew" class="col-sm-2 control-label">新密码:</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control" id="findPasdNew" placeholder="请输入新密码" name="newPassword">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">验证码:</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control verify" placeholder="请输入验证码" name="verify">
                  <input type="text" class="form-control verifyOK"  value="CNDF" name="verifyOK">
                </div>
              </div>
              <a class="findPasdBtn col-sm-8 col-xs-8">确认</a>
            </form>
          </div>
          <div class="modal-footer" style="margin-top: 30px;"></div>
        </div>
      </div>
    </div>
    <!--个人中心-->
    <div id="center" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title clearfix">
              <span class="centerInfoTable active" @click="centerInfoTable">个人信息</span>
              <span class="alterInfoTable" @click="alterInfoTable">修改信息</span></h4>
          </div>
          <div class="modal-body">
            <ul class="centerInfo clearfix">
              <li class="clearfix">
                <span class="col-sm-2">用户名:</span>
                <span class="col-sm-8">张三</span>
              </li>
              <li class="clearfix">
                <span class="col-sm-2">邮箱:</span>
                <span class="col-sm-8" style="color: #43A7E8">11111@163.com</span>
              </li>
              <li class="clearfix">
                <span class="col-sm-2">域名数量:</span>
                <span class="col-sm-8" style="color: #E51C23;">15个</span>
              </li>
              <li class="clearfix">
                <span class="col-sm-2">可用域名:</span>
                <span class="col-sm-8" style="color: #E51C23;">13个</span>
              </li>
              <li class="clearfix">
                <span class="col-sm-2">提示方式:</span>
                <span class="col-sm-8">
                           <label style="margin-right: 20px">
                               邮箱
                               <input type="radio" name="selemode" id="selemode1" value="">
                           </label>
                           <label>
                               公众号
                               <input type="radio" name="selemode" id="selemode2" value="">
                           </label>
                       </span>
              </li>
            </ul>
            <div class="alterInfo clearfix" style="display: none">
              <form class="form-horizontal clearfix">
                <div class="form-group">
                  <label class="col-sm-2 control-label">邮箱:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" placeholder="请输入有邮箱" name="email">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">验证码:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control verify" placeholder="请输入验证码" name="verify">
                    <input type="text" class="form-control verifyOK"  value="CNDF" name="verifyOK">
                  </div>
                </div>
                <a class="alterInfoEmail col-sm-8 col-xs-8">确认</a>
              </form>
              <form class="form-horizontal clearfix" style="margin-top: 60px">
                <div class="form-group">
                  <label class="col-sm-2 control-label">密码:</label>
                  <div class="col-sm-8">
                    <input type="password" class="form-control" placeholder="请输入密码" name="password">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">新密码:</label>
                  <div class="col-sm-8">
                    <input type="password" class="form-control" placeholder="请输入新密码" name="newPassword">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">确认密码:</label>
                  <div class="col-sm-8">
                    <input type="password" class="form-control" placeholder="请确认密码" name="newPasswordOK">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">验证码:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control verify" placeholder="请输入验证码" name="verify">
                    <input type="text" class="form-control verifyOK"  value="CNDF" name="verifyOK">
                  </div>
                </div>
                <a class="alterInfoEmail col-sm-8 col-xs-8">确认</a>
              </form>
            </div>
          </div>
          <div class="modal-footer" style="margin-top: 30px;"></div>
        </div>
      </div>
    </div>
    <!--监测域名-->
    <div id="monitor" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title clearfix">监测域名</h4>
          </div>
          <div class="modal-body">
            <table>
              <tbody>
              <tr>
                <td class="col-sm-10">www.baidu.com</td>
                <td class="col-sm-2"><a href="/monitor" target="_blank">检测域名</a></td>
              </tr>
              <tr>
                <td class="col-sm-10">www.baidu.com</td>
                <td class="col-sm-2"><a href="/monitor" target="_blank">检测域名</a></td>
                <!--<td class="col-sm-2"><router-link to="/monitor">检测域名</router-link></td>-->
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <ul class="monitorPag">
              <li style="padding-top: 15px">总共2条</li>
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
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "popup",
      data(){
        return{
          userSign:{
            "用户名":"",
            "邮箱":"",
            "密码":"",
            "确认密码":"",
            "验证码":"",
          },
          userSignArr:[],
          userLogin:{
            "用户名":"",
            "密码":"",
          },
          userLoginArr:[],
          checkCode:"",
          picLyanzhengma:"",
        }
      },
      created(){//加载
        this.createCode();
      },
      methods:{
        //登录
        loginBtn(){
          var str = "";
          if($("#logInUser").val()==""){
            $("#logInUser").next().css("display","block");
            $("#logInUser").next().text("用户名不能为空");
            $("#logInUser").focus(function () {
              $("#logInUser").next().css("display","none");
            });
            return;
          };
          if($("#logInPassword").val()==""){
            $("#logInPassword").next().css("display","block");
            $("#logInPassword").next().text("密码不能为空");
            $("#logInPassword").focus(function () {
              $("#logInPassword").next().css("display","none");
            });
            return;
          };
          this.$http.post('user/loginUser',this.userLogin).then((res)=>{
            this.userLoginArr = res.body;
            if(this.userLoginArr.err==1){
              alert("账号或密码错误！");
              return;
            }else{
              alert("登录成功！");
              $("#logIn").hide();
              $(".modal-backdrop.in").hide();
              $(".navbar-nav").children().remove();
              str +=`<li><a data-toggle="modal" data-target="#center">个人中心</a></li><li><a data-toggle="modal" data-target="#monitor">监测域名</a></li><li class="exit"><a>退出</a></li>`;
              $(".navbar-nav").append(str);
              $(".exit").on("click",function(){
                window.location.reload();
              });
            }
          });
          // $("#logIn").hide();
          // $(".modal-backdrop.in").hide();
          // $(".navbar-nav").children().remove();
          // str +=`<li><a data-toggle="modal" data-target="#center">个人中心</a></li><li><a data-toggle="modal" data-target="#monitor">监测域名</a></li><li class="exit"><a>退出</a></li>`;
          // $(".navbar-nav").append(str);
          // $(".exit").on("click",function(){
          //   window.location.reload();
          // });
        },
        //注册
        signUpBtn(){
          if($("#signUpUser").val()==""){
            $("#signUpUser").next().css("display","block");
            $("#signUpUser").next().text("用户名不能为空");
            $("#signUpUser").focus(function () {
              $("#signUpUser").next().css("display","none");
            });
            return;
          };
          if($("#signUpEmail").val()==""){
            $("#signUpEmail").next().css("display","block");
            $("#signUpEmail").next().text("邮箱不能为空");
            $("#signUpEmail").focus(function () {
              $("#signUpEmail").next().css("display","none");
            });
            return;
          };
          if($("#signUpPassword").val()==""){
            $("#signUpPassword").next().css("display","block");
            $("#signUpPassword").next().text("密码不能为空");
            $("#signUpPassword").focus(function () {
              $("#signUpPassword").next().css("display","none");
            });
            return;
          };
          if($("#signUpPasswordOK").val()==""){
            $("#signUpPasswordOK").next().css("display","block");
            $("#signUpPasswordOK").next().text("密码不能为空");
            $("#signUpPasswordOK").focus(function () {
              $("#signUpPasswordOK").next().css("display","none");
            });
            return;
          }
          else if($("#signUpPasswordOK").val()!=$("#signUpPassword").val()){
            $("#signUpPasswordOK").next().css("display","block");
            $("#signUpPasswordOK").next().text("两次密码不一致");
            $("#signUpPasswordOK").focus(function () {
              $("#signUpPasswordOK").next().css("display","none");
            });
            return;
          };
          if(this.picLyanzhengma==""){
            $(".verifyOK").next().css("display","block");
            $(".verifyOK").next().text("验证码不能为空");
            $(".verifyOK").focus(function () {
              $(".verifyOK").next().css("display","none");
            });
            return;
          }else if(this.picLyanzhengma!=this.checkCode){
              $(".verifyOK").next().css("display","block");
              $(".verifyOK").next().text("验证码错误");
              $(".verifyOK").focus(function () {
                $(".verifyOK").next().css("display","none");
              });
            return;
          }
          this.$http.post('user/addUser',this.userSign).then((res)=>{
            this.userSignArr = res.body;
            if(this.userSignArr.err == -1){
              alert("用户名重复");
              return;
            }else {
              alert("注册成功");
             console.log(this.userSignArr.data);
            }
            console.log(this.userSignArr);
          });

        },
        //验证码
        createCode(){
          this.code = "";
          this.checkCode = "";
          this.picLyanzhengma = "";
          var codeLength = 4;
          //随机数
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
          for(var i = 0; i < codeLength; i++) {
            //取得随机数的索引（0~35）
            var index = Math.floor(Math.random()*36);
            //根据索引取得随机数加到code上
            this.code += random[index];
          }
          //把code值赋给验证码
          this.checkCode = this.code;

        },
        //个人信息切换
        centerInfoTable(){
          $(".alterInfoTable").removeClass("active");
          $(".centerInfoTable").addClass("active");
          $(".centerInfo").show();
          $(".alterInfo").hide();
        },
        alterInfoTable(){
          $(".centerInfoTable").removeClass("active");
          $(".alterInfoTable").addClass("active");
          $(".alterInfo").show();
          $(".centerInfo").hide();
        },
      },

    };
</script>

<style scoped>

</style>
