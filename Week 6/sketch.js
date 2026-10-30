let breedte = [
  { honger: 200 },
  { energie: 200 },
  { geluk: 200 },
  { gezondheid: 200 },
];
let visNaam = "mijn Vis"
let x = 50;
let y = 400;
let fishDikte = 100;
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
  { fishhat : 0}
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
    plekY : 460,
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
    size : 16,
  },
  {naamKnop : "help",
    plekX : 557,
    plekY : 430,
    function : help,
    show : 1,
    size : 16,
  },
  {naamKnop : "close",
    plekX : 557,
    plekY : 430,
    function : helpUit,
    show : 1,
    size : 16,
  },
  {naamKnop : "reset",
    plekX : 427,
    plekY : 120,
    function : reset,
    show : 0,
    size : 16,
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
let helpText = 0;
function preload() {
  foto[0].fish = loadImage("fishwithshoes.png");
  foto[1].fishandchips = loadImage("fishandchipstwee.png")
  foto[2].woonkamer = loadImage("woonkamer.png")
  foto[3].winkel = loadImage("winkel.jpg")
  foto[4].badkamer = loadImage('badkamer.jpg')
  foto[5].slaapkamer = loadImage('slaapkamer.jpg')
  foto[6].steak = loadImage('steak.png')
  foto[7].fishhat =loadImage('fishwithshoesandhat.png')
}

function setup() {
  createCanvas(800, 600);

 if (getItem("breedte")==null) { breedte = breedte;}
  else { breedte = getItem("breedte");}

let opgeslagenSteak = getItem("steak");
  if (opgeslagenSteak !== null && opgeslagenSteak !== undefined && !isNaN(opgeslagenSteak)) {
    steak = int(opgeslagenSteak); // int() zorgt ervoor dat het een echt getal is!
  } else {
    steak = 0;
    storeItem("steak", 0);
  }


let opgeslagenGeld = getItem("geld");
  if (opgeslagenGeld !== null && opgeslagenGeld !== undefined && !isNaN(opgeslagenGeld)) {
    geld = opgeslagenGeld;
  } else {
    geld = 25;
    storeItem("geld", 25);
  }

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
    selectieKnop.position(395, 390 + 25 * i)
    kamerKnop.push(selectieKnop)
    selectieKnop.mousePressed(kamerFunctie[i])
  }

  if (getItem("visNaam") !== null) {
    visNaam = getItem("visNaam");
  }

  myInput = createInput(visNaam); 
  myInput.position(557, 50);

  //opslaknop
  naamKnop = createButton("Opslaan");
  naamKnop.position(715, 50); 
  naamKnop.mousePressed(slaNaamOp);
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
  breedte[0].honger = 150
  breedte[1].energie = 200
  breedte[2].geluk = 200
  breedte[3].gezondheid = 200
  geld = 25
}

function help(){
helpText=1
}
function helpUit(){
  helpText=0
}
function mouseDragged() {
  if (steak >= 1 && scene == 1 && mouseX <= 500) {
    xEten = mouseX - 50;
    yEten = mouseY - 50;
  }
}

function slaNaamOp() {
  visNaam = myInput.value(); 
  storeItem("visNaam", visNaam);
}

function draw() {
  background(100);
   storeItem("breedte",breedte);
   storeItem("geld",geld);
   storeItem("steak",steak)
  // zorgt voor de verandering van achtergrond en de game knop te maken
  if (scene == 0) {
    image(foto[2].woonkamer, 0, 0, 600, 600);
  } else if (scene == 1) {
    image(foto[3].winkel, 0, 0, 600, 600)
  } else if (scene == 2) {
    image(foto[4].badkamer, 0, 0, 600, 600)
  } else if (scene == 3) {
    gemaakteknoppen[2].show();
  } else if (scene == 4) {
    image(foto[5].slaapkamer, 0, 0, 600, 600)
    gemaakteknoppen[3].show();
  }
  if (scene != 3) {
    gemaakteknoppen[2].hide();
  }
  if (scene != 4) {
    gemaakteknoppen[3].hide();
    gemaakteknoppen[4].hide();
  }
  //de bars voor honger energie geluk en gezondheid
 if (frameCount % 30 == 0) {
  if (breedte[0].honger > 0) {breedte[0].honger -= 0.4;}
  if (breedte[1].energie > 0) {breedte[1].energie -= 0.2;}
  if (breedte[2].geluk > 0) {breedte[2].geluk -= 0.3;}
  if (breedte[3].gezondheid > 0) {breedte[3].gezondheid -= 0.25;}
}
  if (breedte[0].honger <= 0 && breedte[1].energie <= 0 && breedte[2].geluk <= 0 && breedte[3].gezondheid <= 0) {
    leven = 1
  } else {
    leven = 0
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
  // zorgt er voor dat de vis dood kan en de naam boven zijn hooft
  if (leven == 0) {
    
    fill(255);
    textSize(14);
    textAlign(CENTER);
    text(visNaam, x + (fishDikte / 2), y - 15);
    textAlign(LEFT); 
if (breedte[3].geluk >= 150){

}
    image(foto[0].fish, x, y, fishDikte, 100);
  } else if (leven == 1) {
    image(foto[1].fishandchips, x, y, fishDikte, 100);
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
    image(foto[0].fish, x, y, fishDikte, 100)
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
  // winkel code
  if (scene == 1) {
    gemaakteknoppen[5].show();
    fill(0)
    rect(0, 0, 150, 150);
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
      gemaakteknoppen[3].show();
      gemaakteknoppen[4].hide();
    } else {
      gemaakteknoppen[3].hide();
      gemaakteknoppen[4].show();
    }
  }

  if (scene == 2 && x >= 120 && x <= 230) {
    breedte[3].gezondheid += 50
  }
 
 if (scene!=1 ){
  gemaakteknoppen[5].hide();
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

  //zorgt dat de menu knop werkt
  if (laatRectZien == 1) {
    fill(200)
    rect(380, 370, 120,150)
    gemaakteknoppen[1].show();
    gemaakteknoppen[0].hide();
  } else {
    gemaakteknoppen[1].hide();
    gemaakteknoppen[0].show();
  }
//
  //zorgt voor help knop te laten zien en te laten verdwijnen
  if (helpText == 1) {
    fill(200)
    rect(0, 0, 500,250)
    fill(0)
    text("Hoi, welkom op de help page.",10,30)
    text("De bedoeling is om de vis met schoenen in leven te houden.",10,50)
    text("Je kan hem eten geven, douchen, een minigame laten spelen en het naar bed laten gaan.",10,70)
    text("De bedoeling van de minigame is dat je alle punten op pakt. ",10,90)
    text("De minigame kan je controllen met de arrow keys.",10,110)
    text("Stel de vis gaat dood kun je hem hier met de reset knop resetten. ",10,130)
    text("Om de gezondheid omhoog te krijgen moet je de vis onder de douche doen.",10,150)
    text("Je kan de naam van de vis veranderen rechts boven in het scherm.",10,170)
    gemaakteknoppen[8].show();
    gemaakteknoppen[7].show();
    gemaakteknoppen[6].hide();
  } else {
    gemaakteknoppen[7].hide();
    gemaakteknoppen[6].show();
    gemaakteknoppen[8].hide();  
  }
// maakt de vis dik

if (breedte[0].honger >= 150 && fishDikte < 200) {
  fishDikte++;
} else if (breedte[0].honger < 150 && breedte[0].honger > 50) {
  if (fishDikte > 100) {
    fishDikte--; 
  } else if (fishDikte < 100) {
    fishDikte++; 
  }
} else if (breedte[0].honger <= 50 && fishDikte > 50) {
  fishDikte--;
}


}

