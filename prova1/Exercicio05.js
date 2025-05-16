let valores = [2, 3, 10, 1, 7, 1];
let i = 0;
let maior = valores[0];

while(i < valores.length){
    if(valores[i] > maior){
        maior = valores[i];
    }
    i++;
}
console.log(maior)

// 1 ponto