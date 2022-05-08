console.clear();

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.defaults({ease: "none"});

gsap.set(".ball", {
    yPercent: -50,
    xPercent: -50,
    transformOrigin: "50% 50%"
  });

const pulses = gsap.timeline({
  defaults: {
    duration: 0.05, 
    autoAlpha: 1, 
    scale: 2, 
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1)"
  }})
// .to(".ball02, .text01", {}, 0.2) 
// .to(".ball03, .text02", {}, 0.33)
// .to(".ball04, .text03", {}, 0.46)

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top 100",
    end: "bottom center",
    ease: "elastic(2.5, 1)"
    // end: "+=1000"
   
  }})
.to(".ball", {duration: 0.01, autoAlpha: 1})
//.from(".theLine", {drawSVG: 0}, 0)
.to(".ball" , {motionPath: {
  path: ".theLine", 
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);

// main
//  .to(".ball", { duration: 1, backgroundColor: '#FF0000', ease: "none" }, 0)
//  .to(".ball", { duration: 1, backgroundColor: '#0000FF', ease: "none" }, 1)


var tl = new TimelineMax({repeat: -1,}),
    bubble = document.querySelector('.ball02 .ball03'),
    bubblePulse = document.querySelector('.ball01');

  
// tl.to(bubble, 0.4, {
//   scale: 0.8,
//   //ease: Back.easeOut.config(1.7),
// })     
tl.to(
  bubblePulse,
  0.2, 
  {
    scale: 0.9,
    opacity: 1,
  },
 '-=0.6' 
)

this.tl.to(bubble, 1, {
  scale: 1,
//   ease: Elastic.easeOut.config(2.5, 0.1),
  ease: "bounce.out"
})
this.tl.to(
  bubblePulse,
  1.5,
  {
    yoyo: true,
    scale: 2,
    opacity: 0,
    ease: Expo.easeOut,
    stagger: 0.1
    // ease: "bounce.out"
  },'-=1.2'
)

// console.clear();
// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
// gsap.defaults({ease: "none"});

// gsap.set(".ball", {
//     yPercent: -50,
//     xPercent: -50,
//     transformOrigin: "50% 50%"
//   });
 
//   gsap.to(".ball02", 0.6, {
//     scale:1.12,
//     repeat:-1,
//     yoyo: true,
//     ease: Power0.easeNone,
//   });
//   gsap.to(".ball03", 0.5, {
//     scale:1.22,
//     repeat:-1,
//     yoyo: true,
//     ease: Power0.easeNone,
//   });
//   gsap.to(".ball04", 0.7, {
//     scale:1.52,
//     repeat:-1,
//     yoyo: true,
//     ease: Power0.easeNone,
//   });

// const pulses = gsap.timeline({
//   defaults: {
//     duration: 0.05, 
//     autoAlpha: 1, 
//     scale: 1, 
//     // transformOrigin: 'center', 
//     ease: "elastic(2.5, 1)"
//   }})
// // .to(".ball02, .text01", {}, 0.012) 
// // .to(".ball01, .text02", {}, 0.33)
// // .to(".ball01, .text03", {}, 0.46)

// const main = gsap.timeline({defaults: {duration: 1},
//   scrollTrigger: {
//     trigger: "#svg",
//     scrub: true,
//     start: "top center",
//     end: "bottom center"
//   }})
// // .to(".ball01", {duration: 0.01, autoAlpha: 1})
// //.from(".theLine", {drawSVG: 0}, 0)
// .to(".ball", {motionPath: {
//   path: ".theLine", 
//   align:".theLine",
//   alignOrigin: [0.5, 0.5],
// }}, 0)
// .add(pulses, 0);
