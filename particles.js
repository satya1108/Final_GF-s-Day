/* ==========================================
        PARTICLE HEART EFFECT
========================================== */

const particleCanvas = document.createElement("canvas");
particleCanvas.id = "particleCanvas";

particleCanvas.style.position = "fixed";
particleCanvas.style.top = "0";
particleCanvas.style.left = "0";
particleCanvas.style.width = "100%";
particleCanvas.style.height = "100%";
particleCanvas.style.pointerEvents = "none";
particleCanvas.style.zIndex = "9999";

document.body.appendChild(particleCanvas);

const pctx = particleCanvas.getContext("2d");

function resizeParticleCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

resizeParticleCanvas();
window.addEventListener("resize", resizeParticleCanvas);

let particles = [];

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.size = Math.random() * 5 + 2;

        this.speedX = (Math.random() - 0.5) * 12;
        this.speedY = (Math.random() - 0.5) * 12;

        this.life = 150;

        this.color = color;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        this.speedY += 0.02;

        this.life--;

    }

    draw() {

        pctx.beginPath();

        pctx.fillStyle = this.color;

        pctx.shadowBlur = 20;
        pctx.shadowColor = this.color;

        pctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        pctx.fill();

    }

}

/* ==========================================
        CREATE EXPLOSION
========================================== */

function explodeHeart() {

    particles = [];

    const heart = document.querySelector(".heart");

    const rect = heart.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const colors = [

        "#ff1744",
        "#ff4d88",
        "#ff80ab",
        "#ffffff"

    ];

    for (let i = 0; i < 700; i++) {

        particles.push(

            new Particle(

                centerX,

                centerY,

                colors[Math.floor(Math.random() * colors.length)]

            )

        );

    }

    animateParticles();

}

/* ==========================================
        ANIMATION
========================================== */

function animateParticles() {

    pctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    particles.forEach((particle, index) => {

        particle.update();

        particle.draw();

        if (particle.life <= 0) {

            particles.splice(index, 1);

        }

    });

    if (particles.length > 0) {

        requestAnimationFrame(animateParticles);

    }

}

/* ==========================================
        FALLING ROSE PETALS
========================================== */

function createRose() {

    const rose = document.createElement("div");

    rose.innerHTML = "🌹";

    rose.style.position = "fixed";

    rose.style.left = Math.random() * 100 + "vw";

    rose.style.top = "-50px";

    rose.style.fontSize = (20 + Math.random() * 20) + "px";

    rose.style.pointerEvents = "none";

    rose.style.zIndex = "999";

    document.body.appendChild(rose);

    let y = -50;

    let rotate = Math.random() * 360;

    const speed = 1 + Math.random() * 2;

    function fall() {

        y += speed;

        rotate += 2;

        rose.style.top = y + "px";

        rose.style.transform =
            "rotate(" + rotate + "deg)";

        if (y < window.innerHeight + 100) {

            requestAnimationFrame(fall);

        } else {

            rose.remove();

        }

    }

    fall();

}

setInterval(createRose, 900);

/* ==========================================
        DIM SCREEN
========================================== */

function dimBackground() {

    document.body.style.transition = "1.5s";

    document.body.style.background = "#050505";

}

/* ==========================================
        CONNECT TO HEART
========================================== */

window.addEventListener("load", () => {

    const heart = document.getElementById("heartContainer");

    if (!heart) return;

    heart.addEventListener("click", () => {

        dimBackground();

        explodeHeart();

    });

});
