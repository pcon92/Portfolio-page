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
    {trigger: "#project-section-div", start: "top 35%", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    zIndex: 10, top: "0px"});

gsap.from("#contact-me-list", 
{scrollTrigger: 
        {trigger: "#contact-me-list", start: "bottom +=20%", end: "+=80%", scrub: true, overflow:"hidden"},  
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
    snap: {snapTo: 1/5, delay: 0.05, duration: {min: 0.2, max: 1}},
    scrub: true,
    pin: true,
    anticipatePin: 1
})

function alertTwitter() {
    alert('Twitter account coming in the future');
}

/* 

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
tl1.from("#to-do-list", {xPercent: -100})
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
    {trigger: "#project-section-div", start: "top 35%", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    zIndex: 10, top: "0px"});

gsap.from("#contact-me-list", 
{scrollTrigger: 
        {trigger: "#contact-me-list", start: "bottom +=20%", end: "+=80%", scrub: true, overflow:"hidden"},  
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
    snap: {snapTo: 1/3, delay: 0.05, duration: {min: 0.2, max: 1}},
    scrub: true,
    pin: true,
    anticipatePin: 1
})

function alertTwitter() {
    alert('Twitter account coming in the future');
}

*/