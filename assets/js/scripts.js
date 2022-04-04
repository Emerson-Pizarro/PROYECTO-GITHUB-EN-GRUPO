$(document).ready(function () {


    $('a').click(function () {
        var gato = this.hash

        $('html, body'),animate(
            {

                scrolltop: $(gato).offset().top
            },
            3000
            
        )
    })
}