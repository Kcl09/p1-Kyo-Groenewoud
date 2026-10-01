let x = 10
let y =10
let size=80

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect (x,y,size)
  if (mouseX >= x && mouseX <= x+10
    && mouseY >= y && mouseY <= y+80
  ){
    x+=5
  }
   if (mouseX >= x+70 && mouseX <= x+80
    && mouseY >= y && mouseY <= y+80
  ){
    x-=5
  }
    if (mouseX >= x && mouseX <= x+80
    && mouseY >= y +70 && mouseY <= y+80
  ){
    y-=5
  }
      if (mouseX >= x && mouseX <= x+80
    && mouseY >= y  && mouseY <= y+80
  ){
    y+=5
  }
}
