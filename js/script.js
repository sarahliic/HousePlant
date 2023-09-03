window.addEventListener("load",function(){
  /*--------------animation on scroll--------------------- */

  AOS.init();
});
  /*---------------------------- animation for page 'the main page'--------------------*/

  const tl= gsap.timeline({defaults:{ease:"power1.out"}});   // create the timealine
  
  tl.to('.text',{y:'0%',duration:1, stagger:0.25});
  tl.to('.slider',{y:"-100%",duration:1.5,delay:0.5});
  tl.to('.intro',{y:"-100%",duration:1}, "-=1");
  tl.fromTo('.navbar',{opacity:0},{opacity:1,duration:1});
  tl.fromTo('.col',{opacity:0},{opacity:1,duration:1}, '-=1');


  