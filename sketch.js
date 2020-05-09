var canvas;
var drops = [];
function setup() {
    canvas = createCanvas(600, 600);
}
function draw() {
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    background(random(150, 255), random(150, 255), random(150, 255));
    // canvas.position(displayWidth / 2 - 300, displayHeight - 300);
    if (frameCount % 1.5 === 0) {
        var drop = new Drop(random(20, 580));
        drops.push(drop);
    }
    for (var i = 0; i <= drops.length; i++) {
        if (drops[i] !== undefined) {
            drops[i].applyProperties();
        }
    }
    drawSprites();
}
