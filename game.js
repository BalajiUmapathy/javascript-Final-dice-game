
//     var randomNumber1=0;
// if (randomNumber1===0){ document.querySelector(".img1").setAttribute("src","./images/dice6.png");
//  document.querySelector(".img1").setAttribute("src","./images/dice6.png");
//  document.querySelector("h1").textContent = "Refresh Me !!";
// }
var j=2
do{

    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
     document.querySelector("h1").innerHTML="Refresh Me";
     j++;
}
while(j===2);






var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
  
 if (randomNumber1===1) document.querySelector(".img1").setAttribute("src","./images/dice1.png");
 else if (randomNumber1===2) document.querySelector(".img1").setAttribute("src","./images/dice2.png");
 else if (randomNumber1===3) document.querySelector(".img1").setAttribute("src","./images/dice3.png");
 else if (randomNumber1===4) document.querySelector(".img1").setAttribute("src","./images/dice4.png");
 else if (randomNumber1===5) document.querySelector(".img1").setAttribute("src","./images/dice5.png");
 else  document.querySelector(".img1").setAttribute("src","./images/dice6.png");

 if (randomNumber2===1) document.querySelector(".img2").setAttribute("src","./images/dice1.png");
 else if (randomNumber2===2) document.querySelector(".img2").setAttribute("src","./images/dice2.png");
 else if (randomNumber2===3) document.querySelector(".img2").setAttribute("src","./images/dice3.png");
 else if (randomNumber2===4) document.querySelector(".img2").setAttribute("src","./images/dice4.png");
 else if (randomNumber2===5) document.querySelector(".img2").setAttribute("src","./images/dice5.png");
 else  document.querySelector(".img2").setAttribute("src","./images/dice6.png");

if(randomNumber1 > randomNumber2 ) document.querySelector("h1").innerHTML = "player 1 wins!!!";
else if (randomNumber1 < randomNumber2 ) document.querySelector("h1").innerHTML = "player 2 wins!!!";
else document.querySelector("h1").textContent = "oh!! it's Draw ";


setTimeout(function(){
    document.querySelector("h1").innerHTML="Refresh Me";
    
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
},4000);