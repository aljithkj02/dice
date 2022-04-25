

let player1 = Math.floor((Math.random() * 6)+1);
console.log(player1);

let player2 = Math.floor((Math.random()*6)+1);
console.log(player2);

if(player1 === player2){
    console.log("Draw");
    document.getElementById("playerLeft").innerHTML = "DRAW";
    document.getElementById("playerRight").innerHTML = "DRAW";

}else if (player1 > player2){
    console.log("Player 1 WON!!");
    document.getElementById("playerLeft").innerHTML = "WON !!"
    document.getElementById("playerRight").innerHTML = "LOSE !!"

}else{
    console.log("Player 2 WON!!");
    document.getElementById("playerLeft").innerHTML = "LOSE !!"
    document.getElementById("playerRight").innerHTML = "WON !!"
}


/*-- CSS  --*/

for(let i = 1; i <= player1; i++){
    console.log(i);
    document.getElementById("lp"+i).classList.toggle("left");
}

for(let i = 1; i <= player2; i++){
    console.log(i);
    document.getElementById("rp"+i).classList.toggle("right");
}