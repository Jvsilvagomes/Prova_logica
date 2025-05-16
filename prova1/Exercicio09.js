let tempos = [312, 298, 301, 289, 330, 310, 299];
let nomes = ["Atlas", "Optimus", "Nova", "Bolt", "Titan", "Zeus", "Echo","Shadow"];

let menorTempo = tempos[0];
let indiceMenor = 0;

for (let i = 0; i < tempos.length; i++){
    if(tempos[i] < menorTempo){
        menorTempo = tempos[i];
        indiceMenor = i;
    }
}
    console.log("O robo campeão foi " + nomes[indiceMenor] + "Com o tempo de " + menorTempo + " Segundos! ");
    // 1 ponto