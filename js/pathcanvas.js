let pathcanvas = function() {
    let mouseX = window.innerWidth/2;
    let mouseY = window.innerHeight/2;
    let path = [];
    let maxpathstops = 100;
    let maxpathlength = 100;
    let canv = document.getElementById("canv");
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    let ctx = canv.getContext("2d");

    let updateMousePos = function() {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    document.addEventListener("mousemove", updateMousePos);

    let updatePath = function(offsetX, offsetY) {
        path.push({X: mouseX+offsetX, Y: mouseY+offsetY});
        if(path.length > maxpathstops) {
            path.shift();
        }
    }
    let scrollPath = function() {
        for(let i=0; i<path.length; i++) {
            path[i].Y += 5;
        }
    }
    let drawPath = function() {
        ctx.clearRect(0,0, canv.width,canv.height);
        ctx.beginPath();
        ctx.moveTo(path[0].X, path[0].Y);
        for(let i=1; i<path.length; i++) {
            ctx.lineTo(path[i].X, path[i].Y);
        }
        ctx.stroke();
    }

    let funcpath = function() {
        updatePath(0, 20);
        scrollPath();
        drawPath();
    }
    setInterval(funcpath, 10);
}

document.addEventListener("DOMContentLoaded", pathcanvas);
