// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
	//HEAD
    stroke(159, 26, 31);
    fill(159, 26, 31);
    ellipse(200, 200, 300);
	
	// eyes
	fill("blue");
	ellipse(150, 100, 50, 100);
	ellipse(250, 100, 40, 100);
	
	//MOUTH
    fill(0, 0, 0);
    arc(200, 250, 100, 150, 0, PI);
    stroke(0, 0, 0);
}