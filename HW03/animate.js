var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var width = c.width;
var height = c.height;

var requestId;

var radius = 0;
var growing = true;

var dvd = new Image();
dvd.src = "logo_dvd.jpg";
var dvd_h = 100;
var dvd_w = 75;

var requestId;

var x = 0;
var y = 0;
var x_v = 2;
var y_v = 2;

var draw = function(){
    if(radius >= width/2){
	growing = false;
    } else if(radius <= 0){
	growing = true;
    }

    if(growing){
	radius++;
    }else{
	radius--;
    }

    ctx.clearRect(0,0,width,height);
    ctx.beginPath();
    ctx.arc(width/2, height/2, radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    requestId = window.requestAnimationFrame(draw);
};

var stop = function(){
    window.cancelAnimationFrame(requestId);
};

var bounce = function(){
    
    x = x + x_v;
    y = y + y_v;

    if(x >= width - dvd_h || x <= 0){
	x_v = x_v * -1;
    } else if (y >= height - dvd_w || y <= 0){
	y_v = y_v * -1;
    }

    ctx.clearRect(0,0,width,height);
    ctx.beginPath();
    ctx.drawImage(dvd, x, y, dvd_h, dvd_w);
    ctx.closePath();

    requestId = window.requestAnimationFrame(bounce);
};

var button = document.getElementById("dot");
var button2 = document.getElementById("stop");
var button3 = document.getElementById("bounce");
button.addEventListener("click", draw);
button2.addEventListener("click", stop);
button3.addEventListener("click", bounce);
