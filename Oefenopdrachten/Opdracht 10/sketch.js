let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let functions = [fillred, fillgreen, fillblue, fillorange, fillpurple, fillyellow]
let loadfoto = [fotoElephant, fotoGiraffe, fotoHippo, fotoMonkey, fotoPanda, fotoParrot, fotopig, fotoPenguin, fotoRabbit, fotoSnake];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen = [];
let afbeeldingen = [];
let fotoValue = -1;

let achtergrondKleur = "white";

function preload() {
  for (let i = 0; i < bestanden.length; i++) {
    let img = loadImage(bestanden[i] + ".png")
    afbeeldingen.push(img)
  }
}

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 6; i++) {
    let button = createButton(kleuren[i]);
    button.position(10 + 100 * i, 10);
    button.style('background-color', kleuren[i]);
    button.mousePressed(functions[i]);
    knoppen.push(button);
  }
  for (let i = 0; i < bestanden.length; i++) {
    let button = createButton(bestanden[i])
    button.position(10 + 80 * i, 40)
    button.mousePressed(loadfoto[i])
  }
}

function fotoElephant() {
  image(afbeeldingen[0], 10, 10)
  fotoValue = 0
}

function fotoGiraffe() {
  fotoValue = 1
}

function fotoHippo() {
  fotoValue = 2
}

function fotoMonkey() {
  fotoValue = 3
}

function fotoPanda() {
  fotoValue = 4
}

function fotoParrot() {
  fotoValue = 5
}

function fotopig() {
  fotoValue = 6
}

function fotoPenguin() {
  fotoValue = 7
}

function fotoRabbit() {
  fotoValue = 8
}

function fotoSnake() {
  fotoValue = 9
}

function fillred() {
  achtergrondKleur = "red"
}
function fillgreen() {
  achtergrondKleur = "green"
}
function fillblue() {
  achtergrondKleur = "blue"
}
function fillorange() {
  achtergrondKleur = "orange"
}
function fillpurple() {
  achtergrondKleur = "purple"
}
function fillyellow() {
  achtergrondKleur = "yellow"
}


function draw() {
  background(achtergrondKleur);
  if (fotoValue >= 0) {
    image(afbeeldingen[fotoValue], 10, 10)
  }

  if (achtergrondKleur !== "red") {
    knoppen[0].show();
  } else {
    knoppen[0].hide();
  }
  if (achtergrondKleur !== "green") {
    knoppen[1].show();
  } else {
    knoppen[1].hide();
  }
  if (achtergrondKleur !== "blue") {
    knoppen[2].show();
  } else {
    knoppen[2].hide();
  }
  if (achtergrondKleur !== "orange") {
    knoppen[3].show();
  } else {
    knoppen[3].hide();
  }
  if (achtergrondKleur !== "purple") {
    knoppen[4].show();
  } else {
    knoppen[4].hide();
  }
  if (achtergrondKleur !== "yellow") {
    knoppen[5].show();
  } else {
    knoppen[5].hide();
  }


  // if (fotoValue !== 0) {
  //   loadImage[0].hide();
  // } else {
  //   knoppen[0].show();
  // }
  
}
