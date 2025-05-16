let gol = [2, 3, 0, 5, 1];
let jogadores = ["Leo", "Sam", "Nina", "Gabi", "Caio"];

let maisGols = gol[0];
let artilheiro = 0;

for(let i = 0; i < gol.length; i++ ){
    if(gol[i] > maisGols){
        maisGols = gol[i];
        artilheiro = i;
    }
}
console.log(`O atrilheiro foi ${jogadores[artilheiro]} com o total de ${maisGols} gols`)
console.log("---------------------------------------------------------------")