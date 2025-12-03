let valor_a = 77
let valor_b = 43
console.log(`Esse é o valor de A: ${valor_a}\nEsse é o valor de B: ${valor_b} \n\nALTERANDO>>>>\n\n`)


let valor_c = valor_a
valor_a = valor_b
valor_b = valor_c

console.log(`Esse é o valor de A: ${valor_a}\nEsse é o valor de B: ${valor_b}`)
