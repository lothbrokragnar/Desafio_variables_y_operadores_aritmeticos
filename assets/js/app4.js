alert ("Ingrese 5 numeros")
var num1 = parseInt(prompt(`Ingresa tu primer numero: `))
var num2 = parseInt(prompt(`Ingresa tu segundo numero: `))
var num3 = parseInt(prompt(`Ingresa tu tercer numero: `))
var num4 = parseInt(prompt(`Ingresa tu cuarto numero: `))
var num5 = parseInt(prompt(`Ingresa tu quinto numero: `))

 //sumatoria de los 5 numeros
var sumatoria = num1 + num2 + num3 + num4 + num5
//promedio de los 5 numeros
var promedio = sumatoria / 5

//se muestra el resultado de la sumatoria y el promedio
document.write(`<p class='text-center mt-5'>La suma de sus números es <strong>${sumatoria}</strong> y su promedio es <strong>${promedio}</strong></p>`)