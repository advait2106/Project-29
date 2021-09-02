var polygon, polygon_img;
var block1, block2, block3, block4, block5;
var  block6,block7, block8; 
var  block9;


function preload(){ 
polygon_img= loadImage("polygon.png")
}

function setup (){

    polygon.addImage(polygon_img);
 // level one
    block1 = new Block (330,235,30,40);
    block2 = new Block (360,235,30,40);    
    block3 = new Block (390,235,30,40);    
    block4 = new Block (420,235,30,40);
    block5 = new Block (450,235,30,40);
 // level two 
  block6 = new Block (360,235,30,40);
  block7 = new Block (390,235,30,40);
  block8 = new Block (420,235,30,40);
  // topmost level
  block9 = new Block (390,235,30,40);
      


 function draw(){

background ("red");

 }


}
