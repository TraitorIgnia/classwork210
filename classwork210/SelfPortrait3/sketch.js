// self portrait
function setup() {
    createCanvas(400, 400);
}

function draw() {
	background(220);
	rectMode(CENTER);
	
	var x = width/2;
	var y = height/2;
	var s = 200; // size
	var o = 50; // offset

	noStroke();
	fill("red");
	ellipse(x, y, s); // face

	fill("blue");
	ellipse(x - o, y, 50); // right eye
	ellipse(x + o, y, 50); // left eye

	fill('black');
	stroke("#ffddff");
	strokeWeight(4);

	var mouthSize = map(mouseX, 0, width, 5, 25); // move mouth with mouse x
	mouthSize = max(0, mouthSize); // prevents negative value error

	rect(x, y + o, s/2, mouthSize, 5); // mouth	
}