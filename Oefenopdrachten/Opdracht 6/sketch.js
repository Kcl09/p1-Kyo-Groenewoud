function setup() {
  createCanvas(380, 350);
}

let colors = ['red','green','blue','purple','yellow'];
let colors2 = ['red','green','blue','purple','yellow'];
let colors3 = ['red','green','blue','purple','yellow'];

let getallenFilteren = ['400','240','10','490','30','60','244','500','301','300']

for(let i = 0; i < colors.length; i++){
  console.log(colors[i]);

}

function draw() {
  background(220);
  fill(0)
  text("1.",20,15)
  text("2.",20,100)
  text("3.",20,190)
  text("4.",20,250)
  text("5.",120,15)
  text("6.",120,100)
  text("7.",120,190)
  text("8.",120,280)
  text("9.",240,15)

  //opdracht 1
    for(let i = 0; i < colors.length; i++){
    fill(colors[i])
  text(colors[i],30,25+(10*i));
}
//opdracht2

  for(let l = 0; l < colors.length; l++){
    fill(colors2[l])
  text(colors2[l],30,110+(10*l));
}

// opdracht3
for(let l = 0; l < colors.length; l++){
    fill(colors3[l])
  text(colors3[l],30,200+(10*l));
}

//opdracht4
for(let a = 0; a < getallenFilteren.length; a++){
    fill(0)
  text(getallenFilteren[a],30,250+(10*a));
}


}
colors2.shift();
colors2.push("red");

colors3.splice(2,2);