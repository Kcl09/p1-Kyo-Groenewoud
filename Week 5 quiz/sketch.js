let vragen = [
  { start: "start de quiz"},
  {
    vraag: "hoe heet het ding dat je moet slaan in badminton",
    antwoord: "Shuttle",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "Hoe heet het als je de shuttle heel snel naar beneden slaat",
    antwoord: "Smashen",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "Hoe heet het als je een shuttle kort over het net slaat?",
    antwoord: "Droppen",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "Hoe heet het als je een shuttle in het achter veld een shuttle slaat",
    antwoord: "clearen",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "Hoe heet het als je 1v1 speelt",
    antwoord: "singelen",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "Hoe heet het als je 2v2 speelt",
    antwoord: "dubbelen",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "hoeveel punten moet je halen om een set te winnen",
    antwoord: "21",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "hoe lang is het net in badminton",
    antwoord: "1,55 meter lang",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "hoe groot is een badminton veld",
    antwoord: "13,40 meter",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
  {
    vraag: "van af welke stand krijgen de spelers een korte pauze?",
    antwoord: "11 punten",
    foutAnw1:"iets",
    foutAnw2:"iets",
    foutAnw3:"iets",
  },
];
let vraagcount = 0;
function setup() {
  createCanvas(800, 600);
}

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

function volgendeVraag(x, y, lengte, breedte) {
  if (mouseX >= x && mouseX <= x + lengte
    && mouseY >= y && mouseY <= y + breedte && mouseIsPressed && mouseButton === LEFT
  ) {
    fill(200)
    vraagcount++
  } else {
    fill(255)
  }
  rect(x, y, lengte, breedte)

}


function draw() {
  background(220);
  fill(0)
  if (vraagcount == 0) {
volgendeVraag(150,300,450,200)
fill(0)
textSize(40)
text(vragen[0].start,250,400)
  } else if (vraagcount == 11) {
    text("klaar", 400, 300)
  } else {
    textSize(20)
    text(vragen[vraagcount].vraag, 10, 40)
    teken(450, 400, 300, 75)
    teken(50, 400, 300, 75)
    teken(50, 500, 300, 75)
    teken(450, 500, 300, 75)
  }
}
