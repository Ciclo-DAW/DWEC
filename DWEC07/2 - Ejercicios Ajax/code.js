/* VERSION JQUERY*/

/* $(window).on("load", function() {
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
}); */

/* VERSION VANILLA JS*/

window.onload = function() {
    document.querySelector('input[type="button"]').addEventListener("click", comprobarNombre);

    function comprobarNombre() {
        var login = document.querySelector("#login").value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response === "si") {
                    document.querySelector("#disponibilidad").innerHTML = "El nombre de usuario est&aacute; disponible";
                } else if (this.response === "no") {
                    document.querySelector("#disponibilidad").innerHTML =
                        "El nombre de usuario NO est&aacute; disponible";
                }
            }
        };

        xhr.open("POST", "compruebaDisponibilidad.php", true);
        xhr.send(login);
    }
};
