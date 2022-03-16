var canvas;

function setup() {
    
   
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);


    canvas.style('z-index','-5');
    background(255);
    frameRate(10);
    
}

function draw() {


//grille
     for (var x = 0; x < width; x += width / 36) {
        for (var y = 0; y < height; y += height / 6) {
            stroke(150);
            strokeWeight(0.6);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
