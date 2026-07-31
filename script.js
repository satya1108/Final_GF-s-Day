/* ==========================================
        LOVE WEBSITE - MAIN SCRIPT
========================================== */

window.onload = () => {

    // Hide loading screen after 5.5 seconds

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

            document.getElementById("main").style.display = "block";

            typeTitle();

        },1000);

    },5500);

};


/* ==========================================
        TITLE TYPEWRITER
========================================== */

const title =
"Happy Girlfriend's Day ❤️";

let titleIndex = 0;

function typeTitle(){

    const element = document.getElementById("title");

    if(titleIndex < title.length){

        element.innerHTML += title.charAt(titleIndex);

        titleIndex++;

        setTimeout(typeTitle,90);

    }

}


/* ==========================================
        START BUTTON
========================================== */

const startButton =
document.getElementById("startBtn");

startButton.addEventListener("click",()=>{

    document.getElementById("heartScene")
    .scrollIntoView({

        behavior:"smooth"

    });

});


/* ==========================================
        HEART CLICK
========================================== */

const heart =
document.getElementById("mainHeart");

heart.addEventListener("click",()=>{

    // Play Music

    const music =
    document.getElementById("bgMusic");

    music.play().catch(()=>{

        console.log("Music blocked until user interaction.");

    });

    // Extra Glow

    heart.style.transform="scale(1.2)";

    setTimeout(()=>{

        heart.style.transform="scale(1)";

    },400);

    // Scroll

    setTimeout(()=>{

        document.getElementById("letterSection")
        .scrollIntoView({

            behavior:"smooth"

        });

    },700);

    // Start Typewriter

    setTimeout(typeMessage,1700);

});


/* ==========================================
        TYPEWRITER MESSAGE
========================================== */

const message =`Happy Girlfriend's Day My Love! ❤️
Every heartbeat of mine whispers your name.
Thank you for coming into my life and making every ordinary day feel magical.
No matter how many sunsets we watch together,
I'll never get tired of looking at you.
You're my happiness,
My peace,
My safest place,
And my forever favorite person.
I don't know what tomorrow holds,
but I know I want every tomorrow with you.
I love you more than words can ever express.`;

let index = 0;

let typingStarted = false;

function typeMessage(){

    if(typingStarted) return;

    typingStarted = true;

    const element =
    document.getElementById("typewriter");

    function type(){

        if(index < message.length){

            element.innerHTML +=
            message.charAt(index);

            index++;

            setTimeout(type,40);

        }

    }

    type();

}


/* ==========================================
        FLOATING HEARTS
========================================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=
    (20+Math.random()*30)+"px";

    heart.style.opacity=".8";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let position = 100;

    const move = setInterval(()=>{

        position-=0.5;

        heart.style.top=
        position+"vh";

        if(position<-10){

            clearInterval(move);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,800);


/* ==========================================
        SHOOTING STAR
========================================== */

function shootingStar(){

    const star =
    document.createElement("div");

    star.style.position="fixed";

    star.style.width="3px";

    star.style.height="120px";

    star.style.background="white";

    star.style.left=
    Math.random()*window.innerWidth+"px";

    star.style.top="-150px";

    star.style.transform="rotate(45deg)";

    star.style.boxShadow="0 0 20px white";

    star.style.zIndex="100";

    document.body.appendChild(star);

    let y=-150;

    let x=parseInt(star.style.left);

    const move=setInterval(()=>{

        y+=15;

        x-=8;

        star.style.top=y+"px";

        star.style.left=x+"px";

        if(y>window.innerHeight+150){

            clearInterval(move);

            star.remove();

        }

    },20);

}

setInterval(shootingStar,5000);


/* ==========================================
        CURSOR GLOW
========================================== */

document.addEventListener("mousemove",(e)=>{

    let glow=document.getElementById("cursorGlow");

    if(!glow){

        glow=document.createElement("div");

        glow.id="cursorGlow";

        glow.style.position="fixed";

        glow.style.width="20px";

        glow.style.height="20px";

        glow.style.borderRadius="50%";

        glow.style.background="#ff2d75";

        glow.style.boxShadow=
        "0 0 30px #ff2d75";

        glow.style.pointerEvents="none";

        glow.style.zIndex="99999";

        document.body.appendChild(glow);

    }

    glow.style.left=e.clientX-10+"px";

    glow.style.top=e.clientY-10+"px";

});


/* ==========================================
        END
========================================== */
