var godzilla, god, rodan, city, lazer, mothra, leo;
var godzillaImg, rodanImg, cityImg, godImg, lazerImg, mothraImg, leoImg;
var box;
var boxImg;
var mecha;
var mechaImg;

function preload() {
cityImg = loadImage("City.jpg");
godzillaImg = loadImage("Godzilla (mouth closed).png");
godImg = loadImage("Godzilla (mouth opened).png");

rodanImg = loadImage("Rodan.png");
mothraImg = loadImage("Mothra brown.png");
leoImg = loadImage("Mothra Blue.png");

lazerImg = loadImage("Lazer.png");

mechaImg = loadImage("mecha.png");
}



function setup() {
createCanvas(1010,600);



//City
city = createSprite(230,240,100,600);
city.addImage(cityImg);
city.scale=0.950;

//Godzilla
godzilla = createSprite(1000,530,10,10);
godzilla.addImage(godzillaImg);
godzilla.scale = 0.500;
godzilla.mirrorX(-1);




box = createSprite(870,385,30,30);
box.visible=false;
}



function draw() {
background(0);


var select_sprite = Math.round(random(1,500));
var select_sprite = Math.round(random(1,500));
var select_sprite = Math.round(random(1,500));
var select_sprite = Math.round(random(1,500));



if(godzilla.y<20) {
godzilla.remove();
box.remove();
}

if(godzilla.y<6) {
  godzilla.remove();
  box.remove();
}


if (keyDown("space")) {
createLazer();
}

if(keyDown("up")) {
godzilla.y = godzilla.y-2;
box.y=box.y-2;
}

if(keyDown("down")) {
godzilla.y = godzilla.y+2;
box.y = box.y+2;
}


if (World.frameCount % 50 == 0) {
  if (select_sprite == 1) {
    createRodan();
  } else if (select_sprite == 2) {
    createMeca();
  } else if (select_sprite == 3) {
    createLeo();
  } else (select_sprite == 4) 
    createMothraB();
  }





drawSprites();
}



function createLazer() {
  var lazer = createSprite(0,0,10,10);
  lazer.addImage(lazerImg);
  lazer.x = 740;
  lazer.y = box.y;
  lazer.scale= 0.07;
  lazer.velocityX = -4;
  lazer.lifetime = 150;
}


//Monsters


function createRodan() 
{
var rodan = createSprite(Math.round(random(30,600)), 100,700);
rodan.addImage(rodanImg);
rodan.scale= 0.435;
rodan.velocityX= 4;
  }



function createMeca()  {
    mecha = createSprite(0,0,10,10);
    mecha.addImage(mechaImg);
    mecha.scale=0.370;
    mecha.mirrorX(-1);
    mecha.velocityX=4;
}



function createMothraB() {
  var mothra = createSprite(0,0,20,20);
  mothra.addImage(mothraImg);
  mothra.scale = 0.2;
  mothra.mirrorX(-1);
  mothra.velocityX = 4;
}


function createLeo() {
  var leo = createSprite(0,0,20,20);
  leo.addImage(leoImg);
  leo.scale = 0.370;
  leo.mirrorX(-1);
  leo.velocityX = 4;
}








