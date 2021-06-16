// To allow proper animation distances on any device width - recalculate on window resize
let navLeftDist = (document.documentElement.clientWidth / 2) - (document.getElementById("animated-nav-bar").offsetWidth / 2);
let circleRightDist = (document.documentElement.clientWidth / 2) + (document.getElementById("animated-nav-bar").offsetWidth / 2);
let circleLeftDist = (document.documentElement.clientWidth / 2) + (document.getElementById("animated-nav-bar").offsetWidth / 2);
let contactLinksDist = (document.documentElement.clientHeight / 2) - (document.getElementById("contact-me-list").offsetHeight / 2);

window.addEventListener("resize", () => {
    location.reload();
  });


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
let tl1 = gsap.timeline();
tl1.from("#project-cube-page", {xPercent: -100})

gsap.to("#color-circle", {duration: 1, repeat: -1, onRepeat: randomColorGenerator});

gsap.to(".title-letter", {transform: "translateX(10px)", 
    duration: 0.2,
    repeat: -1,
    stagger: 0.2, 
    yoyo: true});


gsap.from("#color-circle", {opacity: 0, scale: 0.1, duration: 1.5});

gsap.from("#subtitle", {opacity: 0, duration: 1.5, ease: "power3.in"});

gsap.to("#color-circle", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=80%", scrub: true}, 
    x: `+=${circleRightDist}`,
});

gsap.to(".project-cube", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: "top", end: "+=150%"},  
    rotateY: 180,
    scrub: true
    });

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=70%", scrub: true},  
    x: `-=${navLeftDist}`});

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#animated-nav-bar", start: "top top", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    top: "0px"});

gsap.to("#project-tile-intro-info", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: "top +=30%", end: "+=29%", scrub: true},  
    opacity: 1});

gsap.from("#contact-me-list", 
{scrollTrigger: 
        {trigger: "#title-contact-me", start: "bottom", end: "+=100%", scrub: true, overflow:"hidden"},  
        y: `+=${contactLinksDist}`});

gsap.from("#color-circle-2", 
{scrollTrigger: 
        {trigger: "#contact-me-list", start: "bottom +=20%", end: "+=80%", scrub: true, overflow:"hidden"},  
        x: `-=${circleLeftDist}`});

// Different syntax to use scroll trigger for sliding project tiles with timeline 1 as practice
ScrollTrigger.create({
    animation: tl1,
    trigger: "#project-section-div",
    start: "top top",
    end: "+=2000",
    snap: {snapTo: 1, delay: 0.25, duration: {min: 0.2, max: 1}},
    scrub: true,
    pin: true,
    anticipatePin: 1
})

function alertTwitter() {
    alert('Twitter account coming in the future');
}




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

let rotation = 0;

document.getElementById("turn-right").addEventListener('click', () => {
    rotation += 90;
    document.getElementById("project-cube").style.transform = `rotateY(${rotation}deg)`;
});
document.getElementById("turn-left").addEventListener('click', () => {
    rotation -= 90;
    document.getElementById("project-cube").style.transform = `rotateY(${rotation}deg)`;
});
document.getElementById("turn-up").addEventListener('click', () => {
    rotation += 90;
    document.getElementById("project-cube").style.transform = `rotateX(${rotation}deg)`;
});
document.getElementById("turn-down").addEventListener('click', () => {
    rotation -= 90;
    document.getElementById("project-cube").style.transform = `rotateX(${rotation}deg)`;
});


const TIP = document.getElementById("click-a-side-tip");

function hideTip() {
    TIP.style.visibility = "hidden";
}

function bankingApplication() {

    hideTip();

    const TITLE_DEFAULT = document.getElementById("project-title");
    TITLE_DEFAULT.style.visibility = "hidden";
    const SUBTITLE_DEFAULT = document.getElementById("project-subtitle");
    SUBTITLE_DEFAULT.style.visibility = "hidden";
    const INFO_DEFAULT = document.getElementById("project-info");
    INFO_DEFAULT.style.visibility = "hidden";

    const TITLE_BANKING_APPLICATION = document.getElementById("project-title-banking-application");
    TITLE_BANKING_APPLICATION.style.visibility = "visible";
    const SUBTITLE_BANKING_APPLICATION = document.getElementById("project-subtitle-banking-application");
    SUBTITLE_BANKING_APPLICATION.style.visibility = "visible";
    const INFO_BANKING_APPLICATION = document.getElementById("project-info-banking-application");
    INFO_BANKING_APPLICATION.style.visibility = "visible";

    const TITLE_NEWS_API_APP = document.getElementById("project-title-newsapi-app");
    TITLE_NEWS_API_APP.style.visibility = "hidden";
    const SUBTITLE_NEWS_API_APP = document.getElementById("project-subtitle-newsapi-app");
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    const INFO_NEWS_API_APP = document.getElementById("project-info-newsapi-app");
    INFO_NEWS_API_APP.style.visibility = "hidden";

    const TITLE_TO_DO_LIST = document.getElementById("project-title-to-do-list");
    TITLE_TO_DO_LIST.style.visibility = "hidden";
    const SUBTITLE_TO_DO_LIST = document.getElementById("project-subtitle-to-do-list");
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    const INFO_TO_DO_LIST = document.getElementById("project-info-to-do-list");
    INFO_TO_DO_LIST.style.visibility = "hidden";

    const TITLE_USER_INFO_FROM_API = document.getElementById("project-title-user-info-from-api");
    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const SUBTITLE_USER_INFO_FROM_API = document.getElementById("project-subtitle-user-info-from-api");
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const INFO_USER_INFO_FROM_API = document.getElementById("project-info-user-info-from-api");
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";

    const TITLE_DOMAIN_API_TOOL = document.getElementById("project-title-domain-api-tool");
    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const SUBTITLE_DOMAIN_API_TOOL = document.getElementById("project-subtitle-domain-api-tool");
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const INFO_DOMAIN_API_TOOL = document.getElementById("project-info-domain-api-tool");
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";

}


function newsapiApp() {

    hideTip();

    const TITLE_DEFAULT = document.getElementById("project-title");
    TITLE_DEFAULT.style.visibility = "hidden";
    const SUBTITLE_DEFAULT = document.getElementById("project-subtitle");
    SUBTITLE_DEFAULT.style.visibility = "hidden";
    const INFO_DEFAULT = document.getElementById("project-info");
    INFO_DEFAULT.style.visibility = "hidden";

    const TITLE_BANKING_APPLICATION = document.getElementById("project-title-banking-application");
    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const SUBTITLE_BANKING_APPLICATION = document.getElementById("project-subtitle-banking-application");
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const INFO_BANKING_APPLICATION = document.getElementById("project-info-banking-application");
    INFO_BANKING_APPLICATION.style.visibility = "hidden";

    const TITLE_NEWS_API_APP = document.getElementById("project-title-newsapi-app");
    TITLE_NEWS_API_APP.style.visibility = "visible";
    const SUBTITLE_NEWS_API_APP = document.getElementById("project-subtitle-newsapi-app");
    SUBTITLE_NEWS_API_APP.style.visibility = "visible";
    const INFO_NEWS_API_APP = document.getElementById("project-info-newsapi-app");
    INFO_NEWS_API_APP.style.visibility = "visible";

    const TITLE_TO_DO_LIST = document.getElementById("project-title-to-do-list");
    TITLE_TO_DO_LIST.style.visibility = "hidden";
    const SUBTITLE_TO_DO_LIST = document.getElementById("project-subtitle-to-do-list");
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    const INFO_TO_DO_LIST = document.getElementById("project-info-to-do-list");
    INFO_TO_DO_LIST.style.visibility = "hidden";

    const TITLE_USER_INFO_FROM_API = document.getElementById("project-title-user-info-from-api");
    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const SUBTITLE_USER_INFO_FROM_API = document.getElementById("project-subtitle-user-info-from-api");
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const INFO_USER_INFO_FROM_API = document.getElementById("project-info-user-info-from-api");
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";

    const TITLE_DOMAIN_API_TOOL = document.getElementById("project-title-domain-api-tool");
    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const SUBTITLE_DOMAIN_API_TOOL = document.getElementById("project-subtitle-domain-api-tool");
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const INFO_DOMAIN_API_TOOL = document.getElementById("project-info-domain-api-tool");
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";

}


function toDoList() {
    
    hideTip();

    const TITLE_DEFAULT = document.getElementById("project-title");
    TITLE_DEFAULT.style.visibility = "hidden";
    const SUBTITLE_DEFAULT = document.getElementById("project-subtitle");
    SUBTITLE_DEFAULT.style.visibility = "hidden";
    const INFO_DEFAULT = document.getElementById("project-info");
    INFO_DEFAULT.style.visibility = "hidden";

    const TITLE_BANKING_APPLICATION = document.getElementById("project-title-banking-application");
    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const SUBTITLE_BANKING_APPLICATION = document.getElementById("project-subtitle-banking-application");
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const INFO_BANKING_APPLICATION = document.getElementById("project-info-banking-application");
    INFO_BANKING_APPLICATION.style.visibility = "hidden";

    const TITLE_NEWS_API_APP = document.getElementById("project-title-newsapi-app");
    TITLE_NEWS_API_APP.style.visibility = "hidden";
    const SUBTITLE_NEWS_API_APP = document.getElementById("project-subtitle-newsapi-app");
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    const INFO_NEWS_API_APP = document.getElementById("project-info-newsapi-app");
    INFO_NEWS_API_APP.style.visibility = "hidden";

    const TITLE_TO_DO_LIST = document.getElementById("project-title-to-do-list");
    TITLE_TO_DO_LIST.style.visibility = "visible";
    const SUBTITLE_TO_DO_LIST = document.getElementById("project-subtitle-to-do-list");
    SUBTITLE_TO_DO_LIST.style.visibility = "visible";
    const INFO_TO_DO_LIST = document.getElementById("project-info-to-do-list");
    INFO_TO_DO_LIST.style.visibility = "visible";

    const TITLE_USER_INFO_FROM_API = document.getElementById("project-title-user-info-from-api");
    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const SUBTITLE_USER_INFO_FROM_API = document.getElementById("project-subtitle-user-info-from-api");
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const INFO_USER_INFO_FROM_API = document.getElementById("project-info-user-info-from-api");
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";

    const TITLE_DOMAIN_API_TOOL = document.getElementById("project-title-domain-api-tool");
    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const SUBTITLE_DOMAIN_API_TOOL = document.getElementById("project-subtitle-domain-api-tool");
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const INFO_DOMAIN_API_TOOL = document.getElementById("project-info-domain-api-tool");
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";

}


function userInfoFromApi() {

    hideTip();

    const TITLE_DEFAULT = document.getElementById("project-title");
    TITLE_DEFAULT.style.visibility = "hidden";
    const SUBTITLE_DEFAULT = document.getElementById("project-subtitle");
    SUBTITLE_DEFAULT.style.visibility = "hidden";
    const INFO_DEFAULT = document.getElementById("project-info");
    INFO_DEFAULT.style.visibility = "hidden";

    const TITLE_BANKING_APPLICATION = document.getElementById("project-title-banking-application");
    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const SUBTITLE_BANKING_APPLICATION = document.getElementById("project-subtitle-banking-application");
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const INFO_BANKING_APPLICATION = document.getElementById("project-info-banking-application");
    INFO_BANKING_APPLICATION.style.visibility = "hidden";

    const TITLE_NEWS_API_APP = document.getElementById("project-title-newsapi-app");
    TITLE_NEWS_API_APP.style.visibility = "hidden";
    const SUBTITLE_NEWS_API_APP = document.getElementById("project-subtitle-newsapi-app");
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    const INFO_NEWS_API_APP = document.getElementById("project-info-newsapi-app");
    INFO_NEWS_API_APP.style.visibility = "hidden";

    const TITLE_TO_DO_LIST = document.getElementById("project-title-to-do-list");
    TITLE_TO_DO_LIST.style.visibility = "hidden";
    const SUBTITLE_TO_DO_LIST = document.getElementById("project-subtitle-to-do-list");
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    const INFO_TO_DO_LIST = document.getElementById("project-info-to-do-list");
    INFO_TO_DO_LIST.style.visibility = "hidden";

    const TITLE_USER_INFO_FROM_API = document.getElementById("project-title-user-info-from-api");
    TITLE_USER_INFO_FROM_API.style.visibility = "visible";
    const SUBTITLE_USER_INFO_FROM_API = document.getElementById("project-subtitle-user-info-from-api");
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "visible";
    const INFO_USER_INFO_FROM_API = document.getElementById("project-info-user-info-from-api");
    INFO_USER_INFO_FROM_API.style.visibility = "visible";

    const TITLE_DOMAIN_API_TOOL = document.getElementById("project-title-domain-api-tool");
    TITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const SUBTITLE_DOMAIN_API_TOOL = document.getElementById("project-subtitle-domain-api-tool");
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "hidden";
    const INFO_DOMAIN_API_TOOL = document.getElementById("project-info-domain-api-tool");
    INFO_DOMAIN_API_TOOL.style.visibility = "hidden";

}


function domainApiTool() {

    hideTip();

    const TITLE_DEFAULT = document.getElementById("project-title");
    TITLE_DEFAULT.style.visibility = "hidden";
    const SUBTITLE_DEFAULT = document.getElementById("project-subtitle");
    SUBTITLE_DEFAULT.style.visibility = "hidden";
    const INFO_DEFAULT = document.getElementById("project-info");
    INFO_DEFAULT.style.visibility = "hidden";

    const TITLE_BANKING_APPLICATION = document.getElementById("project-title-banking-application");
    TITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const SUBTITLE_BANKING_APPLICATION = document.getElementById("project-subtitle-banking-application");
    SUBTITLE_BANKING_APPLICATION.style.visibility = "hidden";
    const INFO_BANKING_APPLICATION = document.getElementById("project-info-banking-application");
    INFO_BANKING_APPLICATION.style.visibility = "hidden";

    const TITLE_NEWS_API_APP = document.getElementById("project-title-newsapi-app");
    TITLE_NEWS_API_APP.style.visibility = "hidden";
    const SUBTITLE_NEWS_API_APP = document.getElementById("project-subtitle-newsapi-app");
    SUBTITLE_NEWS_API_APP.style.visibility = "hidden";
    const INFO_NEWS_API_APP = document.getElementById("project-info-newsapi-app");
    INFO_NEWS_API_APP.style.visibility = "hidden";

    const TITLE_TO_DO_LIST = document.getElementById("project-title-to-do-list");
    TITLE_TO_DO_LIST.style.visibility = "hidden";
    const SUBTITLE_TO_DO_LIST = document.getElementById("project-subtitle-to-do-list");
    SUBTITLE_TO_DO_LIST.style.visibility = "hidden";
    const INFO_TO_DO_LIST = document.getElementById("project-info-to-do-list");
    INFO_TO_DO_LIST.style.visibility = "hidden";

    const TITLE_USER_INFO_FROM_API = document.getElementById("project-title-user-info-from-api");
    TITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const SUBTITLE_USER_INFO_FROM_API = document.getElementById("project-subtitle-user-info-from-api");
    SUBTITLE_USER_INFO_FROM_API.style.visibility = "hidden";
    const INFO_USER_INFO_FROM_API = document.getElementById("project-info-user-info-from-api");
    INFO_USER_INFO_FROM_API.style.visibility = "hidden";

    const TITLE_DOMAIN_API_TOOL = document.getElementById("project-title-domain-api-tool");
    TITLE_DOMAIN_API_TOOL.style.visibility = "visible";
    const SUBTITLE_DOMAIN_API_TOOL = document.getElementById("project-subtitle-domain-api-tool");
    SUBTITLE_DOMAIN_API_TOOL.style.visibility = "visible";
    const INFO_DOMAIN_API_TOOL = document.getElementById("project-info-domain-api-tool");
    INFO_DOMAIN_API_TOOL.style.visibility = "visible";

}