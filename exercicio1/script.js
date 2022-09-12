let desejaComerMaisCoxinha = prompt(`Você gostaria de comer uma coxinha?
Digite S se deseja comer uma coxinha
Digite N se não deseja comer.
`).toUpperCase()
let conta = 0

if(desejaComerMaisCoxinha === `N` || desejaComerMaisCoxinha === `S`){
    while(desejaComerMaisCoxinha !== `N`){
        conta = conta + 2.50;
        desejaComerMaisCoxinha = prompt(`Você gostaria de comer mais uma coxinha?
Digite S se deseja comer mais uma coxinha
Digite N se não deseja comer mais coxinhas
        `).toUpperCase()
    }
    console.log(`O valor total da sua conta é ${conta} reais
    `)
}else{
    console.log(`Digite S ou N, por favor!`)
    alert(`Digite S ou N, por favor!`)
}