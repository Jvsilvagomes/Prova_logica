let altura = 1.35;

let podeMontanhaRussa = false;
let podeRodaGigante = false;
let podeBateBate = false;

if(altura >= 1.5){
    podeMontanhaRussa = true;
}
if(altura >= 1.2){
    podeRodaGigante = true;
}
if(altura >= 1.1){
    podeBateBate = true;
}
console.log("Pode brincar na montanha Russa? " + (podeMontanhaRussa ? 'Sim' : 'Não'));


/*Outra solução valida

if(podeMontanhaRussa == true){
    console.log("Pode brincar na montanha russa? Sim")
}else{
    console.log("Pode brincar na montanha russa? Não")
}
if(podeMontanhaRussa == true){
    console.log("Pode brincar na Roda Gigante? Sim")
}else{
    console.log("Pode brincar na Roda Gigante? Não")
}
if(podeMontanhaRussa == true){
    console.log("Pode brincar na Bate Bate? Sim")
}else{
    console.log("Pode brincar na Bate Bate? Não")
}
*/

