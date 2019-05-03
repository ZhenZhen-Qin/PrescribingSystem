define({ "api": [
  {
    "type": "post",
    "url": "/Medicine/findMedicineByKw",
    "title": "findMedicineByKw",
    "name": "findMedicineByKw",
    "group": "Medicine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>模糊查询的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/medicineAdmin.js",
    "groupTitle": "Medicine"
  },
  {
    "type": "post",
    "url": "/cureDisease/addCureDiseaseInfo",
    "title": "addCureDiseaseInfo",
    "name": "addCureDiseaseInfo",
    "group": "cureDisease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseID",
            "description": "<p>病患id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseName",
            "description": "<p>病患姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cureDiseaseTime",
            "description": "<p>治病时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cureDiseaseDesc",
            "description": "<p>治疗方案描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attendingDoctorName",
            "description": "<p>主治医生姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobNumber",
            "description": "<p>主治医生工号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prescribingDrugs",
            "description": "<p>处方</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "cureDisease"
  },
  {
    "type": "post",
    "url": "/cureDisease/findCureDiseaseByAll",
    "title": "findCureDiseaseByAll",
    "name": "findCureDiseaseByAll",
    "group": "cureDisease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "cureDisease"
  },
  {
    "type": "post",
    "url": "/disease/addDiseaseInfo",
    "title": "addDiseaseInfo",
    "name": "addDiseaseInfo",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseName",
            "description": "<p>病患姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseMobile",
            "description": "<p>病患手机</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "diseaseSex",
            "description": "<p>病患性别</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "diseaseType",
            "description": "<p>病患类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseBirthday",
            "description": "<p>病患出生年月</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseAllergyDrugs",
            "description": "<p>过敏药物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseJob",
            "description": "<p>病患职业</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseByKw",
    "title": "findDiseaseByKw",
    "name": "findDiseaseByKw",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>模糊查询的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseByKw",
    "title": "findDiseaseByKw",
    "name": "findDiseaseByKw",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>模糊查询的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseInfoByAll",
    "title": "findDiseaseInfoByAll",
    "name": "findDiseaseInfoByAll",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseInfoByOne",
    "title": "findDiseaseInfoByOne",
    "name": "findDiseaseInfoByOne",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患身份证</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseInfoByOne",
    "title": "findDiseaseInfoByOne",
    "name": "findDiseaseInfoByOne",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患身份证</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseInfoByType",
    "title": "findDiseaseInfoByType",
    "name": "findDiseaseInfoByType",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseType",
            "description": "<p>病患所属类别ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/findDiseaseInfoByType",
    "title": "findDiseaseInfoByType",
    "name": "findDiseaseInfoByType",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseType",
            "description": "<p>病患所属类别ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/removeDiseaseInfo",
    "title": "removeDiseaseInfo",
    "name": "removeDiseaseInfo",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患身份证</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/removeDiseaseInfo",
    "title": "removeDiseaseInfo",
    "name": "removeDiseaseInfo",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患身份证</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/removeDiseaseInfoMany",
    "title": "removeDiseaseInfoMany",
    "name": "removeDiseaseInfoMany",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "diseaseIdArr",
            "description": "<p>病患Id数组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/removeDiseaseInfoMany",
    "title": "removeDiseaseInfoMany",
    "name": "removeDiseaseInfoMany",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "diseaseIdArr",
            "description": "<p>病患Id数组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/updateDiseaseInfo",
    "title": "updateDiseaseInfo",
    "name": "updateDiseaseInfo",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseName",
            "description": "<p>病患姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseMobile",
            "description": "<p>病患手机</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "diseaseSex",
            "description": "<p>病患性别</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "diseaseType",
            "description": "<p>病患类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseBirthday",
            "description": "<p>病患出生年月</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseAllergyDrugs",
            "description": "<p>过敏药物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseJob",
            "description": "<p>病患职业</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/cureDiseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/disease/updateDiseaseInfo",
    "title": "updateDiseaseInfo",
    "name": "updateDiseaseInfo",
    "group": "disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseId",
            "description": "<p>病患id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseName",
            "description": "<p>病患姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseMobile",
            "description": "<p>病患手机</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "diseaseSex",
            "description": "<p>病患性别</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "diseaseType",
            "description": "<p>病患类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseBirthday",
            "description": "<p>病患出生年月</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseAllergyDrugs",
            "description": "<p>过敏药物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diseaseJob",
            "description": "<p>病患职业</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/diseaseAdmin.js",
    "groupTitle": "disease"
  },
  {
    "type": "post",
    "url": "/medicine/addMedicineInfo",
    "title": "addMedicineInfo",
    "name": "addMedicineInfo",
    "group": "medicine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "batchNumber",
            "description": "<p>生产批号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "medicineName",
            "description": "<p>药名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pharmaceuticalCompany",
            "description": "<p>制药公司</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "medicineProduceDate",
            "description": "<p>生产时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockBalance",
            "description": "<p>库存量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "medicineDesc",
            "description": "<p>药物描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MedicineAllergyDrugs",
            "description": "<p>过敏药物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MedicineJob",
            "description": "<p>病患职业</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/medicineAdmin.js",
    "groupTitle": "medicine"
  },
  {
    "type": "post",
    "url": "/user/addUserInfo",
    "title": "addUserInfo",
    "name": "addUserInfo",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobNumber",
            "description": "<p>工号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userType",
            "description": "<p>类别（是否是管理员，0,1）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>部门</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "joinTime",
            "description": "<p>部门</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/checkUserLogin",
    "title": "checkUserLogin",
    "name": "checkUserLogin",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobNumber",
            "description": "<p>工号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/findUserInfoByAll",
    "title": "findUserInfoByAll",
    "name": "findUserInfoByAll",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>页长</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>第几页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/findUserInfoByKw",
    "title": "findUserInfoByKw",
    "name": "findUserInfoByKw",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>模糊查询的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/findUserInfoByOne",
    "title": "findUserInfoByOne",
    "name": "findUserInfoByOne",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobNumber",
            "description": "<p>工号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/removeUserInfo",
    "title": "removeUserInfo",
    "name": "removeUserInfo",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobNumber",
            "description": "<p>工号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/removeUserInfoMany",
    "title": "removeUserInfoMany",
    "name": "removeUserInfoMany",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "jobNumberArr",
            "description": "<p>工号数组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/updateUserInfo",
    "title": "updateUserInfo",
    "name": "updateUserInfo",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobNumber",
            "description": "<p>工号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userType",
            "description": "<p>类别（是否是管理员，0,1）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>部门</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "joinTime",
            "description": "<p>部门</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码 0：ok  -1 失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userAdmin.js",
    "groupTitle": "user"
  }
] });
