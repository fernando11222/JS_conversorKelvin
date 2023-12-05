let k = parseFloat(prompt('Digite em Kelvin: ').replace(",","."))
let f = (k - 273.15)*9/5+32
let c = k - 273.15
document.write(`<p>Fahrenheit = ${f}</p><p>Celsius = ${c}</p>`)