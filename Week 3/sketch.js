function setup() {
  createCanvas(1000, 1000);
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


function draw() {
  background(220);

fill("black");
rect(50,50,500,500,50);

fill(255);


//blok nr 1 bovenste rij
if (mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX1,rectY1,rectW);

//blok nr 2 bovenste rij
if (mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX2,rectY1,rectW);

//blok nr 3 bovenste rij
if (mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY1 && mouseY < rectY1 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX3,rectY1,rectW);

//blok nr 1 middelse rij
if (mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX1,rectY2,rectW)

//blok nr 2 middelste rij
if (mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX2,rectY2,rectW);

//blok nr 3 middelste rij
if (mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY2 && mouseY < rectY2 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX3,rectY2,rectW);

//blok nr 1 onderste rij
if (mouseX > rectX1 && mouseX < rectX1 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX1,rectY3,rectW)

//blok nr 2 onderste rij
if (mouseX > rectX2 && mouseX < rectX2 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX2,rectY3,rectW);

//blok nr 3 onderste rij
if (mouseX > rectX3 && mouseX < rectX3 + rectW 
&&mouseY > rectY3 && mouseY < rectY3 + rectW){
fill(220);
}else{
  fill(255);
}
rect(rectX3,rectY3,rectW);
}

