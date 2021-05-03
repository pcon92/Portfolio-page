
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


// To allow nav bar to hit left of screen on any device width
let navLeftDist = (document.documentElement.clientWidth / 2) - (document.getElementById("animated-nav-bar").offsetWidth / 2);


gsap.to("#color-circle", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=80%", scrub: true}, 
    x: "150%",
})

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=70%", scrub: true},  
    x: `-=${navLeftDist}`})

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: "top 35%", end: "+=500%", scrub: true, pin: "#animated-nav-bar", overflow:"hidden"},  
    zIndex: 10, top: "1px"})

// Different syntax to use scroll trigger for sliding project tiles with timeline 2
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