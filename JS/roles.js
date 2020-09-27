 window.addEventListener("load",function(){

   // Slider con JS puro "Vanilla"
   var linkToggle = document.querySelectorAll('.icon_slider');
   for(i = 0; i < linkToggle.length; i++){
     linkToggle[i].addEventListener('click', function(event){
       event.preventDefault();
       var container = document.querySelector("#slider_options");
       if (!container.classList.contains('active')) {
         container.classList.add('active');
         container.style.height = 'auto';
         var height = container.clientHeight + 'px';
         container.style.height = '0px';
         setTimeout(function () {
           container.style.height = height;
         }, 0.4000);
       } else {
         container.style.height = '0px';
         container.addEventListener('transitionend', function () {
           container.classList.remove('active');
         },{
           once: true
         });
       }
     });
   }

   /*
      Declaro mi variable seleccionando el qeu va a relizar la accion
      var youtoggle = document.querySelectorAll(".holiwis");

      Realizo un bucle for 
      for(j = 0; j < youtoggle.length; j++){

      Agrego el evento a realizar si quiero capturo el evento para mayor eficacia 
      youtoggle[j].addEventListener("click",function(event){
      event.preventDefault();

      Declaro una variabla que sera mi contenido
      var retenedor = document.querySelector("#you");

      Con esta condicional lo que hago es utilizar .classList para validar un campo de ese tag 
      con el contains observo si tiene el attr que le he pasado 

      if(!retenedor.classList.contains("active")){

         con este metodo .add añado un attr a dicho elemento
         retenedor.classList.add("active");

         Este margin auto es para que se ajuste al contenido
         retenedor.style.height = "auto";

         con clientHeight realizo devuelvo la altura de mi elemento en pixeles lo dejo en 0 para que se ajuste
         var altura = retenedor.clientHeight + "px";

         Este estilo que realiza la altura se deja en 0 precisamente para que se ajuste al contenido 
         retenedor.style.height = "0px";

         realizo un timeout para que realize dicha funcion segun los milisegundos que le ponga
         setTimeout(function(){
            Aca el toma el valor de la variable de clientHeight osea ajuste al contenido por que no le he 
            pasado un valor 
            retenedor.style.height = altura;

         },ACA VAN LOS MILISEGUNDOS -> 0);
      }else{
         Si la validacion no es correcta tendra 0px 
         retenedor.style.height = "0px";
         
         Se añade un evento donde se utiliza un metodo .remove que quita ese attr del elemento 
         retenedor.addEventListener("transitionend",function(){
            retenedor.classList.remove("active");
         },{
            once:true
         })
         OJO NESECITA DE UNAS COSITAS EN CSS, OSEA MIRAR CSS
      }

      })
   }*/

   var logout = document.querySelector(".contenedor_boton");

   logout.addEventListener("click",function(){
    let anuncio = document.querySelector("#anuncio");
    anuncio.style.display = "block";

    var timeleft = 5;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },500);

     setTimeout(function(){
       window.location.href = "login.html";
     },3000)
   });

   new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    lineColors: ["purple"],
    resize:true,
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });


  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Operando", value: 23},
      {label: "Dañanas", value: 10},
      {label: "Mantenimiento", value: 20}
    ]
  });
  
})