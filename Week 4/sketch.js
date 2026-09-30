let x = [];
let y =[];
let size =[];
let xSpeed = 0
let yspeed = 0

let r =[];
let g =[];
let b =[];
let t =[];
// dit is er voor de start up 
// dit zorgt er voor dat de x y coordinaten random zijn
// en dat de kleur en transparantie verandert in 
function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 400; i++){
  x.push(int(random(0,800)))
  y.push(int(random(0,800)))
  size.push(int(random(10,30)))
  size.sort(function(a, b){return a - b});
  r.push(int(random(0,255)))
  g.push(int(random(0,255)))
  b.push(int(random(0,255)))
  t.push(int(random(200,255)))
  }
}

// dit zorgt voor de beweging
function draw() {
  background(90);
  for(let i = 0; i < 400; i++){
    y[i]= y[i]- size[i]/10;
    x[i]= x[i]- size[i]/2;
  x[i] += 10;
  rect(x[i],y[i],size[i]);
 fill(r[i],g[i],b[i],t[i]);

if (y[i]<=-50){
  y[i]=600
}
if (x[i]<=-50){
  x[i]=790
}
if (x[i]>=800){
  x[i]=-50
}
//dit zorgt er voor dat je de arrow keys kan gebruiken voor de blokken sneller te laten bewegen
if (keyIsDown(LEFT_ARROW) === true) {
    x[i] -= 10;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x[i] += 10;
  }

  if (keyIsDown(UP_ARROW) === true) {
    y[i] -= 10;
  }

}
}
//dit is om de kleuren te randomisen met back space
function keyPressed(){
  if (keyCode === 8){
  r =[];
  g =[];
  b =[];
  t =[];
  for (let i = 0; i < 400; i++){
  r.push(int(random(0,255)))
  g.push(int(random(0,255)))
  b.push(int(random(0,255)))
  t.push(int(random(200,255)))
  }
  }
}
