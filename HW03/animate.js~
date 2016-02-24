var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var width = c.width;
var height = c.height;

var radius = 0;
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

    window.requestAnimationFrame(draw);
};

var button = document.getElementById("go");
button.addEventListener("click", draw);
