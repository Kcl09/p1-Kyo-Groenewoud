let breedte = [
  { honger: 200 },
  { energie: 200 },
  { geluk: 200 },
  { gezondheid: 200 },
];
let leven = 0;
let foto = [
  { fish: 0 },
  { fishandchips: 0 },
  { woonkamer: 0 },
]

function preload() {
  foto[0].fish = loadImage("fishwithshoes.png");
  foto[1].fishandchips = loadImage("fishandchips.png")
  foto[2].woonkamer = loadImage("woonkamer.png")
}

function setup() {
  createCanvas(800, 600);
  myInput = createInput();
  myInput.position(557, 50);
  let button = createButton('menu');
	button.position(557, 400);
	button.style('background-color', '#ffffff');
	button.style('font-size', '16px');
	button.mousePressed(mijnFunctie);
}

function mijnFunctie() {
  console.log('Button werd geklikt!');
}

function draw() {
  background(100);
  image(foto[2].woonkamer, 0, 0, 600, 600);
  let tijd = millis() / 1000;
  
  //de bar voor honger 
  if (frameCount == 60) {
    frameCount = 0
  }

  if (frameCount == 30) {
    breedte[0].honger = breedte[0].honger - 1
    breedte[1].energie = breedte[1].energie - 2
    breedte[2].geluk = breedte[2.].geluk - 0.5
    breedte[3].gezondheid = breedte[3].gezondheid - 0.4
  }
  fill(100)
  rect(500,0,300,600)
  
  fill(85, 66, 24)
  bar(550, 100, breedte[0].honger, 50)
  fill("yellow")
  bar(550, 170, breedte[1].energie, 50)
  fill("green")
  bar(550, 240, breedte[2].geluk, 50)
  fill("red")
  bar(550, 310, breedte[3].gezondheid, 50)
  fill (0)
  text("honger",550,95)
  text("energie",550,165)
  text("geluk",550,235)
  text("gezondheid",550,305)

  if (leven == 0) {
    image(foto[0].fish, 100, 100, 100, 100);
  } else {
    image(foto[1].fishandchips, 100, 100, 100, 100)
  }
}

function bar(x, y, breedte, hoogte) {
  rect(x, y, breedte, hoogte)
}