const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour

var bg="sunrise1.pmg";

function preload() {
     getBackgroundImg( ) 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   if(backgroundImg)

    Engine.update(engine);

    fill("black")
    textSize(30)

    if(hour>=12){
        text("time: "+ hour%12+"PM",20,100)
    
      }else if(hour===0){
       text("time:12 am",100,100)
      }else{
        text("time: "+ hour%12+"PM",20,100);
       }
}

async function getBackgroundImg(){


        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
       if(hour>=04 && hour<=06){
         bg = "sunrise1.png";
        
       }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
       }else if(hour>=023 && hour== 0){
        bg = "sunset10.png";
       }else if(hour==0 && hour<=03){
        bg = "sunset11.png";
       }else{
        bg = "sunset12.png";
       }
       
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    
}