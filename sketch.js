//Create variables here
var dog , happydog , food , foodstock , database , dogimg , dogimg1

function preload()

{
dogimg = loadImage ("dog.png")
dogimg1 = loadImage ("happydog.png")
}

function setup() {
	createCanvas(500 , 500);
  database = firebase.database()

  dog = createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale = 0.5
  foodstock = database.ref("food")
  foodstock.on("value",readstock)
  textSize (20)
}


function draw() {  
background (46,139,87)
if(keyWentDown(UP_ARROW)){
writestock(food)
dog.addImage(dogimg1)
}
  drawSprites();

 
  fill(255,255,254);
   stroke("black"); 
   text("Food remaining : "+food,170,200);
    textSize(13); 
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

  //add styles here

}

function readstock(data){
  food = data.val()
  
}

function writestock (x){
  if(x<=0){
    x = 0
  }
  else {
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}



