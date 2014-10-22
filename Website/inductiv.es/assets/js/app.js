var windowHeight = $(window).height();
var videoContener = $('#video-demo');
var video = document.getElementById("video-demo-rendu");
var time;
var token;
var scrollTop;

// determine la hauteur des sections

$('main section').css('height', windowHeight/1.2 + 'px');
$('#home').css('height', (windowHeight - 12 )+ 'px');

$('#home').on('click', function(){

      $('body').addClass('animation-home-active')
});

// $('#video-demo').css('top', (windowHeight + 96) + 'px');

// var control1Offset = $('#para-control-1').offset();

// $(document).scroll(function() {
//       scrollTop = $(window).scrollTop();
//       console.log(scrollTop);

//       if( scrollTop == windowHeight  ){

//             $(video)[0].play();
//             setTimeout("paused()", 5000);
//             videoContener.addClass('video-fixed');
//       }
// });


// function paused(){

//       $(video)[0].pause();
// };
