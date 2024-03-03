import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ========== gsap animation ==========
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.card',
    start: '-30% center',
    end: '100% center',
    scrub: true,
    markers: true,
    // toggle action only works when the
    // scrub is set to false
    // toggleActions: 'play reverse play reverse',
  },
});

tl.to('.card', {
  x: 800,
  // duration: 0.5,
});

// ========== smooth scroll ==========

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
