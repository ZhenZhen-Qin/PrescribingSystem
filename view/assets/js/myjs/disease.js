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
let allergyDrugsArr = [];  //存放过敏药物
let newChooseMedicineArr = [];
let diseaseTypeArr = ['其他类别','感觉障碍','知觉障碍','注意障碍','记忆障碍','思维障碍','情感障碍','意志障碍','行为障碍','意识障碍','智力障碍','人格障碍'];
let addNewDiseaseInfo = ()=>{
    console.log($('#allergy-select-item option').filter(':checked').html())
    let obj = {
        diseaseId:$('#add-user-id').val(),
        diseaseName:$('#add-user-name').val(),
        diseaseMobile:$('#add-user-phone').val(),
        diseaseSex:$('.sex-radio').filter(':checked').val(),
        diseaseBirthday:Date.parse($('#add-user-day').val()),
        diseaseType:$('.select-disease-type option').filter(':checked').val(),
        diseaseJob:$('#add-user-job').val(),
        diseaseAllergyDrugs:diseaseelectedAllergy.join('，'),
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
        $('#update-allergy-drugs').val(res.data.diseaseList[0].diseaseAllergyDrugs);
        allergyDrugsArr = res.data.diseaseList[0].diseaseAllergyDrugs.split('，')
    })
}

let deleteChooseNewMedicne = (idx)=>{
    newChooseMedicineArr.remove(newChooseMedicineArr[idx]);
    let str = '';
    newChooseMedicineArr.map((item,idx)=>{
        str+=`
            <tr>
                <td>${idx+1}</td>
                <td>${item.name}</td>
                <td>${item.num}</td>
                <td>
                    <button onclick="deleteChooseNewMedicne(${idx})" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                        <span class="am-icon-trash-o"></span> 删除
                    </button></td>
            </tr>`;
    })
    $('#chooseCureDiseaseList').html(str)
    console.log(newChooseMedicineArr)
}
//药典里的change事件的查询
let selectMedicineInfo = ()=>{
    let medicineSeleValue = $('#find-medicine-name-btn').val();
    console.log(medicineSeleValue)

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
});
// 新药选择
$('#choose-new-medicine-btn').on('click',function () {
    let obj = {
         name : $('#choose-new-medicine-name').val(),
         num : $('#choose-new-medicine-num').val()
    }
    let nameArr = [];
    newChooseMedicineArr.map((item,idx)=>{
        nameArr.push(item.name);
    })
    if(nameArr.indexOf(obj.name)!=-1){
        alert('该药已存在！')
        return ;
    }
    if(obj.name===''){alert('请输入药品名称');return;}
    newChooseMedicineArr.push(obj);
    $('#choose-new-medicine-name').val("");
    $('#choose-new-medicine-num').val("1");
    console.log(newChooseMedicineArr)
    let str = '';
    newChooseMedicineArr.map((item,idx)=>{
        str+=`
            <tr>
                <td>${idx+1}</td>
                <td>${item.name}</td>
                <td>${item.num}</td>
                <td>
                    <button onclick="deleteChooseNewMedicne(${idx})" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
                        <span class="am-icon-trash-o"></span> 删除
                    </button></td>
            </tr>`;
    })
    $('#chooseCureDiseaseList').html(str)
});

// 选择药典，点击半透明时关闭药典查询
$('#yaodian-mask').on('click',function () {
    $(this).parent().css('display','none')
})

// 确认开药，判断过敏药物
$('#confirmOpenMedicine').on('click',()=>{
    //判断过敏药物
    let nameArr = [];
    newChooseMedicineArr.map((item,idx)=>{
        nameArr.push(item.name);
    })
    allergyDrugsArr.map((item,idx)=>{
        if(nameArr.indexOf(item)!== -1){
            alert('你所开的处方中存在过敏药物！')
            return ;
        }else{
            console.log(newChooseMedicineArr)
            let str = '';
            newChooseMedicineArr.map((item,idx)=>{
                str += `
                药品${idx+1}:${item.name},数量：${item.num},
                `;
            })
            alert(`你所开的处方为：${str}请再次确认你所开的处方！`)
        }
    })
    //  保存新药方












})


// 选择过敏的二级联动
let allergyArr = new  Array();
let diseaseelectedAllergy = [];

allergyArr[0 ]="无";
allergyArr[1 ]="青霉素，氨基苄青霉素，链霉素，卡那霉素";
allergyArr[2 ]="磺胺噻唑，磺胺嘧啶，长效磺胺，复方新诺明";
allergyArr[3 ]="鲁米那，安定";
allergyArr[4 ]="阿司匹林，去痛片";
allergyArr[5 ]="普鲁卡因，";
allergyArr[6 ]="丙种胎盘球蛋白，动物血清";
allergyArr[7 ]="乙肝疫苗，麻花疫苗，水痘疫苗";
allergyArr[8 ]="白僵蚕，水蛭，地龙，蜂乳，乌贼骨，蟾蜍，穿心莲，板蓝根，番泻叶，丹参，红花，大黄，三七"

let init = ()=>
{
    var city = document.getElementById("allergy-select-item");
    var cityArr = allergyArr[0].split("，");
    for(var i=0;i<cityArr.length;i++)
    {
        city[i]=new Option(cityArr[i],cityArr[i]);
    }
}
let getMedicine = ()=>
{
    var pro = document.getElementById("allergy-select");
    var city = document.getElementById("allergy-select-item");
    var index = pro.selectedIndex;
    var cityArr = allergyArr[index].split("，");

    city.length = 0;
    //将城市数组中的值填充到城市下拉框中
    for(var i=0;i<cityArr.length;i++)
    {
        city[i]=new Option(cityArr[i],cityArr[i]);
    }
}
let saveMedicine =  ()=>{
    let val = $('#allergy-select-item option').filter(':checked').html();
    let $span = $('<span>&times;</span>')
    let $b = $('<b>'+val+'</b>')
    let $li = $('<li />');
    $li.append($b);
    $li.append($span);
    $span[0].addEventListener('click',function () {
        $(this).parent().remove();
        diseaseelectedAllergy.remove($(this).prev().html());
    })
    if(diseaseelectedAllergy.indexOf(val) !==-1){alert('你已经选择了该药物');return;}
    $('#selected-allergy').append($li);
    diseaseelectedAllergy.push(val)
}