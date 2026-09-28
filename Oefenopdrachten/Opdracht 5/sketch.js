function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  fill(255)
  for(let opdracht1 = 0; opdracht1 <= 9; opdracht1++){
    rect((50 * opdracht1),30,50,50)
  
  if (opdracht1 == 5){
    fill(0,0,255)
  }else{fill(255)}
}
for( let opdracht2 =0; opdracht2 <= 4; opdracht2++){
  rect(20,110+(50 * opdracht2),50,50)
  if(opdracht2 == 5){
    fill(255)
  }
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
