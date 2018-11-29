function setup() {
    createCanvas(500, 500)
}
var img;

function preload() {
    img = loadImage("Memes.png");
}

function draw() {
    background("white")
    fill("gray");
    var meme = "Distraction.";

    var s = mouseX;
    textSize(s);

    var leadingSize = mouseY;
    textLeading(leadingSize);
    var leadingSize = mouseY;
    textLeading(leadingSize);

    image(img, 20, 20, 400, 400);
    text(meme, 20, 20, 400, 400);

}