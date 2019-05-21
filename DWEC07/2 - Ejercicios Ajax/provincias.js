$(window).on("load", function() {
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
});
