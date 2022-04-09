
    $(document).ready(function(){

        // SMOTH SCROLL DESDE EL NAV-BAR
        
        $(".nav-link").on('click', function(event) {
    
        
            if (this.hash !== "#") {
                
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1100, function(){
                window.location.hash = hash;
                });
            }

        });

        // incorporación de toggle
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    
        })

        // alerta con mensaje que aparece al presionar el boton de enviar del formulario

        $("#boton-enviar").click(function(){
            alert("El correo fue enviado correctamente...")
        });


        // cuando se clikée el título de cualquiera de las 4 cartas se oculta el contenido de las 3 cartas a la vez

        $(".card-title").click(function(){
            $(".card-img-top, .card-text").toggle();
        }); 

        $(".card-title").click(function(){
        $(".card-img-top, .card-text").toggle();
        }); 

        $(".card-title").click(function(){
        $(".card-img-top, .card-text").toggle();
        }); 


        // cambio de color de los 3 íconos  cada uno por separado cuando se clikean.

        
        $("#icono-avion").on("dblclick", function(){
            $("#icono-avion").css("color", "red");
        });
        
        $("#icono-montaña").on("dblclick", function(){
            $("#icono-montaña").css("color", "red");
        });

        $("#icono-persona").on("dblclick", function(){
            $("#icono-persona").css("color", "red");
        });


    });
