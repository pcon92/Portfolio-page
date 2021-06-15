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
tl1.from("#banking-application", {xPercent: -100})
    .from("#newsapp", {xPercent: 100})
    .from("#to-do-list", {xPercent: -100})
    .from("#user-info-from-api", {xPercent: 100})
    .from("#domain-api-tool", {xPercent: -100})

gsap.to("#color-circle", {duration: 1, repeat: -1, onRepeat: randomColorGenerator});

gsap.from("#color-circle", {opacity: 0, scale: 0.1, duration: 1.5});
gsap.from("#subtitle", {opacity: 0, duration: 1.5, ease: "power3.in"});

gsap.to("#color-circle", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=80%", scrub: true}, 
    x: `+=${circleRightDist}`,
});

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=70%", scrub: true},  
    x: `-=${navLeftDist}`});

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#animated-nav-bar", start: "top top", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    zIndex: 30, top: "0px"});

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
    snap: {snapTo: 1/5, delay: 0.25, duration: {min: 0.2, max: 1}},
    scrub: true,
    pin: true,
    anticipatePin: 1
})

function alertTwitter() {
    alert('Twitter account coming in the future');
}


// for moving title letters

let xdir = "";
let ydir = "";

let oldX = xdir;
let oldY = ydir;

let mouseDir = [];

document.addEventListener('mousemove', (e) => {
    mouseDir = mouseDirection(e.x, e.y)
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

