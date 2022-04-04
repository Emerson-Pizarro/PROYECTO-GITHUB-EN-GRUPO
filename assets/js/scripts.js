
// SMOTH SCROLL DESDE EL NAV-BAR

    // REVISAAR EL "nav-link" QUE PUSE EN LA LINEA 7!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $(".nav-link").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "#") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 1100, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
        });
    });



    $(document).ready(function(){

        // incorporación de toggle
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        
            })

        // alerta con mensaje que aparece al presionar el boton de enviar del formulario

            $("#boton-enviar").click(function(){
                alert("El correo fue enviado correctamente...")
            });

        // cambio de color de los subtitulos ingredientes y preparacion cada uno por separado cuando se clikean

            // $(" section>h3").on("dblclick", function(){
            //     $(" section>h3").css("color", "red");
            // });

            // $("div>h3").on("dblclick", function(){
            //     $("div>h3").css("color", "red");
            // });

        // cambio de color de los subtitulos ingredientes y preparacion al mismo tiempo al presionar solo uno de ellos

            // $(" section h3").on("dblclick", function(){
            //     $(" section h3").css("color", "red");
            // });


        // SECCION DE CARTAS

            // ocultar sólo el contenido de la carta que se clickeo

                // $("#tituloCarta1").click(function(){
                //     $(".ocultarContenido1").toggle();
                // }); 

                // $("#tituloCarta2").click(function(){
                // $(".ocultarContenido2").toggle();
                // }); 

                // $("#tituloCarta3").click(function(){
                // $(".ocultarContenido3").toggle();
                // }); 

            // cuando se clikée el título de cualquiera de las 3 cartas se oculta el contenido de las 3 cartas a la vez

                // $("#tituloCarta1").click(function(){
                //     $(".card-img-top, .card-text").toggle();
                // }); 

                // $("#tituloCarta2").click(function(){
                // $(".card-img-top, .card-text").toggle();
                // }); 

                // $("#tituloCarta3").click(function(){
                // $(".card-img-top, .card-text").toggle();
                // }); 


    });