$(window).on("load", function() {
    $('input[type="button"]').click(comprobarNombre);

    function comprobarNombre() {
        var login = $("#login").val();
        $.ajax({
            url: "compruebaDisponibilidad.php",
            type: "POST",
            data: { login: login },

            success: function(data) {
                if (data === "si") {
                    $("#disponibilidad").html("El nombre de usuario est&aacute; disponible");
                } else if (data === "no") {
                    $("#disponibilidad").html("El nombre de usuario NO est&aacute; disponible");
                }
            },
            error: function(data) {
                alert("error");
            }
        });
    }
});
