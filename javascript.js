gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar", {duration: 1, y:-50});

gsap.from(".top-banner p, .top-banner h2", {duration: 3, opacity:0})

gsap.from(".top-banner button", {
    duration:1, 
    opacity:0,
    y:-100,
    ease: "elastic.inOut(1, 0.3)"
})
gsap.from("#counter span, #counter p", {opacity:0, duration:2, })

gsap.from(".pride, .text-sec, .aboutimg", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
        end: "top 50%",
        scrub: true,
      },
      duration:5 ,
    opacity:0,
})

gsap.from(".ecards,#Explore p, #Explore h2", {
    scrollTrigger: {
        trigger: "#Explore",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
      duration:5 ,
          opacity:0,
  
})

gsap.from(".stomach,.storypara, #story button", {
    scrollTrigger: {
        trigger: "#story",
        start: "top 70%",
        end: "top 20%",
        scrub: true
      },
        duration:5,
        opacity:0,
})


gsap.from("#footer", {
    scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
        end:"bottom 100%",
        scrub: true
      },
        duration:5,
        opacity:0,
})

