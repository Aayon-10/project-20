var bgimg;
var cat1img,cat2img,cat3img,cat;
var mouse,mouse1img,mouse2img,mouse3img;


function preload() {
    //load the images here
bgimg = loadImage("images/garden.png");
cat1img = loadAnimation("images/cat1.png");
cat2img = loadAnimation("images/cat2.png","images/cat3.png");
cat4img = loadAnimation("images/cat4.png");

mouse1img = loadAnimation("images/mouse1.png");
mouse2img = loadAnimation("images/mouse2.png","images/mouse3.png");
mouse4img = loadAnimation("images/mouse4.png");
     
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(900,600);
   cat.addAnimation("cat",cat1img);
   cat.scale = 0.2;

   mouse = createSprite(200,600);
   mouse.addAnimation("mouse",mouse1img);
   mouse.scale = 0.2;

  

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x <(cat.width - mouse.width) / 2  ){
       cat.velocityX = 0;
       cat.addAnimation("cat3",cat3img);
       cat.changeAnimation("cat3");
       cat.x = 300;
       cat.scale = 0.2;
       
       mouse.addAnimation("mouse3",mouse3img);
       mouse.changeAnimation("mouse3");
       mouse.scale = 0.15;

    }


    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -4;
      cat.addAnimation("cat1",cat2img);
      cat.changeAnimation("cat1")
      mouse.addAnimation("mouse1",mouse2img);
      mouse.changeAnimation("mouse1")
      mouse.frameDelay = 25;


  }


}
