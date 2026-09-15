function setup() {
  createCanvas(400, 200);
}


function draw() {
background(220);

noLoop();
let score= random(100);;


if (score <= 50){
  text("onvoldoende",10,10);
} else if (score <= 69){
  text("voldoende",10,10);
} else if (score <=89){
  text("goed",10,10)
}else if(score >=90) {
  text("uitstekend",10,10)
}

}
