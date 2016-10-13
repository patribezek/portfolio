
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



 $('.dino-grow').click(function(){
 	
   $("#bg").attr('src',"img/02.png");
   return false;

 });




});