/* Calcular as raízes de uma equação do 2 grau */

console.log(`Dada a equação quadrática: \nx²-3x+2=0 \nqual as raízes da equação? `)


let raizDelta = Math.sqrt((-3)**2 - 4*1*2)
let valor1 = (-(-3) + raizDelta) / ( 2 * 1 )
let valor2 = (-(-3) - raizDelta ) / ( 2 * 1 )


console.log(`Raízes:\n${valor1}\n${valor2}`)