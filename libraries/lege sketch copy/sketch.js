let x = 10
let y =10
let size=30

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect (x,y,size)
  if (mouseX >= x && mouseX <= x+10
    && mouseY >= y && mouseY <= y+30
  ){
    x+=5
  }
   if (mouseX >= x+20 && mouseX <= x+30
    && mouseY >= y && mouseY <= y+30
  ){
    x-=5
  }
    if (mouseX >= x && mouseX <= x+30
    && mouseY >= y +20 && mouseY <= y+30
  ){
    y-=5
  }
      if (mouseX >= x && mouseX <= x+30
    && mouseY >= y  && mouseY <= y+30
  ){
    y+=5
  }
}
