// diagrama de flujo
document.write(`1º Ejercicio en imágen<br>`)
// operaciones
document.write(`2º Ejercicio<br>`)
var operacion1 = "Sumar"
var operacion2 = "Restar"
var operacion3 = "Multiplicar"
var operacion4 = "Dividir"
var operacion5 = "Módulo"
//var nombre = prompt("Ingrese su nombre: ")
var numero = prompt('Ingrese un número mayor a cero : ')
var segundo_numero = prompt('Ingrese un segundo número mayor a cero : ')
numero = parseInt(numero)
segundo_numero = parseInt(segundo_numero)
// Mostrar
document.write(`
el resultado de ${operacion1} ${numero} y ${segundo_numero} es :${(numero+segundo_numero)}<br>
el resultado de ${operacion2} ${numero} y ${segundo_numero} es : ${(numero-segundo_numero)}<br>
el resultado de ${operacion3} ${numero} y ${segundo_numero} es : ${(numero*segundo_numero)}<br>
el resultado de ${operacion4} ${numero} y ${segundo_numero} es : ${(numero/segundo_numero)}<br>
el ${operacion5} de ${numero} y ${segundo_numero} es : ${(numero%segundo_numero)}<br>`)

