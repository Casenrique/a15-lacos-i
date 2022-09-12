let = numeroUsuario = Number(prompt(`Digite seu número.`))
const tabuadaAux = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if(numeroUsuario <=10 ){
    for (let i = 0; i < tabuadaAux.length; i++){
    console.log(numeroUsuario * tabuadaAux[i])
}}else{
    console.log(`Digite um número entre 1 e 10.`)
} 