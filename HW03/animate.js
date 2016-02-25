var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var width = c.width;
var height = c.height;

var radius = 10;
var growing = true;

var draw = function(){
    if(radius >= width/2){
	growing = false;
    } else if(radius <= 0){
	growing = true;
    }

    if(growing){
	radius = radius + 1;
    }else{
	radius = radius - 1;
    }

    ctx.clearRect(0,0,width,height);
    ctx.beginPath();
    ctx.arc(width/2, height/2, radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    var requestID = window.requestAnimationFrame(draw);
};

var x = 0;
var y = 0;
var forward = true;

var bounce = function(){

    if(forward){
	x = x + 1;
    }

    ctx.clearRect(0,0,width,height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
};

var button = document.getElementById("go");
button.addEventListener("click", bounce);

var button2 = document.getElementById("stop");
button.addEventListener("click", stop);
