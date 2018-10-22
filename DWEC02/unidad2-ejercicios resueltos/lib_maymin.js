function mayor(n1, n2, n3) {
    var mayor;
    if (n1 > n2 && n1 > n3) {
        mayor = n1;
    } else if (n2 > n1 && n2 > n3) {
        mayor = n2
    } else if (n3 > n1 && n3 > n2) {
        mayor = n3
    }
    document.write('<p>El mayor es: ' + mayor + '</p>');  
};

function menor(n1, n2, n3) {
    var menor;
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    } else if (n2 < n1 && n2 < n3) {
        menor = n2
    } else if (n3 < n1 && n3 < n2) {
        menor = n3
    }
    document.write('<p>El menor es: ' + menor + '</p>');  
}