var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;


function preload(){

    //loading the music
    music = loadSound("music.mp3");

}


function setup(){
    //creating canvas
    canvas = createCanvas(800,600);

    //creating 4 different surfaces and giving them color
    box1 = createSprite(110,575,175,30);
    box1.shapeColor = rgb(255,0,0);

    box2 = createSprite(300,575,175,30);
    box2.shapeColor = rgb(0,0,255);

    box3 = createSprite(490,575,175,30);
    box3.shapeColor = rgb(255,128,0);


    box4 = createSprite(680,575,175,30);
    box4.shapeColor = rgb(0,200,0);


    //creating ball sprite,giving it color and velocity
    ball = createSprite(450,150,30,30)
    //ball.x = Math.round(random((50,750)))
    ball.shapeColor = "white"
    //ball.velocityX = 5;
    ball.velocityY = 3;

     edges = createEdgeSprites();

}

function draw() {
    //giving the background color
    background(rgb(169,169,169));

    //drawing sprites
    drawSprites();

    if(isTouching(ball,box1)){

        ball.shapeColor = rgb(255,0,0);
        bounceOff(ball,box1)

    }

    if(isTouching(ball,box2)){

        ball.shapeColor = rgb(0,0,255);
        bounceOff(ball,box2)
        ball.velocityX = 0;
        ball.velocityY = 0;

    }

    if(isTouching(ball,box3)){

        ball.shapeColor = rgb(255,128,0);
        bounceOff(ball,box3)
        music.play();
    }

    if(isTouching(ball,box4)){

        ball.shapeColor = rgb(0,200,0);
        bounceOff(ball,box4)

    }

    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);

}
