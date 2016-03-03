var pic = document.getElementById("vimage");

var width = pic.width;
var height = pic.height;

var intervalId;

var dvd = new Image();
dvd.src = "logo_dvd.jpg";
var dvd_h = 100;
var dvd_w = 75;

var x = 0;
var y = 0;
var x_v = 2;
var y_v = 2;

var drawDot = function() {

    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", 0);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    var growing = true;
    
    var animateCode = function(){
	//c = document.getElementByTagName("circle");
	radius = parseInt(c.getAttribute("r"));

	if(radius >= 250 || radius >= 250){
	    growing = false;
	} else if (radius <= 0){
	    growing = true;
	}

	if(growing){
	    radius++;
	}else{
	    radius--;
	}
	
	c.setAttribute("r",radius);
	pic.appendChild(c);
    }

    intervalId = window.setInterval(animateCode, 16);
 
};

var stop = function(){
    window.clearInterval(intervalId);
};

/*
var clicked = function(e){
    if(e.toElement == this){
	drawDot(e.offsetX, e.offsetY);
    }
};

pic.addEventListener("click", clicked);
*/

var bounce = function(){

    x = x + x_v;
    y = y + y_v;

    if(x >= width - dvd_h || x <= 0){
	x_v = x_v * -1;
    } else if (y >= height - dvd_w || y <= 0){
	y_v = y_v * -1;
    }
    
     var c = document.createElementNS(
	 "http://www.w3.org/2000/svg", "image");
    c.setAttribute("xlink", "logo_dvd.jpg");
    c.setAttribute("x", x);
    c.setAttribute("y", y);
    c.setAttribute("height", 75);
    c.setAttribute("width", 100);

    pic.appendChild(c);

    requestId = window.requestAnimationFrame(bounce);

};


var button = document.getElementById("grow");
var button2 = document.getElementById("stop");
var button3 = document.getElementById("bounce");
button.addEventListener("click", drawDot);
button2.addEventListener("click", stop);
button3.addEventListener("click", bounce);
