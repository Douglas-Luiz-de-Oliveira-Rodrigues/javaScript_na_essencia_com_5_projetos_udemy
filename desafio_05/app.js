/* Faça um programa para ler um número indeterminado de temperaturas,
quando a temperatura 0 for lida, informar a média delas.
*/

let temp;
let somaTemp;
let numTemp;

while(true){
    temp = parseInt(prompt("Inform uma temperatura"));
    if(temp === 0){
        break;
    }
    somaTemp += temp;
    numTemp += 1;
}

console.log(somaTemp/numTemp);