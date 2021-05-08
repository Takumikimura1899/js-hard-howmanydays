const dateSet = document.getElementById("dateSet");
const dateSearch = document.getElementById("dateSearch");
const diffTime = document.getElementById("diffTime");

const func2 = function () {
  // 現在の時間を取得
  let nowtime3 = moment();
  //カレンダーから取得した日付をmoment.jsで使用出来るように変換
  const dateSetValue = moment(dateSet.value);
  //現在の時間とカレンダーから取得した日付の差を秒単位で取得する。
  const num2 = dateSetValue.diff(nowtime3, "seconds");
  //   取得した時間を日,時間,分,秒で表示するように変換
  let timeD = Math.floor(num2 / (24 * 60 * 60));
  let timeH = Math.floor((num2 % (24 * 60 * 60)) / (60 * 60));
  let timeM = Math.floor(((num2 % (24 * 60 * 60)) % (60 * 60)) / 60);
  let timeS = ((num2 % (24 * 60 * 60)) % (60 * 60)) % 60;
  let timeDHMS = timeD + "日" + timeH + "時間" + timeM + "分" + timeS + "秒";
  // 変換した時間を表示する。
  diffTime.innerHTML = dateSet.value + "まで後" + timeDHMS;
  setInterval(func2, 1000);
};
dateSearch.addEventListener("click", func2);

// <div>を作成
const text = document.createElement("div");
// <body>を取得
const body = document.querySelector("body");
// <body>に<div>を追加する
body.appendChild(text);

// ドラえもんの誕生日を宣言
const doraemonBirthday = moment(21120903, "YYYYMMDD");

const func = function () {
  // 現在の時間を取得
  let nowtime = moment();
  // ドラえもんの誕生日と現在の時間を秒単位で取得する。
  const num = doraemonBirthday.diff(nowtime, "seconds");

  //   取得した時間を日,時間,分,秒で表示するように変換
  let timeD = Math.floor(num / (24 * 60 * 60));
  let timeH = Math.floor((num % (24 * 60 * 60)) / (60 * 60));
  let timeM = Math.floor(((num % (24 * 60 * 60)) % (60 * 60)) / 60);
  let timeS = ((num % (24 * 60 * 60)) % (60 * 60)) % 60;
  let timeDHMS = timeD + "日" + timeH + "時間" + timeM + "分" + timeS + "秒";

  //   console.log(timeDHMS);
  //   <div>の中を"ドラえもんが生まれるまであと" + timeDHMSに書き換える
  text.innerHTML = "ドラえもんが生まれるまであと" + timeDHMS;
};

// 画面を更新したとき何もないので分からないくらいの速さで表示する。
setTimeout(func, 1);
// １秒毎に更新が続く
setInterval(func, 1000);
