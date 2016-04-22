
var numbers = [1,2,3,4];
var newNumbers = [];

//for(var i = 0; i < numbers.length; i++){
//    newNumbers[i] = numbers[i] * 2;
//};

/*
var newNumbers = numbers.map(function(number){
    return number * 2;
}).map(function(number){
    return number + 1;
}); //doubles then adds --> [3,5,7,9]
*/

for(var i = 0;i <numbers.length; i++){
    if(numbers[i] % 2 !==0){
	newNumbers[i] = numbers[i] * 2;
    }
}

var newNumbers =  numbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number * 2;
});


console.log("The doubled numbers are ", newNumbers);
