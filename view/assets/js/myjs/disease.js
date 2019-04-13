$('#add-disease').css('display','none');
$('#update-disease').css('display','none');
$('#prescribing-drugs').css('display','none');

$('#new-add-disease').on('click',()=>{
    $('#add-disease').css('display','block');
    $('#update-disease').css('display','none');
    $('#disease-manage').css('display','none');
    $('#prescribing-drugs').css('display','none');
})
let rootPath='http://127.0.0.1:3000';
let pagesize = 5;
let page = 1;
let currentPage = 1;
let totalPage = 0;
let diseaseTypeArr = ['其他类别','感觉障碍','知觉障碍','注意障碍','记忆障碍','思维障碍','情感障碍','意志障碍','行为障碍','意识障碍','智力障碍','人格障碍'];
let addNewDiseaseInfo = ()=>{
    let obj = {
        diseaseId:$('#add-user-id').val(),
        diseaseName:$('#add-user-name').val(),
        diseaseMobile:$('#add-user-phone').val(),
        diseaseSex:$('.sex-radio').filter(':checked').val(),
        diseaseBirthday:Date.parse($('#add-user-day').val()),
        diseaseType:$('.select-disease-type option').filter(':checked').val(),
        diseaseJob:$('#add-user-job').val(),
        diseaseAllergyDrugs:$('#add-allergy-drugs').val(),
    }
    let url = rootPath + '/disease/addDiseaseInfo';

    if(!chickCard(obj.diseaseId)){return ;}
    if(!checkPhone(obj.diseaseMobile)){return ;}
    if(obj.diseaseBirthday&&obj.diseaseId&&obj.diseaseJob&& obj.diseaseMobile&&obj.diseaseType&&obj.diseaseSex&&obj.diseaseName){
        $.post(url,obj,(res)=>{
            if(res.err === 0){
                alert('添加成功！');
            }else{
                alert('添加失败！');
            }
        })
    }else {
        alert('信息不全，请完善！')
    }
};
// 验证身份证是否合法
let chickCard = (card)=>{
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(reg.test(card) === false){
        alert("身份证输入不合法");
        $("#card").val("");
        return false;
    }else{
        return true;
    }
};
let checkPhone = (phone)=>{
    if(!(/^1[34578]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }else{
        return true;
    }
};

// 渲染diseaseList
let render = (res)=>{
    $('.disease-list-total').html(`共 ${res.data.total} 条数据`);
    // 生成页码
    let str = '';
    let PageNum = Math.ceil(res.data.total/pagesize);
    totalPage = PageNum;
    var strPage = `<li class=""><span  onclick="setPage(${pagesize},${currentPage-1})">«</span></li>`;
    for(let i=1;i<=PageNum;i++){strPage += `<li><span onclick="setPage(${pagesize},${i})">${i}</span></li>`;}
    strPage+=` <li><span onclick="setPage(${pagesize},${currentPage+1})">»</span></li>`;
    $(".page").html(strPage);
    var thisli = $(".page li").eq(currentPage);
    thisli.addClass("am-active").siblings().removeClass("am-active");

    // 渲染
    res.data.diseaseList.forEach((item,idx)=>{
        str+=`
                 <tr>
                    <td><input type="checkbox" class="checkbox-item"></td>
                    <td>${idx+1}</td>
                    <td>${item.diseaseId}</td>
                    <td>${item.diseaseName}</td>
                    <td class="am-hide-sm-only">${diseaseTypeArr[item.diseaseType-1]}</td>
                    <td class="am-hide-sm-only">${getLocalTime(item.diseaseBirthday)}</td>
                    <td class="am-hide-sm-only">${item.diseaseAllergyDrugs}</td>
                    <td>
                        <div class="am-btn-toolbar">
                            <div class="am-btn-group am-btn-group-xs">
                                <button onclick="seeDiseaseInfoDetails('${item.diseaseId}')" class="am-btn am-btn-default am-btn-xs am-text-secondary">
                                <span class="am-icon-pencil-square-o"></span> 查看详情并开药
                                </button>
                               
                                <button onclick="removeDiseaseInfoByOne('${item.diseaseId}')" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                                    <span class="am-icon-trash-o"></span> 删除
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>`;
    })
    $('#diseaseList').html(str);

};

// 查找所有病患信息
let setPage = (pagesize,page)=>{
    if(page === 0 || page>totalPage){return;}
    currentPage = page;
    findDiseaseInfoByAll(pagesize,page);
};
let findDiseaseInfoByAll = (pagesize,page) =>{
    let url = rootPath + '/disease/findDiseaseInfoByAll';
    let params = {
        pagesize:pagesize,
        page:page
    }
    $.post(url,params,(res)=>{
        if(res.err === -1 || res.data.diseaseList.length == 0){return ;}
        render(res);
    })
};

let findDiseaseInfoByType = (diseaseType)=>{
    let url = rootPath + '/disease/findDiseaseInfoByType';
    let params = {
        diseaseType:diseaseType,
        pagesize:pagesize,
        page:page
    }
    $.post(url,params,(res)=>{
        if(res.err === 0){
            render(res);
            $(".page").html('');
        }
    })
}
let findDiseaseInfoByOne = (diseaseId)=>{
    let url = rootPath + '/disease/findDiseaseInfoByOne';
    $.post(url,{diseaseId:diseaseId},(res)=>{
        if(res.err === -1 || res.data.diseaseList.length === 0){alert('没有这个人！'); return ;}
        render(res);
    })
}
let removeDiseaseInfoByOne = (diseaseId)=>{
    let url = rootPath + '/disease/removeDiseaseInfo';
    $.post(url,{diseaseId:diseaseId},(res)=>{
        if(res.err === -1){
            alert('删除失败！');
            return ;
        }
        findDiseaseInfoByAll(pagesize,page);
    })
};
let seeDiseaseInfoDetails = (diseaseId)=>{
    $('#update-disease').css('display','block');
    $('#add-disease').css('display','none');
    $('#disease-manage').css('display','none');
    // 先做查询
    let url = rootPath + '/disease/findDiseaseInfoByOne';
    $.post(url,{diseaseId:diseaseId},(res)=>{

        if(res.err === -1 || res.data.diseaseList.length === 0){alert('没有这个人！'); return ;}
        $('#update-disease-name').val(res.data.diseaseList[0].diseaseName)
        $('#update-disease-id').val(res.data.diseaseList[0].diseaseId).attr("disabled", "disabled");
        $('#update-disease-phone').val(res.data.diseaseList[0].diseaseMobile)
        res.data.diseaseList[0].diseaseSex == 1?$('#update-user-sex-male').attr('checked','checked'):$('#update-user-sex-female').attr('checked','checked');
        $('#update-disease-day').val(timeStampToDate(res.data.diseaseList[0].diseaseBirthday).split(' ')[0]);
        $('#update-disease-job').val(res.data.diseaseList[0].diseaseJob)

        // console.log($('#select-update-disease-type')[0].getAttribute('data-am-selected'))
        $('#select-update-disease-type option').each((idx,item)=>{

            if(idx+1 === res.data.diseaseList[0].diseaseType*1){
                item.setAttribute("checked",true)
                return ;
            }

        })
        $('#update-allergy-drugs').val(res.data.diseaseList[0].diseaseAllergyDrugs)

    })
}
let updateDiseaseInfo = (diseaseId)=>{

}

findDiseaseInfoByAll(pagesize,page);

// 批量删除
//批量删除的全选
$("#all-checkbok").on('click',()=>{
    for(let i=1;i<$(':checkbox').length;i++){
        let temp =  $(':checkbox')[0].checked;
        $(':checkbox')[i].checked = temp;
    }
})
$('#more-remove').on('click',()=>{
    let url = rootPath + '/disease/removeDiseaseInfoMany';
    let diseaseIdArr = [];
    $(':checked').filter('.checkbox-item').each((idx,item)=>{
        diseaseIdArr.push($(item).parent().next().next().html());
    })
    console.log($(':checked').filter('.checkbox-item'))
    let str =  diseaseIdArr.join('-');
    $.post(url,{diseaseIdArr:str},(res)=>{
        if(res.err === 0){
            alert('删除成功！');
        }
    })
    findDiseaseInfoByAll(pagesize,page);
})


// 查找单个病患
$('#find-disease-id-btn').on('click',function(res){
    let diseaseId = $.trim($(this).next().val());
    findDiseaseInfoByOne(diseaseId)
});

//查找所有
$('#find-by-disease-all-btn').on('click',()=>{
   let res = findDiseaseInfoByAll(pagesize,page);
   console.log(res)
});
// 按类别查找
$('#find-by-disease-btn').on('click',()=>{
    let diseaseType = $('.find-diseaseinfo-by-type option').filter(':checked').val();
    findDiseaseInfoByType(diseaseType);
});
// 添加病患
$('#add-disease-back-btn').on('click',()=>{
    $('#add-disease').css('display','none');
    $('#disease-manage').css('display','block');
});
$('#add-disease-btn').on('click',()=>{
    addNewDiseaseInfo();
})

// 查看病患详细信息返回按钮
$('#see-diseasei-info-back').on('click',()=>{
    $('#update-disease').css('display','none');
    $('#add-disease').css('display','none');
    $('#disease-manage').css('display','block');
})

// 选项卡
$('.choose-care').on('click','li',function () {
    $(this).css('background','#0e90d2').siblings().css('background','skyblue');
    console.log($(this).attr('data-value'))
    switch ($(this).attr('data-value')*1){
        case 1:$('#new-medicine').css('display','block').siblings().css('display','none');break;
        case 2:$('#histroy-medicine').css('display','block').siblings().css('display','none');break;
        case 3:$('#yaodian').css('display','block').siblings().css('display','none');break;
    }
})