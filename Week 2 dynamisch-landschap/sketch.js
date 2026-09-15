function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173,216,230);
fill(0)
  textAlign(CENTER);
  textSize(16);

  // Display the mouse's coordinates.
  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 400, 20);


  //de achtergrond en weg
  
 fill(160)
  noStroke();
  
  quad(450,80,400,80,5,600,800,600);

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
fill(255)
circle(75,110,50)
circle(100,100,60)
circle(120,110,50)

//zon
fill(150,150,0)
circle(50,50,50)
}
