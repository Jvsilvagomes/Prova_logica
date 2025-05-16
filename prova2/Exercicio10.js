let hp = 500;
let ataques = [30, 50, 20 , 70, 60, 40];

console.log("Exercicio 10");

for (let i = 0; i < ataques.length; i++){
    hp -= ataques[i]
    if (hp <= 0 ){
        hp = 0;
        break;
    }
}
if(hp > 0 ){
    console.log(`O castelo resistiu com ${hp} pontos de vida!`);
}else{
    console.log(`O castelo foi destruido!`);
}
console.log("-------------------------------------------------------");