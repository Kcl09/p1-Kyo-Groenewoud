function setup() {
  createCanvas(650, 650);
  box_color = color(255)
}

let XVakaje=100;
let YVakje=100;
let rectW=100;
let rectY1=100;
let rectY2=250;
let rectY3=400;
let rectX1=100;
let rectX2=250;
let rectX3=400;
let huidigeSpeler=2;
let achtergrondKleur=220;
let winTextX=260
let winTextY=30
let box1=0
let box1_color=0;
let box2=0
let box2_color=0;
let box3=0
let box3_color=0;
let box4=0
let box4_color=0;
let box5=0
let box5_color=0;
let box6=0
let box6_color=0;
let box7=0
let box7_color=0;
let box8=0
let box8_color=0;
let box9=0
let box9_color=0;

function draw() {
  background(achtergrondKleur);

fill(37,40,38);
rect(50,50,500,500,50);

rect(600,100,30,10);
fill(255)
text("reset",602,109)
stroke(5)
strokeWeight(5);

fill(255);
if (huidigeSpeler > 2){
  huidigeSpeler=1
}
if (huidigeSpeler==2){
  achtergrondKleur=color(0,0,255)
}else if(huidigeSpeler==1){
  achtergrondKleur=color(255,0,0)
}else {
  achtergrondKleur=color(220)
}


//blok nr 1 bovenste rij
if (mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box1 !== 2 && box1 !== 3) {
box1 = 1;
} else if (box1!=2 && box1 !== 3) {
  box1=0;
}
fill(box1_color)
rect(rectX1,rectY1,rectW);

if (box1 == 1) {
  box1_color= color(200)
}
if (box1==0){
box1_color= color(255)
}
if(box1==2){
  box1_color= color(0,0,255)
}
if(box1==3){
  box1_color=color(255,0,0)
}

//blok nr 2 bovenste rij
if (mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box2 !== 2 && box2 !== 3) {
box2 = 1;
} else if (box2 != 2 && box2 !== 3) {
  box2=0;
}
fill(box2_color)
rect(rectX2,rectY1,rectW);

if (box2 == 1) {
  box2_color= color(200)
}
if (box2==0){
box2_color= color(255)
}
if(box2==2){
  box2_color= color(0,0,255)
}
if(box2==3){
  box2_color=color(255,0,0)
}
//blok nr 3 bovenste rij

if (mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box3 !== 2 && box3 !== 3) {
box3 = 1;
} else if (box3!=2 && box3 !== 3) {
  box3=0;
}
fill(box3_color)
rect(rectX3,rectY1,rectW);

if (box3 == 1) {
  box3_color= color(200)
}
if (box3==0){
box3_color= color(255)
}
if(box3==2){
  box3_color= color(0,0,255)
}
if(box3==3){
  box3_color=color(255,0,0)
}

//blok nr 1 middelse rij
if (mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box4 !== 2 && box4 !== 3) {
box4 = 1;
} else if (box4!=2 && box4 !== 3) {
  box4=0;
}
fill(box4_color)
rect(rectX1,rectY2,rectW);

if (box4 == 1) {
  box4_color= color(200)
}
if (box4==0){
box4_color= color(255)
}
if(box4==2){
  box4_color= color(0,0,255)
}
if(box4==3){
  box4_color=color(255,0,0)
}
rect(rectX1,rectY2,rectW);

// blok nr2 mid
if (mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box5 !== 2 && box5 !== 3) {
box5 = 1;
} else if (box5!=2 && box5 !== 3) {
  box5=0;
}
fill(box5_color)
rect(rectX2,rectY2,rectW);

if (box5 == 1) {
  box5_color= color(200)
}
if (box5==0){
box5_color= color(255)
}
if(box5==2){
  box5_color= color(0,0,255)
}
if(box5==3){
  box5_color=color(255,0,0)
}
//blok nr 3 middelste rij
if (mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box6 !== 2 && box6 !== 3) {
box6 = 1;
} else if (box6!=2 && box6 !== 3) {
  box6=0;
}
fill(box6_color)
rect(rectX3,rectY2,rectW);

if (box6 == 1) {
  box6_color= color(200)
}
if (box6==0){
box6_color= color(255)
}
if(box6==2){
  box6_color= color(0,0,255)
}
if(box6==3){
  box6_color=color(255,0,0)
}

//blok nr 1 onderste rij
if (mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box7 !== 2 && box7 !== 3) {
box7 = 1;
} else if (box7!=2 && box7 !== 3) {
  box7=0;
}
fill(box7_color)
rect(rectX1,rectY3,rectW);

if (box7 == 1) {
  box7_color= color(200)
}
if (box7==0){
box7_color= color(255)
}
if(box7==2){
  box7_color= color(0,0,255)
}
if(box7==3){
  box7_color=color(255,0,0)
}

//blok nr 2 onderste rij
if (mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box8 !== 2 && box8 !== 3) {
box8 = 1;
} else if (box8!=2 && box8 !== 3) {
  box8=0;
}
fill(box8_color)
rect(rectX2,rectY3,rectW);

if (box8 == 1) {
  box8_color= color(200)
}
if (box8==0){
box8_color= color(255)
}
if(box8==2){
  box8_color= color(0,0,255)
}
if(box8==3){
  box8_color=color(255,0,0)
}

//blok nr 3 onderste rij
if (mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box9 !== 2 && box9 !== 3) {
box9 = 1;
} else if (box9!=2 && box9 !== 3) {
  box9=0;
}
fill(box9_color)
rect(rectX3,rectY3,rectW);

if (box9 == 1) {
  box9_color= color(200)
}
if (box9==0){
box9_color= color(255)
}
if(box9==2){
  box9_color= color(0,0,255)
}
if(box9==3){
  box9_color=color(255,0,0)
}
fill(0)
noStroke()

//speler 1 win
if (box1==2 && box2==2 && box3 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(150,145,300,10,10)
  achtergrondKleur=color(0,0,255)
}else if(box4==2 && box5==2 && box6 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(150,295,300,10,10)
  achtergrondKleur=color(0,0,255)
}else if(box7==2 && box8==2 && box9 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(150,445,300,10,10)
  achtergrondKleur=color(0,0,255)
}else if(box1==2 && box4==2 && box7 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(145,145,10,315,10)
  achtergrondKleur=color(0,0,255)
}else if(box2==2 && box5==2 && box8 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(295,145,10,315,10)
  achtergrondKleur=color(0,0,255)
}else if(box3==2 && box6==2 && box9 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(445,145,10,315,10)
  achtergrondKleur=color(0,0,255)
}else if(box1==2 && box5==2 && box9 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  quad(150,150,450,450,450,440,150,140)
  
  achtergrondKleur=color(0,0,255)
}else if(box3==2 && box5==2 && box7 == 2){
  text("player 1 wint",winTextX,winTextY);
  huidigeSpeler=0
  quad(450,150,450,140,150,440,150,450)
  achtergrondKleur=color(0,0,255)
}
//speler 2 win
else if (box1==3 && box2==3 && box3 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(150,145,300,10,10)
  achtergrondKleur=color(255,0,0)
}else if(box4==3 && box5==3 && box6 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(150,295,300,10,10)
  achtergrondKleur=color(255,0,0)
}else if(box7==3 && box8==3 && box9 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(150,445,300,10,10)
  achtergrondKleur=color(255,0,0)
}else if(box1==3 && box4==3 && box7 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(145,145,10,315,10)
  achtergrondKleur=color(255,0,0)
}else if(box2==3 && box5==3 && box8 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(295,145,10,315,10)
  achtergrondKleur=color(255,0,0)
}else if(box3==3 && box6==3 && box9 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  rect(445,145,10,315,10)
  achtergrondKleur=color(255,0,0)
}else if(box1==3 && box5==3 && box9 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  quad(150,150,450,450,450,440,150,140)
  achtergrondKleur=color(255,0,0)
}else if(box3==3 && box5==3 && box7 == 3){
  text("player 2 wint",winTextX,winTextY);
  huidigeSpeler=0
  quad(450,150,450,140,150,440,150,450)
  achtergrondKleur=color(255,0,0)
}else if(box1 !==0 && box2 !==0 && box3!==0 
   && box4 !==0 && box5 !==0 && box6!==0 &&
    box7 !==0 && box8 !==0 && box9!==0 && 
    box1 !==1 && box2 !==1 && box3!==1 
   && box4 !==1 && box5 !==1 && box6!==1 &&
    box7 !==1 && box8 !==1 && box9!==1 ){
      text("draw",winTextX+20,winTextY);
      huidigeSpeler=0
    }
}

function mouseClicked(){

if (mouseButton===LEFT 
  && mouseX > 600 && mouseX < 630
  && mouseY > 100 && mouseY < 110
){
box1=0;
box1_color=0;
box2=0;
box2_color=0;
box3=0;
box3_color=0;
box4=0;
box4_color=0;
box5=0;
box5_color=0;
box6=0;
box6_color=0;
box7=0;
box7_color=0;
box8=0;
box8_color=0;
box9=0;
box9_color=0;
huidigeSpeler=2;
}

//1
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box1 ==1) {
  box1 = 2
huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW&& box1 ==1)
{box1=3
  huidigeSpeler+=1
}

//2
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box2 ==1) {
  box2 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box2 ==1)
{box2=3
  huidigeSpeler+=1
}

//3
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW&& box3 ==1) {
  box3 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW && box3 ==1)
{box3=3
  huidigeSpeler+=1
}
//4
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box4 ==1) {
  box4 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box4 ==1)
{box4=3
  huidigeSpeler+=1
}
//5
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box5 ==1) {
  box5 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box5 ==1)
{box5=3
  huidigeSpeler+=1
}
//6
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box6 ==1) {
  box6 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW && box6 ==1)
{box6=3
  huidigeSpeler+=1
}
//7
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box7 ==1) {
  box7 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box7 ==1)
{box7=3
  huidigeSpeler+=1
}
//8
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box8 ==1) {
  box8 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box8 ==1)
{box8=3
  huidigeSpeler+=1
}
//9
if (huidigeSpeler===2&&mouseButton===LEFT
&&mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box9 ==1) {
  box9 = 2

  huidigeSpeler+=1;
}else if(huidigeSpeler===1&&mouseButton===LEFT
&&mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW && box9 ==1)
{box9=3
  huidigeSpeler+=1
}
}