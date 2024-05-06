var score = 0;
var secs = 60;
var target = 0;
function makebubble() {
  var bubble = "";

  for (var i = 0; i < 168; i++) {
    var num = Math.floor(Math.random() * 10);
    bubble += `<div id='bubble'>${num}</div>`;
  }
  document.querySelector("#conBottom").innerHTML = bubble;
}

function setTarget() {
  target = Math.floor(Math.random() * 10);
  document.querySelector("#target").textContent = target;

}

var time;
function timerunner() {

  time = setInterval(function () {
    if (secs > 0) {
      secs--;
      document.querySelector("#timer").textContent = secs;
    }
    else {
      clearInterval(time);
      document.querySelector("#conBottom").innerHTML = `<div><h1>Game over</h1></div>`;
     

    }
  }, 1000);
}


function increasescore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}


timerunner();
makebubble();
setTarget();



document.querySelector("#conBottom").addEventListener("click", function (clickCheck) {
  var clicked = Number(clickCheck.target.textContent);
  if (clicked === target) {
    increasescore();
    setTarget();
    makebubble();
  }
});

document.querySelector("#restart").addEventListener("click", function () {
  secs = 60;
  document.querySelector("#timer").textContent = secs;
  score = 0;
  document.querySelector("#score").textContent = score;
  clearInterval(time);
  timerunner();
  makebubble();
  setTarget();
})

