let SignOut = ()=>{
    window.location.href = 'http://localhost:3000/login.html';
}

if($.cookie('userLoginState')){
    let userLoginState = JSON.parse($.cookie('userLoginState'))
    userLoginState.userType == 1 ? $('#admin-name').html('【超级管理员】'+userLoginState.userName):
        $('#admin-name').html('【管理员】'+userLoginState.userName);
    if(userLoginState.userType === 0){
        $("#admin-manage").css('display','none');
    }
}else {
    SignOut();
}

