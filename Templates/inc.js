var makeIncrementor = function(){
    var i = 0;
    var inc = function(){ i = i + 1; return i}
    return inc
}

var makeAdder = function(num){
    var i = num;
    var inc = function(adder){i = adder + i; return i}
    return inc
}


var makeCounter = function(){
    var i = 0;
    var get = function(){
	return i;
    };
    return {
	x: "Something in the dictionary",
	get: get,
	set: function(x){i = x;},
	inc: function(){ i = i + 1;},
	dec: function(){ i = i - 1;},
	setx: function(y) { x = y;} 
    };
};

var rong = makeCounter();
rong.set(5) /* sets rong to 5 */ 

var sammi = makeAdder(7);

