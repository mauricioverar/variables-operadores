// calculos
document.write(`5º Ejercicio<br>`)
var num1 = prompt('Ingrese número 1 de 5 : ')
var num2 = prompt('Ingrese número 2 de 5 : ')
var num3 = prompt('Ingrese número 3 de 5 : ')
var num4 = prompt('Ingrese número 4 de 5 : ')
var num5 = prompt('Ingrese número 5 de 5 : ')

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
num4 = parseInt(num4)
num5 = parseInt(num5)
var suma = num1+num2+num3+num4+num5
var prom = suma/5



// Mostrar
document.write(`
la suma de los numeros ingresados es ${suma}<br>
y el promedio es ${prom}<br>`)