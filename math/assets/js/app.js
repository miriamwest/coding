var Miriam = 0;
var Victoria = 0;
var weapons = ['rock' , 'paper', 'scissors'];





while (Miriam < 3 && Victoria < 3)
var weaponOfchoice1 = weapons[parseInt(Math.random()*weapons.length) %3];
var weaponOfchoice2 = weapons[parseInt(Math.random()*weapons.length) %3];
if (miriam=weaponofchoice1) && (Victoria=weaponofchoice2)

if compare (weaponofchoice1 && weaponofchoice2)
	{if (Miriam ==='rock' && Victoria === 'paper'){console.log ("win"); Victoria++;}}
	{if (Miriam ==='paper' && Victoria === 'rock'){console.log ("win"); Miriam++;}}
	{if (Miriam ==='rock' && Victoria === 'scissors'){console.log ("win"); Miriam++;}}
	{if (Miriam ==='scissors' && Victoria === 'rock'){console.log ("win"); Victoria++;}}
	{if (Miriam ==='scissors' && Victoria === 'paper'){console.log ("win"); Miriam++;}}
	{if (Miriam ==='paper' && Victoria === 'scissors'){console.log ("win"); Victoria++;}}
	{if (Miriam ==='rock' && Victoria === 'rock'){console.log ("tie");}}
	{if (Miriam ==='paper' && Victoria === 'paper'){console.log ("tie");}}
	{if (Miriam ==='scissors' && Victoria === 'scissors'){console.log ("tie");}}























// $('#multiply').click(function(e){

// 	e.preventDefault();

// 	var a = Number($('#number-one').val());
// 	var b = Number($('#number-two').val());

// if (isNaN(a)||isNaN(b)){
// 	$('#answer').html('please enter a number');return;}

// 	var answer=a*b;

// 	$('#answer').html('The answer is: ' + answer)
// })

// $('#divide').click(function(e){

// 	e.preventDefault();

// 	var a = Number($('#number-one').val());
// 	var b = Number($('#number-two').val());

// 	if (isNaN(a)||isNaN(b)){
// 	$('#answer').html('please enter a number');return;}

// 	if (b==0){
// 		$('#answer').html('Cannot divide by 0');}
// 			else{var answer=a/b;
// 			$('#answer').html('The answer is:' + answer);}
// })