let x = [];
let y =[];
let xCircle = [];
let yCircle =[];

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
  xCircle.push(int(random(0,800)))
  yCircle.push(int(random(0,800)))

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
  for(let i = 0; i < 300; i++){
    y[i]= y[i]- size[i]/10;
    x[i]= x[i]- size[i]/2;
  x[i] += 10;
  rect(x[i],y[i],size[i]);
 fill(r[i],g[i],b[i],t[i]);

  yCircle[i]= yCircle[i]- size[i]/10;
  xCircle[i]= xCircle[i]- size[i]/2;
  xCircle[i] += 10;

 circle(xCircle[i],yCircle[i],size[i]);
 fill(r[i],g[i],b[i],t[i]);


if (y[i]<=-50){
  y[i]=600
}
if (y[i]>=600){
  y[i]=600
}
if (x[i]<=-50){
  x[i]=790
}
if (x[i]>=800){
  x[i]=-50
}
if (yCircle[i]<=-50){
  yCircle[i]=600
}
if (xCircle[i]<=-50){
  xCircle[i]=790
}
if (xCircle[i]>=800){
  xCircle[i]=-50
}
//dit zorgt er voor dat je de arrow keys kan gebruiken voor de blokken sneller te laten bewegen
if (keyIsDown(LEFT_ARROW) === true) {
    x[i] -= 10;
    xCircle[i] -= 10;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x[i] += 10;
    xCircle[i] += 10;
  }

  if (keyIsDown(UP_ARROW) === true) {
    y[i] -= 10;
    yCircle[i] -= 10;
  }
  // dit zorgt er voor dat de circles en rect groter en kleiner kunnen worden
  if (keyIsDown(187) === true) {
  size[i]+= 0.1;
  }
  if (keyIsDown(189) === true) {
  size[i]-= 0.1;
  }
  // dit zorgt er voor dat je de rects en circles kan duwen met je muis
    if (mouseX >= x[i] && mouseX <= x[i]+10
    && mouseY >= y[i] && mouseY <= y[i]+20
  ){
    x[i] +=5
  }
   if (mouseX >= x[i]+10 && mouseX <= x[i]+20
    && mouseY >= y[i] && mouseY <= y[i]+20
  ){
    x[i]-=5
  }
    if (mouseX >= x[i] && mouseX <= x[i]+20
    && mouseY >= y[i] +10 && mouseY <= y[i]+20
  ){
    y[i]-=5
  }
      if (mouseX >= x[i] && mouseX <= x[i]+20
    && mouseY >= y[i]  && mouseY <= y[i]+20
  ){
    y[i]+=5
  }


   if (mouseX >= xCircle[i] && mouseX <= xCircle[i]+10
    && mouseY >= yCircle[i] && mouseY <= yCircle[i]+20
  ){
    xCircle[i] +=5
  }
   if (mouseX >= xCircle[i]+10 && mouseX <= xCircle[i]+20
    && mouseY >= yCircle[i] && mouseY <= yCircle[i]+20
  ){
    xCircle[i]-=5
  }
    if (mouseX >= xCircle[i] && mouseX <= xCircle[i]+20
    && mouseY >= yCircle[i] +10 && mouseY <= yCircle[i]+20
  ){
    yCircle[i]-=5
  }
      if (mouseX >= xCircle[i] && mouseX <= xCircle[i]+20
    && mouseY >= yCircle[i]  && mouseY <= yCircle[i]+20
  ){
    yCircle[i]+=5
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
