var img;

function preload() {
    img = loadImage("no.png");
}
function setup() {
	createCanvas(900, 500);
}
function draw() {
	
	if (mouseX > width/2) {
		fill("white");
}