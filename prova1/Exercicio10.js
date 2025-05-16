let ataque = [20, 35, 50, 40, 15];
let vidaFortaleza = 300;

for(let i = 0; i < ataque.length; i++){
    vidaFortaleza = vidaFortaleza - ataque[i];
}
if(vidaFortaleza > 0){
    console.log("Fortaleza ressistiu com " + vidaFortaleza + "pontos de vida");
}else{
    console.log("Fortaleza foi destruida!");
}