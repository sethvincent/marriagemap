$(document).ready(function(){
  var width = $(window).width();
  console.log(width);
  $(window).resize(function() {
    var new_width = $(window).width();
    
    console.log(new_width);
  })
});