function setup() {
  createCanvas(800, 800);

}

let x=10
let y=10
let variabelMovement2=1
let variabelMovement=1

function draw() {
  background(220);
text("positie"+x,150,50)
text("positie"+y,150,100)

circle(x,y,10);

 x=x+variabelMovement
y=y+variabelMovement2

 if (x>=100){
  variabelMovement-=1
  }
 if (x<=0){variabelMovement+=1}

  y=y+variabelMovement2

 if (y>=100){
  variabelMovement2-=1
  }
 if (y<=0){variabelMovement2+=1}
}




