let xEten = 0;
let yEten = 0;
let geld = 1;
let steak = 1;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
rect(xEten,yEten,100)
rect(500,10,100)
if (xEten + 50 >=500){
xEten = 0

}
}

function mouseDragged(){
  if (geld == 1 && steak >0){
  xEten = mouseX - 50;
  yEten = mouseY - 50;
  }
}