<?php
//para evitar que los warning salgan en pantalla y se traten como texto json empleamos error_reporting
error_reporting(0);
$objeto = "";
$objeto->nombre = "JUan";
$objeto->nacimiento = "1990";
$objeto->pais = "España";

//codificamos el objeto en json
$objJSON = json_encode($objeto);
echo $objJSON;



?>

