var backgrImage

var tom,tomImage,jerry,jerryImage;

function preload() {
    backgrImage = loadImage("images/garden.png");
    tomImage1 = loadAnimation("images/cat1.png");
    tomImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3 = loadAnimation("images/cat4.png");

    jerryImage1 = loadAnimation("images/mouse1.png");
    jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite (900,600);
    tom.addAnimation("tomSource",tomImage1);
    tom.scale = 0.2;

    jerry = createSprite (100,600);
    jerry.addAnimation("jerrySource",jerryImage1);
    jerry.scale = 0.2;
}

function draw() {
    background(backgrImage);

    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("TomlastImage",tomImage3);
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage",jerryImage3);
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomWalking",tomImage2);
        tom.changeAnimation("tomWalking");
        tom.scale = 0.3;

        jerry.addAnimation("jerryTeasing",jerryImage2);
        jerry.changeAnimation("jerryTeasing");
    }
}
