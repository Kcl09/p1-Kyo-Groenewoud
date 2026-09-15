function setup() {
  createCanvas(800, 600);
}
let zonXAs=-50
let zonBeweging=+1

let wolkXAs=800
let wolkBeweging=-1

function draw() {
  background(173,216,230);
fill(0)
  textAlign(CENTER);
  textSize(16);

  // Display the mouse's coordinates.
  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 400, 20);

  
//zon en de beweging van de zon
fill(255,255,0)
circle(zonXAs,50,50)
zonXAs=zonXAs+zonBeweging
if (zonXAs>=900){zonXAs=-0}


  //de achtergrond en weg
  
 fill(160)
  noStroke();
  
  quad(450,80,400,80,5,600,800,600);
  fill(140);
  quad(0,600,165,225,400,600);
  quad(500,600,620,190,1000,600);

  fill(0,255,0);
rect(0,450,800);

fill(100);
rect(0,470,800);

fill(255);
rect(0,535,100,8,10);
rect(200,535,100,8,10);
rect(400,535,100,8,10);
rect(600,535,100,8,10);

//boom
fill(69, 75, 55)
rect(94,367,20,100);
rect(294,365,20,100);
rect(694,357,20,100);

fill(0,100,0)
circle(102,372,50);
circle(302,372,50);
circle(702,372,50);

//stoplicht
fill(50)
rect(640,430,10,40,10);
rect(630,340,30,100);

fill(255,0,0)
circle(645,360,20)
fill(255,255,0)
circle(645,385,20)
fill(0,255,0)
circle(645,410,20)

//wolk
fill(230)
circle(75+wolkXAs,100,50)
circle(100+wolkXAs,90,60)
circle(120+wolkXAs,100,50)

fill(255)
circle(75+wolkXAs,110,50)
circle(100+wolkXAs,100,60)
circle(120+wolkXAs,110,50)
wolkXAs=wolkXAs+wolkBeweging

}
