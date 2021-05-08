
function randomColorGenerator() {
    let rgb1 = Math.floor(256*Math.random()-1);
    let rgb2 = Math.floor(256*Math.random()-1);
    let rgb3 = Math.floor(256*Math.random()-1);
    let randomColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    console.log(randomColor);
    return randomColor;
}

setInterval(randomColorGenerator, 1000);


// Create GSAP animation timelines
let tl1 = gsap.timeline({repeat: -1, yoyo: true, defaults: {ease: "sine"}});
tl1.to("#color-circle", {backgroundColor: "red", duration: 1})
.to("#color-circle", {backgroundColor: "orange", duration: 1})
.to("#color-circle", {backgroundColor: "yellow", duration: 1})
.to("#color-circle", {backgroundColor: "green", duration: 1})
.to("#color-circle", {backgroundColor: "blue", duration: 1})

let tl2 = gsap.timeline();
tl2.from("#to-do-list", {xPercent: -100})
    .from("#user-info-from-api", {xPercent: 100})
    .from("#domain-api-tool", {xPercent: -100})

gsap.from("#color-circle", {opacity: 0, scale: 0.1, duration: 1.5});

let tl3 = gsap.timeline({repeat: -1, yoyo: true, defaults: {ease: "sine"}});
tl3.to("#color-circle-2", {backgroundColor: "red", duration: 1})
.to("#color-circle-2", {backgroundColor: "orange", duration: 1})
.to("#color-circle-2", {backgroundColor: "yellow", duration: 1})
.to("#color-circle-2", {backgroundColor: "green", duration: 1})
.to("#color-circle-2", {backgroundColor: "blue", duration: 1})


// To allow proper animation distances on any device width
let navLeftDist = (document.documentElement.clientWidth / 2) - (document.getElementById("animated-nav-bar").offsetWidth / 2);
let circleRightDist = (document.documentElement.clientWidth / 2) + (document.getElementById("animated-nav-bar").offsetWidth / 2);
let circleLeftDist = (document.documentElement.clientWidth / 2) + (document.getElementById("animated-nav-bar").offsetWidth / 2);
let contactLinksDist = (document.documentElement.clientHeight / 2) - (document.getElementById("contact-me-list").offsetHeight / 2);

gsap.to("#color-circle", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=80%", scrub: true}, 
    x: `+=${circleRightDist}`,
})

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=70%", scrub: true},  
    x: `-=${navLeftDist}`})

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: "top 35%", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    zIndex: 10, top: "1px"})

gsap.from("#contact-me-list", 
{scrollTrigger: 
        {trigger: "#contact-me-list", start: "bottom +=20%", end: "+=80%", scrub: true, overflow:"hidden"},  
        y: `+=${contactLinksDist}`})

gsap.from("#color-circle-2", 
{scrollTrigger: 
        {trigger: "#contact-me-list", start: "bottom +=20%", end: "+=80%", scrub: true, overflow:"hidden"},  
        x: `-=${circleLeftDist}`})

// Different syntax to use scroll trigger for sliding project tiles with timeline 2 as practice
ScrollTrigger.create({
    animation: tl2,
    trigger: "#project-section-div",
    start: "top top",
    end: "+=2000",
    snap: {snapTo: 1/3, delay: 0.05, duration: {min: 0.2, max: 1}},
    scrub: true,
    pin: true,
    anticipatePin: 1
})


function alertTwitter() {
    alert('Twitter account coming in the future, for now please contact me through GitHub');
}

/* 

*/