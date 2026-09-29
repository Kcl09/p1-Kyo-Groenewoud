function setup() {
  createCanvas(800, 400);
}
let variabel1Op3 = 0
let variabel2Op3 = 0

function draw() {
  background(220);
  
  strokeWeight(1)
//opdracht 1
  fill(255)
  for(let opdracht1 = 0; opdracht1 <= 9; opdracht1++){
    rect((50 * opdracht1),30,50,50)
  
  if (opdracht1 == 5){
    fill(0,0,255)
  }else{fill(255)}
}
//opdracht2
for( let opdracht2 =1; opdracht2 <= 5; opdracht2++){
  
  if(opdracht2 == 5){
    fill(255)
  }else if(opdracht2 == 4){
    fill(225)
  }else if(opdracht2 == 3){
    fill(175)
  }else if(opdracht2 == 2){
    fill(80)
  }else {
    fill(0)
  }
    rect(20,60+(50 * opdracht2),50,50)
}
//opdracht 3
x1 = 0
x2 = 0
for(let opdracht3 =0; opdracht3 <= 3; opdracht3++){
  if(opdracht3 == 2){
    x1=25
  }
if (opdracht3 == 3){
  x2=50
}
if (opdracht3 == 0){
  fill(0)
}else if(opdracht3 == 1){
  fill(1,85,0)
}else if(opdracht3 == 2){
  fill(0,171,0)
}else{
  fill(0,255,0)
}
  strokeWeight(1)
  rect(90-x1-x2+(25 * opdracht3 * opdracht3),105,25+(25 * opdracht3),50)
}
//opdracht4

//opdracht5
for(let opdracht5 = 0; opdracht5 <= 6; opdracht5++ ){
  fill(255)
  strokeWeight(1 * opdracht5);
    circle(560 +(30 * opdracht5),20,20);
  }

//opdracht6
strokeWeight(1)
for( let opdracht6 = 0; opdracht6 <= 9; opdracht6++){
  if (opdracht6 == 0){
    fill(255,0,0)
  } else if( opdracht6 == 2){
    fill(255,0,0)
  } else if( opdracht6 == 4){
    fill(255,0,0)}
  else if( opdracht6 == 6){
    fill(255,0,0)}
  else if( opdracht6 == 8){
    fill(255,0,0)}
    else {
    fill(255)
  }
  circle(440,205,200-(20 * opdracht6))
}


fill(0)
  text("1.",20,15)
  text("2.",20,105)
  text("3.",80,105)
  text("4.",80,205)
  text("5.",540,20)
  text("6.",350,105)
  text("7.",625,105)
}
