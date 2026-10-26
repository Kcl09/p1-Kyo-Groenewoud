let x = 0;
let y = 0;
let startGame =0;
function setup() {
  createCanvas(800, 600);
  startKnop = createButton("start")
  startKnop.mousePressed(start);
}
function start(){
  startGame = 1
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
}
}

