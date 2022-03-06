alert("ingresar dos números diferentes y mayores a cero")
var num1 = parseInt(prompt("ingresa tu primer numero entero"))
var num2 = parseInt(prompt("ingresa tu segundo numero entero"))

//variable de suma
var suma = num1 + num2
//variable de resta
var resta = num1 - num2
//variable de multiplicación
var multiplicacion = num1 * num2
//variable de división con decimales fijados en 2 máximo
var division = (num1 / num2).toFixed(2)
//variable de calculo de modulo entre 2 numeros
var modulo = (num1 % num2)

document.write(`<p>El resultado de su suma es: <strong> ${suma} </strong></p>`) //se muestra la suma
document.write(`<p>El resultado de su resta es: <strong> ${resta} </strong></p>`)//se muestra la resta
document.write(`<p>El resultado de su multiplicación es: <strong> ${multiplicacion} </strong></p>`)//se muestra la multiplicación
document.write(`<p>El resultado de su división es: <strong> ${division} </strong></p>`)//se muestra la división
document.write(`<p>El resultado de su modulo es: <strong> ${modulo} </strong></p>`)//se muestra el modulo
