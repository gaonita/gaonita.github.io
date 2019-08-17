window.onscroll = function() {
    stickyFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    document.body.appendChild(css);
};



//intro

function PixelOverlay() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.rectWidth = 25;
    this.rectHeight = 25;
    this.speed = 25;
    this.color = '#000000';
}

PixelOverlay.prototype.init = function() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext('2d');

    this.canvas.id = 'pixel-overlay';
    this.canvas.style.zIndex = 8;
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.position = "fixed";

    document.body.appendChild(this.canvas);

    this.ctx.canvas.width  = this.width;
    this.ctx.canvas.height = this.height;
};

PixelOverlay.prototype.drawRect = function(x, y, fill) {
    this.ctx.fillStyle = fill;
    if (fill === 'clear') {
        this.ctx.clearRect(x,y, this.rectWidth, this.rectHeight)
    } else {
        this.ctx.fillRect(x, y, this.rectWidth, this.rectHeight)
    }
}

PixelOverlay.prototype.distributeRects = function(spawnX, spawnY, radius, elemCount, fill) {
    var width = this.width,
        height = this.height,
        angle = 0,
        step = (2*Math.PI) / elemCount;

    for(var i = 0; i < elemCount; i++) {
        var x = spawnX + radius * Math.cos(angle) - this.rectWidth/2;
        var y = spawnY + radius * Math.sin(angle) - this.rectHeight/2;
        this.drawRect(x, y, fill);
        angle += step;
    }
}

PixelOverlay.prototype.spawnCircle = function(x, y, fill, finishColor, callback) {
    var count = 0;
    var tempColor;
    var offset = 0.5;
    var self = this;

    function draw(timestamp, finishColor, callback) {
        if (fill === 'random') {
            tempColor = randomColor({luminosity: 'bright'})
        } else {
            tempColor = fill;
        }

        self.distributeRects(x, y, 25 * count * offset , 4 * count, tempColor)

        if (self.checkDone(finishColor)) {
            if (callback && typeof(callback) === "function") callback()
        } else {
            count++;
            requestAnimationFrame(function(timestamp) {
                draw(timestamp, finishColor, callback)
            });
        }
    }

    requestAnimationFrame(function(timestamp) {
        draw(timestamp, finishColor, callback)
    })
}

PixelOverlay.prototype.checkDone = function(finishColor) {
    var topLeftSensor = this.ctx.getImageData(0, 0, 1, 1).data.toString();
    var topRightSensor = this.ctx.getImageData(this.width - 1, 0, 1, 1).data.toString();
    var bottomRightSensor = this.ctx.getImageData(this.width - 1, this.height - 1, 1, 1).data.toString();
    var bottomLeftSensor = this.ctx.getImageData(0, this.height - 1, 1, 1).data.toString();
    var finalColor = finishColor.toString();

    if (
        topLeftSensor === finalColor &&
        topRightSensor === finalColor &&
        bottomRightSensor === finalColor &&
        bottomLeftSensor === finalColor
    ) {
        return true
    }
}

PixelOverlay.prototype.getCursorPosition = function(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    return {'x': x, 'y': y};
}

PixelOverlay.prototype.destroy = function() {
    var canvas = document.getElementById('pixel-overlay');
    canvas.parentNode.removeChild(canvas);
}

PixelOverlay.prototype.open = function(e, callback) {
    var cords = this.getCursorPosition(this.canvas, e);
    var self = this;

    this.spawnCircle(cords.x, cords.y, 'random', [0,0,0,255])

    setTimeout(function() {
        self.spawnCircle(cords.x, cords.y, self.color, [0,0,0,255], callback)
    }, 100)
}

PixelOverlay.prototype.close = function(e, callback) {
    var cords = this.getCursorPosition(this.canvas, e);
    var self = this;

    this.spawnCircle(cords.x, cords.y, 'random', [0,0,0,0])

    setTimeout(function() {
        self.spawnCircle(cords.x, cords.y, 'clear', [0,0,0,0], callback)
    }, 100)
}


var overlay = new PixelOverlay();

document.getElementById("open").onclick = function(e) {
    e.preventDefault()
    overlay.init();
    overlay.open(e, function() {
        document.getElementById("close").className = 'message'
        document.getElementById("open").className = 'secret message'
    })

}

document.getElementById("close").onclick = function(e) {
    e.preventDefault()
    document.getElementById("close").className = 'secret message';
    overlay.close(e, function() {
        document.getElementById("open").className = 'message';
        overlay.destroy();
    })
}
