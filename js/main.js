$(window).on('load', function(){
  setTimeout(function(){
    $('#intro').css({"width": "100%", "height":"100vh"});
    $('#intro').removeClass('introAn');
    $('.intro-overlay').fadeOut("slow");
  }, 1000);
});
