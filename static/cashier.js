//取得需要互動的html元素
var username = document.getElementById("name");
var data = document.getElementById("datetimepicker");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var first = document.getElementById("first");
var second = document.getElementById("second");
var normal = document.getElementById("normal");
var year70normal = document.getElementById("year70normal");
var year70glory = document.getElementById("year70glory");
var bless= document.getElementById("bless");   
var disabled = document.getElementById("disabled");
var year3 = document.getElementById("year3");
var other = document.getElementById("other");
var normalglory = document.getElementById("normalglory");//8 6
var diabetes = document.getElementById("diabetes");//9 7 
var diabetesglory = document.getElementById("diabetesglory");//10 8
var ptivs = document.getElementById("ptivs");//11 9 
var ptivsfamily = document.getElementById("ptivsfamily");//12 10
var vip = document.getElementById("vip");//13 11
var familyfriend = document.getElementById("familyfriend");//14 12 
var straightfamily = document.getElementById("straightfamily");//15 13
var disabledyear70glory = document.getElementById("disabledyear70glory");//16 14 
var disabledyear70normal = document.getElementById("disabledyear70normal");//17 15
var bigdisabled = document.getElementById("bigdisabled");//18 16
var registered = document.getElementById("registered");
var part = document.getElementById("part");
var otherpart = document.getElementById("otherpart");
var otherpartsure = document.getElementById("otherpartsure");
var eye = document.getElementById("eye");
var skin = document.getElementById("skin");
var total = document.getElementById("total");
var totalsure = document.getElementById("totalsure");
var ins = document.getElementById("ins");
var totalsum = document.getElementById("totalsum");
var totalsumsure = document.getElementById("totalsumsure");
var delet = document.getElementById("delet");
var tb1 = document.getElementById("1");
var tb2 = document.getElementById("2");
var tb3 = document.getElementById("3");
var tb4 = document.getElementById("4");
var tb5 = document.getElementById("5");
var tb6 = document.getElementById("6");
var tb7 = document.getElementById("7");
var tb8= document.getElementById("8");
otherpart.value = 0;
var firstsecond;
var person;
var selffee = 0;
total.textContent = 0;
no.addEventListener("click",function(){//沒有健保
    buttonchange(yesnocss,no);
    if(!no.event){//有沒有按過
        var insElement = document.getElementById('ins');
        var newHTML = '<td id="ins2"><input type="text" placeholder="自費金額" class="money" id="self"/><button type="button" style="border-radius: 10px;" id="selfsure">確定</button></td>';
        insElement.insertAdjacentHTML('afterend', newHTML);        
    }
    no.event = true;//按過一次
    var self = document.getElementById("self");
    var selfsure = document.getElementById("selfsure");
    selfsure.addEventListener("click",function(){
        var selfclick = new condition()
        selfclick.partshow(0);
        selfclick.registeredshow(0);
        selfclick.totalshow(self.value);
        selffee = self.value
        var insElement = document.getElementById('ins2');
        insElement.innerHTML = null;
        no.event = false;
    });
});
var yesnocss = [yes,no];
var firstsecondcss = [first,second];
var peoplecss = [normal,year70normal,year70glory,bless,disabled,year3,other,normalglory,diabetes
    ,diabetesglory,ptivs,ptivsfamily,vip,familyfriend,straightfamily,straightfamily,disabledyear70glory
    ,disabledyear70glory,disabledyear70normal,bigdisabled];
var eyeskincss = [eye,skin];               
                // 0    1   2   3   4  5   6  7 8  91011 1213 1415 16
var firstregarr = [150,100,100,100,150,50,150,50,50,100,50,50,50,50,100,100,150];
var secondregdarr = [100,50,50,50,100,0,100,0,0,50,0,0,0,0,50,50,100];
                //  0   1 2 3 4 5  6 7  8 9  1011 121314 1516
var firstpartarr = [50,50,0,0,0,50,0,50,0,50,50,0,50,0,0,0,0];
var secondpartarr = [50,50,0,0,0,50,0,50,0,50,50,0,50,0,0,0,0];
yes.addEventListener("click",function(){//有健保
    buttonchange(yesnocss,yes);
    first.addEventListener("click",function(){//初診
        buttonchange(firstsecondcss,first);
        firstsecond = "初診";
        normal.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,normal);
            var normalclick = new condition;
            normalclick.registeredshow(firstregarr[0]);
            normalclick.partshow(firstpartarr[0]);
            normalclick.totalshow(firstregarr[0]+firstpartarr[0]);
            otherpartsure.addEventListener("click",function(){
                normalclick.totalshow(firstregarr[0]+firstpartarr[0]+parseInt(otherpart.value));
            }); 
        });
        year70normal.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,year70normal);
            var year70normalclick = new condition;
            year70normalclick.registeredshow(firstregarr[1]);
            year70normalclick.partshow(firstpartarr[1]);
            year70normalclick.totalshow(firstregarr[1]+firstpartarr[1]);
            otherpartsure.addEventListener("click",function(){
                year70normalclick.totalshow(firstregarr[1]+firstpartarr[1]+parseInt(otherpart.value));
            }); 
        });
        year70glory.addEventListener("click",function(){
            buttonchange(peoplecss,year70glory);
            person = "榮保";
            var year70gloryclick = new condition;
            year70gloryclick.registeredshow(firstregarr[2]);
            year70gloryclick.partshow(firstpartarr[2]);
            year70gloryclick.totalshow(firstregarr[2]+firstpartarr[2]);
            otherpartsure.addEventListener("click",function(){
                year70gloryclick.totalshow(firstregarr[2]+firstpartarr[2]+parseInt(otherpart.value));
            }); 
        });
        bless.addEventListener("click",function(){
            buttonchange(peoplecss,bless);
            person = "福保";
            var blessclick = new condition;
            blessclick.registeredshow(firstregarr[3]);
            blessclick.partshow(firstpartarr[3]);
            blessclick.totalshow(firstregarr[3]+firstpartarr[3]);
            otherpartsure.addEventListener("click",function(){
                blessclick.totalshow(firstregarr[3]+firstpartarr[3]+parseInt(otherpart.value));
            }); 
        });
        year3.addEventListener("click",function(){
            buttonchange(peoplecss,year3);
            person = "殘障";
            var year3click = new condition;
            year3click.registeredshow(firstregarr[4]);
            year3click.partshow(firstpartarr[4]);
            year3click.totalshow(firstregarr[4]+firstpartarr[4]);
            otherpartsure.addEventListener("click",function(){
                year3click.totalshow(firstregarr[4]+firstpartarr[4]+parseInt(otherpart.value));
            }); 
        });
        disabled.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,disabled);
            var disabledclick = new condition;
            disabledclick .registeredshow(firstregarr[5]);
            disabledclick .partshow(firstpartarr[5]);
            disabledclick.totalshow(firstregarr[5]+firstpartarr[5]);
            otherpartsure.addEventListener("click",function(){
                disabledclick.totalshow(firstregarr[5]+firstpartarr[5]+parseInt(otherpart.value));
            }); 
        });
        other.addEventListener("click",function(){
            buttonchange(peoplecss,other);
            if(!other.event){//有沒有按過
                var insElement = document.getElementById('ins');
                var newHTML = '<td id="ins2"><input type="text" placeholder="自費金額" class="money" id="self"/><button type="button" style="border-radius: 10px;" id="selfsure">確定</button></td>';
                insElement.insertAdjacentHTML('afterend', newHTML);        
            }
            other.event = true;//按過一次
            var self = document.getElementById("self");
            var selfsure = document.getElementById("selfsure");
            selfsure.addEventListener("click",function(){
                var selfclick = new condition()
                selfclick.partshow(0);
                selfclick.registeredshow(0);
                selfclick.totalshow(self.value);
                selffee = self.value
                var insElement = document.getElementById('ins2');
                insElement.innerHTML = null;
                other.event = false;
            });
        });
        normalglory.addEventListener("click",function(){
            buttonchange(peoplecss, normalglory);
            person = "榮保";
            var  normalgloryclick = new condition;
            normalgloryclick.registeredshow(firstregarr[6]);
            normalgloryclick.partshow(firstpartarr[6]);
            normalgloryclick.totalshow(firstregarr[6]+firstpartarr[6]);
            otherpartsure.addEventListener("click",function(){
                normalgloryclick.totalshow(firstregarr[6]+firstpartarr[6]+parseInt(otherpart.value));
            }); 
        });
        diabetes.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,diabetes);
            var diabetesclick = new condition;
            diabetesclick.registeredshow(firstregarr[7]);
            diabetesclick.partshow(firstpartarr[7]);
            diabetesclick.totalshow(firstregarr[7]+firstpartarr[7]);
            otherpartsure.addEventListener("click",function(){
                diabetesclick.totalshow(firstregarr[7]+firstpartarr[7]+parseInt(otherpart.value));
            }); 
        });
        
        diabetesglory.addEventListener("click",function(){
            buttonchange(peoplecss, diabetesglory);
            person = "榮保";
            var  diabetesgloryclick = new condition;
            diabetesgloryclick.registeredshow(firstregarr[8]);
            diabetesgloryclick.partshow(firstpartarr[8]);
            diabetesgloryclick.totalshow(firstregarr[8]+firstpartarr[8]);
            otherpartsure.addEventListener("click",function(){
                diabetesgloryclick.totalshow(firstregarr[8]+firstpartarr[8]+parseInt(otherpart.value));
            }); 
        });
        ptivs.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,ptivs);
            var ptivsclick = new condition;
            ptivsclick.registeredshow(firstregarr[9]);
            ptivsclick.partshow(firstpartarr[9]);
            ptivsclick.totalshow(firstregarr[9]+firstpartarr[9]);
            otherpartsure.addEventListener("click",function(){
                ptivsclick.totalshow(firstregarr[9]+firstpartarr[9]+parseInt(otherpart.value));
            }); 
        });
        ptivsfamily.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,ptivsfamily);
            var ptivsfamilyclick = new condition;
            ptivsfamilyclick.registeredshow(firstregarr[10]);
            ptivsfamilyclick.partshow(firstpartarr[10]);
            ptivsfamilyclick.totalshow(firstregarr[10]+firstpartarr[10]);
            otherpartsure.addEventListener("click",function(){
                ptivsfamilyclick.totalshow(firstregarr[10]+firstpartarr[10]+parseInt(otherpart.value));
            }); 
        });
        vip.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,vip);
            var vipclick = new condition;
            vipclick.registeredshow(firstregarr[11]);
            vipclick.partshow(firstpartarr[11]);
            vipclick.totalshow(firstregarr[11]+firstpartarr[11]);
            otherpartsure.addEventListener("click",function(){
                vipclick.totalshow(firstregarr[11]+firstpartarr[10]+parseInt(otherpart.value));
            }); 
        });
        familyfriend.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,familyfriend);
            var familyfriendclick = new condition;
            familyfriendclick.registeredshow(firstregarr[12]);
            familyfriendclick.partshow(firstpartarr[12]);
            familyfriendclick.totalshow(firstregarr[12]+firstpartarr[12]);
            otherpartsure.addEventListener("click",function(){
                familyfriendclick.totalshow(firstregarr[12]+firstpartarr[12]+parseInt(otherpart.value));
            }); 
        });
        straightfamily.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,straightfamily);
            var straightfamilyclick = new condition;
            straightfamilyclick.registeredshow(firstregarr[13]);
            straightfamilyclick.partshow(firstpartarr[13]);
            straightfamilyclick.totalshow(firstregarr[13]+firstpartarr[13]);
            otherpartsure.addEventListener("click",function(){
                straightfamilyclick.totalshow(firstregarr[13]+firstpartarr[13]+parseInt(otherpart.value));
            }); 
        });
        disabledyear70glory.addEventListener("click",function(){
            buttonchange(peoplecss, disabledyear70glory);
            person = "榮保";
            var  disabledyear70gloryclick = new condition;
            disabledyear70gloryclick.registeredshow(firstregarr[14]);
            disabledyear70gloryclick.partshow(firstpartarr[14]);
            disabledyear70gloryclick.totalshow(firstregarr[14]+firstpartarr[14]);
            otherpartsure.addEventListener("click",function(){
                disabledyear70gloryclick.totalshow(firstregarr[14]+firstpartarr[14]+parseInt(otherpart.value));
            }); 
        });
        disabledyear70normal.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,disabledyear70normal);
            var disabledyear70normalclick = new condition;
            disabledyear70normalclick.registeredshow(firstregarr[15]);
            disabledyear70normalclick.partshow(firstpartarr[15]);
            disabledyear70normalclick.totalshow(firstregarr[15]+firstpartarr[15]);
            otherpartsure.addEventListener("click",function(){
                disabledyear70normalclick.totalshow(firstregarr[15]+firstpartarr[15]+parseInt(otherpart.value));
            }); 
        });
        bigdisabled.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,bigdisabled);
            var bigdisabledclick = new condition;
            bigdisabledclick.registeredshow(firstregarr[16]);
            bigdisabledclick.partshow(firstpartarr[16]);
            bigdisabledclick.totalshow(firstregarr[16]+firstpartarr[16]);
            otherpartsure.addEventListener("click",function(){
                bigdisabledclick.totalshow(firstregarr[16]+firstpartarr[16]+parseInt(otherpart.value));
            }); 
        });
    });
    second.addEventListener("click",function(){//初診
        buttonchange(firstsecondcss,second);
        firstsecond = "複診";
        normal.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,normal);
            var normalclick = new condition;
            normalclick.registeredshow(secondregdarr[0]);
            normalclick.partshow(secondpartarr[0]);
            normalclick.totalshow(secondregdarr[0]+secondpartarr[0]);
            otherpartsure.addEventListener("click",function(){
                normalclick.totalshow(secondregdarr[0]+secondpartarr[0]+parseInt(otherpart.value));
            }); 
        });
        year70normal.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,year70normal);
            var year70normalclick = new condition;
            year70normalclick.registeredshow(secondregdarr[1]);
            year70normalclick.partshow(secondpartarr[1]);
            year70normalclick.totalshow(secondregdarr[1]+secondpartarr[1]);
            otherpartsure.addEventListener("click",function(){
                year70normalclick.totalshow(secondregdarr[1]+secondpartarr[1]+parseInt(otherpart.value));
            }); 
        });
        year70glory.addEventListener("click",function(){
            buttonchange(peoplecss,year70glory);
            person = "榮保";
            var year70gloryclick = new condition;
            year70gloryclick.registeredshow(secondregdarr[2]);
            year70gloryclick.partshow(secondpartarr[2]);
            year70gloryclick.totalshow(secondregdarr[2]+secondpartarr[2]);
            otherpartsure.addEventListener("click",function(){
                year70gloryclick.totalshow(secondregdarr[2]+secondpartarr[2]+parseInt(otherpart.value));
            }); 
        });
        bless.addEventListener("click",function(){
            buttonchange(peoplecss,bless);
            person = "福保";
            var blessclick = new condition;
            blessclick.registeredshow(secondregdarr[3]);
            blessclick.partshow(secondpartarr[3]);
            blessclick.totalshow(secondregdarr[3]+secondpartarr[3]);
            otherpartsure.addEventListener("click",function(){
                blessclick.totalshow(secondregdarr[3]+secondpartarr[3]+parseInt(otherpart.value));
            }); 
        });
        year3.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,year3);
            var year3click = new condition;
            year3click .registeredshow(secondregdarr[4]);
            year3click .partshow(secondpartarr[4]);
            year3click.totalshow(secondregdarr[4]+secondpartarr[4]);
            otherpartsure.addEventListener("click",function(){
                year3click.totalshow(secondregdarr[4]+secondpartarr[4]+parseInt(otherpart.value));
            }); 
        });
        disabled.addEventListener("click",function(){
            buttonchange(peoplecss,disabled);
            person = "殘障";
            var disabledclick = new condition;
            disabledclick.registeredshow(secondregdarr[5]);
            disabledclick.partshow(secondpartarr[5]);
            disabledclick.totalshow(secondregdarr[5]+secondpartarr[5]);
            otherpartsure.addEventListener("click",function(){
                disabledclick.totalshow(secondregdarr[5]+secondpartarr[5]+parseInt(otherpart.value));
            }); 
        });
        other.addEventListener("click",function(){
            buttonchange(peoplecss,other);
            if(!other.event){//有沒有按過
                var insElement = document.getElementById('ins');
                var newHTML = '<td id="ins2"><input type="text" placeholder="自費金額" class="money" id="self"/><button type="button" style="border-radius: 10px;" id="selfsure">確定</button></td>';
                insElement.insertAdjacentHTML('afterend', newHTML);        
            }
            other.event = true;//按過一次
            var self = document.getElementById("self");
            var selfsure = document.getElementById("selfsure");
            selfsure.addEventListener("click",function(){
                var selfclick = new condition()
                selfclick.partshow(0);
                selfclick.registeredshow(0);
                selfclick.totalshow(self.value);
                selffee = self.value
                var insElement = document.getElementById('ins2');
                insElement.innerHTML = null;
                other.event = false;
            });
        });
        normalglory.addEventListener("click",function(){
            buttonchange(peoplecss, normalglory);
            person = "榮保";
            var  normalgloryclick = new condition;
            normalgloryclick.registeredshow(secondregdarr[6]);
            normalgloryclick.partshow(secondpartarr[6]);
            normalgloryclick.totalshow(secondregdarr[6]+secondpartarr[6]);
            otherpartsure.addEventListener("click",function(){
                normalgloryclick.totalshow(secondregdarr[6]+secondpartarr[6]+parseInt(otherpart.value));
            }); 
        });
        diabetes.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,diabetes);
            var diabetesclick = new condition;
            diabetesclick.registeredshow(secondregdarr[7]);
            diabetesclick.partshow(secondpartarr[7]);
            diabetesclick.totalshow(secondregdarr[7]+secondpartarr[7]);
            otherpartsure.addEventListener("click",function(){
                diabetesclick.totalshow(secondregdarr[7]+secondpartarr[7]+parseInt(otherpart.value));
            }); 
        });
        
        diabetesglory.addEventListener("click",function(){
            buttonchange(peoplecss, diabetesglory);
            person = "榮保";
            var  diabetesgloryclick = new condition;
            diabetesgloryclick.registeredshow(secondregdarr[8]);
            diabetesgloryclick.partshow(secondpartarr[8]);
            diabetesgloryclick.totalshow(secondregdarr[8]+secondpartarr[8]);
            otherpartsure.addEventListener("click",function(){
                diabetesgloryclick.totalshow(secondregdarr[8]+secondpartarr[8]+parseInt(otherpart.value));
            }); 
        });
        ptivs.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,ptivs);
            var ptivsclick = new condition;
            ptivsclick.registeredshow(secondregdarr[9]);
            ptivsclick.partshow(secondpartarr[9]);
            ptivsclick.totalshow(secondregdarr[9]+secondpartarr[9]);
            otherpartsure.addEventListener("click",function(){
                ptivsclick.totalshow(secondregdarr[9]+secondpartarr[9]+parseInt(otherpart.value));
            }); 
        });
        ptivsfamily.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,ptivsfamily);
            var ptivsfamilyclick = new condition;
            ptivsfamilyclick.registeredshow(secondregdarr[10]);
            ptivsfamilyclick.partshow(secondpartarr[10]);
            ptivsfamilyclick.totalshow(secondregdarr[10]+secondpartarr[10]);
            otherpartsure.addEventListener("click",function(){
                ptivsfamilyclick.totalshow(secondregdarr[10]+secondpartarr[10]+parseInt(otherpart.value));
            }); 
        });
        vip.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,vip);
            var vipclick = new condition;
            vipclick.registeredshow(secondregdarr[11]);
            vipclick.partshow(secondpartarr[11]);
            vipclick.totalshow(secondregdarr[11]+secondpartarr[11]);
            otherpartsure.addEventListener("click",function(){
                vipclick.totalshow(secondregdarr[11]+secondpartarr[10]+parseInt(otherpart.value));
            }); 
        });
        familyfriend.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,familyfriend);
            var familyfriendclick = new condition;
            familyfriendclick.registeredshow(secondregdarr[12]);
            familyfriendclick.partshow(secondpartarr[12]);
            familyfriendclick.totalshow(secondregdarr[12]+secondpartarr[12]);
            otherpartsure.addEventListener("click",function(){
                familyfriendclick.totalshow(secondregdarr[12]+secondpartarr[12]+parseInt(otherpart.value));
            }); 
        });
        straightfamily.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,straightfamily);
            var straightfamilyclick = new condition;
            straightfamilyclick.registeredshow(secondregdarr[13]);
            straightfamilyclick.partshow(secondpartarr[13]);
            straightfamilyclick.totalshow(secondregdarr[13]+secondpartarr[13]);
            otherpartsure.addEventListener("click",function(){
                straightfamilyclick.totalshow(secondregdarr[13]+secondpartarr[13]+parseInt(otherpart.value));
            }); 
        });
        disabledyear70glory.addEventListener("click",function(){
            buttonchange(peoplecss, disabledyear70glory);
            person = "榮保";
            var  disabledyear70gloryclick = new condition;
            disabledyear70gloryclick.registeredshow(secondregdarr[14]);
            disabledyear70gloryclick.partshow(secondpartarr[14]);
            disabledyear70gloryclick.totalshow(secondregdarr[14]+secondpartarr[14]);
            otherpartsure.addEventListener("click",function(){
                disabledyear70gloryclick.totalshow(secondregdarr[14]+secondpartarr[14]+parseInt(otherpart.value));
            }); 
        });
        disabledyear70normal.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,disabledyear70normal);
            var disabledyear70normalclick = new condition;
            disabledyear70normalclick.registeredshow(secondregdarr[15]);
            disabledyear70normalclick.partshow(secondpartarr[15]);
            disabledyear70normalclick.totalshow(secondregdarr[15]+secondpartarr[15]);
            otherpartsure.addEventListener("click",function(){
                disabledyear70normalclick.totalshow(secondregdarr[15]+secondpartarr[15]+parseInt(otherpart.value));
            }); 
        });
        bigdisabled.addEventListener("click",function(){
            person = "健保";
            buttonchange(peoplecss,bigdisabled);
            var bigdisabledclick = new condition;
            bigdisabledclick.registeredshow(secondregdarr[16]);
            bigdisabledclick.partshow(secondpartarr[16]);
            bigdisabledclick.totalshow(secondregdarr[16]+secondpartarr[16]);
            otherpartsure.addEventListener("click",function(){
                bigdisabledclick.totalshow(secondregdarr[16]+secondpartarr[16]+parseInt(otherpart.value));
            }); 
        });
    });
});
class condition {
    registeredshow(result){
        registered.textContent = result;
    };
    partshow(result){
        part.textContent = result;
    };
    totalshow(result){
        total.textContent = result;
    };
};
//css變化函式
function buttonchange(arr,change){
    for(var i=0;i<arr.length;i++){
        arr[i].classList.remove("bottenactive")
        arr[i].classList.add("botten")
    }
    change.classList.remove("botten");
    change.classList.add("bottenactive")
}
// 确定按钮点击事件
var idtext;
var division;
eye.addEventListener("click",function(){
    buttonchange(eyeskincss,eye);
    division = eye.innerText;
});
skin.addEventListener("click",function(){
    buttonchange(eyeskincss,skin);
    division = skin.innerText;
});
totalsure.addEventListener("click", function () {
    fetch('/get_latest_id')  // 假設有一個 Flask 路由返回最新的 id
        .then(response => response.json())
        .then(data => {
            const latestId = data.latest_id;
            if (latestId) {
                return latestId;
            } else {
                throw new Error('Latest ID is not available');
            }
        })
        .then(idtext => {
            addtable(idtext, username.value, data.value, firstsecond, person, registered.textContent, part.textContent, otherpart.value, total.textContent, selffee, division);
        })
        .catch(error => console.error('Error:', error));
});
function addtable(id, userName, userBirthday, firstsecond, person, registeredFee, partFee, otherpartFee, totalFee, self, divisionlast) {
    var table = document.getElementById("record");
    var newRow = table.insertRow(-1);
    var newrecord = new Record();  // 創建 Record 
    for (var i = 1; i <= 16; i++) {
        var cell = newRow.insertCell(i - 1);
        switch (i) {
            case 1:
                cell.textContent = id; // 序號
                newrecord.id = id;
                break;
            case 2:
                cell.textContent = userName; // 姓名
                newrecord.userName = userName;
                break;
            case 3:
                cell.textContent = userBirthday; // 生日
                newrecord.userBirthday = userBirthday;
                break;
            case 4:
                if (tb1.innerText == firstsecond) {
                    cell.textContent = '√'; // 初診
                    newrecord.firstConsultation = true;
                }
                break;
            case 5:
                if (tb2.innerText == firstsecond) {
                    cell.textContent = '√';
                    newrecord.followUpConsultation = true;
                }
                // 複診
                break;
            case 6:
                if (tb3.innerText == person) {
                    cell.textContent = '√';
                    newrecord.healthInsurance = true;
                }
                // 健保
                break;
            case 7:
                if (tb4.innerText == person) {
                    cell.textContent = '√';
                    newrecord.honorInsurance = true;
                }
                // 榮保
                break;
            case 8:
                if (tb5.innerText == person) {
                    cell.textContent = '√';
                    newrecord.blessingInsurance = true;
                }
                // 福保
                break;
            case 9:
                if (tb6.innerText == person) {
                    cell.textContent = '√';
                    newrecord.disabilityInsurance = true;
                }
                // 殘障
                break;
            case 10:
                cell.textContent = registeredFee; // 掛號費
                newrecord.registrationFee = registeredFee;
                break;
            case 11:
                cell.textContent = partFee; // 部分負擔
                newrecord.partialBurden = partFee;
                break;
            case 12:
                cell.textContent = otherpartFee; // 加收部分負擔
                newrecord.additionalPartialBurden = otherpartFee;
                break;
            case 13:
                cell.textContent = self; // 自費金額
                newrecord.selfPaymentAmount = self;
                break;
            case 14:
                if (tb7.innerText == divisionlast) {
                    cell.textContent = '√';
                    newrecord.eyeDepartment = true;
                }  // 眼科
                break;
            case 15:
                if (tb8.innerText == divisionlast) {
                    cell.textContent = '√';
                    newrecord.dermatologyDepartment = true;
                }
                // 皮膚科
                break;
            case 16:
                cell.textContent = totalFee;
                newrecord.totalFee = totalFee;
                break;
        }
    }
    saveRecordToDatabase(newrecord);
}
function saveRecordToDatabase(record) {
    fetch('/save_record', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

class Record {
    constructor(id, userName='', userBirthday='', firstConsultation=false, followUpConsultation=false, healthInsurance=false, 
                honorInsurance=false, blessingInsurance=false, disabilityInsurance=false, registrationFee='', partialBurden='', 
                additionalPartialBurden='', selfPaymentAmount='', eyeDepartment=false, dermatologyDepartment=false, totalFee='') {
        this.id = id;
        this.userName = userName;
        this.userBirthday = userBirthday;
        this.firstConsultation = firstConsultation;
        this.followUpConsultation = followUpConsultation;
        this.healthInsurance = healthInsurance;
        this.honorInsurance = honorInsurance;
        this.blessingInsurance = blessingInsurance;
        this.disabilityInsurance = disabilityInsurance;
        this.registrationFee = registrationFee;
        this.partialBurden = partialBurden;
        this.additionalPartialBurden = additionalPartialBurden;
        this.selfPaymentAmount = selfPaymentAmount;
        this.eyeDepartment = eyeDepartment;
        this.dermatologyDepartment = dermatologyDepartment;
        this.totalFee = totalFee;
    }
}
delet.addEventListener("click",function(){
    var table = document.getElementById("record");
    var lastRowIndex = table.rows.length - 1;
    if (table.rows.length >= 1) {
        var recordId = table.rows[lastRowIndex].cells[0].innerText;
        deletesql(recordId);
        table.deleteRow(lastRowIndex);
    }
    
});
function deletesql(recordId) {
    fetch(`/delete_record/${recordId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            var row = document.getElementById(`row_${recordId}`);
            if (row) {
                row.remove();
            }
        } else {
            console.error(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}