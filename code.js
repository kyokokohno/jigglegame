# jigglegame
var circle;
var points;
var numbers = [];

function setup() {
  createCanvas(1000, 1000);
  
  background("#A46FA6");

  circle = new Circle();
  points = 0;
  
}

function mousePressed(){
  if (sqrt( (mouseX-circle.x)*(mouseX-circle.x) + (mouseY-circle.y)*(mouseY-circle.y) ) < circle.radius){
    points++;
    numbers.push(new Number())
  }
}



function draw() {
  background("#A46FA6");
  textSize(30);
  fill(0, 100, 100);
  text("jiggle game", 50, 200);
  text(points, 50, 50);
  
  circle.display();


	for (var i = 0 ; i < numbers.length; i++){
  	numbers[i].update();
    if (numbers[i].alpha > 0 ){
      print(i)
      print(numbers[i].pos.x + ", " + numbers[i].pos.y)
      print(numbers[i].vel.x + "," + numbers[i].vel.y)
    	numbers[i].display();
    }
  }
}

function Number(){

	this.pos = new Point(circle.x,circle.y);
  this.acc = new Point(random(-.05,.05), .1);
  this.vel = new Point(0,-4);
  
  this.alpha = 100;
  
  this.col = color(136, 70, 138, alpha);
  
  this.update = function(){
  	this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.alpha--;
  }
  
  this.display = function(){
  	textSize(40);
  	fill(this.col);
    text("+1",this.pos.x,this.pos.y);
	}
  
}

function Circle(){
	this.x = 500;
  this.y = 500;
  this.radius = 100;
  this.colour = "#350037";
  
  this.display = function() {
  	fill(this.colour);
  	ellipse(this.x,this.x,this.radius*2,this.radius*2);
  }
}



function Point(x,y){
	this.x = x;
  this.y = y;
  
  this.setPos = function(x,y){
		this.x = x;
    this.y = y;
	}
  
  this.add = function(p){
  	this.x += p.x;
    this.y += p.y;
  }
}
