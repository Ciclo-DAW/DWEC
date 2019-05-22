/* VERSION JQUERY*/

/* $(window).on("load", function() {
    $.ajax({
        url: "obtenerProvincias.php",
        type: "POST",

        success: function(data) {
            $.each(data, function(key, value) {
                $("#lista").append('<option value="' + value + '">' + value + "</option>");
            });
        },
        error: function(data) {
            alert("error");
        }
    });
}); */

/* VERSION VANILLA JS*/

window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var provincias = JSON.parse(this.response);
            Object.keys(provincias).forEach(function(key, value) {
                document.querySelector("#lista").innerHTML +=
                    '<option value="' + provincias[key] + '">' + provincias[key] + "</option>";
            });
        }
    };

    xhr.open("POST", "obtenerProvincias.php", true);
    xhr.send();
};
