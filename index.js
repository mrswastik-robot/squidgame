var name1=prompt("Player 1 name:- ");
var name2=prompt("Player 2 name:- ");

document.querySelector("p.player1").innerHTML=name1;     //wo p jo contain krta hian player1class ko sirf uss p ka innerhtml change krre yaha pe 
document.querySelector("p.player2").innerHTML=name2;


var randomNumber1 = Math.floor((Math.random()) *6 ) +1;
var randomImage1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);  //apne paas image k bhi do tags hain na to ye array k pehle index matlab pehli waali image k liye hain, halaki ise ("img.img1")kr k combined selectores se bhi kr skte the , iska matlab ho jaata img tag containing .img1class uske liye setAttribute

var randomNumber2 = Math.floor((Math.random()) *6 ) +1;
var randomImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML=name1+" Wins.";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML=name2+" Wins.";

}
else{
    document.querySelector("h1").innerHTML="Draw.";
}

