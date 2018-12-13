 var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', ' '];  
function encriptar(){
            var cadena = document.getElementById("texto").value.toString().toUpperCase();
            var cadenaPartida = cadena.split("");
            var resultado = [];
            cadenaPartida.forEach(function(current){
                resultado.push(letras.indexOf(current) + 10);
            })
            var res = resultado.join('');
            document.getElementById('textoEncriptado').innerHTML = res;
            
            var arrayTemp = res.split('');
            var resultado2 = [];
            arrayTemp.forEach(function(element){
                if(res.indexOf(element) % 2 === 0){
                    resultado2.push(element);
                }
            })
            arrayTemp.forEach(function(element){
                if(res.indexOf(element) % 2 !== 0){
                    resultado2.push(element);
                }
            })
            var res2 = resultado2.join('');
            document.getElementById('textoEncriptado2').innerHTML = res2;
        }
        
        function desencriptar(){
            var texto = document.getElementById("textoEncriptado").innerHTML;
            var arrayResult = [];
            for(var i = 0; i<texto.length; i++){
                var temp = texto.slice(i, i+2);
                
               
                var letra = letras[temp];
                arrayResult.push(letra);
            }
            console.log(arrayResult);
            var final = arrayResult.join('');
            document.getElementById('textoEncriptado2').innerHTML = final;
        }
        