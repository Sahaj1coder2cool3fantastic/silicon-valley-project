/*var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;*/
var zooImg;
var zoo;
var form;
var backgroundImg;
var backgroundImg2;
var backgroundImg3;
var tigerImg,elephantImg,lionImg,rabbitImg,birdImg,monkeyImg,squirrelImg,counterImg,AticketImg,CticketImg;
var tiger,elephant,lion,rabbit,monkey,squirrel,bird,counter,Aticket,Cticket;
var roadImg,road;
var scanImg,scan;
var player;
var gameState = 0;
var opensound;
var tickImg,tick;

function preload(){
zooImg = loadImage("animalspics/zoo.png");
backgroundImg = loadImage("animalspics/background.jpg");
backgroundImg2 = loadImage("animalspics/background5.webp");
backgroundImg3 = loadImage("animalspics/background3.jpg");
tigerImg = loadImage("animalspics/tiger.png");
elephantImg = loadImage("animalspics/elephant.png");
lionImg = loadImage("animalspics/lion.png");
rabbitImg = loadImage("animalspics/rabbit.png");
monkeyImg = loadImage("animalspics/monkey.png");
squirrelImg = loadImage("animalspics/squirrel.png")
birdImg = loadImage("animalspics/bird.png");
counterImg = loadImage("animalspics/counter.png");
AticketImg = loadImage("animalspics/Aticket.png");
CticketImg = loadImage("animalspics/Cticket.png");
opensound = loadSound("animalsounds/opening.mp3");
scanImg = loadImage("animalspics/scan.png");
tickImg = loadImage("animalspics/tick.png");
roadImg = loadImage("animalspics/road.jpg");
}
function setup() {
  createCanvas(displayWidth-150,displayHeight-100);

  road = createSprite(displayWidth-150,displayHeight-100);
road.addImage("road",roadImg);
road.visible = false;

zoo = createSprite(displayWidth/2 - 320, displayHeight/2 - 450);
zoo.addImage("zoo",zooImg);
zoo.scale = 2;

counter = createSprite(displayWidth/2 - 67, displayHeight/2 - 10);
counter.addImage("counter",counterImg);
counter.scale = 1.3;
counter.visible = false;

tiger = createSprite(displayWidth/2 + 420, displayHeight/2 +320);
tiger.addImage("tiger",tigerImg);
tiger.scale = 1;

monkey = createSprite(displayWidth/2 + 360, displayHeight/2 - 190);
monkey.scale = 1.5;
monkey.addImage("monkey",monkeyImg);

squirrel = createSprite(displayWidth/2 - 780, displayHeight/2 +160);
squirrel.scale = 0.3;
squirrel.addImage("squirrel",squirrelImg);

bird = createSprite(displayWidth/2 + 480, displayHeight/2 - 250);
bird.scale =1;
bird.addImage("bird",birdImg);
bird.visible = false;

Aticket = createSprite(displayWidth/2 + 280, displayHeight/2 - 160);
Aticket.scale =0.2;
Aticket.addImage("Aticket",AticketImg);
Aticket.visible = false;

Cticket = createSprite(displayWidth/2 + 280, displayHeight/2 - 160);
Cticket.scale =0.2;
Cticket.addImage("Cticket",AticketImg);
Cticket.visible = false;

scan = createSprite(displayWidth/2 + 70, displayHeight/2 + 10);
scan.scale =0.3;
scan.addImage("scan",scanImg);
scan.visible = false;

tick = createSprite(displayWidth/2 + 70, displayHeight/2 + 10);
tick.scale =2.1;
tick.addImage("tick",tickImg);
tick.visible = false;

  player = new Player();
form = new Form();
}

function draw() {
background(backgroundImg);
form.display();

if (gameState === 1) {
 background(backgroundImg2);
form.title.style('color', 'brown');
form.title.html("Virtual Zoo");
form.title.position(displayWidth/2 - 490, displayHeight/2 - 280);
form.title.style('font-size', '170px');
form.title.visible = true;
bird.visible = true;
tiger.visible = false;
monkey.visible = false;
squirrel.visible = false;
zoo.visible = false;

form.greeting.style('color','lightblack');
form.greeting.style('font-size', '80px');
form.greeting.position(displayWidth/2 - 250, displayHeight/2 + 40);
form.greeting.html("Hello \n" + player.name);


form.button2.position(displayWidth/2 - 250, displayHeight/2 + 290);
form.button2.style('width', '400px');
form.button2.style('height', '40px');
form.button2.style('background', 'orange');
form.button2.visible = true;
}

if (gameState === 2) {
  background(backgroundImg3); 
  form.vanish();
  bird.visible = false;
  counter.visible = true;

form.child.position(displayWidth/2 + 60, displayHeight/2 + 170);
form.child.style('width', '100px');
form.child.style('height', '40px');
form.child.style('background',Cticket);

form.adult.position(displayWidth/2 - 50, displayHeight/2 + 170);
form.adult.style('width', '100px');
form.adult.style('height', '40px');
form.adult.style('background',Aticket);
}

if (gameState === 3) {
    background(backgroundImg3);
  form.remove();
  scan.visible = true;

form.scan.position(displayWidth/2 - 50, displayHeight/2 + 170);
form.scan.style('width', '100px');
form.scan.style('height', '40px');
form.scan.style('background', 'orange');
}

if (gameState === 4) {
road.visible = true;
    tick.visible = false;
    counter.visible = false;
}

if (tick.visible === true) {
  gameState = 4;
}

drawSprites();

}