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
  { winkel: 0 },
  { badkamer: 0 },
]
let laatRectZien = 0;
let knopAan;
let knopUit;
let kamerFunctie = [woonkamer, winkel, badkamer, minigame1];
let kamers = ["woonkamer", "winkel", "badkamer", "minigame1"]
let kamerKnop = [];
let scene = 0;
let x = 50;
let y = 400;

function preload() {
  foto[0].fish = loadImage("fishwithshoes.png");
  foto[1].fishandchips = loadImage("fishandchips.png")
  foto[2].woonkamer = loadImage("woonkamer.png")
  foto[3].winkel = loadImage("winkel.jpg")
  foto[4].badkamer = loadImage('badkamer.jpg')
}

function setup() {
  createCanvas(800, 600);
  myInput = createInput();
  myInput.position(557, 50);

  knopAan = createButton('menu');
  knopAan.position(557, 400);
  knopAan.style('background-color', '#ffffff');
  knopAan.mousePressed(knopaan);
  knopAan.show();

  knopUit = createButton('close');
  knopUit.position(557, 400);
  knopUit.style('background-color', '#ffffff');
  knopUit.mousePressed(knopuit);
  knopUit.hide();

  for (let i = 0; i < 4; i++) {
    let selectieKnop = createButton(kamers[i])
    selectieKnop.position(150, 10 + 25 * i)
    kamerKnop.push(selectieKnop)
    selectieKnop.mousePressed(kamerFunctie[i])
  }
}


function woonkamer() {
  scene = 0
}

function winkel() {
  scene = 1
}

function badkamer() {
  scene = 2
}

function minigame1() {
  scene = 3
}

function knopaan() {
  laatRectZien = 1
}

function knopuit() {
  laatRectZien = - 1
}

function draw() {
  background(100);
  if (scene == 0) {
    image(foto[2].woonkamer, 0, 0, 600, 600);
  } else if (scene == 1) {
    image(foto[3].winkel, 0, 0, 600, 600)
  } else if (scene == 2) {
    image(foto[4].badkamer, 0, 0, 600, 600)
  }

  //de bar voor honger 
  if (frameCount % 30 == 0 && breedte[0].honger >= 1 && breedte[1].energie >= 1 && breedte[2].geluk >=1 && breedte[3].gezondheid >=1) {
    breedte[0].honger = breedte[0].honger - 1
    breedte[1].energie = breedte[1].energie - 2
    breedte[2].geluk = breedte[2.].geluk - 0.5
    breedte[3].gezondheid = breedte[3].gezondheid - 0.4
  } 
  if (breedte[0].honger <= 0 || breedte[1].energie <= 0 || breedte[2].geluk <= 0 || breedte[3].gezondheid <= 0) {
    leven=1
  }
  fill(100)
  rect(500, 0, 300, 600)

  fill(85, 66, 24)
  bar(550, 100, breedte[0].honger, 50)
  fill("yellow")
  bar(550, 170, breedte[1].energie, 50)
  fill("green")
  bar(550, 240, breedte[2].geluk, 50)
  fill("red")
  bar(550, 310, breedte[3].gezondheid, 50)
  fill(0)
  text("honger", 550, 95)
  text("energie", 550, 165)
  text("geluk", 550, 235)
  text("gezondheid", 550, 305)

  if (leven == 0) {
    image(foto[0].fish, x, y, 100, 100);
  } else {
    image(foto[1].fishandchips, x, y, 100, 100)
  }

  if (laatRectZien == 1) {
    rect(100, 0, 300)
    knopUit.show();
    knopAan.hide();
  } else {
    knopUit.hide();
    knopAan.show();
  }

  for (let i = 0; i < 4; i++) {
    if (laatRectZien == 1) {
      kamerKnop[i].show();
    } else {
      kamerKnop[i].hide();
    }
  }
  if (leven == 0){
   if (mouseX >= x +50 ){
    x++
  }
  if (mouseX <= x + 50){
    x--
  }
    if (mouseY >= y +50 ){
    y++
  }
  if (mouseY <=y + 50){
    y--
  }
}
}

function bar(x, y, breedte, hoogte) {
  rect(x, y, breedte, hoogte)
}