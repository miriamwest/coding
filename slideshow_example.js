var slideshow = {
	photoList: ['dog.jpg', 'cat.jpg', 'fish.jpg', 'house.jpg'],
	currentPhotoIndex: 0,
	playInterval: undefined,
	nextPhoto: function(){
		if(this.currentPhotoIndex + 1 < this.photoList.length){
			this.currentPhotoIndex++;
			this.displayPhoto();
		}else{
			this.pause();
			console.log("End of Slideshow");
		}},
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex--;
			this.displayPhoto();
		}else{
			console.log('Beginning of Slideshow');
		}},
	displayPhoto: function(){
		console.log(this.getCurrentPhoto());
	},
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	},
	play: function(){
		this.playInterval=setInterval(this.nextPhoto.bind(this),2000);
	},
	pause: function(){
		clearInterval(this.playInterval);
	}
};

slideshow.displayPhoto();

$('#prev-photo').click(function(){
slideshow.prevPhoto();
});
$('#next-photo').click(function(){
slideshow.nextPhoto();
});
$('#play').click(function(){
slideshow.play();
});
$('#pause').click(function(){
slideshow.pause();
});




// function outer(){
// 	var a='string';
// 	var b={};
// 	console.log(a);
// 	console.log(b);

// 	function inner (a,b) {
// 		a=43;
// 		b=[];

// 		console.log('inner', a, b);
// 	}
// 	inner(a,b);
// 	console.log('outer', a, b);

// 	}

// outer();






/*var slideshow = {
	photolist:['photo1', 'photo2', 'photo3'],
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if (this.currentPhotoIndex +1< this.photolist.length){
			this.currentPhotoIndex++;
			console.log(this.photolist[this.currentPhotoIndex]);
		}else{
			console.log ("end of slideshow");
		}
	}, 
	
	prevPhoto: function(){
		if(this.currentPhotoIndex>0){
			this.currentPhotoIndex--;
			this.displayPhoto();
			// last line instead of: // console.log (this.photolist[this.currentPhotoIndex]);
		}else{
			console.log ("beginning of slideshow");
	}
},
	displayPhoto: function(){
		console.log(this.photolist[this.currentPhotoIndex]);
	}, 
	// last line instead of console.log(this.getCurrentPhoto());

	getCurrentPhoto: function(){
		returnthis.photolist[this.currentPhotoIndex];
	}
};
*/