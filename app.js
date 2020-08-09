$(function () {
  $(window).on("scroll", function () {
    var w = window.innerWidth;
    if ($(window).scrollTop() > 10) {
      
      document.getElementById("logo").src = "src/fire_escudary.png";
      $(".navbar").addClass("active");
    } 
    else {
      if (w>992){
      document.getElementById("logo").src = "src/fire_escuudary_light.png";
    }
      $(".navbar").removeClass("active");
    }
  });
});


$( window ).on( "load", function() {
  var w = window.innerWidth;
  if (w<992){
  console.log(w);
  document.getElementById("logo").src = "src/fire_escudary.png";
}
});

$(document).ready(function() { 
  $(window).resize(function() { 
    var w = window.innerWidth;
    if (w<992){
      console.log(w);
      document.getElementById("logo").src = "src/fire_escudary.png";
    }
    else{
      document.getElementById("logo").src = "src/fire_escuudary_light.png";
    }
  }); 
}); 