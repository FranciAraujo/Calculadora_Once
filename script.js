// script.js

function calcular(operador) {
    // Obtiene el valor ingresado en el primer campo y lo convierte a un número de punto flotante
    var valor1 = parseFloat(document.getElementById("val1").value);
    
    // Obtiene el valor ingresado en el segundo campo y lo convierte a un número de punto flotante
    var valor2 = parseFloat(document.getElementById("val2").value);
    
    // Variable para almacenar el resultado de la operación
    var resultado;

    // Utiliza un switch para determinar qué operación realizar según el operador proporcionado
    switch (operador) {
        // Caso de suma
        case '+':
            resultado = sumar(valor1, valor2);
            break;
        
        case '-':
            if (valor1 >= 0 && valor2 >=0){
                resultado = restar(valor1,  valor2);
             }else {
                resultado= sumar(valor1, valor2);
             }
            
            break;
        // Caso de multiplicación
        case '*':
            resultado = valor1 * valor2;
            break;
        // Caso de división
        case '/':
            // Manejar la división por cero
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "Error: No se puede dividir por cero";
            }
            break;
        // Caso por defecto para operadores no reconocidos
        default:
            resultado = "Operador no válido";
    }

    // Asigna el resultado al campo de entrada HTML con el ID "resultado"
    document.getElementById("resultado").value = resultado;
}

// Función para sumar, maneja sumas con números negativos
function sumar(valor1, valor2) {
    return valor1 + valor2;
}

// Función para restar, maneja restas con números negativos
function restar(valor1, valor2) {
    return valor1 - valor2;
}
