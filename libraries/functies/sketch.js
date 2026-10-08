let vraagcount = 0;
let score = 0;
let muis = 0;

function setup() {
  createCanvas(400, 400);
}

function teken(x, y, lengte, breedte) {
  if (mouseX >= x && mouseX <= x + lengte
    && mouseY >= y && mouseY <= y + breedte
  ) {
    fill(200)
  } else {
    fill(255)
  }

  rect(x, y, lengte, breedte)
}

function doorklikkenGoed(x,y,lengte,breedte){
if (mouseX >= x && mouseX <= x + lengte
  && mouseY >= y && mouseY <= y + breedte && mouseClicked && mouseButton === LEFT){
vraagcount++
score += 10
}
rect(x,y,lengte,breedte)
}

function doorklikkenfout(x,y,lengte,breedte){
if (mouseX >= x && mouseX <= x + lengte
  && mouseY >= y && mouseY <= y + breedte && mouseClicked && mouseButton === LEFT){
vraagcount++
}
rect(x,y,lengte,breedte)
}
function mousePressed(){
  
}

function draw() {
  background(220);
 teken(10,10,50,40)
 doorklikkenGoed(10,10,50,40)
 teken(10,80,50,40)
 doorklikkenfout(10,80,50,40)
 teken(80,10,50,40)
 doorklikkenfout(80,10,50,40)
 teken(80,80,50,40)
doorklikkenfout(80,80,50,40)


 fill(0)
 text(vraagcount,200,10)
 text(score,220,10)
}
