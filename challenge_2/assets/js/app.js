$('#compute').click(function(e){
	e.preventDefault();

var a = Number($('#angle-degrees').val());


if (a==180){
	$('#answer').html('straight')}
else if (a==90){
	$('#answer').html('right')}
else if (a>90 && a<180){
	$('#answer').html('obtuse')}
else if (a>=0 && a<90){
	$('#answer').html('acute')};


if (isNaN(a)){
	$('#answer').html('please enter a number');return;}
})