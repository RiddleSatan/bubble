var timer = 60;
var hitrn;
var score=0;

function hit(){
 hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hv").textContent=hitrn;
}

function bubble(){
var clutter = "";
for (var i = 1; i <= 102; i++) {
  var rn = Math.floor(Math.random() * 10);
  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function time() {   
  var a = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#st").textContent = timer;
    } else {
      clearInterval(a);
      document.querySelector("#pbtm").innerHTML="<h1 id=`over`>Gamer Over Fuiyooooo!</h1>";
    }
  }, 1000);

}

function iscore(){
    score+=10;
    document.querySelector("#sc").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click" , function (data){
    var rn=(Number(data.target.textContent));
    if(rn === hitrn){
        bubble();
        hit();
        iscore();
    }
   
});
 


time();
bubble();
hit();
