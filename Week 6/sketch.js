let breedte = [
  { honger: 200 },
  { energie: 200 },
  { geluk: 200 },
  { gezondheid: 200 },
];
let x = 50;
let y = 400;
let geld = 25;
let leven = 0;
let xEten = 20;
let yEten = 20;
let steak = 0;
let foto = [
  { fish: 0 },
  { fishandchips: 0 },
  { woonkamer: 0 },
  { winkel: 0 },
  { badkamer: 0 },
  { slaapkamer: 0 },
  { steak: 0 },
]
let knoppen = [
  {naamKnop : "menu",
    plekX : 557,
    plekY : 400,
    function : knopaan,
    show : 1,
    size : 16,
  },
  {naamKnop : "close",
    plekX : 557,
    plekY : 400,
    function : knopuit,
    show : 0,
    size : 16,
  },
  {naamKnop : "start",
    plekX : 557,
    plekY : 430,
    function : start,
    show : 0,
    size : 16,
  },
  {naamKnop : "slaap",
    plekX : 357,
    plekY : 500,
    function : slaap,
    show : 0,
    size : 40,
  },
  {naamKnop : "wakker",
    plekX : 357,
    plekY : 500,
    function : wakker,
    show : 0,
    size : 40,
  },
  {naamKnop : "buy for €25",
    plekX : 50,
    plekY : 120,
    function : steakBuy,
    show : 0,
    size : 40,
  },
]
let gemaakteknoppen = [];
let laatRectZien = 0;
let kamerFunctie = [woonkamer, winkel, badkamer, minigame1, slaapkamer];
let kamers = ["woonkamer", "winkel", "badkamer", "minigame1", "slaapkamer"]
let kamerKnop = [];
let scene = 0;
let xMinigame = 0;
let yMinigame = 0;
let minigameKlaar= 0;
let xRandom = [];
let yRandom = [];
let startGame = 0;
let slapen = 0;
function preload() {
  foto[0].fish = loadImage("fishwithshoes.png");
  foto[1].fishandchips = loadImage("fishandchipstwee.png")
  foto[2].woonkamer = loadImage("woonkamer.png")
  foto[3].winkel = loadImage("winkel.jpg")
  foto[4].badkamer = loadImage('badkamer.jpg')
  foto[5].slaapkamer = loadImage('slaapkamer.jpg')
  foto[6].steak = loadImage('steak.png')
}

function setup() {
  createCanvas(800, 600);

 if (getItem("breedte")==null) { breedte = breedte;}
  else { breedte = getItem("breedte");}

let opgeslagenGeld = getItem("geld");
  if (opgeslagenGeld !== null && opgeslagenGeld !== undefined && !isNaN(opgeslagenGeld)) {
    geld = opgeslagenGeld;
  } else {
    geld = 25;
    storeItem("geld", 25);
  }

  myInput = createInput();
  myInput.position(557, 50);
  //myInput.hide();

  knopAan = createButton('menu');
  knopAan.position(557, 400);
  knopAan.mousePressed(knopaan);
  knopAan.show();

  knopUit = createButton('close');
  knopUit.position(557, 400);
  knopUit.mousePressed(knopuit);
  knopUit.hide();

  startKnop = createButton("start");
  startKnop.mousePressed(start);
  startKnop.position(557, 430)
  startKnop.hide();

  slaapknop = createButton("slaap");
  slaapknop.mousePressed(slaap);
  slaapknop.hide();
  slaapknop.style("font-size", "40px")
  slaapknop.position(357, 500)

  wakkerknop = createButton("wakker");
  wakkerknop.mousePressed(wakker);
  wakkerknop.style("font-size", "40px")
  wakkerknop.position(357, 500)
  wakkerknop.hide();

  steakKnop = createButton("buy for €25")
  steakKnop.mousePressed(steakBuy);
  steakKnop.position(50,120)
  steakKnop.hide();

  resetknop =  createButton("reset")
  resetknop.mousePressed(reset)

for ( let i =0 ; i < knoppen.length; i++){
  let buttons = createButton(knoppen[i].naamKnop)
  buttons.position(knoppen[i].plekX,knoppen[i].plekY)
  buttons.mousePressed(knoppen[i].function)
 buttons.style("font-size",knoppen[i].size + "px")
 
if (knoppen[i].show === 0) {
    buttons.hide();
  } else {
    buttons.show();
  }
gemaakteknoppen.push(buttons)
}

  for (let i = 0; i < 5; i++) {
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

function slaapkamer() {
  scene = 4
}

function start() {
  startGame = 1;
  minigameKlaar = 0;
  xRandom = [];
  yRandom = [];
  for (let i = 0; i < 100; i++) {
    xRandom.push(int(random(0, 500)))
    yRandom.push(int(random(0, 600)))
  }
}

function steakBuy(){
  if ( geld>=25){
    geld-=25
  steak++
  }
}

function slaap() {
  slapen = 1
}

function wakker() {
  slapen = 0
}

function knopaan() {
  laatRectZien = 1
}

function knopuit() {
  laatRectZien = - 1
}

function reset(){
  breedte[0].honger = 200
  breedte[1].energie = 200
  breedte[2].geluk = 200
  breedte[3].gezondheid = 200
  geld = 25
}

function mouseDragged() {
  if (steak >= 1 && scene == 1 && mouseX <= 500) {
    xEten = mouseX - 50;
    yEten = mouseY - 50;
  }
}

function draw() {
  background(100);
   storeItem("breedte",breedte);
   storeItem("geld",geld);
  // zorgt voor de verandering van achtergrond en de game knop te maken
  if (scene == 0) {
    image(foto[2].woonkamer, 0, 0, 600, 600);
  } else if (scene == 1) {
    image(foto[3].winkel, 0, 0, 600, 600)
  } else if (scene == 2) {
    image(foto[4].badkamer, 0, 0, 600, 600)
  } else if (scene == 3) {
    startKnop.show();
  } else if (scene == 4) {
    image(foto[5].slaapkamer, 0, 0, 600, 600)
    slaapknop.show();
  }
  if (scene != 3) {
    startKnop.hide();
  }
  if (scene != 4) {
    slaapknop.hide();
    wakkerknop.hide();
  }
  //de bars voor honger energie geluk en gezondheid
 if (frameCount % 30 == 0) {
  if (breedte[0].honger > 0) {breedte[0].honger -= 0.1;}
  if (breedte[1].energie > 0) {breedte[1].energie -= 0.2;}
  if (breedte[2].geluk > 0) {breedte[2].geluk -= 0.3;}
  if (breedte[3].gezondheid > 0) {breedte[3].gezondheid -= 0.4;}
}
  if (breedte[0].honger <= 0 && breedte[1].energie <= 0 && breedte[2].geluk <= 0 && breedte[3].gezondheid <= 0) {
    leven = 1
  } else {
    leven = 0
  }

  // winkel code
  if (scene == 1) {
    steakKnop.show();
    fill(0)
    rect(0, 0, 500, 300);
    fill(255)
    text("steak:" + steak, 50, 110);
    text("buy for €25", 50, 130);
    image(foto[6].steak, xEten, yEten, 100, 100);

    if (xEten >= x && xEten < x + 100 && yEten >= y && yEten < y + 100 && steak >= 1) {
      xEten = 20
      yEten = 20
      steak -= 1
      breedte[0].honger += 50
      breedte[1].energie+= 20
    }
  }

  //de bars en de ui
  fill(100)
  rect(500, 0, 300, 600)
  fill(85, 66, 24)
  rect(550, 100, breedte[0].honger, 50)
  fill("yellow")
  rect(550, 170, breedte[1].energie, 50)
  fill("green")
  rect(550, 240, breedte[2].geluk, 50)
  fill("red")
  rect(550, 310, breedte[3].gezondheid, 50)
  fill(0)
  text("honger", 550, 95)
  text("energie", 550, 165)
  text("geluk", 550, 235)
  text("gezondheid", 550, 305)
  // zorgt er voor dat de vis dood kan 
  if (leven == 0) {
    image(foto[0].fish, x, y, 100, 100);
  } else if (leven == 1) {
    image(foto[1].fishandchips, x, y, 100, 100)
  }
  //zorgt dat de menu knop werkt
  if (laatRectZien == 1) {
    rect(100, 0, 300)
    knopUit.show();
    knopAan.hide();
  } else {
    knopUit.hide();
    knopAan.show();
  }
  // laat de vis achter de muis aan lopen 
  for (let i = 0; i < 5; i++) {
    if (laatRectZien == 1) {
      kamerKnop[i].show();
    } else {
      kamerKnop[i].hide();
    }
  }
  if (leven == 0 && slapen == 0) {
    if (mouseX >= x + 50) {
      x++
    }
    if (mouseX <= x + 50) {
      x--
    }
    if (mouseY >= y + 50) {
      y++
    }
    if (mouseY <= y + 50) {
      y--
    }
  }
  //code van de minigame 
  if (startGame == 1 && leven == 0 && scene == 3) {
    image(foto[0].fish, x, y, 100, 100)
    if (keyIsDown(LEFT_ARROW) === true) {
      x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW) === true) {
      x += 5;
    }

    if (keyIsDown(UP_ARROW) === true) {
      y -= 5;
    }

    if (keyIsDown(DOWN_ARROW) === true) {
      y += 5;
    }
    for (let i = 0; i < 100; i++) {
      rect(xRandom[i], yRandom[i], 10)
      if (xRandom[i] >= x && xRandom[i] < x + 100 && yRandom[i] >= y && yRandom[i] < y + 100) {
        xRandom.splice(i, 1)
      }
      if (xRandom.length <= 0) {
        text("done", 10, 10)
      

        if (minigameKlaar == 0){
        breedte[2].geluk + 50;
        geld +=50;
        breedte[2].geluk+=50;
        breedte[1].energie-=20;
        minigameKlaar = 1;
        }
      }
    }

  }

  fill(0)
  text("€" + geld, 570, 25)

  // zorgt er voor dat de fis niet beweegt tijdens het slapen
  if (slapen == 1) {
    fill(120, 120, 120, 150)
    rect(0, 0, 500, 600)
    breedte[1].energie += 1
  }


  // zorgt er voor dat de slaapknop verdwijnt 
  if (scene == 4) {
    if (slapen == 0) {
      slaapknop.show();
      wakkerknop.hide();
    } else {
      slaapknop.hide();
      wakkerknop.show();
    }
  }

  if (scene == 2 && x >= 120 && x <= 230) {
    breedte[3].gezondheid += 50
  }
 
 if (scene!=1 ){
  steakKnop.hide();
 }

//stopt de bars van hoger dan 200 te gaan

if (breedte[0].honger >= 200) {
    breedte[0].honger = 200
  }
  
  if (breedte[1].energie >= 200) {
    breedte[1].energie = 200
  }

  if (breedte[2].geluk >= 200) {
    breedte[2].geluk = 200
  }

   if (breedte[3].gezondheid >= 200) {
    breedte[3].gezondheid = 200
  }
  let naam = myInput.value();

  text(naam,550,50)
}

