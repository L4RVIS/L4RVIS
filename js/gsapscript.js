gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);

gsap.to(".pos1", {
    x: 200,
    duration: 1,
    scrollTrigger:{
        trigger: ".pos1",
        start: "top 70%",
        end: "center 55%",
        markers: true,
    } 
})
