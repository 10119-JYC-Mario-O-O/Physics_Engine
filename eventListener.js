let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

document.addEventListener("keydown", function(e) {
    if (e.code == "Space") {
        firstX = thing.x;
        firstY = thing.y;
    }
});

document.addEventListener("keyup", function(e) {
    if (e.code == "Space") {
        laterX = thing.x;
        laterY = thing.y;
        console.log(`firstX : ${firstX}, `, `firstY : ${firstY}, `, `laterX : ${laterX}, `, `laterY : ${laterY}`);
    }
});