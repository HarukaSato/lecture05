var inputoperandA = document.querySelector("#operand_a");
var inputoperandB = document.querySelector("#operand_b");
var output = document.querySelector("#output");
var error = document.querySelector("#error");

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

var devide = function(a, b){
	b = 1 - b / 100;
	return a * b;
};

var showResult = function(result){
	output.value = result + "";
};

var isNumber = function(a){
	return !Number.isNaN(a);
};
/*
var Bnumber = function(b){
	return !Number.isNaN(b);
};

var bnumber = function(b){
	return 0<Bnumber(b)<=100;
};
*/
var startCalc = function(){
	var operandA = inputoperandA.value;
	var operandB = inputoperandB.value;

	operandA = Number(operandA);
	operandB = Number(operandB);

	var result = 0;
	result = devide(operandA, operandB);
	showResult(result);

};


var initApp = function(){
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp();