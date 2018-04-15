var arr = [

    "北京",[
        "海淀",["海淀1","海淀2","海淀3"],
        "朝阳",["朝阳1","朝阳2","朝阳3"]
    ],
    "福建",[
        "厦门",["厦门1","厦门2","厦门3"],
        "福州",["福州1","福州2","福州3"]
    ],
    "河北",[
        "张家口",["张家口1","张家口2","张家口3"],
        "石家庄",["石家庄1","石家庄2","石家庄3"]
    ]
];
var pro = document.getElementById("pro");
var city = document.getElementById("city");
var county = document.getElementById("county");

for(var i=0;i<arr.length;i++){
    if(typeof arr[i]=="string" ){
        /*var option = document.createElement("option");
         option.innerHTML = arr[i];
         pro.appendChild(option);*/

        pro.add( new Option(arr[i],arr[i]));

    }
}
pro.onchange=function(){
    for(var i=0;i<arr.length;i++){
        if (typeof arr[i]=="string"){
            if (pro.value==arr[i]){
                var brr=arr[i+1];
                city.innerHTML = "";
                for(var j=0;j<brr.length;j++){
                    if(typeof brr[j]=="string" ){
                        city.add( new Option(brr[j],brr[j]));
                    }
                }
            }
        }
    }
};

city.onchange = function(){

    for(var i=0;i<arr.length;i++){

        if(typeof arr[i]!="string"){
            var brr = arr[i];
            for(var j=0;j<brr.length;j++){

                if(typeof brr[j]=="string"){

                    if(brr[j]==city.value){
                        var crr = brr[j+1];
                        county.innerHTML = "";
                        for(var k=0;k<crr.length;k++){
                            county.add(  new Option(crr[k],crr[k]) );
                        }

                    }

                }

            }

        }

    }

}

