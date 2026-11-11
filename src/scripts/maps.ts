import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Each finished map is already in the HTML. For visitors who allow motion, a map's route draws
// itself once, and its numbered stops appear, the first time the map scrolls into view.
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.utils.toArray<HTMLElement>('[data-era-map]').forEach((fig) => {
    const route = fig.querySelector<SVGPathElement>('[data-route]');
    if (!route) return;
    const stops = fig.querySelectorAll<HTMLElement>('[data-stop]');
    const length = route.getTotalLength();

    gsap.set(route, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(stops, { opacity: 0, scale: 0.6 });

    gsap
      .timeline({ scrollTrigger: { trigger: fig, start: 'top 70%', once: true } })
      .to(route, { strokeDashoffset: 0, duration: 2.4, ease: 'power1.inOut' })
      .to(stops, { opacity: 1, scale: 1, duration: 0.3, stagger: 0.12, ease: 'back.out(2)' }, 0.15);
  });
});
