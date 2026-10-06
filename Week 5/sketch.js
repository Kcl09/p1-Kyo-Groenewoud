let vragen = [
  {},
  {
    vraag: "hoe heet het ding dat je moet slaan in badminton",
    antwoord: "Shuttle"
  },
  {
    vraag: "Hoe heet het als je de shuttle heel snel naar beneden slaat",
    antwoord: "Smashen"
  },
  {
    vraag: "Hoe heet het als je een shuttle kort over het net slaat?",
    antwoord: "Droppen"
  },
  {
    vraag: "Hoe heet het als je een shuttle van achter in het veld naar achter in het veld van de tegenstander slaat?",
    antwoord: "clearen"
  },
  {
    vraag: "Hoe heet het als je 1v1 speelt",
    antwoord: "singelen"
  },
  {
    vraag: "Hoe heet het als je 2v2 speelt",
    antwoord: "dubbelen"
  },
   {
    vraag: "hoeveel punten moet je halen om een set te winnen",
    antwoord: "21"
  },
  {
    vraag: "hoe lang is het net in badminton",
    antwoord: "1,55 meter lang"
  },
  {
    vraag: "hoe groot is een badminton veld",
    antwoord: "13,40 meter"
  },
  {
    vraag: "van af welke stand krijgen de spelers een korte pauze?",
    antwoord: "11 punten"
  },
];
let vraagcount = 1;
function setup() {
  createCanvas(800, 600);
}

function teken(x, y, lengte, breedte) {
  if (mouseX >= 50 && mouseX <= 350 
    && mouseY >=400 && mouseY <= 475
  ){
    fill(0)
  }else {
    fill(255)
  }
  rect(x, y, lengte, breedte)
  
}

function draw() {
  background(220);

  if (vraagcount == 0) {

  } else if (vraagcount==11){
    text("klaar",400,300)
  }else{
    text(vragen[vraagcount].vraag, 10, 10)
    teken(450, 400, 300, 75)
    teken(50, 400, 300, 75)
    teken(50, 500, 300, 75)
    teken(450, 500, 300, 75)
  }
}
