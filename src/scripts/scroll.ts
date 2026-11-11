import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// All content is present in the HTML. Motion only enhances it, and is skipped entirely
// for visitors who prefer reduced motion (and when JavaScript is off).
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Fade and rise elements into view as they enter the screen.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // Gentle parallax on the hero background.
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const heroBg = hero?.querySelector<HTMLElement>('[data-hero-bg]');
  if (hero && heroBg) {
    gsap.to(heroBg, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  // Reading progress bar along the top of the page.
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (bar) {
    gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.2 },
    });
  }
});
