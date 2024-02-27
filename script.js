const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
gsap.from("#page1-part1 h2, #page1-part1 p",{
  y:200,
  delay:0.5,
  stagger:0.3,
  opacity:0,
  duration:1.5
})
gsap.from("#nav",{
  y:-200,
  delay:1,
  duration:1,
  opacity:0
})
gsap.from("#page1-part1 h1",{
     x:200,
     delay:2,
     duration:2,
     stagger:1,
     opacity:0
})
gsap.from("#page2-part1 h1",{
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 20%",
    end:"top 80%",
    scrub:2,
  }
})