// año semana dia
document.write(`4º Ejercicio<br>`)
var numero = prompt('Ingrese un número para ver cantidad de dia, semana y año: ')
numero = parseInt(numero)
var años = Math.floor(numero/365)
var resto = numero-(años*365)
var semanas = Math.floor(resto/7)
var dia_restante = resto-(semanas*7)

// Mostrar
document.write(`
${años} años ${semanas} semanas y ${dia_restante} dia<br>`)