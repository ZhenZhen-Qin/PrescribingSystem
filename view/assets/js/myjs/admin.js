$('#add-admin').css('display','none');
$('#update-admin').css('display','none');

let rootPath='http://127.0.0.1:3000';
let pagesize = 5;
let page = 1;
let totalPage = 0;
let currentPage = 1;
let setPage = (pagesize,page)=>{
    let url = rootPath + '/user/findUserInfoByAll';
    let params = {pagesize:pagesize, page:page};
    if(page === 0 || page>totalPage){return;}
    currentPage = page;
    console.log('page'+page)
    findUserInfo(url,params);
}

let findUserInfo = (url,params)=>{
    $.post(url,params,(res)=>{
        if(!res){return;}
        $('.user-list-total').html(`共 ${res.data.total} 条数据`);

        //生成页码
        let PageNum = Math.ceil(res.data.total/pagesize);
        totalPage = PageNum;
        var strPage = `<li class=""><span  onclick="setPage(${pagesize},${currentPage-1})">«</span></li>`;
        for(let i=1;i<=PageNum;i++){strPage += `<li><span onclick="setPage(${pagesize},${i})">${i}</span></li>`;}
        strPage+=` <li><span onclick="setPage(${pagesize},${currentPage+1})">»</span></li>`;
        $(".page").html(strPage);
        var thisli = $(".page li").eq(currentPage);
        console.log(thisli);
        thisli.addClass("am-active").siblings().removeClass("am-active");

        let str = '';
        res.data.userList.forEach((item,idx)=>{
            let userType = item.userType=== 1?'超级管理员':'管理员';
            let joinTime = getLocalTime(item.joinTime);
            str+=`
             <tr>
                <td><input class="checkbox-item" type="checkbox"></td>
                <td>${idx+1}</td>
                <td>${item.jobNumber}</td>
                <td><a href="#">${item.userName}</a></td>
                <td>${item.mobileNumber}</td>
                <td>${item.Email}</td>
                <td>${userType}</td>
                <td class="am-hide-sm-only">${item.userPassword}</td>
                <td class="am-hide-sm-only">${joinTime}</td>
                <td>
                    <div class="am-btn-toolbar">
                        <div class="am-btn-group am-btn-group-xs">
                            <button onclick="updateUserInfo(${item.jobNumber})" class="am-btn am-btn-default am-btn-xs am-text-secondary"><span
                                    class="am-icon-pencil-square-o"></span> 编辑
                            </button>
                            <button onclick="removeUserInfo(${item.jobNumber})" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                                <span class="am-icon-trash-o"></span> 删除
                            </button>
                        </div>
                    </div>
                </td>
            </tr>`;
        })

        $('#user-list').html(str)
    })

}
let findUserInfoByAll = ()=>{
    let url = rootPath + '/user/findUserInfoByAll';
    let params = {pagesize:pagesize, page:page};
    findUserInfo(url,params);
}
let findUserInfoByOne = (url,jobNumber)=>{
    $.post(url,{jobNumber:jobNumber},(res)=>{
        if(!res){return;}
        $('#jobNumber1').val(res.data.userList[0].jobNumber);
        $('#userName1').val(res.data.userList[0].userName);
        $('#mobileNumber1').val(res.data.userList[0].mobileNumber);
        $('#E-mail1').val(res.data.userList[0].Email);
        $('#userPassword1').val(res.data.userList[0].userPassword);
        $('#confirmPassword1').val(res.data.userList[0].userPassword);
        $('#userTypeCheckbox')[0].checked =res.data.userList[0].userType === 1?true:false;
    })

}

// 查找所有管理员
findUserInfoByAll();
// 关键字查询
$('#find-key-word-btn').on('click',()=>{
    let url = rootPath + '/user/findUserInfoByKw';
    let params = {pagesize:pagesize, page:page,keyword:$('#find-key-word').val()};
    findUserInfo(url,params);
})


//新增管理员
$('#add-admin-btn').on("click",()=>{
    $('#manage-admin').css('display','none');
    $('#add-admin').css('display','block');
})
//取消新增
$('#cannel-add-btn').on("click",()=>{
    $('#manage-admin').css('display','block');
    $('#add-admin').css('display','none');
    findUserInfoByAll();
})
// 新增管理员
$('#confirmPassword').on('blur',()=>{
    if($('#userPassword').val() !== $('#confirmPassword').val()){
        $('#pwd-tips').html('两次输入密码不一致！');
    }else {
        $('#pwd-tips').html('');
    }
});
$('#add-admin-save-btn').on('click',()=>{
    let obj = {
        jobNumber:$('#jobNumber').val(),
        userName:$('#userName').val(),
        mobileNumber:$('#mobileNumber').val(),
        Email:$('#E-mail').val(),
        userPassword:$('#userPassword').val(),
    }

    console.log(obj)

    if($('#userPassword').val() !== $('#confirmPassword').val()){
        $('#pwd-tips').html('两次输入密码不一致！');
    }else if($('#jobNumber').val() && $('#userName').val() && $('#mobileNumber').val()&&$('#E-mail').val()&&$('#userPassword').val()){
        $('#pwd-tips').html('');
        // 发送ajax请求
        let url = rootPath + '/user/addUserInfo';
        $.post(url,obj,(res)=>{
            console.log(res)
            if(res.err === -1){
                alert('添加失败，该用户已存在!')
            }else {
                alert('添加成功!')
            }
        })
    }else{
        alert('你还没填完你的信息！')
    }
})


// 删除单个管理员
let removeUserInfo = (jobNumber)=>{
    let url = rootPath + '/user/removeUserInfo';
    $.post(url,{jobNumber},(res)=>{
        if(res.err === -1){
            alert('删除失败！');
            return ;
        }
        findUserInfoByAll();
    })
}
// 批量删除的全选
$("#all-checkbok").on('click',()=>{
    for(let i=1;i<$(':checkbox').length;i++){
        let temp =  $(':checkbox')[0].checked;
        $(':checkbox')[i].checked = temp;
    }
})
// 批量删除
$('#more-remove').on('click',()=>{
    let url = rootPath = '/user/removeUserInfoMany';
    let jobNumberArr = [];
    $(':checked').filter('.checkbox-item').each((idx,item)=>{
        jobNumberArr.push($(item).parent().next().next().html());
    })
    console.log(jobNumberArr)
    let str =  jobNumberArr.join('-');
    $.post(url,{jobNumberArr:str},(res)=>{
        if(res.err === 0){
            alert('删除成功！');
            $(':checked').filter('.checkbox-item').each((idx,item)=>{
                $(item).parent().parent().remove();
            })
        }
    })
})


// 修改管理员信息
$('#add-admin-btn').on("click",()=>{
    $('#manage-admin').css('display','none');
    $('#add-admin').css('display','block');
})
$('#confirmPassword1').on('blur',()=>{
    if($('#userPassword1').val() !== $('#confirmPassword1').val()){
        $('#pwd-tips1').html('两次输入密码不一致！');
    }else {
        $('#pwd-tips1').html('');
    }
});
$('#goback-manage-admin').on('click',()=>{
    $('#manage-admin').css('display','block');
    $('#add-admin').css('display','none');
    $('#update-admin').css('display','none');
    findUserInfoByAll();
})
let updateUserInfo = (jobNumber)=>{
    $('#manage-admin').css('display','none');
    $('#add-admin').css('display','none');
    $('#update-admin').css('display','block');
    // 先查找管理员信息
    let url = rootPath + '/user/findUserInfoByOne';
    findUserInfoByOne(url,jobNumber);
    $('#jobNumber1')[0].disabled=true;
}
$('#admin-update-btn').on('click',()=>{
    let obj = {
        jobNumber:$('#jobNumber1').val(),
        userName:$('#userName1').val(),
        mobileNumber:$('#mobileNumber1').val(),
        Email:$('#E-mail1').val(),
        userPassword:$('#userPassword1').val(),
        userType:$('#userTypeCheckbox')[0].checked === true?1:0
}
    console.log(obj)
    let url = rootPath + '/user/updateUserInfo';
    $.post(url,obj,(res)=>{
        console.log(res)
        if(res.err === 0){
            alert('修改成功！');
        }
    });
    findUserInfoByAll();

})

$('#set-pagesize-btn').on('click',()=>{
    pagesize = $('#set-pagesize-val').val();
    findUserInfoByAll();
})
