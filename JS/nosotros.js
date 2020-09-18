window.addEventListener("load",function(){

    var hover_nav_principal = $(".contenedor_hipers");
    hover_nav_principal.hover(realizarcambio,devolvercambio);

    function realizarcambio(){
        $(this).css("background","#FF5733")
        .css("color","#fff")
        .css("border-top","4px solid #7216af")
        $(".hiper").css("text-decoration","none");
    }
    function devolvercambio(){
        $(this).css("background","#fff")
        .css("color","black")
        .css("border-top","none"),
        $(".hiper").css("color","black");
    }

    // Evento para hover de afiliacion

    var afiliacion = $("#hiper_afiliacion");

    afiliacion.hover(colorafiliacion,coloresafilicion);

    function colorafiliacion(){
        var short_this = $(this);
        short_this.css("background","black");
    }
    function coloresafilicion(){
        var short_this = $(this);
        short_this.css("background","#7216af");
    }

    // Slider para el buscador
    var buscador = $(".icono");
    var busca = $(".buscador");

    busca.hide();

    buscador.click(function(){
    busca.slideToggle("fast");
    })
})