var Cookie = {
    setCookie : function(name,value,date,path){
        // document.cookie = name+"="+value+"; expires="+date+"; path="+path;
        var res = name+"="+value;
        if(date){
            res += "; expires="+date;
        }
        if(path){
            res += "; path="+path;
        }
        document.cookie = res;

    },
    getCookie : function(name){
        var cookies = document.cookie;
        var cookiesArr = cookies.split("; ");
        // top
        // ["left=200","top=200"]
        for(var i=0;i<cookiesArr.length;i++){
            var arr = cookiesArr[i].split("=");
            if(arr[0] == name){
                return arr[1];
            }
        }

        return "";
    },
    removeCookie : function(name,value,path){
        //利用过期时间设置cookie
        var d = new Date();
        d.setDate(d.getDate()-1);
        Cookie.setCookie(name,value,d.toUTCString(),path);
    }
}