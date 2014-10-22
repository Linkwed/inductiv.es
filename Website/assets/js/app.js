$(document).ready(function(){

	// var product = $('#inductive-product');
	var product = document.getElementById('inductive-product');
	var time;
	var token;

	$('#partie1').waypoint(function(direction) {

		token = 1;
		sectionOne();

		if(direction === 'down') {

			$(product).css({
				"position" : "fixed",
				"top" : "0",
				"left" : "0"
			});

		} else if (direction === 'up') {

			$(product).css({"position" : "absolute"});
			product.currentTime = 0;
			sectionOne();

		}

	});

	$('#screen-large-point').waypoint(function(direction) {


		if(direction === 'down') {

			

		} else if (direction === 'up') {

			
			$('#inductive-product').removeClass('video-scale');
		}

	});


	$('#partie2').waypoint(function(direction) {

		token = 2;
		sectionTwo();

		if (direction === 'up') {

			product.currentTime = 3;
			sectionTwo();

		}			

	});

		$('#zoom').waypoint(function(direction) {

		if (direction === 'down') {
			$( "#inductive-product" ).addClass( "change" );
		}
		else if(direction === 'up') {			
			$( "#inductive-product" ).removeClass( "change" );
		}
	});


	$('#partie3').waypoint(function(direction) {

		token = 3;
		sectionThree();

		if (direction === 'up') {

			product.currentTime = 5;
			sectionThree();

		}		

	});

	$('#partie4').waypoint(function(direction) {

		token = 4;
		sectionFour();

		if (direction === 'up') {

			product.currentTime = 8;
			sectionFour();

		}	

	});

		$('#partie4').waypoint(function(direction) {

		token = 4;
		sectionFour();

		if (direction === 'down') {

			$( "#inductive-product" ).addClass( "change2" );
		}	
		else if (direction === 'up') { 
			$( "#inductive-product" ).removeClass( "change2" );
		}

	});

	$('#partie5').waypoint(function(direction) {

		token = 5;
		sectionFive();

	});

function sectionOne () {

	time = product.currentTime;

	if (time >= 0 && time < 4) {

		$(product)[0].play(); // lance la vidéo au waypoint

	} else {

		$(product)[0].pause();

	}

	if (token == 1) {

		setTimeout(sectionOne,300);

	}

};

function sectionTwo () {

	time = product.currentTime;

	if (time >= 0 && time < 7) {

		$(product)[0].play(); // poursuit la vidéo au waypoint

	} else {

		$(product)[0].pause();

	}

	if (token == 2) {

		setTimeout(sectionTwo, 1000);

	}

};

function sectionThree () {

	time = product.currentTime;

	if (time >= 0 && time < 12) {

		$(product)[0].play(); // poursuit la vidéo au waypoint

	} else {

		$(product)[0].pause();

	}

	if (token == 3) {

		setTimeout(sectionThree, 1000);

	}

};


function sectionFour () {

	time = product.currentTime;

	if (time >= 0 && time < 14) {

		$(product)[0].play(); // poursuit la vidéo au waypoint

	} else {

		$(product)[0].pause();

	}

	if (token == 4) {

		setTimeout(sectionFour, 1000);

	}

};


function sectionFive () {

	time = product.currentTime;

	if (time >= 9 && time < 11) {

		$(product)[0].play(); // poursuit la vidéo au waypoint

	} else if (time >= 11) {

		$(product)[0].pause();

	}

	if (token == 5) {

		setTimeout(sectionFive, 1000);

	}

};

// w = $(document).width();
// dh = $(document).height();
// heightPorcent = (dh/3.8);
// heightVideo = dh - heightPorcent;
// heightVid = $('#inductive-product').height();

// $(window).resize(function(){
// 	dw = $(document).width();
// 	dh = $(document).height();
// 	heightPorcent = (dh/3.8);
// 	heightVideo = dh - heightPorcent;
// });



// $(document).scroll(function(){

// 	var scroll = $(this).scrollTop();
// 	// heightDoc = $('#inductive-product').height();
// 	console.log(scroll);
// 	console.log(heightVideo);
// 	if(scroll <= heightVideo){
// 		$('#inductive-product').css({
// 			"position" : "absolute",
// 			"top" : (heightVideo-heightVid) + "px"
// 		});
// 	}

// });

var PosParagraphe = $('#control-height-vid').offset();
console.log(PosParagraphe);
PosParagraphe = PosParagraphe.top;
console.log(PosParagraphe);

var HeightParag = $('#control-height-vid').height();
HeightParag = HeightParag + PosParagraphe - 45;

console.log(HeightParag);


$(document).scroll(function(){

	var scroll = $(this).scrollTop();
	console.log(scroll);
	if(HeightParag < scroll){

		$('#inductive-product').fadeOut();

	} else if (HeightParag > scroll) {

		$('#inductive-product').fadeIn();
	}

});



var positionDiv = $('#partie2').offset();
var HeightDiv = $('#partie2').height();

$('#zoom').css('bottom', positionDiv.top +'pix');
$('#zoom').css('height', HeightDiv);





});