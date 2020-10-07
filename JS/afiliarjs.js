$(document).ready(function(){
    $(".ingresar").click(function(){
        window.location.href = "login.html";
    })
    $(".afiliar").click(function(){
        window.location.href = "https://youtube.com";
    })

    $("#afiliado").hover(function(){
        $(this).animate({
            height : "97%"
        })
    },function(){
        $(this).css("height","100%");
    })

    $("#no_afiliado").hover(function(){
        $(this).animate({
            height : "97%"
        })
    },function(){
        $(this).css("height","100%");
    })

     var jjj = ["f","s","d"];
     console.log(jjj);
})