function setup() {
  createCanvas(800, 600);
}
//alle variabelen
let zonXAs=-50
let zonBeweging=+1
let zonStralingen=50
let zonStralingen1=0

let c=0
let circleMovement=+0.1

let wolkXAs=800
let wolkBeweging=-2

let stoplichtStatus=1
let autobeweging=+1
let autobeweging2=+1
let autobeweging3=+1

function draw() {
  background(173,216,230);
fill(0)
  textAlign(CENTER);
  textSize(16);

//zon en de beweging van de zon zonXas zorgt voor beweging en zonstraling en zonstraling 1 is voor de kleur om de zon
fill(255,165,0,127)
circle(zonXAs,50,zonStralingen)
circle(zonXAs,50,+zonStralingen1)
fill(255,255,0)
circle(zonXAs,50,50)

zonXAs=zonXAs+zonBeweging
if (zonXAs>=900){zonXAs=-100}
//dit zorgt er voor dat de zon terug naar de linker kant van de scherm
if (zonStralingen>=0){
  zonStralingen=zonStralingen+1
}else(zonStralingen>=100);
if (zonStralingen>=100){
  zonStralingen-=1
}
zonStralingen1+=1
if (zonStralingen1>=100){
  zonStralingen1=0

}

  //de achtergrond
 fill(160)
  noStroke();
  quad(450,80,400,80,5,600,800,600);
  fill(140);
  quad(0,600,165,225,400,600);
  quad(500,600,620,190,1000,600);
  fill(0,255,0);
rect(0,450,800);
//de weg
fill(100);
rect(0,470,800);
fill(255);
rect(0,535,100,8,10);
rect(200,535,100,8,10);
rect(400,535,100,8,10);
rect(600,535,100,8,10);

//boom 
c=c+circleMovement

if (c>=2){
  c=c-2
}

fill(69, 75, 55)
rect(94,367,20,100);
rect(294,365,20,100);
rect(694,357,20,100);
fill(0,100,0)
circle(102+c,372,50);
circle(302+c,372,50);
circle(702+c,372,50);

 //stoplicht code
 fill(50)
rect(640,430,10,40,10);
rect(630,340,30,100);
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
circle(645,360,20);
fill(geel);
circle(645,385,20);
fill(groen);
circle(645,410,20);

//wolk
fill(230)
circle(75+wolkXAs,100,50)
circle(100+wolkXAs,90,60)
circle(120+wolkXAs,100,50)

//wolk code
fill(255)
circle(75+wolkXAs,110,50)
circle(100+wolkXAs,100,60)
circle(120+wolkXAs,110,50)
wolkXAs=wolkXAs+wolkBeweging

if(wolkXAs<=-200){
  wolkXAs=+800
}

//auto 2
fill("gray")
rect(100+autobeweging2,490,100,30)
quad(100+autobeweging2,490,100+autobeweging2,470,175+autobeweging2,460,200+autobeweging2,490)
fill(0)
circle(120+autobeweging2,518,25)
circle(180+autobeweging2,518,25)

//auto
noStroke()
fill(0,0,255)
rect(0+autobeweging,540,100,30)
quad(0+autobeweging,540,0+autobeweging,500,75+autobeweging,500,100+autobeweging,540)
fill(0)
circle(20+autobeweging,568,25)
circle(80+autobeweging,568,25)

//auto 3
noStroke()
fill(255,0,0)
rect(400+autobeweging3,540,100,30)
quad(400+autobeweging3,540,400+autobeweging3,500,475+autobeweging3,500,500+autobeweging3,540)
fill(0)
circle(420+autobeweging3,568,25)
circle(480+autobeweging3,568,25)

//de code dat er voor zorgt dat de auto's rijden en stoppen
if(stoplichtStatus==1){
  autobeweging+=0
  autobeweging2+=0
  autobeweging3+=0
}
if (stoplichtStatus==2){
  autobeweging+=5
  autobeweging2+=10
  autobeweging3+=5
}
if(stoplichtStatus==3){
  autobeweging+=2
  autobeweging2+=2
  autobeweging3+=2
}
if(autobeweging>=900){
  autobeweging-=1000
}
if(autobeweging2>=800){
  autobeweging2-=1000
}
if(autobeweging3>=800){
  autobeweging3-=1300
}

fill(69, 75, 55)
rect(494,500,20,100);
fill(0,100,0)
circle(502+c,500,50);

}
/*het beetje code dat er voor zorgt dat de enter knop werkt
elke keer als enter wordt gebruikt word er +1 gedaan bij stoplicht status en het kan niet over 3 gaan
*/
function keyReleased(){
  if (keyCode===13){
    stoplichtStatus+=1
  }

if(stoplichtStatus>3){
  stoplichtStatus-=3
}
}

