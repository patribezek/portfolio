
$(document).ready(function(){

$(function() {

$(".nav-me").click(function() {
    $('html, body').animate({
        scrollTop: $("#me").offset().top
    }, 1000);
}),
$(".nav-pandora").click(function() {
    $('html, body').animate({
        scrollTop: $("#pandora").offset().top
    }, 1000);
}),

$(".nav-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);

});



 $('.dino-grow-1').click(function(){
 	
   $(this).addClass('hide');
 $('.dino-grow-2').removeClass('hide');

 });

 $('.dino-grow-2').click(function(){
 	
   $(this).addClass('hide');
 $('.dino-grow-3').removeClass('hide');

 });

 $('.dino-grow-3').click(function(){
 	
   $(this).addClass('hide');
 $('.dino-grow-4').removeClass('hide');

 });

});

  windowsize = $(window).width();
  if (windowsize < 768) {
    //if the window is greater than 440px wide then turn on jScrollPane..
     $('.crazy-photo').attr("src", "img/crazy-photo-m.png");
  }

$('.click-me').hover(function(){
  $(this).addClass('out');
} );



});




