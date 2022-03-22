var canvas;
var taille;
var posRandom;
var couleur;

//let shader1;

/*function preload() {
  shader1 = loadShader('shader.vert', 'shader.frag');
}*/

function setup() {

    canvas = createCanvas(windowWidth, windowHeight/*, WEBGL*/);
    canvas.position(0,0);
    canvas.style('z-index','-4');
    frameRate(30);
}

function draw() {

  //shader(shader1);

    posRandom=random(0,100);
  //  taille=random(1,5);
    couleur=random(255);
    //ligne
    ligne();
    //grille
    grille();

    }

function ligne(){

  stroke(240);
  strokeWeight(taille);
  line(pmouseX, pmouseY, mouseX, mouseY);

  if (mouseIsPressed) {
    taille=0;
  } else {
      taille=random(1,5);

  }

}

function grille() {

  for (var x = 0; x < width; x += width / 24 ) {
     for (var y = 0; y < height; y += height / 12) {
         stroke(2550,231,239);
         strokeWeight(0.8);
         line(x, 0, x, height);
         line(0, y, width, y);
         }
       }
    }



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
