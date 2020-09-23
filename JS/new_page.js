window.addEventListener("load",function(){
    // Evento para utilizar el hover en el nav principal
    var hover_nav_principal = $(".contenedor_hipers");
    hover_nav_principal.hover(realizarcambio,devolvercambio);

    function realizarcambio(){
        $(this).css("background","#FF5733")
        .css("border-top","4px solid #7216af")
        $(".hiper").css("text-decoration","none")
    }
    function devolvercambio(){
        $(this).css("background","rgba(255, 255, 255, 0.822)")
        .css("color","black")
        .css("border-top","none"),
        $(".hiper").css("color","black")
        .css("text-decoration","none");
    }

    /*  hover_nav_principal[0].addEventListener("mouseover",function(){
        hover_nav_principal[0].style.color = "#eb6806";  
    })
        hover_nav_principal[1].addEventListener("mouseover",function(){
        hover_nav_principal[1].style.color = "#eb6806";  
    })
        hover_nav_principal[2].addEventListener("mouseover",function(){
        hover_nav_principal[2].style.color = "#eb6806";  
    })
        hover_nav_principal[3].addEventListener("mouseover",function(){
        hover_nav_principal[3].style.color = "#eb6806";  
    })
        hover_nav_principal[4].addEventListener("mouseover",function(){
        hover_nav_principal[4].style.color = "#eb680";  
    })
    //Evento quitar del hover de  el nav principal 
        hover_nav_principal[0].addEventListener("mouseout",function(){
        hover_nav_principal[0].style.color = "black";
    })
        hover_nav_principal[1].addEventListener("mouseout",function(){
        hover_nav_principal[1].style.color = "black";
    })
        hover_nav_principal[2].addEventListener("mouseout",function(){
        hover_nav_principal[2].style.color = "black";
    })
        hover_nav_principal[3].addEventListener("mouseout",function(){
        hover_nav_principal[3].style.color = "black";
    })
        hover_nav_principal[4].addEventListener("mouseout",function(){
        hover_nav_principal[4].style.color = "black";
    })*/
    // Evento para utilizar el hover en el nav secundario
    var hover_nav_secundario = $(".hiper2")
    hover_nav_secundario.hover(cambiacolors2,cambiacolores2);

    function cambiacolors2(){
        $(this).css("color","#FF5733")
        .css("text-decoration","none");
    }
    function cambiacolores2(){
        $(this).css("color","#fff")
    }

    /* hover_nav_secundario[0].addEventListener("mouseover",function(){
     hover_nav_secundario[0].style.color = "#eb6806"    
     })
     hover_nav_secundario[1].addEventListener("mouseover",function(){
     hover_nav_secundario[1].style.color = "#eb6806"    
     })
     hover_nav_secundario[2].addEventListener("mouseover",function(){
     hover_nav_secundario[2].style.color = "#eb6806"    
     })
     hover_nav_secundario[3].addEventListener("mouseover",function(){
     hover_nav_secundario[3].style.color = "#eb6806"    
     })
     //Evento para quitar el hover de el nav secundario
     hover_nav_secundario[0].addEventListener("mouseout",function(){
     hover_nav_secundario[0].style.color = "whitesmoke";    
     })
     hover_nav_secundario[1].addEventListener("mouseout",function(){
     hover_nav_secundario[1].style.color = "whitesmoke";    
     })
     hover_nav_secundario[2].addEventListener("mouseout",function(){
     hover_nav_secundario[2].style.color = "whitesmoke";    
     })
     hover_nav_secundario[3].addEventListener("mouseout",function(){
     hover_nav_secundario[3].style.color = "whitesmoke";    
     })*/

    var afiliacion = $("#hiper_afiliacion");
     // Evento para hover de afiliacion

    afiliacion.hover(colorafiliacion,coloresafilicion);

    function colorafiliacion(){
        var short_this = $(this);
        short_this.css("background","black");
    }
    function coloresafilicion(){
        var short_this = $(this);
        short_this.css("background","#7216af");
    }

    //Evento para hacer el hover a la afiliciacion 
    /*afiliacion.addEventListener("mouseover",function(){
    this.style.background = "black";
    this.style.color = "#fff";
    }) 
    //Evento para quitar el hover de la afiliacion 
    afiliacion.addEventListener("mouseout",function(){
    this.style.background = "#7216af";
    this.style.color = "#fff";
    })*/
    //Evento para el hover del boton de la informacion 
    botones_divs = $(".botones");
    botones_divs.hover(colorbotones,coloresbotones);
    function colorbotones(){
        var short_this = $(this);
        short_this.css("background","#FF5733");
    }
    function coloresbotones(){
        var short_this = $(this);
        short_this.css("background","transparent");
    }

    // slider para buscador 
    
    var buscador = $(".icono");
    var busca = $(".buscador");

    busca.hide();

    buscador.click(function(){
        busca.slideToggle("fast");
    })

    $(".slider_pics").bxSlider({
        mode:"fade",
        captions:"false",
        slideWidth:1300,
        auto:true,
        speed:4000,
        pager:true
    });
})
