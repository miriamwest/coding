// $("#circle").mouseover(function(){
// 	$('p').html("Change text");
// }).mouseout(function(){
// 	$('p').html("Shazam lalala");
// });
var state=0;
$('#circle').click(function(){
	

if(state==0){
	$('img').attr('src', 'https://scontent-mia3-1.cdninstagram.com/vp/6f4ef526c73b6237b5518a7eb90c44f9/5DBD5E54/t51.2885-15/sh0.08/e35/s640x640/13259619_721380184631954_224561301_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com'); 
	state=1;}
else{
	$('img').attr('src', 'https://scontent-mia3-1.cdninstagram.com/vp/f4cdfa194a6e9025c06ba2609300ee05/5DA59F91/t51.2885-15/sh0.08/e35/c135.0.809.809a/s640x640/13277666_1771928203044711_675162502_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com');
	state=0;}});

// $('.square').hover(function(){
// 	$(this).css({width:'800px', height: '800px'});});

// $('.square').hover(function(){
// 	$(this).addClass('circle')});

$('.square').hover(function(){
	$(this).removeClass('circle')});