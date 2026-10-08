let  y=375
let x = 100
let spring =0
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  rect(x,y,25)
  text(spring,10,10)
  text(y,10,20)
  if (keyIsDown(LEFT_ARROW)=== true){
    x-=5
  }
  if (keyIsDown(RIGHT_ARROW)=== true){
    x+=5
  }
  if (keyIsDown(UP_ARROW)=== true && spring ==0){
    y-=10
    spring++
  }
   if (keyIsDown(DOWN_ARROW)=== true){
    y+=10
  }
  if (y <=375){
    y+=5
  }
  if (y >= 375){
    spring==0
  }
  
}

