var bg,bg2,form,system,code,security;
var score=0;
var acessCode1 = "variable";
var acessCode2 = "function";
var acessCode3 = "database";
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  fill ("white");
  textSize(32);
  text ("Score: " + score, width/2 - 20,100);


  // Add code to display the end screen
  if (score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250,200);
  }

  drawSprites()


}