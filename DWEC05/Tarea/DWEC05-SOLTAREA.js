window.onload = function() {
    var errores = document.querySelector("#errores");
    document.querySelector("#nombre").addEventListener("blur", function() {
        this.value = this.value.toUpperCase();
    });
    document.querySelector("#apellidos").addEventListener("blur", function() {
        this.value = this.value.toUpperCase();
    });
    document.querySelector("#enviar").addEventListener("click", validarFormulario);

    function validarFormulario(e) {
        intentosEnvio();

        if (
            validarNombreApellidos() &&
            validarEdad() &&
            validarNIF() &&
            validarEmail() &&
            validarProvincia() &&
            validarFecha() &&
            validarTlf() &&
            validarHora() &&
            confirmarEnvio()
        ) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    }

    function validarNombreApellidos() {
        var nombre = document.querySelector("#nombre");
        var apellidos = document.querySelector("#apellidos");
        nombre.classList.remove("error");
        apellidos.classList.remove("error");

        if (nombre.value == "") {
            errores.innerHTML = "El campo nombre no puede estar vacío";
            nombre.focus();
            nombre.classList.add("error");
            return false;
        }
        if (apellidos.value == "") {
            errores.innerHTML = "El campo apellidos no puede estar vacío";
            apellidos.focus();
            apellidos.classList.add("error");
            return false;
        }
        return true;
    }

    function validarEdad() {
        var edad = document.querySelector("#edad");

        edad.classList.remove("error");

        if (isNaN(parseInt(edad.value)) || edad.value < 0 || edad.value > 105) {
            errores.innerHTML = "El campo edad no es correcto";
            edad.focus();
            edad.classList.add("error");
            return false;
        }

        return true;
    }

    function validarNIF() {
        var nif = document.querySelector("#nif");
        nif.classList.remove("error");
        var regExp = /^[0-9]{8}-[A-Z]{1}$/; //En la expresión regular se especificar que al principio tenga un valor entre 0 y 9 repetido 8 veces, después un guión y después un valor entre A y Z repetido 1 vez.
        if (!regExp.test(nif.value)) {
            errores.innerHTML =
                "El campo NIF no es correcto, deben de ser 8 números seguidos de un guión y una letra mayúscula";
            nif.focus();
            nif.classList.add("error");
            return false;
        }
        return true;
    }

    function validarEmail() {
        var email = document.querySelector("#email");
        email.classList.remove("error");
        var regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9_-]+\.?[a-zA-Z0-9_-]{0,}\.[a-zA-Z]{2,}$/; //En la expresión especificamos que antes de la @ debe de ir un caracter alfanumerico o un simbolo ".!#$%&'*+/=?^_`{|}~-" una o más veces y después de la @ un caracter alfanumerico, o _ o - una o más veces, un simbolo punto "." opcional y otra vez un caracter alfanumerico o _ o - cero más veces, seguido de un punto y 2 o más caracteres alfabéticos.

        if (!regExp.test(email.value)) {
            errores.innerHTML = "El campo email no es correcto";
            email.focus();
            email.classList.add("error");
            return false;
        }
        return true;
    }

    function validarProvincia() {
        var provincia = document.querySelector("#provincia");
        provincia.classList.remove("error");

        if (provincia.selectedIndex == 0) {
            errores.innerHTML = "Debe seleccionar una provincia";
            provincia.focus();
            provincia.classList.add("error");
            return false;
        }
        return true;
    }

    function validarFecha() {
        var fecha = document.querySelector("#fecha");
        fecha.classList.remove("error");

        var regExp1 = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/; //Dos numeros seguidos de guión, seguidos de dos numeros seguidos de guión, seguidos de dos numeros
        var regExp2 = /^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$/; //Lo mismo pero en vez de con guiones con /, el caracter \ se usa para escapar los / y que no los interprete como caracteres especiales de la regexp

        if (!regExp1.test(fecha.value) && !regExp2.test(fecha.value)) {
            errores.innerHTML = "El campo fecha no es correcto, de ser de forma dd-mm-aaaa o dd/mm/aaaa";
            fecha.focus();
            fecha.classList.add("error");
            return false;
        }
        console.log("hola");

        return true;
    }

    function validarTlf() {
        var telefono = document.querySelector("#telefono");
        telefono.classList.remove("error");
        var regExp = /^[0-9]{9}$/; //Desde el principio de la cadena ^ hasta el final $ debe de haber 9 caracteres comprendidos entre 0 y 9

        if (!regExp.test(telefono.value)) {
            errores.innerHTML = "El campo telefono no es correcto";
            telefono.focus();
            telefono.classList.add("error");
            return false;
        }
        return true;
    }

    function validarHora() {
        var hora = document.querySelector("#hora");
        hora.classList.remove("error");
        var regExp = /^[0-9]{2}:[0-9]{2}$/; //Desde el principio de la cadena ^ hasta el final $ debe de haber 9 caracteres comprendidos entre 0 y 9 repetidos dos veces, después ":" y después 9 caracteres comprendidos entre 0 y 9 repetidos dos veces

        if (!regExp.test(hora.value)) {
            errores.innerHTML = "El campo hora no es correcto";
            hora.focus();
            hora.classList.add("error");
            return false;
        }
        return true;
    }

    function intentosEnvio() {
        var contador = 0;
        var nombre = "contador";
        var intentos = document.querySelector("#intentos");
        if (!existeCookie("contador")) {
            document.cookie = nombre + "=" + contador;
        } else {
            contador = existeCookie("contador");
            contador++;
            document.cookie = nombre + "=" + contador;
        }
        intentos.innerHTML = "Intento de Envíos del formulario: " + contador;
    }

    //Esto lo hago por si existen otras cookies, modificar solamente la del contador
    function existeCookie(nombre) {
        var cookieArray = document.cookie.split(";");
        for (var i = 0; i < cookieArray.length; i++) {
            var c = cookieArray[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(nombre) == 0) {
                return c.substring(nombre.length + 1, c.length);
            }
        }
        return false;
    }

    function confirmarEnvio() {
        return confirm("¿Acepta enviar el formulario?");
    }
};
