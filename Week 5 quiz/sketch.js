//vragen van de quiz
let vragen = [
  { start: "start de quiz" },
  {
    vraag: "hoe heet het ding dat je moet slaan in badminton",
    antwoord: "Shuttle",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "Hoe heet het als je de shuttle heel snel naar beneden slaat",
    antwoord: "Smashen",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "Hoe heet het als je een shuttle kort over het net slaat?",
    antwoord: "Droppen",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "Hoe heet het als je een shuttle in het achter veld een shuttle slaat",
    antwoord: "clearen",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "Hoe heet het als je 1v1 speelt",
    antwoord: "singelen",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "Hoe heet het als je 2v2 speelt",
    antwoord: "dubbelen",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "hoeveel punten moet je halen om een set te winnen",
    antwoord: "21",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "hoe lang is het net in badminton",
    antwoord: "1,55 meter lang",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "hoe groot is een badminton veld",
    antwoord: "13,40 meter",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
  {
    vraag: "van af welke stand krijgen de spelers een korte pauze?",
    antwoord: "11 punten",
    foutAnw1: "iets1",
    foutAnw2: "iets2",
    foutAnw3: "iets3",
  },
];
let vraagcount = 0;
let antwoordRandom = 0

function setup() {
  createCanvas(800, 600);
}
//tekenen van dozen in de vragen en de hover
function teken(x, y, lengte, breedte) {
  if (mouseX >= x && mouseX <= x + lengte
    && mouseY >= y && mouseY <= y + breedte
  ) {
    fill(200)
  } else {
    fill(255)
  }
  rect(x, y, lengte, breedte)

}
//volgende vraag klik bij start van de quiz
function volgendeVraag(x, y, lengte, breedte) {
  if (mouseX >= x && mouseX <= x + lengte
    && mouseY >= y && mouseY <= y + breedte && mouseIsPressed && mouseButton === LEFT
  ) {
    fill(200)
    vraagcount++
    antwoordRandom = int(random(0, 4))
  } else {
    fill(255)
  }
  rect(x, y, lengte, breedte)

}


function draw() {
  background(220);
  // voor start scherm
  fill(0)
  text(antwoordRandom, 10, 70)
  if (vraagcount == 0) {
    volgendeVraag(150, 300, 450, 200)
    fill(0)
    textSize(40)
    text(vragen[0].start, 250, 400)

    text("Badminton quiz", 220, 200)
    //eindscherm
  } else if (vraagcount == 11) {
    text("klaar", 400, 300)
    //vragen en een stuk van hover
  } else {
    textSize(20)
    teken(450, 400, 300, 75)
    teken(50, 400, 300, 75)
    teken(50, 500, 300, 75)
    teken(450, 500, 300, 75)
    fill(0)

    text(vragen[vraagcount].vraag, 10, 40)

    if (antwoordRandom == 0) {
      text(vragen[vraagcount].antwoord, 60, 450)
      text(vragen[vraagcount].foutAnw1, 60, 550)
      text(vragen[vraagcount].foutAnw2, 460, 450)
      text(vragen[vraagcount].foutAnw3, 460, 550)
    } else if (antwoordRandom == 1) {
      text(vragen[vraagcount].foutAnw1, 60, 450)
      text(vragen[vraagcount].antwoord, 60, 550)
      text(vragen[vraagcount].foutAnw2, 460, 450)
      text(vragen[vraagcount].foutAnw3, 460, 550)
    } else if (antwoordRandom == 2) {
      text(vragen[vraagcount].foutAnw1, 60, 450)
      text(vragen[vraagcount].foutAnw2, 60, 550)
      text(vragen[vraagcount].antwoord, 460, 450)
      text(vragen[vraagcount].foutAnw3, 460, 550)
    } else {
      text(vragen[vraagcount].foutAnw1, 60, 450)
      text(vragen[vraagcount].foutAnw2, 60, 550)
      text(vragen[vraagcount].foutAnw3, 460, 450)
      text(vragen[vraagcount].antwoord, 460, 550)
    }
  }
}
