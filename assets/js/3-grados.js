// conversion de grados
document.write(`3º Ejercicio<br>`)
//273.15 kelvin == 0 celsius == 32 fahrenheit
var ck = 273.15// 0c + 273.15 = 273.15 kelvin
var cf = 32// (0c * 9/5 ) + 32 = 32 fahrenheit
var celsius = prompt('Ingrese grados celsius : ')
celsius = parseInt(celsius)
// Mostrar
document.write(`${celsius} grados Celsius,<br> 
equivalen a: ${(celsius+273.15)} grados Kelvin<br>
y equivalen a: ${((celsius*9/5)+32)} grados fahrenheit<br>`)
