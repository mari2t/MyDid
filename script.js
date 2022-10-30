
//家のやること
const houseOfWord = [
    "👦保育園お迎え","🍕夕食","🛁息子をお風呂","🥼洗濯機予約","🍽食洗機まわす","🛋息子と寝る",
    "🧊製氷機の水補給","☕お茶つくり","🥛加湿器水補給","🍙炊飯器セット",
    "🥐朝食","🍔昼食","💈洗濯機まわし","👕洗濯物干し","🏍息子と公園に行く",
    "🧦月曜保育園準備","✋息子爪切り","🖥生協注文",
    "🚽トイレ掃除","🚿風呂掃除","🧺洗面所掃除","🧹玄関掃除",
    "🕳ルンバ","💨定期家事",

];


//自分のやること
const myselfOfWord = [
    "😄楽しむ","😌休む","🧗プランク1分","💃スクワット30回","🏋️‍♂️筋トレ","🤸‍♀️ストレッチ",
    "🍹アルコールDAY","⭕ノー飲酒DAY","🦷糸ようじをする","💊ビタミン剤を飲む",
    "💥美容液を使う","🙋‍♀️仕事する","📝勉強する","📚読書する","🟦インプット","🟥アウトプット",
    "🌞起きる","🌜寝る",
];


//ボタン作成
const buttonStyle = {
    border : "solid 1px black",
    borderRadius :  "10px",
    backgroundColor :  "#F5F5F5",
    margin :  "20px"
}

//バックカラー
const houseButtoncolor = "#B0E0E6";
const myselfButtoncolor = "#FFE4E1";



//家事ボタン作成
let houseOfBox = [];//ボタン作成用に定義
let houseDidBox = [];//やったこと取得用に定義
let countHouse = 0;//やった数を表示するように定義
document.addEventListener('DOMContentLoaded', function() {
    let countAddId = document.getElementById("todayHouseText");//やった数<家事>の横に表示するように取得と定義
    let addHouseDid = document.getElementById('houseDid');//ボタン作成用に取得と定義
    let container = document.getElementById('houseList');//やったこと挿入用に取得と定義
    for(let i = 0; i < houseOfWord.length; i++){
        //ボタン作成、ボタンにテキスト挿入、ボタン装飾、ボタンを家のやることに追加
        houseOfBox[i] = document.createElement('ul');
        houseOfBox[i].textContent = houseOfWord[i];
        for (const value in buttonStyle){
            houseOfBox[i].style[value] = buttonStyle[value];
        }
        container.appendChild(houseOfBox[i]);
        // ボタンクリック関数
        houseOfBox[i].addEventListener('click',function(){
            let createHouseDid = document.createElement('ul');
            countHouse ++;
            //getOption関数呼び出し、
            createHouseDid.textContent = getOption(houseOfWord[i]);
            houseDidBox[i] = createHouseDid;
            countAddId.innerHTML = "＜家事＞" + countHouse;
            //該当箇所に文字表示
            houseDidBox[i].id = houseOfWord[i] + countHouse;
            addHouseDid.appendChild(houseDidBox[i]);
            houseOfBox[i].style.backgroundColor = houseButtoncolor;
            //要素削除用関数
            houseDidBox[i].addEventListener('click',function(){
                erHouseDid = document.getElementById(houseDidBox[i].id);
                addHouseDid.removeChild(erHouseDid);
                countHouse --;
                countAddId.innerHTML = "＜家事＞" + countHouse;
                },);
       },);
    }
    }
);

//自分ボタン　
let myselfOfBox = [];
let myselfDidBox = [];
let countMyself = 0;
document.addEventListener('DOMContentLoaded', function() {
    let addMyselfDid = document.getElementById('myselfDid');
    let container = document.getElementById('myselfList');
    let countAddId = document.getElementById("todayMyselfText");
    for(let i = 0; i < myselfOfWord.length; i++){
        myselfOfBox[i] = document.createElement('ul');
        myselfOfBox[i].textContent = myselfOfWord[i];
        for (const value in buttonStyle){
            myselfOfBox[i].style[value] = buttonStyle[value];
        }
        myselfOfBox[i].addEventListener('click',function(){
            createMyselfDid = document.createElement('ul');
            countMyself ++;
            createMyselfDid.textContent = getOption(myselfOfWord[i]);
            myselfDidBox[i] = createMyselfDid;
            countAddId.innerHTML = "＜自分＞" + countMyself;
            myselfDidBox[i].id = createMyselfDid.textContent + countMyself;
            myselfOfBox[i].style.backgroundColor = myselfButtoncolor;
            addMyselfDid.appendChild(myselfDidBox[i]);
            //要素削除用関数
            myselfDidBox[i].addEventListener('click',function(){
                erMyselfDid = document.getElementById(myselfDidBox[i].id);
                addMyselfDid.removeChild(erMyselfDid);
                countMyself --;
                countAddId.innerHTML = "＜自分＞" + countMyself;
                },);
       });
       container.appendChild(myselfOfBox[i]);
    }

});



//今日の日付を取得
let today = new Date();
document.addEventListener('DOMContentLoaded', function() {
    let target = document.getElementById("time");
    let Year = today.getFullYear();
    let Month = today.getMonth()+1;
    let Date = today.getDate();
    let dayOfWeek = today.getDay() ;	
    let dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ] ;	// 曜日(日本語表記)
    target.innerHTML = Year + "-" + Month + "-" + Date + " " + dayOfWeekStr[dayOfWeek] + "曜日";
    }
);


//現在時刻取得
function getNowTime(){
    let result = "";
    let nowTime = new Date();
    let hour = nowTime.getHours();
    let min = nowTime.getMinutes();
    if(min < 10){
        min = "0" + min;
    }
    result = hour + ":" + min;
    return result;
}



//時刻追加とフリーワード関数
function getOption(str){
    let result = "";
    let spaceWord = "　　　";
    let element = document.getElementById('checkId');
    let elementFree = document.getElementById('freeWord');
    let elementSet = document.getElementById("setTime");
    //現在の時刻追加
    if(element.checked === true){
        result =  getNowTime()+ "" + str ;
    }
    else{
        result = str;
    }
    //設定時刻追加
    if(elementSet.value !== ""){
        result = elementSet.value  + "" + result ;
    }
    //時刻が設定されていなかったとき
    if(element.checked === false && elementSet.value === ""){
        result = spaceWord + result
    }
    //フリーワード判定
    if(elementFree.value !== ""){
        result = result + " - " + elementFree.value;
        elementFree.value = "";
    }


    //各設定リセット
    element.checked = false;
    elementSet.value = "";
    return result;
}




