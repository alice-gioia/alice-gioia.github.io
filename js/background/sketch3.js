var canvas;
var taille;
var couleur;
var positionX;
var positionY;
var positionX2;
var positionY2;
var positionX3;
var positionY3;

function setup() {
    
   
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);


    canvas.style('z-index','-5');
    background(0,0,0);
    frameRate(10);
    
}

function draw() {

      
    taille=random(1,5);
    couleur=random(150,220);
    positionX=random(0,screen.width);
    positionY=random(0,screen.height);
    positionX2=random(0,screen.width);
    positionY2=random(0,screen.height);
    positionX3=random(0,screen.width);
    positionY3=random(0,screen.height);

//ligne
    stroke('rgba(100,100,100,0.6)');
    strokeWeight(0.8);
    line(pmouseX, pmouseY, mouseX, mouseY);

    
    
//cercles gris
    
    fill(couleur);
    ellipse(mouseX,mouseY,taille,taille);



//grille
     for (var x = 0; x < width; x += width / 24) {
        for (var y = 0; y < height; y += height / 6) {
            stroke(50);
            strokeWeight(0.8);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
