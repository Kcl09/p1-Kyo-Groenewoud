function setup() {
  createCanvas(800, 800);

}

let x=10
let y=10
let variabelMovement2=1
let variabelMovement=1

let stoplichtStatus=1

let wUp=0
let dRechts=0
let sDown=0
let aLinks=0

let c=0
let circleMovement=+1

function draw() {
  background(220);
text("positie:x"+x,150,50)
text("positie:y"+y,150,100)

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
 text("x:"+mouseX,20,110)
 text("y:"+mouseY,20,120)

 //stoplicht code
 fill(50)
rect(40,250,10,40,10);
rect(30,160,30,100);

rood= color(0,0,0);
geel= color(0,0,0);
groen= color(0,0,0);
//als de stoplichtStatus op 1 2 of 3 staat krijgt het de kleur die er bij hoort
if(stoplichtStatus==1){
rood=color(255,0,0);
}
if(stoplichtStatus==2){
groen=color(0,255,0);
}
if(stoplichtStatus==3){
geel=color(255,255,0);
}
fill(rood);
circle(45,180,20);

fill(geel);
circle(45,205,20);

fill(groen);
circle(45,230,20);

text("hallo",10,400)
text(wUp,100,10)
push()
circle(600+dRechts+aLinks,100+wUp+sDown,100)
fill(255)
circle(600+dRechts+aLinks,100+wUp+sDown,80)
fill(0)
textSize(60)
text("8",585+dRechts+aLinks,120+wUp+sDown)

if(keyIsPressed===true){
  if(keyCode===87){
    wUp=wUp-1
  }
}
if(keyIsPressed===true){
  if(keyCode===83){
    sDown=sDown+1
  }
}
if(keyIsPressed===true){
  if(keyCode===68){
    dRechts=dRechts+1
  }
}
if(keyIsPressed===true){
  if(keyCode===65){
    aLinks=aLinks-1
  }
}
pop()
push()
noStroke()
fill(0,0,255)
rect(100,100,100,50)
pop()

push()



c=c+circleMovement
fill(69, 75, 55)
rect(94,367,20,100);
rect(294,365,20,100);
rect(694,357,20,100);
fill(0,100,0)

circle(102+c,372,50);

if (c>=4){
  c=c-3
}

circle(302,372,50);
circle(702,372,50);


pop()

}


//elke keer als enter wordt gebruikt word er +1 gedaan bij stoplicht status en het kan niet over 3 gaan
function keyReleased(){
  if (keyCode===13){
    stoplichtStatus+=1
  }

if(stoplichtStatus>3){
  stoplichtStatus-=3
}
}



