
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  ground1,ground2;
//var box1,box2, box3, box4, box5, box6, box7;
//var box8, box9,box10,box11;
var box;
var slingShot;
var polygon;


function preload() {
    

}

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(800, 300, 170, 10)
    ground2 = new Ground(550, 500, 240, 10)

    //tower 1
    //level 1

    var locX, locY;
    for(i=0; i < 25; i++) {
        if (i < 7) {
            locX = 460 + (i*30);
            locY = 480;
        } else if (i >=7 && i < 12) {
            locX = 485 + ((i - 7)*30);
            locY = 460;
        } else if (i>=12 && i<15) {
            locX = 510 + ((i-12)*30);
            locY = 440;
        } else if (i==15) {
            locX = 535;
            locY = 420;
        } else if (i>=16 && i<21){
            locX = 740 + ((i - 16)*30);
            locY = 280;
        } else if(i>=21 && i<24){
            locX = 765 + ((i - 21)*30);
            locY = 260;
        } else if (i==24){
            locX = 790;
            locY = 240;
        }
          

        box[i] = new Box(locX, locY, 30, 40); 
    }
  
/*
    box1 = new Box(445,400,30,40)
    box2 = new Box(475,400,30,40)
    box3 = new Box(505,400,30,40)
    box4 = new Box(535,400,30,40)
    box5 = new Box(565,400,30,40)
    box6 = new Box(595,400,30,40)
    box7 = new Box(625,400,30,40)
    //level 2

    box8 = new Box(470,235,30,40)
    box9 = new Box(500,235,30,40) 
    box10 = new Box(530,235,30,40)
    box11 = new Box
    */
    
  //polygon = Bodies.circle(50,200,20);
  polygon = new Polygon(50, 200, 20);
  slingShot = new SlingShot(polygon.body, {x: 150, y: 200});

   
}

function draw(){
    background("grey");
    Engine.update(engine);    


    for (i=0; i<25; i++){
        box[i].display();
    }
    /*
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
*/  

 polygon.display();
 slingShot.display();

ground1.display();
ground2.display();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}


