let xMinigame = 0;
let yMinigame = 0;
let xRandom = [];
let yRandom = [];
let startGame =0;
function setup() {
  createCanvas(800, 600);
  startKnop = createButton("start")
  startKnop.mousePressed(start);
 
}
function start(){
  startGame = 1
  for(let i = 0; i < 100; i++){
    xRandom.push(int(random(0, 600)))
    yRandom.push(int(random(0, 600)))
  }
}
function draw() {
  background(220);
  if(startGame == 1){
  rect(x,y,100)
 if (keyIsDown(LEFT_ARROW) === true) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW) === true) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    y += 5;
  }
for(let i = 0; i < 100; i++){
  rect(xRandom[i],yRandom[i],10)
  if (xRandom[i] >= x && xRandom[i]<x + 100 && yRandom[i] >= y && yRandom[i]<y + 100 ){
   v+=1
    xRandom.splice(i,1)
  }
  if (xRandom.length <=0){
    text("done",10,10)
  }
}

}
}

