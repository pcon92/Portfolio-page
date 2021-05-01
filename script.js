
// Create GSAP animation timelines
let tl1 = gsap.timeline();
tl1.from("#intro-page-img", {opacity: 0, scale: 0.1, duration: 1.5});

let tl2 = gsap.timeline();
tl2.from("#to-do-list", {xPercent: -100})
    .from("#user-info-from-api", {xPercent: 100})
    .from("#domain-api-tool", {xPercent: -100})

gsap.to("#intro-page-img", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=80%", scrub: true}, 
    x: "150%",
})

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: 0, end: "+=70%", scrub: true},  
    x: "-100%"})

gsap.to("#animated-nav-bar", 
{scrollTrigger: 
    {trigger: "#project-section-div", start: "top 34%", end: "+=350%", scrub: true, pin: "#animated-nav-bar"},  
    zIndex: 10})

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