// To allow proper animation distances on any device width - recalculate on window resize
let navLeftDist = (document.documentElement.clientWidth / 2) - (document.getElementById("animated-nav-bar").offsetWidth / 2);
let circleRightDist = (document.documentElement.clientWidth / 2) + (document.getElementById("animated-nav-bar").offsetWidth / 2);
let circleLeftDist = (document.documentElement.clientWidth / 2) + (document.getElementById("animated-nav-bar").offsetWidth / 2);

// Create and call function for random colors in circles
function randomColorGenerator() {
    let rgb1 = Math.floor(256*Math.random()-1);
    let rgb2 = Math.floor(256*Math.random()-1);
    let rgb3 = Math.floor(256*Math.random()-1);
    let alpha = Math.random().toFixed(1);
    let randomColor = `rgba(${rgb1}, ${rgb2}, ${rgb3}, ${alpha})`;
    document.getElementById("color-circle").style.backgroundColor = randomColor;
    document.getElementById("color-circle-2").style.backgroundColor = randomColor;
}


// GSAP animations //

gsap.to("#color-circle", {duration: 1, repeat: -1, onRepeat: randomColorGenerator});

gsap.from("#color-circle", {opacity: 0, scale: 0.1, duration: 1.5});

gsap.from("#subtitle", {opacity: 0, duration: 1.5, ease: "power3.in"});

gsap.to(".title-letter", {transform: "translateX(10px)", 
    duration: 0.2,
    repeat: -1,
    stagger: 0.2, 
    yoyo: true});

ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange" // no resize to prevent refresh on chrome android
});


gsap.to("#color-circle", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=80%", scrub: true}, 
    x: `+=${circleRightDist}`,
});

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=70%", scrub: true},  
    x: `-=${navLeftDist - 8}`}); // 8 for pixel margin from left (same as next scrollTrigger margin from top
                                 // under start: "top 8px")

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#animated-nav-bar", start: "top 8px", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    zIndex: 100});

gsap.to("#click-a-side-tip", 
{scrollTrigger: 
    {trigger: ".project-cube", start: "top center"},  
    opacity: 1,
    duration: 3
});

gsap.from(".left, .top, .right, .bottom, .front, .back", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: "top center", once: true}, 
    translateZ: "200",
    rotateZ: "180",
    backgroundImage: "none",
    backgroundColor: "black",
    duration: 1
});
    
gsap.from("#color-circle-2", 
{scrollTrigger: 
        {trigger: "#project-section-div", start: "top", end: "+=100%", scrub: true, overflow:"hidden"},  
        x: `-=${circleLeftDist}`});

const TITLE_NAME_DIV = document.getElementById("title-name-div");

// for moving title letters

let xDir = "";
let yDir = "";

let oldX = xDir;
let oldY = yDir;

let mouseDir = [];
let currentMousePos = [];

document.addEventListener('mousemove', (e) => {
    mouseDir = mouseDirection(e.x, e.y)
    currentMousePos = [e.x, e.y];
    let modValues = gettingCloser(); // for hover area
    TITLE_NAME_DIV.style.borderBottom = `2px solid rgba(255, 0, 0, ${1-modValues.reduce((acc, cumul) => acc + cumul)})`;
});

function mouseDirection(x, y) {

    let mouseDirection = ["","","",""];

    x > oldX 
    ? mouseDirection[0] = 1 // right
    : mouseDirection[0] = -1; // left

    y > oldY
    ? mouseDirection[1] = 1 // down
    : mouseDirection[1] = -1; // up

    oldX = x;
    oldY = y;

    mouseDirection[2] = x; // current mouse x
    mouseDirection[3] = y;  // current mouse y

    return mouseDirection;
    
}

const TITLE_LETTERS = document.getElementsByClassName("title-letter");
const TITLE_LETTERS_ARRAY = [...TITLE_LETTERS];

function letterGoBack() {
    for (letter in TITLE_LETTERS_ARRAY) {
        TITLE_LETTERS[letter].style.transition = "transform 0.5s"; 
        TITLE_LETTERS[letter].style.transform = `translateX(0px) translateY(0px)`;
    };
}

TITLE_LETTERS[0].addEventListener('mouseover', () => {
    TITLE_LETTERS[0].style.transition = "transform 0.1s ease-out"; 
    TITLE_LETTERS[0].style.transform = `translateX(${(mouseDir[2]/10)*mouseDir[0]}px) translateY(${(mouseDir[3]/20)*mouseDir[1]}px)`;
    setTimeout(letterGoBack, 300);
})

TITLE_LETTERS[1].addEventListener('mouseover', () => {
    TITLE_LETTERS[1].style.transition = "transform 0.1s ease-out"; 
    TITLE_LETTERS[1].style.transform = `translateX(${(mouseDir[2]/10)*mouseDir[0]}px) translateY(${(mouseDir[3]/20)*mouseDir[1]}px)`;
    setTimeout(letterGoBack, 300);
})

TITLE_LETTERS[2].addEventListener('mouseover', () => {
    TITLE_LETTERS[2].style.transition = "transform 0.1s ease-out"; 
    TITLE_LETTERS[2].style.transform = `translateX(${(mouseDir[2]/10)*mouseDir[0]}px) translateY(${(mouseDir[3]/20)*mouseDir[1]}px)`;
    setTimeout(letterGoBack, 300);
})

TITLE_LETTERS[3].addEventListener('mouseover', () => {
    TITLE_LETTERS[3].style.transition = "transform 0.1s ease-out"; 
    TITLE_LETTERS[3].style.transform = `translateX(${(mouseDir[2]/10)*mouseDir[0]}px) translateY(${(mouseDir[3]/20)*mouseDir[1]}px)`;
    setTimeout(letterGoBack, 300);
})

TITLE_LETTERS[4].addEventListener('mouseover', () => {
    TITLE_LETTERS[4].style.transition = "transform 0.1s ease-out"; 
    TITLE_LETTERS[4].style.transform = `translateX(${(mouseDir[2]/10)*mouseDir[0]}px) translateY(${(mouseDir[3]/20)*mouseDir[1]}px)`;
    setTimeout(letterGoBack, 300);
})


// for red border under title
const TITLE_CONTAINER = document.getElementById("title-name-div").getBoundingClientRect();

const TITLE_CONTAINER_CENTER = [TITLE_CONTAINER.x + (TITLE_CONTAINER.width/2), 
    TITLE_CONTAINER.y + (TITLE_CONTAINER.height/2)];

function gettingCloser() {
    let closerX = TITLE_CONTAINER_CENTER[0] - currentMousePos[0];
    let closerY = TITLE_CONTAINER_CENTER[1] - currentMousePos[1];

    let howClose = [Math.abs(closerX)/1000 , Math.abs(closerY)/500]

    return howClose;
}


// for project cube

let rotationX = 0;
let rotationY = 0;

document.getElementById("turn-right").addEventListener('click', () => {
    rotationY += 90;
    document.getElementById("project-cube").style.transform = `rotateY(${rotationY}deg)`;
    showFaceInfoY();
});
document.getElementById("turn-left").addEventListener('click', () => {
    rotationY -= 90;
    document.getElementById("project-cube").style.transform = `rotateY(${rotationY}deg)`;
    showFaceInfoY();
});
document.getElementById("turn-up").addEventListener('click', () => {
    rotationX += 90;
    document.getElementById("project-cube").style.transform = `rotateX(${rotationX}deg)`;
    showFaceInfoX();
});
document.getElementById("turn-down").addEventListener('click', () => {
    rotationX -= 90;
    document.getElementById("project-cube").style.transform = `rotateX(${rotationX}deg)`;
    showFaceInfoX();
});


function showFaceInfoY () {
    if (rotationY > 180) {
        rotationY -= 180;
        rotationY *= -1;
    }
    if (rotationY < -180) {
        rotationY += 180;
        rotationY *= -1;
    }
    switch (rotationY) {
        case 0:
            bankingApplication();
            break;
        case 90:
            domainApiTool();
            break;
        case -90:
            newsapiApp();
            break;
        case 180:
            bankingApplication();
            break;
        case -180:
            bankingApplication();
            break;
    }
}


function showFaceInfoX () {
    if (rotationX > 180) {
        rotationX -= 180;
        rotationX *= -1;
    }
    if (rotationX < -180) {
        rotationX += 180;
        rotationX *= -1;
    }
    switch (rotationX) {
        case 0:
            bankingApplication();
            break;
        case 90:
            userInfoFromApi();
            break;
        case -90:
            toDoList();
            break;
        case 180:
            bankingApplication();
            break;
        case -180:
            bankingApplication();
            break;
    }
}


const TIP = document.getElementById("click-a-side-tip");

function hideTip() {
    TIP.style.visibility = "hidden";
}

const TITLE_BANKING_APPLICATION = document.getElementById("project-title-banking-application");
const SUBTITLE_BANKING_APPLICATION = document.getElementById("project-subtitle-banking-application");
const INFO_BANKING_APPLICATION = document.getElementById("project-info-banking-application");

const TITLE_NEWS_API_APP = document.getElementById("project-title-newsapi-app");
const SUBTITLE_NEWS_API_APP = document.getElementById("project-subtitle-newsapi-app");
const INFO_NEWS_API_APP = document.getElementById("project-info-newsapi-app");

const TITLE_TO_DO_LIST = document.getElementById("project-title-to-do-list");
const SUBTITLE_TO_DO_LIST = document.getElementById("project-subtitle-to-do-list");
const INFO_TO_DO_LIST = document.getElementById("project-info-to-do-list");

const TITLE_USER_INFO_FROM_API = document.getElementById("project-title-user-info-from-api");
const SUBTITLE_USER_INFO_FROM_API = document.getElementById("project-subtitle-user-info-from-api");
const INFO_USER_INFO_FROM_API = document.getElementById("project-info-user-info-from-api");

const TITLE_DOMAIN_API_TOOL = document.getElementById("project-title-domain-api-tool");
const SUBTITLE_DOMAIN_API_TOOL = document.getElementById("project-subtitle-domain-api-tool");
const INFO_DOMAIN_API_TOOL = document.getElementById("project-info-domain-api-tool");


function showTurnArrows() {
    document.getElementById("turn-left").style.visibility = "visible";
    document.getElementById("turn-up").style.visibility = "visible";
    document.getElementById("turn-down").style.visibility = "visible";
    document.getElementById("turn-right").style.visibility = "visible";
}


function bankingApplication() {

    hideTip();
    showTurnArrows();

    TITLE_BANKING_APPLICATION.style.visibility = "visible";
    TITLE_BANKING_APPLICATION.style.opacity = 1;
    SUBTITLE_BANKING_APPLICATION.style.visibility = "visible";
    SUBTITLE_BANKING_APPLICATION.style.opacity = 1;
    INFO_BANKING_APPLICATION.style.visibility = "visible";
    INFO_BANKING_APPLICATION.style.opacity = 1;

    TITLE_NEWS_API_APP.style.visibility = "hidden";
    TITLE_NEWS_API_APP.style.opacity = 0;
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    SUBTITLE_NEWS_API_APP.style.opacity = 0;
    INFO_NEWS_API_APP.style.visibility = "hidden";
    INFO_NEWS_API_APP.style.opacity = 0;

    TITLE_TO_DO_LIST.style.visibility = "hidden";
    TITLE_TO_DO_LIST.style.opacity = 0;
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    SUBTITLE_TO_DO_LIST.style.opacity = 0;
    INFO_TO_DO_LIST.style.visibility = "hidden";
    INFO_TO_DO_LIST.style.opacity = 0;

    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    TITLE_USER_INFO_FROM_API.style.opacity = 0;
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    SUBTITLE_USER_INFO_FROM_API.style.opacity = 0;
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";
    INFO_USER_INFO_FROM_API.style.opacity = 0;

    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    TITLE_DOMAIN_API_TOOL.style.opacity = 0;
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    SUBTITLE_DOMAIN_API_TOOL.style.opacity = 0;
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";
    INFO_DOMAIN_API_TOOL.style.opacity = 0;

}


function newsapiApp() {

    hideTip();

    
    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    TITLE_BANKING_APPLICATION.style.opacity = 0;
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    SUBTITLE_BANKING_APPLICATION.style.opacity = 0;
    INFO_BANKING_APPLICATION.style.visibility = "hidden";
    INFO_BANKING_APPLICATION.style.opacity = 0;

    TITLE_NEWS_API_APP.style.visibility = "visible";
    TITLE_NEWS_API_APP.style.opacity = 1;
    SUBTITLE_NEWS_API_APP.style.visibility = "visible";
    SUBTITLE_NEWS_API_APP.style.opacity = 1;
    INFO_NEWS_API_APP.style.visibility = "visible";
    INFO_NEWS_API_APP.style.opacity = 1;

    TITLE_TO_DO_LIST.style.visibility = "hidden";
    TITLE_TO_DO_LIST.style.opacity = 0;
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    SUBTITLE_TO_DO_LIST.style.opacity = 0;
    INFO_TO_DO_LIST.style.visibility = "hidden";
    INFO_TO_DO_LIST.style.opacity = 0;

    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    TITLE_USER_INFO_FROM_API.style.opacity = 0;
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    SUBTITLE_USER_INFO_FROM_API.style.opacity = 0;
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";
    INFO_USER_INFO_FROM_API.style.opacity = 0;

    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    TITLE_DOMAIN_API_TOOL.style.opacity = 0;
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    SUBTITLE_DOMAIN_API_TOOL.style.opacity = 0;
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";
    INFO_DOMAIN_API_TOOL.style.opacity = 0;

}


function toDoList() {
    
    hideTip();

    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    TITLE_BANKING_APPLICATION.style.opacity = 0;
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    SUBTITLE_BANKING_APPLICATION.style.opacity = 0;
    INFO_BANKING_APPLICATION.style.visibility = "hidden";
    INFO_BANKING_APPLICATION.style.opacity = 0;

    TITLE_NEWS_API_APP.style.visibility = "hidden";
    TITLE_NEWS_API_APP.style.opacity = 0;
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    SUBTITLE_NEWS_API_APP.style.opacity = 0;
    INFO_NEWS_API_APP.style.visibility = "hidden";
    INFO_NEWS_API_APP.style.opacity = 0;

    TITLE_TO_DO_LIST.style.visibility = "visible";
    TITLE_TO_DO_LIST.style.opacity = 1;
    SUBTITLE_TO_DO_LIST.style.visibility = "visible";
    SUBTITLE_TO_DO_LIST.style.opacity = 1;
    INFO_TO_DO_LIST.style.visibility = "visible";
    INFO_TO_DO_LIST.style.opacity = 1;

    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    TITLE_USER_INFO_FROM_API.style.opacity = 0;
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    SUBTITLE_USER_INFO_FROM_API.style.opacity = 0;
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";
    INFO_USER_INFO_FROM_API.style.opacity = 0;

    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    TITLE_DOMAIN_API_TOOL.style.opacity = 0;
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    SUBTITLE_DOMAIN_API_TOOL.style.opacity = 0;
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";
    INFO_DOMAIN_API_TOOL.style.opacity = 0;

}


function userInfoFromApi() {

    hideTip();

    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    TITLE_BANKING_APPLICATION.style.opacity = 0;
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    SUBTITLE_BANKING_APPLICATION.style.opacity = 0;
    INFO_BANKING_APPLICATION.style.visibility = "hidden";
    INFO_BANKING_APPLICATION.style.opacity = 0;

    TITLE_NEWS_API_APP.style.visibility = "hidden";
    TITLE_NEWS_API_APP.style.opacity = 0;
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    SUBTITLE_NEWS_API_APP.style.opacity = 0;
    INFO_NEWS_API_APP.style.visibility = "hidden";
    INFO_NEWS_API_APP.style.opacity = 0;

    TITLE_TO_DO_LIST.style.visibility = "hidden";
    TITLE_TO_DO_LIST.style.opacity = 0;
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    SUBTITLE_TO_DO_LIST.style.opacity = 0;
    INFO_TO_DO_LIST.style.visibility = "hidden";
    INFO_TO_DO_LIST.style.opacity = 0;

    TITLE_USER_INFO_FROM_API.style.visibility = "visible";
    TITLE_USER_INFO_FROM_API.style.opacity = 1;
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "visible";
    SUBTITLE_USER_INFO_FROM_API.style.opacity = 1;
    INFO_USER_INFO_FROM_API.style.visibility = "visible";
    INFO_USER_INFO_FROM_API.style.opacity = 1;

    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    TITLE_DOMAIN_API_TOOL.style.opacity = 0;
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    SUBTITLE_DOMAIN_API_TOOL.style.opacity = 0;
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";
    INFO_DOMAIN_API_TOOL.style.opacity = 0;

}


function domainApiTool() {

    hideTip();

    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    TITLE_BANKING_APPLICATION.style.opacity = 0;
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    SUBTITLE_BANKING_APPLICATION.style.opacity = 0;
    INFO_BANKING_APPLICATION.style.visibility = "hidden";
    INFO_BANKING_APPLICATION.style.opacity = 0;

    TITLE_NEWS_API_APP.style.visibility = "hidden";
    TITLE_NEWS_API_APP.style.opacity = 0;
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    SUBTITLE_NEWS_API_APP.style.opacity = 0;
    INFO_NEWS_API_APP.style.visibility = "hidden";
    INFO_NEWS_API_APP.style.opacity = 0;

    TITLE_TO_DO_LIST.style.visibility = "hidden";
    TITLE_TO_DO_LIST.style.opacity = 0;
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    SUBTITLE_TO_DO_LIST.style.opacity = 0;
    INFO_TO_DO_LIST.style.visibility = "hidden";
    INFO_TO_DO_LIST.style.opacity = 0;

    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    TITLE_USER_INFO_FROM_API.style.opacity = 0;
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    SUBTITLE_USER_INFO_FROM_API.style.opacity = 0;
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";
    INFO_USER_INFO_FROM_API.style.opacity = 0;

    TITLE_DOMAIN_API_TOOL.style.visibility = "visible";
    TITLE_DOMAIN_API_TOOL.style.opacity = 1;
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "visible";
    SUBTITLE_DOMAIN_API_TOOL.style.opacity = 1;
    INFO_DOMAIN_API_TOOL.style.visibility = "visible";
    INFO_DOMAIN_API_TOOL.style.opacity = 1;

}