alert("Calculadora de días")
var dias = parseInt(prompt(`Ingrese una cantidad de días para calcular a cuantos años, semanas y días equivale`))

//se calcula cuantos años son
var anios = Math.floor(dias / 365)
//se calcula cuantas semanas son restandoles lo equivalente a años pero en días
var semanas = Math.floor((dias - (anios * 365))/7)
//se calcula cuantas semanas son restandoles lo equivalente a años pero en días y lo equivalente a semanas pero en días
var dia = Math.floor(dias - (anios * 365) - (semanas * 7))

//se muestra a cuanto equivale el valor ingresado por el usuario
document.write(`<p class='text-center mt-5'><strong>${dias} días</strong> equivalen a <strong>${anios} años</strong>, <strong>${semanas} semanas</strong> y <strong>${dia} días</strong></p>`)
