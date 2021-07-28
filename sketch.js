

var canvas;
xpos=200;
ypos=200;
dx=5;
dy=5;

function setup() {
 canvas=createCanvas(windowWidth,windowHeight);

}

function draw() {
 background(0);

fill(255);

rect(width-10,mouseY,10,80);

rect(10,ypos,10,80);

ellipse(xpos,ypos,20);

fill(255);

text("PONG GAME",width/2.12,height/10);

for(var i=0;i<width/2;i+=20){
    stroke(255);
    line(width/2,i,width/2,i+10);

}



if(xpos>=width-20||xpos==20){
dx=-dx;
}

if(ypos>=height-20||ypos==20){
dy=-dy;
}

xpos=xpos+dx;
ypos=ypos+dy;

}

