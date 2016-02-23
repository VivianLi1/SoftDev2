var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//Starts a new path, a single complete action (like putting the pencil down)
ctx.beginPath();

ctx.strokeStyle="#33cc33";

//Sets begin point of the line
//Params: (x,y)
ctx.moveTo(0,400);

//Endpoint of the line
//Params: (x,y)
ctx.lineTo(500,400);

//Ends the path
ctx.closePath();

//Draws what is in the path
ctx.stroke();

//Sets color of following fill functions
ctx.fillStyle = "#996633";

//Creates a rectangle
//Params: (x,y,width,height)
ctx.fillRect(100,250,150,150);

ctx.beginPath();
ctx.fillStyle = "#800000";
ctx.moveTo(175,175);
ctx.lineTo(100,250);
ctx.lineTo(250,250);
ctx.closePath();

//Fills in the connected points of the path
ctx.fill();

ctx.fillRect(150,325,50,75);

var a = 400;
var b = 375;

ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.moveTo(a,b);
ctx.lineTo(a-10,b+25);
ctx.moveTo(a,b);
ctx.lineTo(a+10,b+25);
ctx.moveTo(a,b);
ctx.lineTo(a,b-40);
ctx.moveTo(a-20,b-20);
ctx.lineTo(a+20,b-20);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
//Creates an arc
//Params: (center x, center y, radius, begin angle, end angle)
ctx.arc(a,b-55,15,0,2*Math.PI);
ctx.stroke();
