let x = 100;
let y = 100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseX >= x +50 ){
    x++
  }
  if (mouseX <= x + 50){
    x--
  }
    if (mouseY >= y +50 ){
    y++
  }
  if (mouseY <=y + 50){
    y--
  }
  rect(x,y,100)
}
