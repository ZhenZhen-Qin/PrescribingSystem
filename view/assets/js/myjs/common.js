function getLocalTime(nS) {
    return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');
}
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};


function add0(m){return m<10?'0'+m:m }
function timeStampToDate(shijianchuo)
{
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}


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