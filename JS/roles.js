 window.addEventListener("load",function(){

 var sliderOptions = $(".icon_slider");
 var options = $(".slider_options");
 var tablero = $(".tablero");

 sliderOptions.click(function(){
    options.slideToggle("fast"),
    tablero.css("width","100%");
 })

})