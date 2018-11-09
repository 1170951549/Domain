$(function () {
    //登录
    function logIn(){
        var str = "";
        $(".loginBtn").on("click",function(){
            if($("#logInUser").val()==""){
                $("#logInUser").next().css("display","block");
                $("#logInUser").next().text("用户名不能为空");
                $("#logInUser").focus(function () {
                    $("#logInUser").next().css("display","none");
                });
                return;
            }
            if($("#logInPassword").val()==""){
                $("#logInPassword").next().css("display","block");
                $("#logInPassword").next().text("密码不能为空");
                $("#logInPassword").focus(function () {
                    $("#logInPassword").next().css("display","none");
                });
                return;
            }
           // console.log($(".form-logIn").serialize());
            $("#logIn").hide();
            $(".modal-backdrop.in").hide();
            $(".navbar-nav").children().remove();
            str +=`<li><a data-toggle="modal" data-target="#center">个人中心</a></li>
                   <li><a data-toggle="modal" data-target="#monitor">监测域名</a></li>
                   <li class="exit"><a>退出</a></li>
                   `;
            $(".navbar-nav").append(str);
            $(".exit").on("click",function(){
                window.location.reload();
            });
        });
    }
    logIn();
    //个人信息
    function personInfo() {
        $("#center .modal-title .centerInfoTable").on("click",function(){
            $(this).addClass("active");
            $("#center .modal-title .alterInfoTable").removeClass("active");
            $(".centerInfo").show();
            $(".alterInfo").hide();
        });
        $("#center .modal-title .alterInfoTable").on("click",function(){
            $(this).addClass("active");
            $("#center .modal-title .centerInfoTable").removeClass("active");
            $(".centerInfo").hide();
            $(".alterInfo").show();
        });
    }
    personInfo();
});