var billAmount=100

function grat(reciept){
	return reciept * 0.2;}

function totalwithGrat(check){
	return (check + grat(check);}
	
console.log ("your total including gratuity is: " + totalwithGrat(billAmount));




// var dogAge=12
// function calculateDogAge(Age){
// 	return Age * 7};

// console.log ("Your doggie is " + calculateDogAge(dogAge)  +" years old in dog years!" );


function CtoF(celsius){
	return c * 1.8 + 32;}
function FtoC(fahrenheit){
	return f - 32 / 1.8;}

console.log("90f in c is " + FtoC(90));
console.log();
