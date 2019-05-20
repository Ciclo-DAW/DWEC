<?php
//arraynobmres
	$a = array("Sara","Dani","Fran","Iván","Juan","Pepi","Lucía","Luis","María");
	$nombre = $_REQUEST["nombre"];
	$sugerencia = "";
	if ($nombre!==""){
		$nombre =strtolower($nombre);
		$long = strlen($nombre);
		
		foreach ($a as $nom){
			if (stristr($nombre,substr($nom,0,$long))){
				if($sugerencia === ""){
					$sugerencia=$nom;
				}else{
					$sugerencia = "$sugerencia, $nom";
					
				}
					
			}
			
		}
		
	}
	echo ($sugerencia === "") ? "No hay sugerencias":$sugerencia;

?>