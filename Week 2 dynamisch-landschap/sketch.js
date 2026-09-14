function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173,216,230);
fill(0)
  textAlign(CENTER);
  textSize(16);

  // Display the mouse's coordinates.
  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 20);


  
  fill(0,255,0)
  triangle(400,80,5,600,800,600)
  
  rect(0,450,800)

}
