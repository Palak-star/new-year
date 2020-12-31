const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dog, dogimg, happyDog;
var database, foodS, foodStock;
var Matter;
var database;
var FedTime, lastFed;
var feed, addFood;
var foodObj;

function preload()
{
   dogimg = loadImage("images/dogImg.png");
   happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  engine = Engine.create();
    world = engine.world;

    foodStock = database.ref('food');
    foodStock.on("value",readStock);

    FedTime = database.ref('feedTime');
    FedTime.on("value",function(data){
      FedTime = data.val()
    });


  dog = createSprite(300,300,30,30);
  dog.addImage(dogimg);

  foodObj = new Food(100,100,30,30)

  feed = createButton("Feed the dog");  
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");  
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


}


function draw() {  
  background(46, 139, 87);
  Engine.update(engine);

  foodObj.display();

    fill(255,255,254);
    textSize(15);
    if(lastFed >= 12){
      text("Last Feed : "+ lastFed%12 + "PM", 350,30);
    }else if(lastFed==0){
      text("Last Feed : 12 AM", 350,30);
    }else{
      text("Last Feed :" + lastFed + " AM", 350,30);
    }


  drawSprites();
  //add styles here

text ("Note: Press UP_ARROW Key To Feed Drago Milk!")
textSize(5);
fill("white")
stroke("black")

}


function readStock(data) {
    foods = data.val();
}

function writeStock(x) {

    database.ref('/').update({
        Food:x
    })
}