let laatRectZien = 0;
let knopAan;
let knopUit;
let kamerFunctie = [woonkamer, winkel, badkamer, minigame1];
let kamers = ["woonkamer", "winkel", "badkamer", "minigame1"]
let kamerKnop = [];
function setup() {
  createCanvas(600, 400);
  knopAan = createButton('menu');
  knopAan.position(10, 10);
  knopAan.style('background-color', '#ffffff');
  knopAan.mousePressed(knopaan);
  knopAan.show();

  knopUit = createButton('close');
  knopUit.position(10, 10);
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

}

function winkel() {

}

function badkamer() {

}

function minigame1() {

}


function knopaan() {
  console.log('Button werd geklikt!');
  laatRectZien = 1
}

function knopuit() {
  console.log('Button 2 werd geklikt!');
  laatRectZien = - 1
}

function draw() {
  background(220);
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
}

