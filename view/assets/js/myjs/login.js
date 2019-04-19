let rootPath='http://127.0.0.1:3000';

//登录操作
$('#login-btn').on('click',()=>{
    let jobNumber = $('#jobNumber').val();
    let userPassword = $('#userPassword').val();
    let url = rootPath + '/user/checkUserLogin';
    $.post(url,{jobNumber,userPassword},(res)=>{
        if(res.data!== null){
            let userLoginState = {
                jobNumber:jobNumber,
                userName:res.data.userName,
                userType:res.data.userType,
            }

            var date = new Date();
            date.setTime(date.getTime()+10*1000);//只能这么写，10表示10秒钟
            $.cookie('userLoginState', JSON.stringify(userLoginState), { expires: 1, path: '/' });
            window.location.href = 'http://localhost:3000/index.html';
        }
    })
})