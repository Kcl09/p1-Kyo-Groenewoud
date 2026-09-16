function setup() {
  createCanvas(800, 800);
}
//variabele
let variabelnummer0=0

let rood
let geel
let groen
let stoplichtStatus=1
//opdracht1
function draw() {
  background(220);
textSize(16)
fill(0)
  text("1. Houd B in om een blokje te laten verschijenen",10,10);
if(keyIsPressed===true){
  if(keyCode===66){fill(255)
    rect(20,20,60)
  }
}
//opdracht 2
fill(0)
text("2.druk op spatie om het getal op 0 te zetten.",10,100)
variabelnummer0=variabelnummer0+1
textSize(22)
text(variabelnummer0,10,120)
if(keyIsPressed===true){
  if(keyCode===32){
  variabelnummer0=-1}
}
if(variabelnummer0>500){variabelnummer0=0}

//opdracht 3 stoplicht
textSize(16)
text("3. druk op enter om van rood->groen->oranje te gaan.",10,150)

fill(50)
rect(40,250,10,40,10);
rect(30,160,30,100);

rood= color(0,0,0)
geel= color(0,0,0)
groen= color(0,0,0)
//als de stoplichtStatus op 1 2 of 3 staat krijgt het de kleur die er bij hoort
if(stoplichtStatus==1){
rood=color(255,0,0)
}
if(stoplichtStatus==2){
groen=color(0,255,0)
}
if(stoplichtStatus==3){
geel=color(255,255,0)
}
fill(rood)
circle(45,180,20)

fill(geel)
circle(45,205,20)

fill(groen)
circle(45,230,20)

//opdracht4
circle(600,100,100)
fill(255)
circle(600,100,80)
fill(0)
textSize(60)
text("8",585,120)

}
//elke keer als enter wordt gebruikt word er +1 gedaan bij stoplicht status en het kan niet over 3 gaan
function keyReleased(){
  if (keyCode===13){
    stoplichtStatus+=1
  }

if(stoplichtStatus>3){
  stoplichtStatus-=3
}
}