function setup() {
  createCanvas(400, 400);
}
//opdracht 1 en 2
let x=100;
let greeting="Hello world!";

//stap 3 en 4
let a=20;
let b=10;

let optellen= a+b;
let aftrekken= a - b;
let vermenigvuldigen= a * b;
let delen= a/b;



function draw() {
  background(220);
//de text van alle opdrachten
text(x,20,20);
text(greeting,20,60);

text("optellen:"+optellen,20,80);
text("aftrekken:"+aftrekken,20,100);
text("vermenigvuldigen"+vermenigvuldigen,20,120);
text("delen:"+delen,20,140);

  } 

