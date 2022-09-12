let desejaComerMaisCoxinha
let conta = 0.00


while(desejaComerMaisCoxinha !== `N`){
        desejaComerMaisCoxinha = prompt(`Você gostaria de comer mais uma coxinha?
Digite S se deseja comer mais uma coxinha
Digite N se não deseja comer mais coxinhas
        `).toUpperCase()
        if(desejaComerMaisCoxinha === "S"){
        conta = conta + 2.50;}
    }
console.log(`O valor total da sua conta é ${conta} reais
`)

// if(desejaComerMaisCoxinha === `N` || desejaComerMaisCoxinha === `S`){
//     while(desejaComerMaisCoxinha !== `N`){
//         if(desejaComerMaisCoxinha === `S`){
//         conta = conta + 2.50;
//         desejaComerMaisCoxinha = prompt(`Você gostaria de comer mais uma coxinha?
// Digite S se deseja comer mais uma coxinha
// Digite N se não deseja comer mais coxinhas
//         `).toUpperCase()
//     }
// }}
// console.log(`O valor total da sua conta é ${conta} reais`)