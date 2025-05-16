let shows = [2, 0, 3, 1 , 4 ];
let totalShows = 0;

console.log("Exercicio 06");
for(let i = 0; i < shows.length; i++){
    totalShows += shows[i];
}

console.log("Total de shows assistidos é de:", totalShows);
if(totalShows > 8){
    console.log("Voce é super fã");
}else{
    console.log("Aproveite mais os shows");
}
console.log("-----------------------------------------------");
