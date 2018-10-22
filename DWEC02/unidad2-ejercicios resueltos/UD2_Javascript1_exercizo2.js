function confirmClose() {
    alert("Error: 107x.  Un virus ha infestado su disco duro, es necesario eliminar todos los archivos y formatear la unidad C")
    if (confirm("Informe a su vendedor de este error."))
        alert('El navegador se cerrará ya que es imposible comunicarse con ningún sitio web.');
    else
        alert('Es imposible recuperar el sistema, se comenzará a eliminar archivos.'); {
        parent.close();
    }
}