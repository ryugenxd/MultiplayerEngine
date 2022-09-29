(()=>{
  'use strict';
  const ジャンプ = document.getElementById('jump');
  const 画面 = document.querySelector('.layar');
  let  player = 0;
  class プレーヤー {
    constructor(player){
      this.スコア = player;
    }
    時(){
      this.スコア++;
      let 送信 = new XMLHttpRequest();
    送信.open("POST", "update.php", true);
    送信.onload = ()=>{
      if(送信.readyState === XMLHttpRequest.DONE){
          if(送信.status === 200){
            console.log('yatta..');
          }
      }
    }
    送信.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    送信.send("up="+this.スコア);
    }
  }
  const 主要キャスト = new プレーヤー(player);
  ジャンプ.addEventListener("touchstart", ()=>{
    主要キャスト.時();
    ジャンプ.style.background='red';
  });
  ジャンプ.addEventListener("touchend", ()=>{
    ジャンプ.style.background='#00ccff';
  });
  setInterval(() =>{
    let 送信 = new XMLHttpRequest();
    送信.open("POST", "request.php", true);
    送信.onload = ()=>{
      if(送信.readyState === XMLHttpRequest.DONE){
          if(送信.status === 200){
            let データ = 送信.response;
            画面.innerHTML = データ;
          }
      }
    }
    送信.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    送信.send("id=1");
}, 10);
})();